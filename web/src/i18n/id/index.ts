import type { Translation } from '../i18n-types'

const id = {
    // Header
    appTitle: 'NOFX',
    subtitle: 'Platform Trading Multi-AI',
    aiTraders: 'Trader AI',
    details: 'Detail',
    tradingPanel: 'Panel Trading',
    competition: 'Kompetisi',
    running: 'BERJALAN',
    stopped: 'BERHENTI',
    adminMode: 'Mode Admin',
    logout: 'Keluar',
    switchTrader: 'Ganti Trader:',
    view: 'Lihat',

    // Navigation
    realtimeNav: 'Papan Peringkat',
    configNav: 'Konfigurasi',
    dashboardNav: 'Dasbor',
    strategyNav: 'Strategi',
    faqNav: 'FAQ',

    // Footer
    footerTitle: 'NOFX - Sistem Trading AI',
    footerWarning: '⚠️ Trading memiliki risiko. Gunakan dengan bijak.',

    // Stats Cards
    totalEquity: 'Total Ekuitas',
    availableBalance: 'Saldo Tersedia',
    totalPnL: 'Total L/R',
    positions: 'Posisi',
    margin: 'Margin',
    free: 'Bebas',

    // Positions Table
    currentPositions: 'Posisi Saat Ini',
    active: 'Aktif',
    symbol: 'Simbol',
    side: 'Arah',
    entryPrice: 'Harga Masuk',
    stopLoss: 'Stop Loss',
    takeProfit: 'Take Profit',
    riskReward: 'Risiko/Imbalan',
    markPrice: 'Harga Tanda',
    quantity: 'Jumlah',
    positionValue: 'Nilai Posisi',
    leverage: 'Leverage',
    unrealizedPnL: 'L/R Belum Terealisasi',
    liqPrice: 'Harga Likuidasi',
    long: 'LONG',
    short: 'SHORT',
    noPositions: 'Tidak Ada Posisi',
    noActivePositions: 'Tidak ada posisi trading yang aktif',

    // Recent Decisions
    recentDecisions: 'Keputusan Terbaru',
    lastCycles: '{count} siklus trading terakhir',
    noDecisionsYet: 'Belum Ada Keputusan',
    aiDecisionsWillAppear: 'Keputusan trading AI akan muncul di sini',
    cycle: 'Siklus',
    success: 'Berhasil',
    failed: 'Gagal',
    inputPrompt: 'Prompt Input',
    aiThinking: 'Rantai Pemikiran AI',
    collapse: 'Tutup',
    expand: 'Buka',

    // Equity Chart
    accountEquityCurve: 'Kurva Ekuitas Akun',
    noHistoricalData: 'Tidak Ada Data Historis',
    dataWillAppear:
      'Kurva ekuitas akan muncul setelah beberapa siklus berjalan',
    initialBalance: 'Saldo Awal',
    currentEquity: 'Ekuitas Saat Ini',
    historicalCycles: 'Siklus Historis',
    displayRange: 'Rentang Tampilan',
    recent: 'Terbaru',
    allData: 'Semua Data',
    cycles: 'Siklus',

    // Comparison Chart
    comparisonMode: 'Mode Perbandingan',
    dataPoints: 'Titik Data',
    currentGap: 'Selisih Saat Ini',
    count: '{count} poin',

    // TradingView Chart
    marketChart: 'Grafik Pasar',
    viewChart: 'Klik untuk melihat grafik',
    enterSymbol: 'Masukkan simbol...',
    popularSymbols: 'Simbol Populer',
    fullscreen: 'Layar Penuh',
    exitFullscreen: 'Keluar Layar Penuh',

    // Competition Page
    aiCompetition: 'Kompetisi AI',
    traders: 'trader',
    liveBattle: 'Pertarungan Langsung',
    realTimeBattle: 'Pertarungan Realtime',
    leader: 'Pemimpin',
    leaderboard: 'Papan Peringkat',
    live: 'LIVE',
    realTime: 'LIVE',
    performanceComparison: 'Perbandingan Performa',
    realTimePnL: 'L/R Realtime %',
    realTimePnLPercent: 'L/R Realtime %',
    headToHead: 'Pertarungan Langsung',
    leadingBy: 'Unggul {gap}%',
    behindBy: 'Tertinggal {gap}%',
    equity: 'Ekuitas',
    pnl: 'L/R',
    pos: 'Pos',

    // AI Traders Management
    manageAITraders: 'Kelola bot trading AI Anda',
    aiModels: 'Model AI',
    exchanges: 'Bursa',
    createTrader: 'Buat Trader',
    modelConfiguration: 'Konfigurasi Model',
    configured: 'Terkonfigurasi',
    notConfigured: 'Belum Dikonfigurasi',
    currentTraders: 'Trader Saat Ini',
    noTraders: 'Tidak Ada Trader AI',
    createFirstTrader: 'Buat trader AI pertama Anda untuk memulai',
    dashboardEmptyTitle: 'Mari Mulai!',
    dashboardEmptyDescription:
      'Buat trader AI pertama Anda untuk mengotomatisasi strategi trading. Hubungkan bursa, pilih model AI, dan mulai trading dalam hitungan menit!',
    goToTradersPage: 'Buat Trader Pertama Anda',
    configureModelsFirst: 'Silakan konfigurasi model AI terlebih dahulu',
    configureExchangesFirst: 'Silakan konfigurasi bursa terlebih dahulu',
    configureModelsAndExchangesFirst:
      'Silakan konfigurasi model AI dan bursa terlebih dahulu',
    modelNotConfigured: 'Model yang dipilih belum dikonfigurasi',
    exchangeNotConfigured: 'Bursa yang dipilih belum dikonfigurasi',
    confirmDeleteTrader: 'Apakah Anda yakin ingin menghapus trader ini?',
    status: 'Status',
    start: 'Mulai',
    stop: 'Berhenti',
    createNewTrader: 'Buat Trader AI Baru',
    selectAIModel: 'Pilih Model AI',
    selectExchange: 'Pilih Bursa',
    traderName: 'Nama Trader',
    enterTraderName: 'Masukkan nama trader',
    cancel: 'Batal',
    create: 'Buat',
    configureAIModels: 'Konfigurasi Model AI',
    configureExchanges: 'Konfigurasi Bursa',
    aiScanInterval: 'Interval Keputusan AI (menit)',
    scanIntervalRecommend: 'Disarankan: 15-30 menit',
    useTestnet: 'Gunakan Testnet',
    enabled: 'Aktif',
    save: 'Simpan',

    // TraderConfigModal
    fetchBalanceEditModeOnly:
      'Hanya bisa mengambil saldo saat ini dalam mode edit',
    balanceFetched: 'Saldo saat ini berhasil diambil',
    balanceFetchFailed: 'Gagal mengambil saldo',
    balanceFetchNetworkError: 'Gagal mengambil saldo, periksa koneksi jaringan',
    saving: 'Menyimpan...',
    saveSuccess: 'Berhasil disimpan',
    saveFailed: 'Gagal menyimpan',
    editTraderConfig: 'Edit Konfigurasi Trader',
    selectStrategyAndConfigParams:
      'Pilih Strategi dan Konfigurasi Parameter Dasar',
    basicConfig: 'Konfigurasi Dasar',
    traderNameRequired: 'Nama Trader *',
    enterTraderNamePlaceholder: 'Masukkan nama trader',
    aiModelRequired: 'Model AI *',
    exchangeRequired: 'Bursa *',
    noExchangeAccount: 'Belum punya akun bursa? Klik untuk mendaftar',
    discount: 'Diskon',
    selectTradingStrategy: 'Pilih Strategi Trading',
    useStrategy: 'Gunakan Strategi',
    noStrategyManual: '-- Tanpa Strategi (Konfigurasi Manual) --',
    strategyActive: ' (Aktif)',
    strategyDefault: ' [Default]',
    noStrategyHint:
      'Belum ada strategi, buat di Strategy Studio terlebih dahulu',
    strategyDetails: 'Detail Strategi',
    activating: 'Mengaktifkan',
    coinSource: 'Sumber Koin',
    marginLimit: 'Batas Margin',
    tradingParams: 'Parameter Trading',
    marginMode: 'Mode Margin',
    crossMargin: 'Cross Margin',
    isolatedMargin: 'Isolated Margin',
    competitionDisplay: 'Tampilkan di Kompetisi',
    show: 'Tampilkan',
    hide: 'Sembunyikan',
    hiddenInCompetition:
      'Trader ini tidak akan ditampilkan di halaman kompetisi saat disembunyikan',
    initialBalanceLabel: 'Saldo Awal ($)',
    fetching: 'Mengambil...',
    fetchCurrentBalance: 'Ambil Saldo Saat Ini',
    balanceUpdateHint:
      'Digunakan untuk memperbarui saldo awal secara manual (misal setelah deposit/withdraw)',
    autoFetchBalanceInfo:
      'Sistem akan otomatis mengambil ekuitas akun Anda sebagai saldo awal',
    fetchingBalance: 'Mengambil saldo...',
    editTrader: 'Simpan Perubahan',
    createTraderButton: 'Buat Trader',

    // AI Model Configuration
    officialAPI: 'API Resmi',
    customAPI: 'API Kustom',
    apiKey: 'API Key',
    customAPIURL: 'URL API Kustom',
    enterAPIKey: 'Masukkan API Key',
    enterCustomAPIURL: 'Masukkan URL endpoint API kustom',
    useOfficialAPI: 'Gunakan layanan API resmi',
    useCustomAPI: 'Gunakan endpoint API kustom',

    // Exchange Configuration
    secretKey: 'Secret Key',
    privateKey: 'Private Key',
    walletAddress: 'Alamat Wallet',
    user: 'Pengguna',
    signer: 'Penandatangan',
    passphrase: 'Passphrase',
    enterPrivateKey: 'Masukkan Private Key',
    enterWalletAddress: 'Masukkan Alamat Wallet',
    enterUser: 'Masukkan Pengguna',
    enterSigner: 'Masukkan Alamat Penandatangan',
    enterSecretKey: 'Masukkan Secret Key',
    enterPassphrase: 'Masukkan Passphrase',
    hyperliquidPrivateKeyDesc:
      'Hyperliquid menggunakan private key untuk autentikasi trading',
    hyperliquidWalletAddressDesc:
      'Alamat wallet yang sesuai dengan private key',
    hyperliquidAgentWalletTitle: 'Konfigurasi Agent Wallet Hyperliquid',
    hyperliquidAgentWalletDesc:
      'Gunakan Agent Wallet untuk trading aman: Agent wallet menandatangani transaksi (saldo ~0), Wallet utama menyimpan dana (jangan pernah ekspos private key)',
    hyperliquidAgentPrivateKey: 'Agent Private Key',
    enterHyperliquidAgentPrivateKey: 'Masukkan private key agent wallet',
    hyperliquidAgentPrivateKeyDesc:
      'Private key agent wallet untuk menandatangani transaksi (jaga saldo mendekati 0 untuk keamanan)',
    hyperliquidMainWalletAddress: 'Alamat Wallet Utama',
    enterHyperliquidMainWalletAddress: 'Masukkan alamat wallet utama',
    hyperliquidMainWalletAddressDesc:
      'Alamat wallet utama yang menyimpan dana trading Anda (jangan pernah ekspos private key-nya)',
    asterApiProTitle: 'Konfigurasi Wallet API Pro Aster',
    asterApiProDesc:
      'Gunakan wallet API Pro untuk trading aman: Wallet API menandatangani transaksi, wallet utama menyimpan dana (jangan pernah ekspos private key wallet utama)',
    asterUserDesc:
      'Alamat wallet utama - Alamat wallet EVM yang Anda gunakan untuk login ke Aster (Catatan: Hanya wallet EVM yang didukung)',
    asterSignerDesc:
      'Alamat wallet API Pro (0x...) - Buat dari https://www.asterdex.com/en/api-wallet',
    asterPrivateKeyDesc:
      'Private key wallet API Pro - Dapatkan dari https://www.asterdex.com/en/api-wallet (hanya digunakan lokal untuk penandatanganan, tidak pernah ditransmisikan)',
    asterUsdtWarning:
      'Penting: Aster hanya melacak saldo USDT. Pastikan Anda menggunakan USDT sebagai mata uang margin untuk menghindari kesalahan perhitungan L/R akibat fluktuasi harga aset lain (BNB, ETH, dll.)',
    asterUserLabel: 'Alamat Wallet Utama',
    asterSignerLabel: 'Alamat Wallet API Pro',
    asterPrivateKeyLabel: 'Private Key Wallet API Pro',
    enterAsterUser: 'Masukkan alamat wallet utama (0x...)',
    enterAsterSigner: 'Masukkan alamat wallet API Pro (0x...)',
    enterAsterPrivateKey: 'Masukkan private key wallet API Pro',
    lighterWalletAddress: 'Alamat Wallet L1',
    lighterPrivateKey: 'Private Key L1',
    lighterApiKeyPrivateKey: 'Private Key API Key',
    enterLighterWalletAddress: 'Masukkan alamat wallet Ethereum (0x...)',
    enterLighterPrivateKey: 'Masukkan private key L1 (32 byte)',
    enterLighterApiKeyPrivateKey:
      'Masukkan private key API Key (40 byte, opsional)',
    lighterWalletAddressDesc:
      'Alamat wallet Ethereum Anda untuk identifikasi akun',
    lighterPrivateKeyDesc:
      'Private key L1 untuk identifikasi akun (kunci ECDSA 32 byte)',
    lighterApiKeyPrivateKeyDesc:
      'Private key API Key untuk penandatanganan transaksi (kunci Poseidon2 40 byte)',
    lighterApiKeyOptionalNote:
      'Tanpa API Key, sistem akan menggunakan mode V1 terbatas',
    lighterV1Description:
      'Mode Dasar - Fungsionalitas terbatas, hanya framework pengujian',
    lighterV2Description:
      'Mode Lengkap - Mendukung penandatanganan Poseidon2 dan trading nyata',
    lighterPrivateKeyImported: 'Private key LIGHTER telah diimpor',
    hyperliquidExchangeName: 'Hyperliquid',
    asterExchangeName: 'Aster DEX',
    secureInputButton: 'Input Aman',
    secureInputReenter: 'Masukkan Ulang dengan Aman',
    secureInputClear: 'Hapus',
    secureInputHint:
      'Diambil melalui input aman dua tahap. Gunakan "Masukkan Ulang dengan Aman" untuk memperbarui nilai ini.',
    twoStageModalTitle: 'Input Kunci Aman',
    twoStageModalDescription:
      'Gunakan alur dua tahap untuk memasukkan private key {length} karakter Anda dengan aman.',
    twoStageStage1Title: 'Tahap 1 · Masukkan bagian pertama',
    twoStageStage1Placeholder: '32 karakter pertama (sertakan 0x jika ada)',
    twoStageStage1Hint:
      'Melanjutkan akan menyalin string pengacak ke clipboard sebagai pengalih.',
    twoStageStage1Error: 'Silakan masukkan bagian pertama terlebih dahulu.',
    twoStageNext: 'Lanjut',
    twoStageProcessing: 'Memproses…',
    twoStageCancel: 'Batal',
    twoStageStage2Title: 'Tahap 2 · Masukkan sisanya',
    twoStageStage2Placeholder: 'Karakter sisa dari private key Anda',
    twoStageStage2Hint:
      'Tempelkan string pengacak di tempat netral, lalu selesaikan memasukkan kunci Anda.',
    twoStageClipboardSuccess:
      'String pengacak disalin. Tempelkan di kolom teks mana pun sebelum menyelesaikan.',
    twoStageClipboardReminder:
      'Ingat tempelkan string pengacak sebelum mengirim untuk menghindari kebocoran clipboard.',
    twoStageClipboardManual:
      'Salin otomatis gagal. Salin string pengacak di bawah secara manual.',
    twoStageBack: 'Kembali',
    twoStageSubmit: 'Konfirmasi',
    twoStageInvalidFormat:
      'Format private key tidak valid. Diharapkan {length} karakter heksadesimal (awalan 0x opsional).',
    testnetDescription:
      'Aktifkan untuk terhubung ke lingkungan uji coba bursa untuk trading simulasi',
    securityWarning: 'Peringatan Keamanan',
    saveConfiguration: 'Simpan Konfigurasi',

    // Trader Configuration
    positionMode: 'Mode Posisi',
    crossMarginMode: 'Cross Margin',
    isolatedMarginMode: 'Isolated Margin',
    crossMarginDescription:
      'Cross margin: Semua posisi berbagi saldo akun sebagai jaminan',
    isolatedMarginDescription:
      'Isolated margin: Setiap posisi mengelola jaminan secara independen, isolasi risiko',
    leverageConfiguration: 'Konfigurasi Leverage',
    btcEthLeverage: 'Leverage BTC/ETH',
    altcoinLeverage: 'Leverage Altcoin',
    leverageRecommendation:
      'Disarankan: BTC/ETH 5-10x, Altcoin 3-5x untuk kontrol risiko',
    tradingSymbols: 'Simbol Trading',
    tradingSymbolsPlaceholder:
      'Masukkan simbol, pisahkan dengan koma (misal BTCUSDT,ETHUSDT,SOLUSDT)',
    selectSymbols: 'Pilih Simbol',
    selectTradingSymbols: 'Pilih Simbol Trading',
    selectedSymbolsCount: '{count} simbol dipilih',
    clearSelection: 'Hapus Semua',
    confirmSelection: 'Konfirmasi',
    tradingSymbolsDescription:
      'Kosong = gunakan simbol default. Gunakan perp USDT (misal BTCUSDT, ETHUSDT) atau market Hyperliquid XYZ USDC (misal TSLA-USDC)',
    btcEthLeverageValidation: 'Leverage BTC/ETH harus antara 1-50x',
    altcoinLeverageValidation: 'Leverage Altcoin harus antara 1-20x',
    invalidSymbolFormat:
      'Format simbol tidak valid: {symbol}, gunakan perp USDT atau SYMBOL-USDC',
    systemPromptTemplate: 'Template Prompt Sistem',
    promptTemplateDefault: 'Default Stabil',
    promptTemplateAdaptive: 'Strategi Konservatif',
    promptTemplateAdaptiveRelaxed: 'Strategi Agresif',
    promptTemplateHansen: 'Strategi Hansen',
    promptTemplateNof1: 'Framework NoF1 English',
    promptTemplateTaroLong: 'Taro Long Position',
    promptDescDefault: '📊 Strategi Default Stabil',
    promptDescDefaultContent:
      'Maksimalkan rasio Sharpe, risiko-imbalan seimbang, cocok untuk pemula dan trading jangka panjang stabil',
    promptDescAdaptive: '🛡️ Strategi Konservatif (v6.0.0)',
    promptDescAdaptiveContent:
      'Kontrol risiko ketat, konfirmasi BTC wajib, prioritas win rate tinggi, cocok untuk trader konservatif',
    promptDescAdaptiveRelaxed: '⚡ Strategi Agresif (v6.0.0)',
    promptDescAdaptiveRelaxedContent:
      'Trading frekuensi tinggi, konfirmasi BTC opsional, mengejar peluang trading, cocok untuk pasar volatil',
    promptDescHansen: '🎯 Strategi Hansen',
    promptDescHansenContent:
      'Strategi kustom Hansen, maksimalkan rasio Sharpe, untuk trader profesional',
    promptDescNof1: '🌐 Framework NoF1 English',
    promptDescNof1Content:
      'Spesialis bursa Hyperliquid, prompt bahasa Inggris, maksimalkan return yang disesuaikan risiko',
    promptDescTaroLong: '📈 Strategi Taro Long Position',
    promptDescTaroLongContent:
      'Keputusan berbasis data, validasi multi-dimensi, evolusi pembelajaran berkelanjutan, spesialis posisi long',
    loading: 'Memuat...',

    // AI Traders Page - Additional
    inUse: 'Digunakan',
    noModelsConfigured: 'Belum ada model AI yang dikonfigurasi',
    noExchangesConfigured: 'Belum ada bursa yang dikonfigurasi',
    signalSource: 'Sumber Sinyal',
    signalSourceConfig: 'Konfigurasi Sumber Sinyal',
    ai500Description:
      'Endpoint API untuk penyedia data AI500, kosongkan untuk menonaktifkan sumber sinyal ini',
    oiTopDescription:
      'Endpoint API untuk peringkat open interest, kosongkan untuk menonaktifkan sumber sinyal ini',
    information: 'Informasi',
    signalSourceInfo1:
      '• Konfigurasi sumber sinyal per-pengguna, setiap pengguna dapat mengatur URL sendiri',
    signalSourceInfo2:
      '• Saat membuat trader, Anda dapat memilih apakah akan menggunakan sumber sinyal ini',
    signalSourceInfo3:
      '• URL yang dikonfigurasi akan digunakan untuk mengambil data pasar dan sinyal trading',
    editAIModel: 'Edit Model AI',
    addAIModel: 'Tambah Model AI',
    confirmDeleteModel:
      'Apakah Anda yakin ingin menghapus konfigurasi model AI ini?',
    cannotDeleteModelInUse:
      'Tidak dapat menghapus model AI ini karena sedang digunakan oleh trader',
    tradersUsing: 'Trader yang menggunakan konfigurasi ini',
    pleaseDeleteTradersFirst:
      'Silakan hapus atau konfigurasi ulang trader ini terlebih dahulu',
    selectModel: 'Pilih Model AI',
    pleaseSelectModel: 'Silakan pilih model',
    customBaseURL: 'Base URL (Opsional)',
    customBaseURLPlaceholder:
      'URL base API kustom, misal: https://api.openai.com/v1',
    leaveBlankForDefault: 'Kosongkan untuk menggunakan alamat API default',
    modelConfigInfo1:
      '• Untuk API resmi, hanya API Key yang diperlukan, biarkan kolom lain kosong',
    modelConfigInfo2:
      '• Base URL dan Nama Model kustom hanya diperlukan untuk proxy pihak ketiga',
    modelConfigInfo3: '• API Key dienkripsi dan disimpan dengan aman',
    defaultModel: 'Model default',
    applyApiKey: 'Dapatkan API Key',
    kimiApiNote:
      'Kimi memerlukan API Key dari situs internasional (moonshot.ai), key region China tidak kompatibel',
    leaveBlankForDefaultModel: 'Kosongkan untuk menggunakan model default',
    customModelName: 'Nama Model (Opsional)',
    customModelNamePlaceholder: 'misal: deepseek-chat, qwen3-max, gpt-4o',
    saveConfig: 'Simpan Konfigurasi',
    editExchange: 'Edit Bursa',
    addExchange: 'Tambah Bursa',
    confirmDeleteExchange:
      'Apakah Anda yakin ingin menghapus konfigurasi bursa ini?',
    cannotDeleteExchangeInUse:
      'Tidak dapat menghapus bursa ini karena sedang digunakan oleh trader',
    pleaseSelectExchange: 'Silakan pilih bursa',
    exchangeConfigWarning1:
      '• API key akan dienkripsi, disarankan menggunakan izin baca-saja atau trading futures',
    exchangeConfigWarning2:
      '• Jangan berikan izin penarikan untuk memastikan keamanan dana',
    exchangeConfigWarning3:
      '• Setelah menghapus konfigurasi, trader terkait tidak akan dapat trading',
    edit: 'Edit',
    viewGuide: 'Lihat Panduan',
    binanceSetupGuide: 'Panduan Pengaturan Binance',
    closeGuide: 'Tutup',
    whitelistIP: 'Whitelist IP',
    whitelistIPDesc: 'Binance memerlukan penambahan IP server ke whitelist API',
    serverIPAddresses: 'Alamat IP Server',
    copyIP: 'Salin',
    ipCopied: 'IP Disalin',
    copyIPFailed: 'Gagal menyalin alamat IP. Silakan salin secara manual',
    loadingServerIP: 'Memuat IP server...',

    // Error Messages
    createTraderFailed: 'Gagal membuat trader',
    getTraderConfigFailed: 'Gagal mendapatkan konfigurasi trader',
    modelConfigNotExist: 'Konfigurasi model tidak ada atau tidak diaktifkan',
    exchangeConfigNotExist: 'Konfigurasi bursa tidak ada atau tidak diaktifkan',
    updateTraderFailed: 'Gagal memperbarui trader',
    deleteTraderFailed: 'Gagal menghapus trader',
    operationFailed: 'Operasi gagal',
    deleteConfigFailed: 'Gagal menghapus konfigurasi',
    modelNotExist: 'Model tidak ada',
    saveConfigFailed: 'Gagal menyimpan konfigurasi',
    exchangeNotExist: 'Bursa tidak ada',
    deleteExchangeConfigFailed: 'Gagal menghapus konfigurasi bursa',
    saveSignalSourceFailed: 'Gagal menyimpan konfigurasi sumber sinyal',
    encryptionFailed: 'Gagal mengenkripsi data sensitif',

    // Login & Register
    login: 'Masuk',
    register: 'Daftar',
    username: 'Nama Pengguna',
    email: 'Email',
    password: 'Kata Sandi',
    confirmPassword: 'Konfirmasi Kata Sandi',
    usernamePlaceholder: 'nama pengguna anda',
    emailPlaceholder: 'email@anda.com',
    passwordPlaceholder: 'Masukkan kata sandi',
    confirmPasswordPlaceholder: 'Masukkan ulang kata sandi',
    passwordRequirements: 'Persyaratan kata sandi',
    passwordRuleMinLength: 'Minimal 8 karakter',
    passwordRuleUppercase: 'Minimal 1 huruf besar',
    passwordRuleLowercase: 'Minimal 1 huruf kecil',
    passwordRuleNumber: 'Minimal 1 angka',
    passwordRuleSpecial: 'Minimal 1 karakter khusus (@#$%!&*?)',
    passwordRuleMatch: 'Kata sandi cocok',
    passwordNotMeetRequirements:
      'Kata sandi tidak memenuhi persyaratan keamanan',
    loginTitle: 'Masuk ke akun Anda',
    registerTitle: 'Buat akun baru',
    loginButton: 'Masuk',
    registerButton: 'Daftar',
    back: 'Kembali',
    noAccount: 'Belum punya akun?',
    hasAccount: 'Sudah punya akun?',
    registerNow: 'Daftar sekarang',
    loginNow: 'Masuk sekarang',
    forgotPassword: 'Lupa kata sandi?',
    forgotAccount: 'Lupa akun?',
    forgotAccountConfirm:
      '⚠️ Ini akan MENGHAPUS PERMANEN semua data: pengguna, trader, strategi, kunci API model AI, kunci API bursa, dan dompet CLAW402 Anda. Ekspor apa pun yang ingin Anda simpan (terutama kunci privat dompet) SEBELUM melanjutkan. Pendaftaran ulang TIDAK akan memulihkannya. Lanjutkan?',
    forgotAccountSuccess:
      'Akun berhasil direset! Anda sekarang dapat mendaftar akun baru.',
    rememberMe: 'Ingat saya',
    resetPassword: 'Reset Kata Sandi',
    resetPasswordTitle: 'Reset kata sandi Anda',
    newPassword: 'Kata Sandi Baru',
    newPasswordPlaceholder: 'Masukkan kata sandi baru (minimal 6 karakter)',
    resetPasswordButton: 'Reset Kata Sandi',
    resetPasswordSuccess:
      'Kata sandi berhasil direset! Silakan masuk dengan kata sandi baru',
    resetPasswordFailed: 'Gagal mereset kata sandi',
    backToLogin: 'Kembali ke Login',
    resetPasswordCliIntro:
      'Demi keamanan, pemulihan kata sandi tidak lagi tersedia dari browser. Jalankan perintah ini di server tempat NOFX dipasang:',
    resetPasswordCliSecurityNote:
      'Ini memerlukan akses shell ke server, sehingga akun Anda tetap aman bahkan saat NOFX terekspos ke internet.',
    resetAccountCliIntro:
      'Untuk menghapus semua data dan memulai dari awal, jalankan perintah ini di server tempat NOFX dipasang:',
    copy: 'Salin',
    loginSuccess: 'Berhasil masuk',
    registrationSuccess: 'Berhasil mendaftar',
    loginFailed: 'Gagal masuk. Periksa email dan kata sandi Anda.',
    registrationFailed: 'Gagal mendaftar. Silakan coba lagi.',
    sessionExpired: 'Sesi berakhir, silakan masuk kembali',
    invalidCredentials: 'Email atau kata sandi salah',
    weak: 'Lemah',
    medium: 'Sedang',
    strong: 'Kuat',
    passwordStrength: 'Kekuatan kata sandi',
    passwordStrengthHint:
      'Gunakan minimal 8 karakter dengan campuran huruf, angka dan simbol',
    passwordMismatch: 'Kata sandi tidak cocok',
    emailRequired: 'Email diperlukan',
    passwordRequired: 'Kata sandi diperlukan',
    invalidEmail: 'Format email tidak valid',
    passwordTooShort: 'Kata sandi minimal 6 karakter',

    // Landing Page
    features: 'Fitur',
    howItWorks: 'Cara Kerja',
    community: 'Komunitas',
    language: 'Bahasa',
    loggedInAs: 'Masuk sebagai',
    exitLogin: 'Keluar',
    signIn: 'Masuk',
    signUp: 'Daftar',
    registrationClosed: 'Pendaftaran Ditutup',
    registrationClosedMessage:
      'Pendaftaran pengguna saat ini dinonaktifkan. Silakan hubungi administrator untuk akses.',
    githubStarsInDays: '2.5K+ GitHub Stars dalam 3 hari',
    heroTitle1: 'Read the Market.',
    heroTitle2: 'Write the Trade.',
    heroDescription:
      'NOFX adalah standar masa depan untuk trading AI — OS trading agensi yang terbuka dan didorong komunitas. Mendukung Binance, Aster DEX dan bursa lainnya, self-hosted, kompetisi multi-agen, biarkan AI secara otomatis membuat keputusan, mengeksekusi dan mengoptimalkan trading untuk Anda.',
    poweredBy: 'Didukung oleh Aster DEX dan Binance.',
    readyToDefine: 'Siap mendefinisikan masa depan trading AI?',
    startWithCrypto:
      'Dimulai dari pasar kripto, berkembang ke TradFi. NOFX adalah infrastruktur AgentFi.',
    getStartedNow: 'Mulai Sekarang',
    viewSourceCode: 'Lihat Kode Sumber',
    coreFeatures: 'Fitur Inti',
    whyChooseNofx: 'Mengapa Memilih NOFX?',
    openCommunityDriven:
      'Open source, transparan, OS trading AI yang didorong komunitas',
    openSourceSelfHosted: '100% Open Source & Self-Hosted',
    openSourceDesc:
      'Framework Anda, aturan Anda. Non-black box, mendukung prompt kustom dan multi-model.',
    openSourceFeatures1: 'Kode sumber sepenuhnya terbuka',
    openSourceFeatures2: 'Dukungan deployment self-hosting',
    openSourceFeatures3: 'Prompt AI kustom',
    openSourceFeatures4: 'Dukungan multi-model (DeepSeek, Qwen)',
    multiAgentCompetition: 'Kompetisi Multi-Agen Cerdas',
    multiAgentDesc:
      'Strategi AI bertarung kecepatan tinggi di sandbox, yang terkuat bertahan, mencapai evolusi strategi.',
    multiAgentFeatures1: 'Beberapa agen AI berjalan paralel',
    multiAgentFeatures2: 'Optimasi strategi otomatis',
    multiAgentFeatures3: 'Pengujian keamanan sandbox',
    multiAgentFeatures4: 'Portabilitas strategi lintas pasar',
    secureReliableTrading: 'Trading Aman dan Andal',
    secureDesc:
      'Keamanan tingkat enterprise, kontrol penuh atas dana dan strategi trading Anda.',
    secureFeatures1: 'Manajemen private key lokal',
    secureFeatures2: 'Kontrol izin API granular',
    secureFeatures3: 'Pemantauan risiko realtime',
    secureFeatures4: 'Audit log trading',
    aboutNofx: 'Tentang NOFX',
    whatIsNofx: 'Apa itu NOFX?',
    nofxNotAnotherBot:
      "NOFX bukan bot trading biasa, melainkan 'Linux' dari trading AI —",
    nofxDescription1:
      'OS open source yang transparan dan terpercaya yang menyediakan lapisan',
    nofxDescription2:
      "'keputusan-risiko-eksekusi' terpadu, mendukung semua kelas aset.",
    nofxDescription3:
      'Dimulai dari pasar kripto (24/7, volatilitas tinggi sebagai tempat uji sempurna), ekspansi masa depan ke saham, futures, forex. Inti: arsitektur terbuka, AI',
    nofxDescription4:
      'Darwinisme (kompetisi mandiri multi-agen, evolusi strategi), flywheel CodeFi',
    nofxDescription5: '(pengembang mendapat reward poin untuk kontribusi PR).',
    youFullControl: 'Anda 100% Mengendalikan',
    fullControlDesc: 'Kontrol penuh atas prompt AI dan dana',
    startupMessages1: 'Memulai sistem trading otomatis...',
    startupMessages2: 'Server API dimulai di port 8080',
    startupMessages3: 'Konsol Web http://127.0.0.1:3000',
    howToStart: 'Cara Memulai NOFX',
    fourSimpleSteps:
      'Empat langkah sederhana untuk memulai perjalanan trading AI otomatis Anda',
    step1Title: 'Clone Repository GitHub',
    step1Desc:
      'git clone https://github.com/NoFxAiOS/nofx dan beralih ke branch dev untuk menguji fitur baru.',
    step2Title: 'Konfigurasi Lingkungan',
    step2Desc:
      'Setup frontend untuk API bursa (seperti Binance, Hyperliquid), model AI dan prompt kustom.',
    step3Title: 'Deploy & Jalankan',
    step3Desc:
      'Deployment Docker satu klik, mulai agen AI. Catatan: Pasar berisiko tinggi, hanya uji dengan uang yang bisa Anda rugi.',
    step4Title: 'Optimalkan & Kontribusi',
    step4Desc:
      'Pantau trading, kirim PR untuk meningkatkan framework. Bergabung ke Telegram untuk berbagi strategi.',
    importantRiskWarning: 'Peringatan Risiko Penting',
    riskWarningText:
      'Branch dev tidak stabil, jangan gunakan dana yang tidak sanggup Anda rugi. NOFX non-custodial, tanpa strategi resmi. Trading memiliki risiko, investasi dengan hati-hati.',
    futureStandardAI: 'Standar masa depan trading AI',
    links: 'Tautan',
    resources: 'Sumber Daya',
    documentation: 'Dokumentasi',
    supporters: 'Pendukung',
    strategicInvestment: '(Investasi Strategis)',
    accessNofxPlatform: 'Akses Platform NOFX',
    loginRegisterPrompt:
      'Silakan masuk atau daftar untuk mengakses platform trading AI lengkap',
    registerNewAccount: 'Daftar Akun Baru',
    candidateCoins: 'Koin Kandidat',
    candidateCoinsZeroWarning: 'Jumlah Koin Kandidat adalah 0',
    possibleReasons: 'Kemungkinan Penyebab:',
    ai500ApiNotConfigured:
      'API penyedia data AI500 tidak dikonfigurasi atau tidak dapat diakses (periksa pengaturan sumber sinyal)',
    apiConnectionTimeout: 'Koneksi API timeout atau mengembalikan data kosong',
    noCustomCoinsAndApiFailed:
      'Tidak ada koin kustom yang dikonfigurasi dan pengambilan API gagal',
    solutions: 'Solusi:',
    setCustomCoinsInConfig: 'Atur daftar koin kustom di konfigurasi trader',
    orConfigureCorrectApiUrl:
      'Atau konfigurasi alamat API penyedia data yang benar',
    orDisableAI500Options:
      'Atau nonaktifkan opsi "Gunakan Penyedia Data AI500" dan "Gunakan OI Top"',
    signalSourceNotConfigured: 'Sumber Sinyal Belum Dikonfigurasi',
    signalSourceWarningMessage:
      'Anda memiliki trader yang mengaktifkan "Gunakan Penyedia Data AI500" atau "Gunakan OI Top", tetapi alamat API sumber sinyal belum dikonfigurasi. Ini akan menyebabkan jumlah koin kandidat menjadi 0, dan trader tidak dapat bekerja dengan baik.',
    configureSignalSourceNow: 'Konfigurasi Sumber Sinyal Sekarang',

    // FAQ Page
    faqTitle: 'Pertanyaan yang Sering Diajukan',
    faqSubtitle: 'Temukan jawaban untuk pertanyaan umum tentang NOFX',
    faqStillHaveQuestions: 'Masih Punya Pertanyaan?',
    faqContactUs:
      'Bergabunglah dengan komunitas kami atau kunjungi GitHub untuk bantuan lebih lanjut',
    faqCategoryGettingStarted: 'Memulai',
    faqCategoryInstallation: 'Instalasi',
    faqCategoryConfiguration: 'Konfigurasi',
    faqCategoryTrading: 'Trading',
    faqCategoryTechnicalIssues: 'Masalah Teknis',
    faqCategorySecurity: 'Keamanan',
    faqCategoryFeatures: 'Fitur',
    faqCategoryAIModels: 'Model AI',
    faqCategoryContributing: 'Kontribusi',
    faqWhatIsNOFX: 'Apa itu NOFX?',
    faqWhatIsNOFXAnswer:
      'NOFX adalah sistem operasi trading bertenaga AI open-source untuk pasar kripto dan saham AS. Ia menggunakan model bahasa besar (LLM) seperti DeepSeek, GPT, Claude, Gemini untuk menganalisis data pasar dan membuat keputusan trading secara otonom. Fitur utama: dukungan multi-model AI, trading multi-bursa, dan pembangun strategi visual.',
    faqHowDoesItWork: 'Bagaimana cara kerja NOFX?',
    faqHowDoesItWorkAnswer:
      'NOFX bekerja dalam 5 langkah: 1) Konfigurasi model AI dan kredensial API bursa; 2) Buat strategi trading (pemilihan koin, indikator, kontrol risiko); 3) Buat "Trader" menggabungkan Model AI + Bursa + Strategi; 4) Mulai trader - dia akan menganalisis data pasar secara berkala dan membuat keputusan beli/jual/tahan; 5) Pantau performa di dasbor.',
    faqIsProfitable: 'Apakah NOFX menguntungkan?',
    faqIsProfitableAnswer:
      'Trading AI bersifat eksperimental dan TIDAK dijamin menguntungkan. Futures kripto sangat volatil dan berisiko. NOFX dirancang untuk tujuan edukasi dan riset. Kami sangat menyarankan: mulai dengan jumlah kecil (10-50 USDT), jangan investasi melebihi yang sanggup Anda rugi, uji sebelum trading nyata.',
    faqSupportedExchanges: 'Bursa mana yang didukung?',
    faqSupportedExchangesAnswer:
      'CEX (Tersentralisasi): Binance Futures, Bybit, OKX, Bitget. DEX (Terdesentralisasi): Aster DEX, Lighter. Setiap bursa memiliki fitur berbeda - Binance memiliki likuiditas terbesar, Hyperliquid sepenuhnya on-chain tanpa KYC.',
    faqSupportedAIModels: 'Model AI mana yang didukung?',
    faqSupportedAIModelsAnswer:
      'NOFX mendukung 7+ model AI: DeepSeek (direkomendasikan untuk biaya/performa), Qwen, OpenAI (GPT), Claude, Gemini, Grok, dan Kimi. Anda juga dapat menggunakan endpoint API yang kompatibel dengan OpenAI.',
    faqSystemRequirements: 'Apa persyaratan sistem?',
    faqSystemRequirementsAnswer:
      'Minimum: 2 core CPU, 2GB RAM, 1GB disk, internet stabil. Direkomendasikan: 4GB RAM untuk menjalankan beberapa trader. OS yang didukung: Linux, macOS, atau Windows (via Docker atau WSL2).',
    faqHowToInstall: 'Bagaimana cara menginstal NOFX?',
    faqHowToInstallAnswer:
      'Metode termudah (Linux/macOS): Jalankan "curl -fsSL https://raw.githubusercontent.com/NoFxAiOS/nofx/main/install.sh | bash" - ini menginstal kontainer Docker secara otomatis. Lalu buka http://127.0.0.1:3000 di browser Anda.',
    faqWindowsInstallation: 'Bagaimana cara menginstal di Windows?',
    faqWindowsInstallationAnswer:
      'Tiga opsi: 1) Docker Desktop (Direkomendasikan); 2) WSL2 - Instal Windows Subsystem for Linux; 3) Docker di WSL2. Akses via http://127.0.0.1:3000',
    faqDockerDeployment: 'Deployment Docker terus gagal',
    faqDockerDeploymentAnswer:
      'Solusi umum: 1) Periksa Docker berjalan: "docker info"; 2) Pastikan memori cukup (minimal 2GB); 3) Periksa log: "docker compose logs -f".',
    faqManualInstallation:
      'Bagaimana cara menginstal manual untuk pengembangan?',
    faqManualInstallationAnswer:
      'Prasyarat: Go 1.21+, Node.js 18+, TA-Lib. Langkah: 1) Clone repo; 2) "go mod download"; 3) "cd web && npm install"; 4) "go build -o nofx"; 5) "./nofx"; 6) "cd web && npm run dev".',
    faqServerDeployment: 'Bagaimana cara deploy ke server remote?',
    faqServerDeploymentAnswer:
      'Jalankan skrip instal di server Anda. Akses via http://IP_SERVER:3000. Untuk HTTPS: Gunakan Cloudflare (gratis) dan aktifkan TRANSPORT_ENCRYPTION=true di .env.',
    faqUpdateNOFX: 'Bagaimana cara memperbarui NOFX?',
    faqUpdateNOFXAnswer:
      'Docker: "docker compose pull && docker compose up -d". Manual: "git pull && go build -o nofx" untuk backend, "cd web && npm install && npm run build" untuk frontend.',
    faqConfigureAIModels: 'Bagaimana cara mengonfigurasi model AI?',
    faqConfigureAIModelsAnswer:
      'Buka halaman Konfigurasi → bagian Model AI. Untuk setiap model: 1) Dapatkan API key dari penyedia; 2) Masukkan API key; 3) Opsional kustomisasi base URL dan nama model; 4) Simpan.',
    faqConfigureExchanges: 'Bagaimana cara mengonfigurasi koneksi bursa?',
    faqConfigureExchangesAnswer:
      'Buka halaman Konfigurasi → bagian Bursa. Klik "Tambah Bursa", pilih jenis, dan masukkan kredensial. Aktifkan hanya izin yang diperlukan (Trading Futures).',
    faqBinanceAPISetup: 'Bagaimana cara mengatur API Binance dengan benar?',
    faqBinanceAPISetupAnswer:
      'Langkah penting: 1) Buat API key di Binance → Manajemen API; 2) Aktifkan HANYA izin "Enable Futures"; 3) PENTING: Beralih ke Hedge Mode di pengaturan Futures; 4) Pastikan dana di dompet Futures.',
    faqHyperliquidSetup: 'Bagaimana cara mengatur Hyperliquid?',
    faqHyperliquidSetupAnswer:
      'Hyperliquid adalah bursa terdesentralisasi. Langkah: 1) Kunjungi app.hyperliquid.xyz; 2) Hubungkan wallet; 3) Buat API wallet; 4) Salin alamat dan private key; 5) Tambahkan di NOFX. Tanpa KYC.',
    faqCreateStrategy: 'Bagaimana cara membuat strategi trading?',
    faqCreateStrategyAnswer:
      'Buka Strategy Studio: 1) Sumber Koin; 2) Indikator teknikal; 3) Kontrol Risiko; 4) Prompt Kustom (opsional). Simpan dan tetapkan ke trader.',
    faqCreateTrader: 'Bagaimana cara membuat dan memulai trader?',
    faqCreateTraderAnswer:
      'Buka halaman Trader: 1) Klik "Buat Trader"; 2) Pilih Model AI; 3) Pilih Bursa; 4) Pilih Strategi; 5) Atur interval keputusan; 6) Simpan, lalu klik "Mulai".',
    faqHowAIDecides: 'Bagaimana AI membuat keputusan trading?',
    faqHowAIDecidesAnswer:
      'AI menggunakan penalaran Chain of Thought (CoT) dalam 4 langkah: 1) Analisis Posisi; 2) Penilaian Risiko; 3) Evaluasi Peluang; 4) Keputusan Akhir.',
    faqDecisionFrequency: 'Seberapa sering AI membuat keputusan?',
    faqDecisionFrequencyAnswer:
      'Dapat dikonfigurasi per trader, default 15 menit. Disarankan: 15-30 menit untuk trading aktif berbasis sinyal.',
    faqNoTradesExecuting: 'Mengapa trader saya tidak mengeksekusi trading?',
    faqNoTradesExecutingAnswer:
      'Penyebab umum: 1) AI memutuskan menunggu; 2) Saldo tidak cukup; 3) Batas posisi maks tercapai; 4) Masalah API bursa; 5) Batasan strategi terlalu ketat.',
    faqOnlyShortPositions: 'Mengapa AI hanya membuka posisi short?',
    faqOnlyShortPositionsAnswer:
      'Biasanya karena Mode Posisi Binance. Solusi: Beralih ke Hedge Mode di Binance Futures → Preferensi → Mode Posisi.',
    faqLeverageSettings: 'Bagaimana cara kerja pengaturan leverage?',
    faqLeverageSettingsAnswer:
      'Leverage diatur di Strategi → Kontrol Risiko: leverage BTC/ETH (biasanya 5-20x) dan leverage Altcoin (biasanya 3-10x).',
    faqStopLossTakeProfit: 'Apakah NOFX mendukung stop-loss dan take-profit?',
    faqStopLossTakeProfitAnswer:
      'AI dapat menyarankan level stop-loss/take-profit dalam keputusannya, tetapi ini bersifat panduan bukan order bursa yang dikodekan keras.',
    faqMultipleTraders: 'Bisakah saya menjalankan beberapa trader?',
    faqMultipleTradersAnswer:
      'Ya! NOFX mendukung 20+ trader bersamaan. Gunakan untuk A/B test strategi, bandingkan model AI, atau diversifikasi lintas bursa.',
    faqAICosts: 'Berapa biaya panggilan API AI?',
    faqAICostsAnswer:
      'Perkiraan biaya harian per trader (interval 5 menit): DeepSeek: $0.10-0.50; Qwen: $0.20-0.80; OpenAI: $2-5; Claude: $1-3.',
    faqPortInUse: 'Port 8080 atau 3000 sudah digunakan',
    faqPortInUseAnswer:
      'Periksa proses yang menggunakan port. Ubah port di .env: NOFX_BACKEND_PORT=8081, NOFX_FRONTEND_PORT=3001.',
    faqFrontendNotLoading: 'Frontend menampilkan "Memuat..." terus-menerus',
    faqFrontendNotLoadingAnswer:
      'Backend mungkin tidak berjalan. Periksa: "curl http://127.0.0.1:8080/api/health" harus mengembalikan "status":"ok".',
    faqDatabaseLocked: 'Error database terkunci',
    faqDatabaseLockedAnswer:
      'Beberapa proses mengakses SQLite bersamaan. Hentikan semua, hapus file lock, restart.',
    faqTALibNotFound: 'TA-Lib tidak ditemukan saat build',
    faqTALibNotFoundAnswer:
      'Instal TA-Lib: macOS: "brew install ta-lib"; Ubuntu: "sudo apt-get install libta-lib0-dev".',
    faqAIAPITimeout: 'API AI timeout atau koneksi ditolak',
    faqAIAPITimeoutAnswer:
      'Periksa: 1) API key valid; 2) Jaringan bisa mengakses endpoint; 3) Penyedia tidak down; 4) VPN/firewall tidak memblokir.',
    faqBinancePositionMode: 'Kode error Binance -4061 (Mode Posisi)',
    faqBinancePositionModeAnswer:
      'Anda dalam mode One-way tetapi NOFX memerlukan Hedge Mode. Tutup semua posisi, beralih ke Hedge Mode, restart trader.',
    faqBalanceShowsZero: 'Saldo akun menunjukkan 0',
    faqBalanceShowsZeroAnswer:
      'Dana mungkin di dompet Spot, bukan dompet Futures. Transfer USDT dari Spot ke Futures.',
    faqDockerPullFailed: 'Penarikan image Docker gagal atau lambat',
    faqDockerPullFailedAnswer:
      'Konfigurasi mirror Docker di daemon.json atau gunakan GitHub Container Registry.',
    faqAPIKeyStorage: 'Bagaimana API key disimpan?',
    faqAPIKeyStorageAnswer:
      'API key dienkripsi menggunakan AES-256-GCM sebelum disimpan di database SQLite lokal. Jangan pernah bagikan file data.db atau .env Anda.',
    faqEncryptionDetails: 'Enkripsi apa yang digunakan NOFX?',
    faqEncryptionDetailsAnswer:
      'NOFX menggunakan: 1) AES-256-GCM untuk penyimpanan database; 2) RSA-2048 untuk enkripsi transport opsional; 3) JWT untuk token autentikasi.',
    faqSecurityBestPractices: 'Apa praktik terbaik keamanan?',
    faqSecurityBestPracticesAnswer:
      'Disarankan: 1) Gunakan API key dengan whitelist IP dan izin minimal; 2) Gunakan sub-akun khusus; 3) Aktifkan TRANSPORT_ENCRYPTION; 4) Gunakan HTTPS.',
    faqCanNOFXStealFunds: 'Bisakah NOFX mencuri dana saya?',
    faqCanNOFXStealFundsAnswer:
      'NOFX open-source (lisensi AGPL-3.0) - Anda bisa audit semua kode. API key disimpan lokal di mesin ANDA, tidak pernah dikirim ke server eksternal.',
    faqStrategyStudio: 'Apa itu Strategy Studio?',
    faqStrategyStudioAnswer:
      'Strategy Studio adalah pembangun strategi visual untuk konfigurasi: Sumber Koin, Indikator Teknikal, Kontrol Risiko, dan Prompt Kustom. Tanpa coding.',
    faqCompetitionMode: 'Apa itu Mode Kompetisi?',
    faqCompetitionModeAnswer:
      'Halaman kompetisi menampilkan papan peringkat realtime semua trader Anda. Bandingkan ROI, L/R, rasio Sharpe, win rate.',
    faqChainOfThought: 'Apa itu Chain of Thought (CoT)?',
    faqChainOfThoughtAnswer:
      'Chain of Thought adalah proses penalaran AI, terlihat di log keputusan. AI menjelaskan alasan di balik setiap keputusan.',
    faqWhichAIModelBest: 'Model AI mana yang sebaiknya saya gunakan?',
    faqWhichAIModelBestAnswer:
      'Direkomendasikan: DeepSeek untuk rasio biaya/performa terbaik. Alternatif: OpenAI untuk penalaran terbaik; Claude untuk analisis mendalam; Qwen harga kompetitif.',
    faqCustomAIAPI: 'Bisakah saya menggunakan API AI kustom?',
    faqCustomAIAPIAnswer:
      'Ya! NOFX mendukung API yang kompatibel dengan OpenAI. Masukkan URL endpoint, API key, dan nama model.',
    faqAIHallucinations: 'Bagaimana dengan halusinasi AI?',
    faqAIHallucinationsAnswer:
      'NOFX memitigasi dengan: prompt terstruktur, format output JSON, dan validasi order sebelum eksekusi. Namun trading AI tetap eksperimental.',
    faqCompareAIModels: 'Bagaimana cara membandingkan model AI yang berbeda?',
    faqCompareAIModelsAnswer:
      'Buat beberapa trader dengan model AI berbeda tapi strategi/bursa sama. Jalankan bersamaan dan bandingkan di halaman Kompetisi.',
    faqHowToContribute: 'Bagaimana cara berkontribusi ke NOFX?',
    faqHowToContributeAnswer:
      'NOFX open-source dan menyambut kontribusi! Cara: 1) Kode - perbaiki bug, tambah fitur; 2) Dokumentasi; 3) Laporan Bug; 4) Ide Fitur. Semua kontributor mungkin mendapat reward airdrop.',
    faqPRGuidelines: 'Apa panduan PR?',
    faqPRGuidelinesAnswer:
      'Proses PR: 1) Fork repo; 2) Buat branch fitur dari dev; 3) Buat perubahan, jalankan lint; 4) Commit dengan format Conventional Commits; 5) Push dan buat PR ke NoFxAiOS/nofx:dev.',
    faqBountyProgram: 'Apakah ada program bounty?',
    faqBountyProgramAnswer:
      'Ya! Kontributor mendapat reward airdrop berdasarkan kontribusi. Issue dengan label "bounty" memiliki reward uang tunai.',
    faqReportBugs: 'Bagaimana cara melaporkan bug?',
    faqReportBugsAnswer:
      'Buka GitHub Issue dengan: deskripsi masalah, langkah reproduksi, perilaku yang diharapkan vs aktual. Untuk kerentanan keamanan: DM @Web3Tinkle di Twitter.',

    // Web Crypto Environment Check
    environmentCheck: {
      button: 'Periksa Lingkungan Aman',
      checking: 'Memeriksa...',
      description:
        'Memverifikasi otomatis apakah konteks browser ini memungkinkan Web Crypto sebelum memasukkan kunci sensitif.',
      secureTitle: 'Konteks aman terdeteksi',
      secureDesc:
        'API Web Crypto tersedia. Anda dapat melanjutkan memasukkan rahasia dengan enkripsi diaktifkan.',
      insecureTitle: 'Konteks tidak aman terdeteksi',
      insecureDesc:
        'Halaman ini tidak berjalan melalui HTTPS atau origin localhost tepercaya.',
      tipsTitle: 'Cara memperbaiki:',
      tipHTTPS: 'Sajikan dasbor melalui HTTPS dengan sertifikat valid.',
      tipLocalhost:
        'Selama pengembangan, buka aplikasi via http://localhost atau 127.0.0.1.',
      tipIframe:
        'Hindari menyematkan aplikasi dalam iframe HTTP yang tidak aman.',
      unsupportedTitle: 'Browser tidak mengekspos Web Crypto',
      unsupportedDesc:
        'Buka NOFX melalui HTTPS (atau http://localhost saat pengembangan).',
      summary: 'Origin saat ini: {origin} · Protokol: {protocol}',
      disabledTitle: 'Enkripsi transport dinonaktifkan',
      disabledDesc:
        'Enkripsi transport sisi server dinonaktifkan. API key akan ditransmisikan dalam plaintext. Aktifkan TRANSPORT_ENCRYPTION=true untuk keamanan yang lebih baik.',
    },
    environmentSteps: {
      checkTitle: '1. Pemeriksaan lingkungan',
      selectTitle: '2. Pilih bursa',
    },
    twoStageKey: {
      title: 'Input Private Key Dua Tahap',
      stage1Description: 'Masukkan {length} karakter pertama private key Anda',
      stage2Description: 'Masukkan {length} karakter sisa private key Anda',
      stage1InputLabel: 'Bagian Pertama',
      stage2InputLabel: 'Bagian Kedua',
      characters: 'karakter',
      processing: 'Memproses...',
      nextButton: 'Lanjut',
      cancelButton: 'Batal',
      backButton: 'Kembali',
      encryptButton: 'Enkripsi & Kirim',
      obfuscationCopied: 'Data pengacak disalin ke clipboard',
      obfuscationInstruction:
        'Tempelkan sesuatu yang lain untuk membersihkan clipboard, lalu lanjutkan',
      obfuscationManual: 'Diperlukan pengacakan manual',
    },
    errors: {
      privatekeyIncomplete: 'Masukkan minimal {expected} karakter',
      privatekeyInvalidFormat:
        'Format private key tidak valid (harus 64 karakter heksadesimal)',
      privatekeyObfuscationFailed: 'Pengacakan clipboard gagal',
    },
    positionHistory: {
      title: 'Riwayat Posisi',
      loading: 'Memuat riwayat posisi...',
      noHistory: 'Tidak Ada Riwayat Posisi',
      noHistoryDesc: 'Posisi yang ditutup akan muncul di sini setelah trading.',
      showingPositions: 'Menampilkan {count} dari {total} posisi',
      totalPnL: 'Total L/R',
      totalTrades: 'Total Trading',
      winLoss: 'Menang: {win} / Kalah: {loss}',
      winRate: 'Win Rate',
      profitFactor: 'Profit Factor',
      profitFactorDesc: 'Total Profit / Total Loss',
      plRatio: 'Rasio L/R',
      plRatioDesc: 'Rata-rata Menang / Rata-rata Kalah',
      sharpeRatio: 'Rasio Sharpe',
      sharpeRatioDesc: 'Return yang Disesuaikan Risiko',
      maxDrawdown: 'Drawdown Maksimum',
      avgWin: 'Rata-rata Menang',
      avgLoss: 'Rata-rata Kalah',
      netPnL: 'L/R Bersih',
      netPnLDesc: 'Setelah Biaya',
      fee: 'Biaya',
      trades: 'Trading',
      avgPnL: 'Rata-rata L/R',
      symbolPerformance: 'Performa Simbol',
      symbol: 'Simbol',
      allSymbols: 'Semua Simbol',
      side: 'Arah',
      all: 'Semua',
      sort: 'Urutkan',
      latestFirst: 'Terbaru Dulu',
      oldestFirst: 'Terlama Dulu',
      highestPnL: 'L/R Tertinggi',
      lowestPnL: 'L/R Terendah',
      entry: 'Masuk',
      exit: 'Keluar',
      qty: 'Jml',
      value: 'Nilai',
      lev: 'Lev',
      pnl: 'L/R',
      duration: 'Durasi',
      closedAt: 'Ditutup Pada',
    },

    // Data Page
    dataCenter: 'Data Center',

    // Strategy Market Page
    strategyMarket: {
      title: 'PASAR STRATEGI',
      subtitle: 'DATABASE STRATEGI GLOBAL',
      description:
        'Temukan, analisis, dan kloning algoritma trading berperforma tinggi',
      search: 'CARI PARAMETER...',
      all: 'SEMUA PROTOKOL',
      popular: 'TREN',
      recent: 'TERBARU',
      myStrategies: 'PERPUSTAKAAN SAYA',
      noStrategies: 'TIDAK ADA SINYAL',
      noStrategiesDesc:
        'Tidak ada sinyal strategis terdeteksi pada frekuensi ini',
      author: 'OPERATOR',
      createdAt: 'TIMESTAMP',
      viewConfig: 'DEKRIPSI CONFIG',
      hideConfig: 'ENKRIPSI',
      copyConfig: 'KLON CONFIG',
      copied: 'DISALIN',
      configHidden: 'TERENKRIPSI',
      configHiddenDesc: 'Parameter konfigurasi terenkripsi',
      indicators: 'INDIKATOR',
      maxPositions: 'BATAS_POS',
      maxLeverage: 'LEV_MAKS',
      shareYours: 'UNGGAH_STRATEGI',
      makePublic: 'PUBLIKASI',
      loading: 'MENGINISIALISASI...',
    },

    // Strategy Studio Page
    strategyStudio: {
      title: 'Studio Strategi',
      subtitle: 'Konfigurasi dan uji strategi trading',
      strategies: 'Strategi',
      newStrategy: 'Baru',
      strategyType: 'Jenis Strategi',
      aiTrading: 'AI Trading',
      aiTradingDesc: 'AI menganalisis pasar dan membuat keputusan trading',
      gridTrading: 'AI Grid Trading',
      gridTradingDesc: 'Strategi grid yang dikontrol AI untuk pasar ranging',
      gridConfig: 'Konfigurasi Grid',
      coinSource: 'Sumber Koin',
      indicators: 'Indikator',
      riskControl: 'Kontrol Risiko',
      promptSections: 'Editor Prompt',
      customPrompt: 'Prompt Ekstra',
      save: 'Simpan',
      saving: 'Menyimpan...',
      activate: 'Aktifkan',
      active: 'Aktif',
      default: 'Default',
      promptPreview: 'Pratinjau Prompt',
      aiTestRun: 'Uji AI',
      systemPrompt: 'System Prompt',
      userPrompt: 'User Prompt',
      loadPrompt: 'Generate Prompt',
      refreshPrompt: 'Refresh',
      promptVariant: 'Gaya',
      balanced: 'Seimbang',
      aggressive: 'Agresif',
      conservative: 'Konservatif',
      selectModel: 'Pilih Model AI',
      runTest: 'Jalankan Uji AI',
      running: 'Berjalan...',
      aiOutput: 'Output AI',
      reasoning: 'Penalaran',
      decisions: 'Keputusan',
      duration: 'Durasi',
      noModel: 'Silakan konfigurasi model AI terlebih dahulu',
      testNote: 'Uji dengan AI nyata, tanpa trading',
      publishSettings: 'Publikasi',
      newStrategyName: 'Strategi Baru',
      strategyCopy: 'Salinan Strategi',
      strategyDeleted: 'Strategi dihapus',
      cannotDeleteActiveStrategy: 'Strategi aktif tidak bisa dihapus',
      confirmDeleteStrategy: 'Hapus strategi ini?',
      confirmDelete: 'Konfirmasi Hapus',
      delete: 'Hapus',
      cancel: 'Batal',
      strategyExported: 'Strategi diekspor',
      invalidStrategyFile: 'File strategi tidak valid',
      imported: 'Diimpor',
      strategyImported: 'Strategi diimpor',
      strategySaved: 'Strategi disimpan',
      importStrategy: 'Impor Strategi',
      newStrategyTooltip: 'Strategi Baru',
      export: 'Ekspor',
      duplicate: 'Duplikat',
      deleteTooltip: 'Hapus',
      public: 'Publik',
      addDescription: 'Tambah deskripsi strategi...',
      unsaved: 'Belum Disimpan',
      discardChanges: 'Buang',
      selectOrCreate: 'Pilih atau buat strategi',
      customPromptDesc:
        'Prompt tambahan di akhir System Prompt untuk gaya trading personal',
      customPromptPlaceholder: 'Masukkan prompt kustom...',
      generatePromptPreview: 'Klik untuk generate pratinjau prompt',
      runAiTestHint: 'Klik untuk menjalankan uji AI',
      tokenEstimate: 'Estimasi Token',
      tokenExceedWarning:
        'Estimasi token melebihi 128K. Permintaan AI mungkin gagal untuk beberapa model.',
      tokenEstimating: 'Mengestimasi...',
      tokenTooltip: 'Berdasarkan konteks 200K',
    },

    // Metric Tooltip
    metricTooltip: {
      formula: 'Formula',
    },

    // Login Required Overlay
    loginRequired: {
      title: 'AKSES SISTEM DITOLAK',
      accessDenied: 'AKSES DITOLAK',
      subtitleWithFeature:
        'Modul "{featureName}" memerlukan hak akses lebih tinggi',
      subtitleDefault: 'Otorisasi diperlukan untuk modul ini',
      description:
        'Inisialisasi protokol autentikasi untuk membuka kemampuan sistem penuh: konfigurasi Trader AI dan aliran data Pasar Strategi.',
      benefit1: 'Kontrol Trader AI',
      benefit2: 'Pasar Strategi HFT',
      benefit4: 'Visualisasi Sistem Penuh',
      loginButton: 'JALANKAN LOGIN',
      registerButton: 'DAFTAR ID BARU',
      abort: 'BATALKAN',
    },

    // Advanced Chart
    advancedChart: {
      updating: 'Memperbarui...',
      indicators: 'Indikator',
      orderMarkers: 'Penanda Order',
      technicalIndicators: 'Indikator Teknikal',
      clickToToggle: 'Klik untuk beralih indikator',
      shares: 'lembar',
      units: 'unit',
    },

    // Chart With Orders
    chartWithOrders: {
      failedToLoad: 'Gagal memuat data grafik',
      loading: 'Memuat...',
      buy: 'BELI',
      sell: 'JUAL',
    },

    // Comparison Chart
    comparisonChart: {
      '1d': '1H',
      '3d': '3H',
      '7d': '7H',
      '30d': '30H',
      all: 'Semua',
    },

    traderDashboard: {
      connectionFailed: 'Koneksi Gagal',
      connectionFailedDesc: 'Silakan periksa apakah layanan backend berjalan.',
      retry: 'Coba Lagi',
      confirmClosePosition: 'Yakin ingin menutup posisi {symbol} {side}?',
      confirmClose: 'Konfirmasi Tutup',
      confirm: 'Konfirmasi',
      cancel: 'Batal',
      positionClosed: 'Posisi berhasil ditutup',
      closeFailed: 'Gagal menutup posisi',
      hideAddress: 'Sembunyikan alamat',
      showFullAddress: 'Tampilkan alamat lengkap',
      copyAddress: 'Salin alamat',
      noAddressConfigured: 'Alamat belum dikonfigurasi',
      action: 'Aksi',
      entry: 'Entry',
      mark: 'Mark',
      qty: 'Qty',
      value: 'Nilai',
      lev: 'Lev.',
      uPnL: 'uPnL',
      liq: 'Liq.',
      closePosition: 'Tutup Posisi',
      close: 'Tutup',
      showingPositions: 'Menampilkan {shown} dari {total} posisi',
      perPage: 'Per halaman',
      accountFetchFailed:
        'DATA_FETCH::FAILED — Data akun tidak tersedia, periksa koneksi',
      positionsFetchFailed: 'Data posisi tidak tersedia',
      decisionsFetchFailed: 'Data keputusan tidak tersedia',
    },

    aiTradersToast: {
      creating: 'Membuat...',
      created: 'Berhasil dibuat',
      createFailed: 'Gagal membuat',
      saving: 'Menyimpan...',
      saved: 'Berhasil disimpan',
      saveFailed: 'Gagal menyimpan',
      deleting: 'Menghapus...',
      deleted: 'Berhasil dihapus',
      deleteFailed: 'Gagal menghapus',
      stopping: 'Menghentikan...',
      stopped: 'Dihentikan',
      stopFailed: 'Gagal menghentikan',
      starting: 'Memulai...',
      started: 'Dimulai',
      startFailed: 'Gagal memulai',
      updating: 'Memperbarui...',
      updatingConfig: 'Memperbarui konfigurasi...',
      configUpdated: 'Konfigurasi diperbarui',
      configUpdateFailed: 'Gagal memperbarui konfigurasi',
      showInCompetition: 'Ditampilkan di kompetisi',
      hideInCompetition: 'Disembunyikan dari kompetisi',
      updateFailed: 'Gagal memperbarui',
      updatingModelConfig: 'Memperbarui konfigurasi model...',
      modelConfigUpdated: 'Konfigurasi model diperbarui',
      modelConfigUpdateFailed: 'Gagal memperbarui konfigurasi model',
      deletingExchange: 'Menghapus akun exchange...',
      exchangeDeleted: 'Akun exchange dihapus',
      exchangeDeleteFailed: 'Gagal menghapus akun exchange',
      updatingExchangeConfig: 'Memperbarui konfigurasi exchange...',
      exchangeConfigUpdated: 'Konfigurasi exchange diperbarui',
      exchangeConfigUpdateFailed: 'Gagal memperbarui konfigurasi exchange',
      creatingExchange: 'Membuat akun exchange...',
      exchangeCreated: 'Akun exchange dibuat',
      exchangeCreateFailed: 'Gagal membuat akun exchange',
    },

    modelConfig: {
      selectModel: 'Pilih Model',
      configure: 'Konfigurasi',
      configureApi: 'Konfigurasi API',
      configureWallet: 'Konfigurasi Wallet',
      chooseProvider: 'Pilih Penyedia AI Anda',
      claw402EntryDesc:
        'Jalur default yang direkomendasikan. Gunakan Base USDC bayar per panggilan tanpa mengelola API key.',
      otherApiEntry: 'Penyedia API Lain',
      otherApiEntryDesc:
        'Gunakan API key Anda sendiri untuk OpenAI, Claude, Gemini, DeepSeek, dan lainnya.',
      payPerCall: 'Bayar per panggilan USDC · Semua Model AI · Tanpa API Key',
      recommended: 'Terbaik',
      allModelsClaw:
        'Bayar per panggilan dengan USDC — mendukung semua model AI utama',
      selectAiModel: 'Pilih Model AI',
      allModelsUnified:
        'Semua model terpadu via Claw402. Ganti kapan saja setelah setup.',
      setupWallet: 'Setup Wallet',
      walletInfo:
        'Claw402 menggunakan USDC di Base chain. Anda memerlukan wallet EVM.',
      exportKey: 'Ekspor private key dari MetaMask, Rabby, dll.',
      dedicatedWallet: 'Disarankan: buat wallet khusus dengan saldo USDC kecil',
      walletPrivateKey: 'Private Key Wallet (Base Chain EVM)',
      privateKeyNote:
        'Private key hanya digunakan untuk signing lokal. Tidak pernah diunggah. Tidak perlu ETH atau gas.',
      howToFundUsdc: 'Cara Mengisi USDC',
      fundStep1:
        'Tarik USDC dari exchange (Binance/OKX/Coinbase) ke wallet Anda',
      fundStep2: 'Pilih jaringan Base (biaya sangat rendah)',
      fundStep3: '$5-10 USDC cukup untuk waktu lama (~$0.003/panggilan)',
      back: 'Kembali',
      startTrading: 'Mulai Trading',
      modelsConfigured: 'Model dengan lencana emas sudah dikonfigurasi',
      getStarted: 'Mulai',
      getApiKey: 'Dapatkan API Key',
      walletPrivateKeyLabel: 'Private Key Wallet *',
      selectModelLabel: 'Pilih Model',
      validating: 'Memvalidasi...',
      walletAddress: 'Alamat Wallet',
      usdcBalance: 'Saldo Base USDC',
      claw402Connected: 'claw402 Terhubung',
      claw402Unreachable: 'claw402 Tidak Dapat Dijangkau',
      depositUsdc: 'Deposit USDC ke alamat ini di Base chain',
      invalidKeyPrefix: 'Tambahkan 0x di awal',
      invalidKeyLength: 'Harus 66 karakter, saat ini',
      invalidKeyChars: 'Mengandung karakter tidak valid',
      testConnection: 'Tes Koneksi',
      testingConnection: 'Menguji...',
    },

    exchangeConfig: {
      selectExchange: 'Pilih Exchange',
      configure: 'Konfigurasi',
      chooseExchange: 'Pilih Exchange Anda',
      centralizedExchanges: 'Exchange Tersentralisasi',
      decentralizedExchanges: 'Exchange Terdesentralisasi',
      register: 'Daftar',
      bonus: 'Bonus',
      accountName: 'Nama Akun',
      accountNamePlaceholder: 'mis., Akun Utama',
      pleaseEnterAccountName: 'Silakan masukkan nama akun',
      useBinanceFuturesApi: 'Gunakan API "Spot & Futures Trading"',
      viewTutorial: 'Lihat Tutorial',
      lighterApiKeySetup: 'Setup API Key Lighter',
      lighterApiKeyDesc: 'Buat API Key di situs Lighter',
      apiKeyIndex: 'Indeks API Key',
      apiKeyIndexTooltip: 'Indeks API Key dimulai dari 0',
      back: 'Kembali',
    },

    telegram: {
      botSetup: 'Setup Telegram Bot',
      createBot: 'Buat Bot',
      bindAccount: 'Hubungkan Akun',
      done: 'Selesai',
      invalidTokenFormat:
        'Format Bot Token tidak valid. Seharusnya "angka:alfanumerik"',
      tokenSaved: 'Bot Token tersimpan, menunggu binding',
      saveFailed: 'Gagal menyimpan, silakan periksa token',
      unbound: 'Akun Telegram terputus',
      unbindFailed: 'Gagal memutuskan',
      step1Title: 'Langkah 1: Buat Bot di Telegram',
      step1Desc1: 'Buka Telegram, cari',
      step1Desc2: 'Kirim',
      step1Desc2Suffix: 'perintah',
      step1Desc3: 'Ikuti petunjuk untuk mengatur nama dan username bot',
      step1Desc4: 'BotFather akan mengembalikan Token, salin itu',
      openBotFather: 'Buka @BotFather',
      pasteToken: 'Tempel Bot Token',
      tokenFormat: 'Format: angka:alfanumerik, mis. 123456789:ABCdef...',
      selectAiModel: 'Pilih Model AI (opsional)',
      noEnabledModels:
        'Belum ada model aktif. Konfigurasi di AI Models terlebih dahulu.',
      autoSelect: '— Pilih otomatis (disarankan)',
      autoUseEnabled: 'Kosongkan untuk otomatis menggunakan model aktif',
      savingToken: 'Menyimpan...',
      saveAndContinue: 'Simpan & Lanjut',
      step2Title: 'Langkah 2: Kirim /start ke Bot Anda',
      step2Desc1: 'Cari Bot yang baru dibuat di Telegram',
      step2Desc2: 'Klik Start atau kirim',
      step2Desc3: 'Bot akan otomatis terhubung ke akun Anda',
      currentToken: 'Token Saat Ini',
      waitingForStart:
        'Menunggu Anda mengirim /start... Refresh halaman setelah mengirim',
      reconfigureToken: 'Konfigurasi Ulang Token',
      bindSuccess: 'Berhasil terhubung!',
      noStartReceived:
        'Belum menerima /start. Silakan kirim /start ke Bot Anda terlebih dahulu',
      checkFailed: 'Pemeriksaan gagal',
      checkStatus: 'Periksa Status',
      botActive: 'Telegram Bot Aktif!',
      botActiveDesc:
        'Anda sekarang dapat mengontrol sistem trading melalui bahasa alami di Telegram',
      supportedCommands: 'Perintah yang Didukung',
      cmdHelp: 'Tampilkan semua perintah',
      cmdStatus: 'Tampilkan status trader',
      cmdNaturalLang: 'Bahasa alami',
      cmdStartStop: 'Mulai/hentikan trader',
      cmdControl: 'Kontrol bahasa alami',
      cmdPositions: 'Lihat posisi',
      cmdPositionsDesc: 'Kueri posisi real-time',
      cmdStrategy: 'Konfigurasi strategi',
      cmdStrategyDesc: 'Ubah strategi trading',
      unbinding: 'Memutuskan...',
      unbindAccount: 'Putuskan Akun',
      aiModelLabel: 'Model AI (untuk bahasa alami)',
      aiModelAutoSelect: '— Pilih otomatis',
      modelUpdated: 'Model AI diperbarui',
      modelUpdateFailed: 'Gagal memperbarui',
      save: 'Simpan',
      loading: 'Memuat...',
    },

    traderConfigView: {
      traderConfig: 'Konfigurasi Trader',
      configInfo: 'Detail konfigurasi {name}',
      running: 'Berjalan',
      stopped: 'Berhenti',
      basicInfo: 'Informasi Dasar',
      traderName: 'Nama Trader',
      aiModel: 'Model AI',
      exchange: 'Exchange',
      initialBalance: 'Saldo Awal',
      marginMode: 'Mode Margin',
      crossMargin: 'Cross',
      isolatedMargin: 'Isolated',
      scanInterval: '{minutes} menit',
      scanIntervalLabel: 'Interval Scan',
      strategyUsed: 'Strategi Digunakan',
      strategyName: 'Nama Strategi',
      close: 'Tutup',
      yes: 'Ya',
      no: 'Tidak',
    },
} satisfies Translation

export default id
