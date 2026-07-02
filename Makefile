# NOFX Makefile for testing and development

SHELL := /bin/bash

.PHONY: help test test-backend test-frontend test-coverage clean \
	dev-up dev-down dev-restart dev-logs

# Default target
help:
	@echo "NOFX Testing & Development Commands"
	@echo ""
	@echo "Testing:"
	@echo "  make test                 - Run all tests (backend + frontend)"
	@echo "  make test-backend         - Run backend tests only"
	@echo "  make test-frontend        - Run frontend tests only"
	@echo "  make test-coverage        - Generate backend coverage report"
	@echo ""
	@echo "Build:"
	@echo "  make build                - Build backend binary"
	@echo "  make build-frontend       - Build frontend"
	@echo ""
	@echo "Local dev (from source, no image publish needed):"
	@echo "  make dev-up               - Start backend (:8080) + frontend (:3000) in background"
	@echo "  make dev-down             - Stop the local dev servers"
	@echo "  make dev-restart          - Restart the local dev servers"
	@echo "  make dev-logs             - Tail backend + frontend dev logs"
	@echo ""
	@echo "Clean:"
	@echo "  make clean                - Clean build artifacts and test cache"

# =============================================================================
# Testing
# =============================================================================

# Run all tests
test:
	@echo "🧪 Running backend tests..."
	go test -v ./...
	@echo ""
	@echo "🧪 Running frontend tests..."
	cd web && npm run test
	@echo "✅ All tests completed"

# Backend tests only
test-backend:
	@echo "🧪 Running backend tests..."
	go test -v ./...

# Frontend tests only
test-frontend:
	@echo "🧪 Running frontend tests..."
	cd web && npm run test

# Coverage report
test-coverage:
	@echo "📊 Generating coverage..."
	go test -coverprofile=coverage.out ./...
	go tool cover -html=coverage.out -o coverage.html
	@echo "✅ Backend coverage: coverage.html"

# =============================================================================
# Build
# =============================================================================

# Build backend binary
build:
	@echo "🔨 Building backend..."
	go build -o nofx
	@echo "✅ Backend built: ./nofx"

# Build frontend
build-frontend:
	@echo "🔨 Building frontend..."
	cd web && npm run build
	@echo "✅ Frontend built: ./web/dist"

# =============================================================================
# Development
# =============================================================================

# Run backend in development mode
run:
	@echo "🚀 Starting backend..."
	go run main.go

# Run frontend in development mode
run-frontend:
	@echo "🚀 Starting frontend dev server..."
	cd web && npm run dev

# -----------------------------------------------------------------------------
# Local dev servers (background). Run the app straight from source so changes
# are visible without building & publishing an image. Backend uses the same
# ./.env (godotenv) and the Vite dev server proxies /api -> backend.
# -----------------------------------------------------------------------------
DEV_BACKEND_PORT   ?= 8080
DEV_FRONTEND_PORT  ?= 3000
DEV_TMP            ?= .tmp
DEV_GO_CACHE       ?= $(CURDIR)/$(DEV_TMP)/go-build
DEV_BIN            ?= $(DEV_TMP)/nofx-dev-server
DEV_BACKEND_PID    ?= $(DEV_TMP)/backend.pid
DEV_FRONTEND_PID   ?= $(DEV_TMP)/frontend.pid
DEV_BACKEND_LOG    ?= $(DEV_TMP)/backend.log
DEV_FRONTEND_LOG   ?= $(DEV_TMP)/frontend.log
# Dev uses its own SQLite file (seeded from the deployment DB on first run) so
# it never fights the docker container over the root-owned data/data.db.
DEV_DB             ?= $(DEV_TMP)/data/data.db
# Free the port even if something stale holds it: DEV_FORCE_KILL_PORT=1.
DEV_FORCE_KILL_PORT ?= 0

dev-up:
	@set -e; \
	mkdir -p "$(DEV_GO_CACHE)"; \
	for pf in "$(DEV_BACKEND_PID)" "$(DEV_FRONTEND_PID)"; do \
		if [ -f "$$pf" ] && kill -0 "$$(cat $$pf)" >/dev/null 2>&1; then \
			echo "dev already running (pid=$$(cat $$pf) from $$pf); run 'make dev-down' first"; exit 1; \
		fi; \
	done; \
	if docker ps --format '{{.Names}}' 2>/dev/null | grep -qE '^nofx-(trading|frontend)$$'; then \
		echo "⏹  stopping published-image stack to free ports $(DEV_BACKEND_PORT)/$(DEV_FRONTEND_PORT)..."; \
		docker compose -f docker-compose.prod.yml down >/dev/null 2>&1 || true; \
	fi; \
	for port in $(DEV_BACKEND_PORT) $(DEV_FRONTEND_PORT); do \
		bound="$$(lsof -nP -iTCP:$$port -sTCP:LISTEN -t 2>/dev/null | head -1)"; \
		if [ -n "$$bound" ]; then \
			if [ "$(DEV_FORCE_KILL_PORT)" = "1" ]; then \
				echo "killing process on port $$port (pid=$$bound)"; kill "$$bound" 2>/dev/null || true; sleep 1; \
				kill -9 "$$bound" 2>/dev/null || true; \
			else \
				echo "port $$port already in use (pid=$$bound); stop it or rerun with DEV_FORCE_KILL_PORT=1"; exit 1; \
			fi; \
		fi; \
	done; \
	if [ ! -d web/node_modules ]; then echo "📦 installing frontend deps..."; (cd web && npm install); fi; \
	mkdir -p "$$(dirname $(DEV_DB))"; \
	if [ ! -f "$(DEV_DB)" ] && [ -f data/data.db ]; then \
		echo "🗃  seeding dev DB from data/data.db"; cp data/data.db "$(DEV_DB)"; \
	fi; \
	echo "🔨 building backend..."; \
	GOCACHE="$(DEV_GO_CACHE)" go build -o "$(DEV_BIN)" .; \
	echo "🚀 starting frontend (:$(DEV_FRONTEND_PORT))..."; \
	setsid env VITE_CACHE_DIR="$(CURDIR)/$(DEV_TMP)/vite" \
		bash -c 'cd web && exec npm run dev -- --host 0.0.0.0 --port $(DEV_FRONTEND_PORT) --strictPort' \
		>> "$(DEV_FRONTEND_LOG)" 2>&1 & echo "$$!" > "$(DEV_FRONTEND_PID)"; \
	echo "🚀 starting backend (:$(DEV_BACKEND_PORT))..."; \
	setsid env NOFX_BACKEND_PORT=$(DEV_BACKEND_PORT) DB_PATH="$(CURDIR)/$(DEV_DB)" "$(CURDIR)/$(DEV_BIN)" \
		>> "$(DEV_BACKEND_LOG)" 2>&1 & echo "$$!" > "$(DEV_BACKEND_PID)"; \
	ok=0; \
	for _ in $$(seq 1 40); do \
		if lsof -nP -iTCP:$(DEV_BACKEND_PORT) -sTCP:LISTEN -t >/dev/null 2>&1; then ok=1; break; fi; \
		if ! kill -0 "$$(cat $(DEV_BACKEND_PID))" >/dev/null 2>&1; then break; fi; \
		sleep 0.5; \
	done; \
	if [ "$$ok" != "1" ]; then echo "❌ backend failed to start; see $(DEV_BACKEND_LOG)"; exit 1; fi; \
	echo "✅ backend  pid=$$(cat $(DEV_BACKEND_PID))  http://localhost:$(DEV_BACKEND_PORT)"; \
	echo "✅ frontend pid=$$(cat $(DEV_FRONTEND_PID))  http://localhost:$(DEV_FRONTEND_PORT)"; \
	echo "   logs: make dev-logs   stop: make dev-down"

dev-down:
	@set -e; \
	for pf in "$(DEV_BACKEND_PID)" "$(DEV_FRONTEND_PID)"; do \
		if [ -f "$$pf" ]; then \
			pid="$$(cat $$pf)"; \
			if kill -0 "$$pid" >/dev/null 2>&1; then \
				echo "stopping pid=$$pid ($$pf)"; \
				kill -TERM "-$$pid" 2>/dev/null || kill "$$pid" 2>/dev/null || true; \
				sleep 1; \
				kill -9 "-$$pid" 2>/dev/null || kill -9 "$$pid" 2>/dev/null || true; \
			fi; \
			rm -f "$$pf"; \
		fi; \
	done; \
	echo "✅ dev servers stopped"

dev-restart:
	@$(MAKE) dev-down
	@$(MAKE) dev-up DEV_FORCE_KILL_PORT=1

dev-logs:
	@echo "== tailing $(DEV_BACKEND_LOG) + $(DEV_FRONTEND_LOG) (Ctrl-C to stop) =="; \
	touch "$(DEV_BACKEND_LOG)" "$(DEV_FRONTEND_LOG)"; \
	tail -n 40 -f "$(DEV_BACKEND_LOG)" "$(DEV_FRONTEND_LOG)"

# Format Go code
fmt:
	@echo "🎨 Formatting Go code..."
	go fmt ./...
	@echo "✅ Code formatted"

# Lint Go code (requires golangci-lint)
lint:
	@echo "🔍 Linting Go code..."
	golangci-lint run
	@echo "✅ Linting completed"

# =============================================================================
# Clean
# =============================================================================

clean:
	@echo "🧹 Cleaning..."
	rm -f nofx
	rm -f coverage.out coverage.html
	rm -rf web/dist
	go clean -testcache
	@echo "✅ Cleaned"

# =============================================================================
# Docker
# =============================================================================

# Build Docker images
docker-build:
	@echo "🐳 Building Docker images..."
	docker compose build
	@echo "✅ Docker images built"

# Run Docker containers
docker-up:
	@echo "🐳 Starting Docker containers..."
	docker compose up -d
	@echo "✅ Docker containers started"

# Stop Docker containers
docker-down:
	@echo "🐳 Stopping Docker containers..."
	docker compose down
	@echo "✅ Docker containers stopped"

# View Docker logs
docker-logs:
	docker compose logs -f

# =============================================================================
# Dependencies
# =============================================================================

# Download Go dependencies
deps:
	@echo "📦 Downloading Go dependencies..."
	go mod download
	@echo "✅ Dependencies downloaded"

# Update Go dependencies
deps-update:
	@echo "📦 Updating Go dependencies..."
	go get -u ./...
	go mod tidy
	@echo "✅ Dependencies updated"

# Install frontend dependencies
deps-frontend:
	@echo "📦 Installing frontend dependencies..."
	cd web && npm install
	@echo "✅ Frontend dependencies installed"
