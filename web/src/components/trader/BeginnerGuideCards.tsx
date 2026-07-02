import { Brain, Landmark, Rocket, Sparkles } from 'lucide-react'
import { pick } from '../../i18n/translations'

interface BeginnerGuideCardsProps {
  language: string
  claw402Ready: boolean
  exchangeReady: boolean
  strategyReady: boolean
  traderReady: boolean
  canCreateTrader: boolean
  walletAddress?: string | null
  onQuickSetupClaw402: () => void
  onOpenExchange: () => void
  onOpenStrategy: () => void
  onCreateTrader: () => void
}

export function BeginnerGuideCards({
  language,
  claw402Ready,
  exchangeReady,
  strategyReady,
  traderReady,
  canCreateTrader,
  onQuickSetupClaw402,
  onOpenExchange,
  onOpenStrategy,
  onCreateTrader,
}: BeginnerGuideCardsProps) {
  const isZh = language === 'zh'

  const cards = [
    {
      key: 'model',
      icon: Brain,
      title: pick(language, '1. 配置 AI', '1. Configure AI', '1. Konfigurasi AI'),
      desc: pick(language, '用你自己的 API Key 添加 AI 模型(DeepSeek、OpenAI,或任意 OpenAI 兼容端点)。', 'Add an AI model with your own API key (DeepSeek, OpenAI, or any OpenAI-compatible endpoint).', 'Tambahkan model AI dengan API key Anda sendiri (DeepSeek, OpenAI, atau endpoint kompatibel OpenAI mana pun).'),
      meta: claw402Ready
        ? pick(language, '模型已就绪', 'Model ready', 'Model siap')
        : pick(language, '使用你自己的 API Key', 'Bring your own API key', 'Gunakan API key Anda sendiri'),
      ready: claw402Ready,
      actionLabel: claw402Ready
        ? pick(language, '已配置', 'Configured', 'Terkonfigurasi')
        : pick(language, '一键配置', 'One-click setup', 'Pengaturan sekali klik'),
      onAction: onQuickSetupClaw402,
      disabled: claw402Ready,
    },
    {
      key: 'exchange',
      icon: Landmark,
      title: pick(language, '2. 添加交易所', '2. Add Exchange', '2. Tambah Bursa'),
      desc: pick(language, '连接交易所,让 AI 能够真正下单。', 'Connect an exchange so the AI can actually place trades.', 'Hubungkan bursa agar AI benar-benar bisa bertransaksi.'),
      meta: exchangeReady
        ? pick(language, '已就绪', 'Ready', 'Siap')
        : isZh
          ? 'Binance / OKX / Bybit / Hyperliquid'
          : 'Binance / OKX / Bybit / Hyperliquid',
      ready: exchangeReady,
      actionLabel: exchangeReady
        ? pick(language, '管理', 'Manage', 'Kelola')
        : pick(language, '配置', 'Configure', 'Konfigurasi'),
      onAction: onOpenExchange,
      disabled: false,
    },
    {
      key: 'strategy',
      icon: Sparkles,
      title: pick(language, '3. 选择策略', '3. Pick Strategy', '3. Pilih Strategi'),
      desc: pick(language, '可以先用默认策略,之后再微调。', 'You can start with a default strategy and fine-tune later.', 'Anda bisa mulai dengan strategi default dan menyempurnakannya nanti.'),
      meta: strategyReady
        ? pick(language, '策略已就绪', 'Strategy ready', 'Strategi siap')
        : pick(language, '可选,但建议看一眼', 'Optional, but worth a quick look', 'Opsional, tapi layak dilihat sekilas'),
      ready: strategyReady,
      actionLabel: pick(language, '打开策略', 'Open strategy', 'Buka strategi'),
      onAction: onOpenStrategy,
      disabled: false,
    },
    {
      key: 'trader',
      icon: Rocket,
      title: pick(language, '4. 创建 Trader', '4. Create Trader', '4. Buat Trader'),
      desc: pick(language, '最后一步:绑定模型和交易所,然后开始运行。', 'Last step: bind your model and exchange, then start running.', 'Langkah terakhir: hubungkan model dan bursa Anda, lalu mulai jalankan.'),
      meta: traderReady
        ? pick(language, 'Trader 已创建,可继续添加', 'Trader created, you can add more', 'Trader dibuat, Anda bisa menambah lagi')
        : canCreateTrader
          ? pick(language, '可以创建', 'Ready to create', 'Siap dibuat')
        : pick(language, '请先完成前三步', 'Finish the first three steps first', 'Selesaikan tiga langkah pertama dulu'),
      ready: traderReady,
      actionLabel: traderReady
        ? pick(language, '再创建一个', 'Create another', 'Buat lagi')
        : pick(language, '立即创建', 'Create now', 'Buat sekarang'),
      onAction: onCreateTrader,
      disabled: !canCreateTrader,
    },
  ]

  return (
    <section className="space-y-4 rounded-[28px] border border-nofx-gold/20 bg-nofx-bg-lighter p-5">
      <div className="flex items-center justify-between gap-4">
        <div>
          <div className="text-xs font-semibold uppercase tracking-[0.3em] text-nofx-gold/80">
            {pick(language, '快速开始', 'Quickstart', 'Mulai Cepat')}
          </div>
          <h2 className="mt-1 text-xl font-bold text-nofx-text">
            {pick(language, '按这 4 步快速上手', 'Follow these 4 steps to get started fast', 'Ikuti 4 langkah ini untuk mulai cepat')}
          </h2>
        </div>
        {/* <div className="rounded-full border border-nofx-gold/20 bg-nofx-bg-deeper px-3 py-1 text-xs text-nofx-text-muted">
          {pick(language, '高级模式下隐藏', 'Hidden in advanced mode', 'Disembunyikan di mode lanjutan')}
        </div> */}
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {cards.map((card) => {
          const Icon = card.icon
          return (
            <div
              key={card.key}
              className="rounded-[22px] border border-nofx-gold/20 bg-nofx-bg-deeper p-4"
            >
              <div className="flex items-center justify-between gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-nofx-gold/10 text-nofx-gold">
                  <Icon className="h-5 w-5" />
                </div>
                <span
                  className={`rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.22em] ${
                    card.ready
                      ? 'bg-nofx-success/15 text-nofx-success'
                      : 'bg-nofx-bg-deeper text-nofx-text-muted'
                  }`}
                >
                  {card.ready
                    ? pick(language, '已就绪', 'Ready', 'Siap')
                    : pick(language, '待完成', 'Pending', 'Menunggu')}
                </span>
              </div>

              <h3 className="mt-4 text-base font-semibold text-nofx-text">
                {card.title}
              </h3>
              <p className="mt-2 min-h-[72px] text-sm leading-6 text-nofx-text-muted">
                {card.desc}
              </p>
              <div className="mt-3 text-xs text-nofx-text-muted">{card.meta}</div>

              <button
                type="button"
                onClick={card.onAction}
                disabled={card.disabled}
                className={`mt-5 w-full rounded-2xl px-4 py-3 text-sm font-semibold transition ${
                  card.disabled
                    ? 'cursor-not-allowed bg-nofx-bg-deeper text-nofx-text-muted'
                    : 'bg-nofx-gold text-white hover:bg-nofx-gold/90'
                }`}
              >
                {card.actionLabel}
              </button>
            </div>
          )
        })}
      </div>
    </section>
  )
}
