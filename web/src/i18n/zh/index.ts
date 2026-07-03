import type { Translation } from '../i18n-types'

const zh = {
    // Header
    appTitle: 'NOFX',
    subtitle: '多AI模型交易平台',
    aiTraders: 'AI交易员',
    details: '详情',
    tradingPanel: '交易面板',
    competition: '竞赛',
    running: '运行中',
    stopped: '已停止',
    adminMode: '管理员模式',
    logout: '退出',
    switchTrader: '切换交易员:',
    view: '查看',

    // Navigation
    realtimeNav: '排行榜',
    configNav: '配置',
    dashboardNav: '看板',
    strategyNav: '策略',
    faqNav: '常见问题',

    // Footer
    footerTitle: 'NOFX - AI交易系统',
    footerWarning: '⚠️ 交易有风险，请谨慎使用。',

    // Stats Cards
    totalEquity: '总净值',
    availableBalance: '可用余额',
    totalPnL: '总盈亏',
    positions: '持仓',
    margin: '保证金',
    free: '空闲',

    // Positions Table
    currentPositions: '当前持仓',
    active: '活跃',
    symbol: '币种',
    side: '方向',
    entryPrice: '入场价',
    stopLoss: '止损',
    takeProfit: '止盈',
    riskReward: '风险回报比',
    markPrice: '标记价',
    quantity: '数量',
    positionValue: '仓位价值',
    leverage: '杠杆',
    unrealizedPnL: '未实现盈亏',
    liqPrice: '强平价',
    long: '多头',
    short: '空头',
    noPositions: '无持仓',
    noActivePositions: '当前没有活跃的交易持仓',

    // Recent Decisions
    recentDecisions: '最近决策',
    lastCycles: '最近 {count} 个交易周期',
    noDecisionsYet: '暂无决策',
    aiDecisionsWillAppear: 'AI交易决策将显示在这里',
    cycle: '周期',
    success: '成功',
    failed: '失败',
    inputPrompt: '输入提示',
    aiThinking: '💭 AI思维链分析',
    collapse: '▼ 收起',
    expand: '▶ 展开',

    // Equity Chart
    accountEquityCurve: '账户净值曲线',
    noHistoricalData: '暂无历史数据',
    dataWillAppear: '运行几个周期后将显示收益率曲线',
    initialBalance: '初始余额',
    currentEquity: '当前净值',
    historicalCycles: '历史周期',
    displayRange: '显示范围',
    recent: '最近',
    allData: '全部数据',
    cycles: '个',

    // Comparison Chart
    comparisonMode: '对比模式',
    dataPoints: '数据点数',
    currentGap: '当前差距',
    count: '{count} 个',

    // TradingView Chart
    marketChart: '行情图表',
    viewChart: '点击查看图表',
    enterSymbol: '输入币种...',
    popularSymbols: '热门币种',
    fullscreen: '全屏',
    exitFullscreen: '退出全屏',

    // Competition Page
    aiCompetition: 'AI竞赛',
    traders: '交易员',
    liveBattle: '实时对战',
    realTimeBattle: '实时对战',
    leader: '领先者',
    leaderboard: '排行榜',
    live: '实时',
    realTime: '实时',
    performanceComparison: '表现对比',
    realTimePnL: '实时收益率',
    realTimePnLPercent: '实时收益率',
    headToHead: '正面对决',
    leadingBy: '领先 {gap}%',
    behindBy: '落后 {gap}%',
    equity: '权益',
    pnl: '收益',
    pos: '持仓',

    // AI Traders Management
    manageAITraders: '管理您的AI交易机器人',
    aiModels: 'AI模型',
    exchanges: '交易所',
    createTrader: '创建交易员',
    modelConfiguration: '模型配置',
    configured: '已配置',
    notConfigured: '未配置',
    currentTraders: '当前交易员',
    noTraders: '暂无AI交易员',
    createFirstTrader: '创建您的第一个AI交易员开始使用',
    dashboardEmptyTitle: '开始使用吧！',
    dashboardEmptyDescription:
      '创建您的第一个 AI 交易员，自动化您的交易策略。连接交易所、选择 AI 模型，几分钟内即可开始交易！',
    goToTradersPage: '创建您的第一个交易员',
    configureModelsFirst: '请先配置AI模型',
    configureExchangesFirst: '请先配置交易所',
    configureModelsAndExchangesFirst: '请先配置AI模型和交易所',
    modelNotConfigured: '所选模型未配置',
    exchangeNotConfigured: '所选交易所未配置',
    confirmDeleteTrader: '确定要删除这个交易员吗？',
    status: '状态',
    start: '启动',
    stop: '停止',
    createNewTrader: '创建新的AI交易员',
    selectAIModel: '选择AI模型',
    selectExchange: '选择交易所',
    traderName: '交易员名称',
    enterTraderName: '输入交易员名称',
    cancel: '取消',
    create: '创建',
    configureAIModels: '配置AI模型',
    configureExchanges: '配置交易所',
    aiScanInterval: 'AI 扫描决策间隔 (分钟)',
    scanIntervalRecommend: '建议: 15-30分钟',
    useTestnet: '使用测试网',
    enabled: '启用',
    save: '保存',

    // TraderConfigModal - New keys for hardcoded Chinese strings
    fetchBalanceEditModeOnly: '只有在编辑模式下才能获取当前余额',
    balanceFetched: '已获取当前余额',
    balanceFetchFailed: '获取余额失败',
    balanceFetchNetworkError: '获取余额失败，请检查网络连接',
    saving: '正在保存…',
    saveSuccess: '保存成功',
    saveFailed: '保存失败',
    editTraderConfig: '修改交易员配置',
    selectStrategyAndConfigParams: '选择策略并配置基础参数',
    basicConfig: '基础配置',
    traderNameRequired: '交易员名称 *',
    enterTraderNamePlaceholder: '请输入交易员名称',
    aiModelRequired: 'AI模型 *',
    exchangeRequired: '交易所 *',
    noExchangeAccount: '还没有交易所账号？点击注册',
    discount: '折扣优惠',
    selectTradingStrategy: '选择交易策略',
    useStrategy: '使用策略',
    noStrategyManual: '-- 不使用策略（手动配置） --',
    strategyActive: ' (当前激活)',
    strategyDefault: ' [默认]',
    noStrategyHint: '暂无策略，请先在策略工作室创建策略',
    strategyDetails: '策略详情',
    activating: '激活中',
    coinSource: '币种来源',
    marginLimit: '保证金上限',
    tradingParams: '交易参数',
    marginMode: '保证金模式',
    crossMargin: '全仓',
    isolatedMargin: '逐仓',
    competitionDisplay: '竞技场显示',
    show: '显示',
    hide: '隐藏',
    hiddenInCompetition: '隐藏后将不在竞技场页面显示此交易员',
    initialBalanceLabel: '初始余额 ($)',
    fetching: '获取中...',
    fetchCurrentBalance: '获取当前余额',
    balanceUpdateHint: '用于手动更新初始余额基准（例如充值/提现后）',
    autoFetchBalanceInfo: '系统将自动获取您的账户净值作为初始余额',
    fetchingBalance: '正在获取余额…',
    editTrader: '保存修改',
    createTraderButton: '创建交易员',

    // AI Model Configuration
    officialAPI: '官方API',
    customAPI: '自定义API',
    apiKey: 'API密钥',
    customAPIURL: '自定义API地址',
    enterAPIKey: '请输入API密钥',
    enterCustomAPIURL: '请输入自定义API端点地址',
    useOfficialAPI: '使用官方API服务',
    useCustomAPI: '使用自定义API端点',

    // Exchange Configuration
    secretKey: '密钥',
    privateKey: '私钥',
    walletAddress: '钱包地址',
    user: '用户名',
    signer: '签名者',
    passphrase: '口令',
    enterSecretKey: '输入密钥',
    enterPrivateKey: '输入私钥',
    enterWalletAddress: '输入钱包地址',
    enterUser: '输入用户名',
    enterSigner: '输入签名者地址',
    enterPassphrase: '输入Passphrase',
    hyperliquidPrivateKeyDesc: 'Hyperliquid 使用私钥进行交易认证',
    hyperliquidWalletAddressDesc: '与私钥对应的钱包地址',
    // Hyperliquid 代理钱包 (新安全模型)
    hyperliquidAgentWalletTitle: 'Hyperliquid 代理钱包配置',
    hyperliquidAgentWalletDesc:
      '使用代理钱包安全交易：代理钱包用于签名（餘額~0），主钱包持有资金（永不暴露私钥）',
    hyperliquidAgentPrivateKey: '代理私钥',
    enterHyperliquidAgentPrivateKey: '输入代理钱包私钥',
    hyperliquidAgentPrivateKeyDesc: '代理钱包仅有交易权限，无法提现',
    hyperliquidMainWalletAddress: '主钱包地址',
    enterHyperliquidMainWalletAddress: '输入主钱包地址',
    hyperliquidMainWalletAddressDesc:
      '持有交易资金的主钱包地址（永不暴露其私钥）',
    // Aster API Pro 配置
    asterApiProTitle: 'Aster API Pro 代理钱包配置',
    asterApiProDesc:
      '使用 API Pro 代理钱包安全交易：代理钱包用于签名交易，主钱包持有资金（永不暴露主钱包私钥）',
    asterUserDesc:
      '主钱包地址 - 您用于登录 Aster 的 EVM 钱包地址（仅支持 EVM 钱包）',
    asterSignerDesc:
      'API Pro 代理钱包地址 (0x...) - 从 https://www.asterdex.com/zh-CN/api-wallet 生成',
    asterPrivateKeyDesc:
      'API Pro 代理钱包私钥 - 从 https://www.asterdex.com/zh-CN/api-wallet 获取（仅在本地用于签名，不会被传输）',
    asterUsdtWarning:
      '重要提示：Aster 仅统计 USDT 余额。请确保您使用 USDT 作为保证金币种，避免其他资产（BNB、ETH等）的价格波动导致盈亏统计错误',
    asterUserLabel: '主钱包地址',
    asterSignerLabel: 'API Pro 代理钱包地址',
    asterPrivateKeyLabel: 'API Pro 代理钱包私钥',
    enterAsterUser: '输入主钱包地址 (0x...)',
    enterAsterSigner: '输入 API Pro 代理钱包地址 (0x...)',
    enterAsterPrivateKey: '输入 API Pro 代理钱包私钥',

    // LIGHTER 配置
    lighterWalletAddress: 'L1 錢包地址',
    lighterPrivateKey: 'L1 私鑰',
    lighterApiKeyPrivateKey: 'API Key 私鑰',
    enterLighterWalletAddress: '請輸入以太坊錢包地址（0x...）',
    enterLighterPrivateKey: '請輸入 L1 私鑰（32 字節）',
    enterLighterApiKeyPrivateKey: '請輸入 API Key 私鑰（40 字節，可選）',
    lighterWalletAddressDesc: '您的以太坊錢包地址，用於識別賬戶',
    lighterPrivateKeyDesc: 'L1 私鑰用於賬戶識別（32 字節 ECDSA 私鑰）',
    lighterApiKeyPrivateKeyDesc:
      'API Key 私鑰用於簽名交易（40 字節 Poseidon2 私鑰）',
    lighterApiKeyOptionalNote:
      '如果不提供 API Key，系統將使用功能受限的 V1 模式',
    lighterV1Description: '基本模式 - 功能受限，僅用於測試框架',
    lighterV2Description: '完整模式 - 支持 Poseidon2 簽名和真實交易',
    lighterPrivateKeyImported: 'LIGHTER 私鑰已導入',

    // Exchange names
    hyperliquidExchangeName: 'Hyperliquid',
    asterExchangeName: 'Aster DEX',

    // Secure input
    secureInputButton: '安全输入',
    secureInputReenter: '重新安全输入',
    secureInputClear: '清除',
    secureInputHint:
      '已通过安全双阶段输入设置。若需修改，请点击"重新安全输入"。',

    // Two Stage Key Modal
    twoStageModalTitle: '安全私钥输入',
    twoStageModalDescription: '使用双阶段流程安全输入长度为 {length} 的私钥。',
    twoStageStage1Title: '步骤一 · 输入前半段',
    twoStageStage1Placeholder: '前 32 位字符（若有 0x 前缀请保留）',
    twoStageStage1Hint:
      '继续后会将扰动字符串复制到剪贴板，用于迷惑剪贴板监控。',
    twoStageStage1Error: '请先输入第一段私钥。',
    twoStageNext: '下一步',
    twoStageProcessing: '处理中…',
    twoStageCancel: '取消',
    twoStageStage2Title: '步骤二 · 输入剩余部分',
    twoStageStage2Placeholder: '剩余的私钥字符',
    twoStageStage2Hint: '将扰动字符串粘贴到任意位置后，再完成私钥输入。',
    twoStageClipboardSuccess:
      '扰动字符串已复制。请在完成前在任意文本处粘贴一次以迷惑剪贴板记录。',
    twoStageClipboardReminder:
      '记得在提交前粘贴一次扰动字符串，降低剪贴板泄漏风险。',
    twoStageClipboardManual: '自动复制失败，请手动复制下面的扰动字符串。',
    twoStageBack: '返回',
    twoStageSubmit: '确认',
    twoStageInvalidFormat:
      '私钥格式不正确，应为 {length} 位十六进制字符（可选 0x 前缀）。',
    testnetDescription: '启用后将连接到交易所测试环境,用于模拟交易',
    securityWarning: '安全提示',
    saveConfiguration: '保存配置',

    // Trader Configuration
    positionMode: '仓位模式',
    crossMarginMode: '全仓模式',
    isolatedMarginMode: '逐仓模式',
    crossMarginDescription: '全仓模式：所有仓位共享账户余额作为保证金',
    isolatedMarginDescription: '逐仓模式：每个仓位独立管理保证金，风险隔离',
    leverageConfiguration: '杠杆配置',
    btcEthLeverage: 'BTC/ETH杠杆',
    altcoinLeverage: '山寨币杠杆',
    leverageRecommendation: '推荐：BTC/ETH 5-10倍，山寨币 3-5倍，控制风险',
    tradingSymbols: '交易币种',
    tradingSymbolsPlaceholder:
      '输入币种，逗号分隔（如：BTCUSDT,ETHUSDT,SOLUSDT）',
    selectSymbols: '选择币种',
    selectTradingSymbols: '选择交易币种',
    selectedSymbolsCount: '已选择 {count} 个币种',
    clearSelection: '清空选择',
    confirmSelection: '确认选择',
    tradingSymbolsDescription:
      '留空 = 使用默认币种。支持 USDT 合约（如：BTCUSDT, ETHUSDT）或 Hyperliquid XYZ USDC 标的（如：TSLA-USDC）',
    btcEthLeverageValidation: 'BTC/ETH杠杆必须在1-50倍之间',
    altcoinLeverageValidation: '山寨币杠杆必须在1-20倍之间',
    invalidSymbolFormat:
      '无效的币种格式：{symbol}，请使用 USDT 合约或 SYMBOL-USDC',

    // System Prompt Templates
    systemPromptTemplate: '系统提示词模板',
    promptTemplateDefault: '默认稳健',
    promptTemplateAdaptive: '保守策略',
    promptTemplateAdaptiveRelaxed: '激进策略',
    promptTemplateHansen: 'Hansen 策略',
    promptTemplateNof1: 'NoF1 英文框架',
    promptTemplateTaroLong: 'Taro 长仓',
    promptDescDefault: '📊 默认稳健策略',
    promptDescDefaultContent:
      '最大化夏普比率，平衡风险收益，适合新手和长期稳定交易',
    promptDescAdaptive: '🛡️ 保守策略 (v6.0.0)',
    promptDescAdaptiveContent:
      '严格风控，BTC 强制确认，高胜率优先，适合保守型交易者',
    promptDescAdaptiveRelaxed: '⚡ 激进策略 (v6.0.0)',
    promptDescAdaptiveRelaxedContent:
      '高频交易，BTC 可选确认，追求交易机会，适合波动市场',
    promptDescHansen: '🎯 Hansen 策略',
    promptDescHansenContent: 'Hansen 定制策略，最大化夏普比率，专业交易者专用',
    promptDescNof1: '🌐 NoF1 英文框架',
    promptDescNof1Content:
      'Hyperliquid 交易所专用，英文提示词，风险调整回报最大化',
    promptDescTaroLong: '📈 Taro 长仓策略',
    promptDescTaroLongContent:
      '数据驱动决策，多维度验证，持续学习进化，长仓专用',

    // Loading & Error
    loading: '加载中...',

    // AI Traders Page - Additional
    inUse: '正在使用',
    noModelsConfigured: '暂无已配置的AI模型',
    noExchangesConfigured: '暂无已配置的交易所',
    signalSource: '信号源',
    signalSourceConfig: '信号源配置',
    ai500Description: '用于获取 AI500 数据源的 API 地址，留空则不使用此数据源',
    oiTopDescription: '用于获取持仓量排行数据的API地址，留空则不使用此信号源',
    information: '说明',
    signalSourceInfo1:
      '• 信号源配置为用户级别，每个用户可以设置自己的信号源URL',
    signalSourceInfo2: '• 在创建交易员时可以选择是否使用这些信号源',
    signalSourceInfo3: '• 配置的URL将用于获取市场数据和交易信号',
    editAIModel: '编辑AI模型',
    addAIModel: '添加AI模型',
    confirmDeleteModel: '确定要删除此AI模型配置吗？',
    cannotDeleteModelInUse: '无法删除此AI模型，因为有交易员正在使用',
    tradersUsing: '正在使用此配置的交易员',
    pleaseDeleteTradersFirst: '请先删除或重新配置这些交易员',
    selectModel: '选择AI模型',
    pleaseSelectModel: '请选择模型',
    customBaseURL: 'Base URL (可选)',
    customBaseURLPlaceholder: '自定义API基础URL，如: https://api.openai.com/v1',
    leaveBlankForDefault: '留空则使用默认API地址',
    modelConfigInfo1: '• 使用官方 API 时，只需填写 API Key，其他字段留空即可',
    modelConfigInfo2:
      '• 自定义 Base URL 和 Model Name 仅在使用第三方代理时需要填写',
    modelConfigInfo3: '• API Key 加密存储，不会明文展示',
    defaultModel: '默认模型',
    applyApiKey: '申请 API Key',
    kimiApiNote:
      'Kimi 需要从国际站申请 API Key (moonshot.ai)，中国区 Key 不通用',
    leaveBlankForDefaultModel: '留空使用默认模型名称',
    customModelName: 'Model Name (可选)',
    customModelNamePlaceholder: '例如: deepseek-chat, qwen3-max, gpt-4o',
    saveConfig: '保存配置',
    editExchange: '编辑交易所',
    addExchange: '添加交易所',
    confirmDeleteExchange: '确定要删除此交易所配置吗？',
    cannotDeleteExchangeInUse: '无法删除此交易所，因为有交易员正在使用',
    pleaseSelectExchange: '请选择交易所',
    exchangeConfigWarning1: '• API密钥将被加密存储，建议使用只读或期货交易权限',
    exchangeConfigWarning2: '• 不要授予提现权限，确保资金安全',
    exchangeConfigWarning3: '• 删除配置后，相关交易员将无法正常交易',
    edit: '编辑',
    viewGuide: '查看教程',
    binanceSetupGuide: '币安配置教程',
    closeGuide: '关闭',
    whitelistIP: '白名单IP',
    whitelistIPDesc: '币安交易所需要填写白名单IP',
    serverIPAddresses: '服务器IP地址',
    copyIP: '复制',
    ipCopied: 'IP已复制',
    copyIPFailed: 'IP地址复制失败，请手动复制',
    loadingServerIP: '正在加载服务器IP...',

    // Error Messages
    createTraderFailed: '创建交易员失败',
    getTraderConfigFailed: '获取交易员配置失败',
    modelConfigNotExist: 'AI模型配置不存在或未启用',
    exchangeConfigNotExist: '交易所配置不存在或未启用',
    updateTraderFailed: '更新交易员失败',
    deleteTraderFailed: '删除交易员失败',
    operationFailed: '操作失败',
    deleteConfigFailed: '删除配置失败',
    modelNotExist: '模型不存在',
    saveConfigFailed: '保存配置失败',
    exchangeNotExist: '交易所不存在',
    deleteExchangeConfigFailed: '删除交易所配置失败',
    saveSignalSourceFailed: '保存信号源配置失败',
    encryptionFailed: '加密敏感数据失败',

    // Login & Register
    login: '登录',
    register: '注册',
    username: '用户名',
    email: '邮箱',
    password: '密码',
    confirmPassword: '确认密码',
    usernamePlaceholder: '请输入用户名',
    emailPlaceholder: '请输入邮箱地址',
    passwordPlaceholder: '请输入密码（至少6位）',
    confirmPasswordPlaceholder: '请再次输入密码',
    passwordRequirements: '密码要求',
    passwordRuleMinLength: '至少 8 位',
    passwordRuleUppercase: '至少 1 个大写字母',
    passwordRuleLowercase: '至少 1 个小写字母',
    passwordRuleNumber: '至少 1 个数字',
    passwordRuleSpecial: '至少 1 个特殊字符（@#$%!&*?）',
    passwordRuleMatch: '两次密码一致',
    passwordNotMeetRequirements: '密码不符合安全要求',
    loginTitle: '登录到您的账户',
    registerTitle: '创建新账户',
    loginButton: '登录',
    registerButton: '注册',
    back: '返回',
    noAccount: '还没有账户？',
    hasAccount: '已有账户？',
    registerNow: '立即注册',
    loginNow: '立即登录',
    forgotPassword: '忘记密码？',
    forgotAccount: '忘记账户？',
    forgotAccountConfirm:
      '⚠️ 这将永久删除全部数据：用户、Trader、策略、AI 模型 API Key、交易所 API Key，以及您的 CLAW402 钱包。请务必在继续前导出需要保留的内容（尤其是钱包私钥）。重新注册不会恢复任何数据。确定要继续吗？',
    forgotAccountSuccess: '账户已重置！现在可以注册新账户了。',
    rememberMe: '记住我',
    resetPassword: '重置密码',
    resetPasswordTitle: '重置您的密码',
    newPassword: '新密码',
    newPasswordPlaceholder: '请输入新密码（至少6位）',
    resetPasswordButton: '重置密码',
    resetPasswordSuccess: '密码重置成功！请使用新密码登录',
    resetPasswordFailed: '密码重置失败',
    backToLogin: '返回登录',
    resetPasswordCliIntro:
      '出于安全考虑，密码找回不再通过浏览器进行。请在部署 NOFX 的服务器上运行以下命令：',
    resetPasswordCliSecurityNote:
      '该操作需要服务器的 shell 访问权限，因此即使 NOFX 暴露在公网上，你的账户依然安全。',
    resetAccountCliIntro:
      '如需清空所有数据并重新开始，请在部署 NOFX 的服务器上运行以下命令：',
    copy: '复制',
    loginSuccess: '登录成功',
    registrationSuccess: '注册成功',
    loginFailed: '登录失败，请检查您的邮箱和密码。',
    registrationFailed: '注册失败，请重试。',
    sessionExpired: '登录已过期，请重新登录',
    invalidCredentials: '邮箱或密码错误',
    weak: '弱',
    medium: '中',
    strong: '强',
    passwordStrength: '密码强度',
    passwordStrengthHint: '建议至少8位，包含大小写、数字和符号',
    passwordMismatch: '两次输入的密码不一致',
    emailRequired: '请输入邮箱',
    passwordRequired: '请输入密码',
    invalidEmail: '邮箱格式不正确',
    passwordTooShort: '密码至少需要6个字符',

    // Landing Page
    features: '功能',
    howItWorks: '如何运作',
    community: '社区',
    language: '语言',
    loggedInAs: '已登录为',
    exitLogin: '退出登录',
    signIn: '登录',
    signUp: '注册',
    registrationClosed: '注册已关闭',
    registrationClosedMessage:
      '平台当前不开放新用户注册，如需访问请联系管理员获取账号。',

    // Hero Section
    githubStarsInDays: '3 天内 2.5K+ GitHub Stars',
    heroTitle1: 'Read the Market.',
    heroTitle2: 'Write the Trade.',
    heroDescription:
      'NOFX 是 AI 交易的未来标准——一个开放、社区驱动的代理式交易操作系统。支持 Binance、Aster DEX 等交易所，自托管、多代理竞争，让 AI 为你自动决策、执行和优化交易。',
    poweredBy: '由 Aster DEX 和 Binance 提供支持。',

    // Landing Page CTA
    readyToDefine: '准备好定义 AI 交易的未来吗？',
    startWithCrypto:
      '从加密市场起步，扩展到 TradFi。NOFX 是 AgentFi 的基础架构。',
    getStartedNow: '立即开始',
    viewSourceCode: '查看源码',

    // Features Section
    coreFeatures: '核心功能',
    whyChooseNofx: '为什么选择 NOFX？',
    openCommunityDriven: '开源、透明、社区驱动的 AI 交易操作系统',
    openSourceSelfHosted: '100% 开源与自托管',
    openSourceDesc: '你的框架，你的规则。非黑箱，支持自定义提示词和多模型。',
    openSourceFeatures1: '完全开源代码',
    openSourceFeatures2: '支持自托管部署',
    openSourceFeatures3: '自定义 AI 提示词',
    openSourceFeatures4: '多模型支持（DeepSeek、Qwen）',
    multiAgentCompetition: '多代理智能竞争',
    multiAgentDesc: 'AI 策略在沙盒中高速战斗，最优者生存，实现策略进化。',
    multiAgentFeatures1: '多 AI 代理并行运行',
    multiAgentFeatures2: '策略自动优化',
    multiAgentFeatures3: '沙盒安全测试',
    multiAgentFeatures4: '跨市场策略移植',
    secureReliableTrading: '安全可靠交易',
    secureDesc: '企业级安全保障，完全掌控你的资金和交易策略。',
    secureFeatures1: '本地私钥管理',
    secureFeatures2: 'API 权限精细控制',
    secureFeatures3: '实时风险监控',
    secureFeatures4: '交易日志审计',

    // About Section
    aboutNofx: '关于 NOFX',
    whatIsNofx: '什么是 NOFX？',
    nofxNotAnotherBot: "NOFX 不是另一个交易机器人，而是 AI 交易的 'Linux' ——",
    nofxDescription1: "一个透明、可信任的开源 OS，提供统一的 '决策-风险-执行'",
    nofxDescription2: '层，支持所有资产类别。',
    nofxDescription3:
      '从加密市场起步（24/7、高波动性完美测试场），未来扩展到股票、期货、外汇。核心：开放架构、AI',
    nofxDescription4:
      '达尔文主义（多代理自竞争、策略进化）、CodeFi 飞轮（开发者 PR',
    nofxDescription5: '贡献获积分奖励）。',
    youFullControl: '你 100% 掌控',
    fullControlDesc: '完全掌控 AI 提示词和资金',
    startupMessages1: '启动自动交易系统...',
    startupMessages2: 'API服务器启动在端口 8080',
    startupMessages3: 'Web 控制台 http://127.0.0.1:3000',

    // How It Works Section
    howToStart: '如何开始使用 NOFX',
    fourSimpleSteps: '四个简单步骤，开启 AI 自动交易之旅',
    step1Title: '拉取 GitHub 仓库',
    step1Desc:
      'git clone https://github.com/NoFxAiOS/nofx 并切换到 dev 分支测试新功能。',
    step2Title: '配置环境',
    step2Desc:
      '前端设置交易所 API（如 Binance、Hyperliquid）、AI 模型和自定义提示词。',
    step3Title: '部署与运行',
    step3Desc:
      '一键 Docker 部署，启动 AI 代理。注意：高风险市场，仅用闲钱测试。',
    step4Title: '优化与贡献',
    step4Desc: '监控交易，提交 PR 改进框架。加入 Telegram 分享策略。',
    importantRiskWarning: '重要风险提示',
    riskWarningText:
      'dev 分支不稳定，勿用无法承受损失的资金。NOFX 非托管，无官方策略。交易有风险，投资需谨慎。',

    // Community Section (testimonials are kept as-is since they are quotes)

    // Footer Section
    futureStandardAI: 'AI 交易的未来标准',
    links: '链接',
    resources: '资源',
    documentation: '文档',
    supporters: '支持方',
    strategicInvestment: '(战略投资)',

    // Login Modal
    accessNofxPlatform: '访问 NOFX 平台',
    loginRegisterPrompt: '请选择登录或注册以访问完整的 AI 交易平台',
    registerNewAccount: '注册新账号',

    // Candidate Coins Warnings
    candidateCoins: '候选币种',
    candidateCoinsZeroWarning: '候选币种数量为 0',
    possibleReasons: '可能原因：',
    ai500ApiNotConfigured:
      'AI500 数据源 API 未配置或无法访问（请检查信号源设置）',
    apiConnectionTimeout: 'API连接超时或返回数据为空',
    noCustomCoinsAndApiFailed: '未配置自定义币种且API获取失败',
    solutions: '解决方案：',
    setCustomCoinsInConfig: '在交易员配置中设置自定义币种列表',
    orConfigureCorrectApiUrl: '或者配置正确的数据源 API 地址',
    orDisableAI500Options: '或者禁用"使用 AI500 数据源"和"使用 OI Top"选项',
    signalSourceNotConfigured: '信号源未配置',
    signalSourceWarningMessage:
      '您有交易员启用了"使用 AI500 数据源"或"使用 OI Top"，但尚未配置信号源 API 地址。这将导致候选币种数量为 0，交易员无法正常工作。',
    configureSignalSourceNow: '立即配置信号源',

    // FAQ Page
    faqTitle: '常见问题',
    faqSubtitle: '查找关于 NOFX 的常见问题解答',
    faqStillHaveQuestions: '还有其他问题？',
    faqContactUs: '加入我们的社区或查看 GitHub 获取更多帮助',

    // FAQ Categories
    faqCategoryGettingStarted: '入门指南',
    faqCategoryInstallation: '安装部署',
    faqCategoryConfiguration: '配置设置',
    faqCategoryTrading: '交易相关',
    faqCategoryTechnicalIssues: '技术问题',
    faqCategorySecurity: '安全相关',
    faqCategoryFeatures: '功能介绍',
    faqCategoryAIModels: 'AI 模型',
    faqCategoryContributing: '参与贡献',

    // ===== 入门指南 =====
    faqWhatIsNOFX: 'NOFX 是什么？',
    faqWhatIsNOFXAnswer:
      'NOFX 是一个开源的 AI 驱动交易操作系统，支持加密货币和美股市场。它使用大语言模型（LLM）如 DeepSeek、GPT、Claude、Gemini 来分析市场数据，进行自主交易决策。核心功能包括：多 AI 模型支持、多交易所交易、可视化策略构建器、回测系统。',

    faqHowDoesItWork: 'NOFX 是如何工作的？',
    faqHowDoesItWorkAnswer:
      'NOFX 分 5 步工作：1）配置 AI 模型和交易所 API 凭证；2）创建交易策略（币种选择、指标、风控）；3）创建"交易员"，组合 AI 模型 + 交易所 + 策略；4）启动交易员 - 它会定期分析市场数据并做出买入/卖出/持有决策；5）在仪表板上监控表现。AI 使用思维链（Chain of Thought）推理来解释每个决策。',

    faqIsProfitable: 'NOFX 能盈利吗？',
    faqIsProfitableAnswer:
      'AI 交易是实验性的，不保证盈利。加密货币期货波动性大、风险高。NOFX 仅用于教育和研究目的。我们强烈建议：从小额开始（10-50 USDT），不要投入超过承受能力的资金，在实盘交易前充分回测，并理解过去的表现不代表未来的结果。',

    faqSupportedExchanges: '支持哪些交易所？',
    faqSupportedExchangesAnswer:
      'CEX（中心化）：币安合约、Bybit、OKX、Bitget。DEX（去中心化）：Aster DEX、Lighter。每个交易所有不同特点 - 币安流动性最好，Hyperliquid 完全链上无需 KYC。查看文档获取各交易所的设置指南。',

    faqSupportedAIModels: '支持哪些 AI 模型？',
    faqSupportedAIModelsAnswer:
      'NOFX 支持 7+ 种 AI 模型：DeepSeek（推荐性价比）、阿里云通义千问、OpenAI（GPT-5.2）、Anthropic Claude、Google Gemini、xAI Grok、Kimi（月之暗面）。您也可以使用任何 OpenAI 兼容的 API 端点。每个模型各有优势 - DeepSeek 性价比高，OpenAI 能力强但贵，Claude 擅长推理。',

    faqSystemRequirements: '系统要求是什么？',
    faqSystemRequirementsAnswer:
      '最低配置：2 核 CPU，2GB 内存，1GB 硬盘，稳定网络。推荐：4GB 内存用于运行多个交易员。支持系统：Linux、macOS 或 Windows（通过 Docker 或 WSL2）。Docker 是最简单的安装方式。手动安装需要 Go 1.21+、Node.js 18+ 和 TA-Lib 库。',

    // ===== 安装部署 =====
    faqHowToInstall: '如何安装 NOFX？',
    faqHowToInstallAnswer:
      '最简单的方法（Linux/macOS）：运行 "curl -fsSL https://raw.githubusercontent.com/NoFxAiOS/nofx/main/install.sh | bash" - 这会自动安装 Docker 容器。然后在浏览器中打开 http://127.0.0.1:3000。手动安装或开发请克隆仓库并按照 README 说明操作。',

    faqWindowsInstallation: 'Windows 如何安装？',
    faqWindowsInstallationAnswer:
      '三种方式：1）Docker Desktop（推荐）- 安装 Docker Desktop，然后在 PowerShell 中运行 "docker compose -f docker-compose.prod.yml up -d"；2）WSL2 - 安装 Windows 子系统 Linux，然后按 Linux 方式安装；3）WSL2 + Docker - 两全其美，在 WSL2 终端运行安装脚本。通过 http://127.0.0.1:3000 访问。',

    faqDockerDeployment: 'Docker 部署一直失败',
    faqDockerDeploymentAnswer:
      '常见解决方案：1）检查 Docker 是否运行："docker info"；2）确保足够内存（最少 2GB）；3）如果卡在 "go build"，尝试："docker compose down && docker compose build --no-cache && docker compose up -d"；4）查看日志："docker compose logs -f"；5）拉取较慢时，在 daemon.json 配置 Docker 镜像。',

    faqManualInstallation: '如何手动安装用于开发？',
    faqManualInstallationAnswer:
      '前置条件：Go 1.21+、Node.js 18+、TA-Lib。步骤：1）克隆仓库："git clone https://github.com/NoFxAiOS/nofx.git"；2）安装后端依赖："go mod download"；3）安装前端依赖："cd web && npm install"；4）构建后端："go build -o nofx"；5）运行后端："./nofx"；6）运行前端（新终端）："cd web && npm run dev"。访问 http://127.0.0.1:3000',

    faqServerDeployment: '如何部署到远程服务器？',
    faqServerDeploymentAnswer:
      '在服务器上运行安装脚本 - 它会自动检测服务器 IP。通过 http://服务器IP:3000 访问。配置 HTTPS：1）使用 Cloudflare（免费）- 添加域名，创建 A 记录指向服务器 IP，SSL 设为"灵活"；2）在 .env 中启用 TRANSPORT_ENCRYPTION=true 进行浏览器端加密；3）通过 https://你的域名.com 访问。',

    faqUpdateNOFX: '如何更新 NOFX？',
    faqUpdateNOFXAnswer:
      'Docker 方式：运行 "docker compose pull && docker compose up -d" 拉取最新镜像并重启。手动安装：后端 "git pull && go build -o nofx"，前端 "cd web && npm install && npm run build"。data.db 中的配置在更新时会保留。',

    // ===== 配置设置 =====
    faqConfigureAIModels: '如何配置 AI 模型？',
    faqConfigureAIModelsAnswer:
      '进入配置页面 → AI 模型部分。对于每个模型：1）从提供商获取 API 密钥（界面提供链接）；2）输入 API 密钥；3）可选自定义基础 URL 和模型名称；4）保存。API 密钥在存储前会加密。保存后测试连接以验证。',

    faqConfigureExchanges: '如何配置交易所连接？',
    faqConfigureExchangesAnswer:
      '进入配置页面 → 交易所部分。点击"添加交易所"，选择类型并输入凭证。CEX（币安/Bybit/OKX）：需要 API Key + Secret Key（OKX 还需要 Passphrase）。DEX（Hyperliquid/Aster/Lighter）：需要钱包地址和私钥。务必只启用必要权限（合约交易）并考虑 IP 白名单。',

    faqBinanceAPISetup: '如何正确设置币安 API？',
    faqBinanceAPISetupAnswer:
      '重要步骤：1）在币安 → API 管理中创建 API 密钥；2）仅启用"启用合约"权限；3）考虑添加 IP 白名单增强安全；4）关键：在合约设置 → 偏好设置 → 持仓模式中切换为双向持仓模式；5）确保资金在合约钱包（不是现货）。-4061 错误表示需要双向持仓模式。',

    faqHyperliquidSetup: '如何设置 Hyperliquid？',
    faqHyperliquidSetupAnswer:
      'Hyperliquid 是去中心化交易所，需要钱包认证。步骤：1）访问 app.hyperliquid.xyz；2）连接钱包；3）生成 API 钱包（推荐）或使用主钱包；4）复制钱包地址和私钥；5）在 NOFX 中添加 Hyperliquid 交易所并填入凭证。无需 KYC，完全链上。',

    faqCreateStrategy: '如何创建交易策略？',
    faqCreateStrategyAnswer:
      '进入策略工作室：1）币种来源 - 选择交易哪些币（静态列表、AI500 池或 OI 排行）；2）指标 - 启用技术指标（EMA、MACD、RSI、ATR、成交量、OI、资金费率）；3）风控 - 设置杠杆限制、最大持仓数、保证金使用上限、仓位大小限制；4）自定义提示词（可选）- 为 AI 添加特定指令。保存后分配给交易员。',

    faqCreateTrader: '如何创建并启动交易员？',
    faqCreateTraderAnswer:
      '进入交易员页面：1）点击"创建交易员"；2）选择 AI 模型（需先配置）；3）选择交易所（需先配置）；4）选择策略（或使用默认）；5）设置决策间隔（如 15 分钟）；6）保存，然后点击"启动"开始交易。在仪表板页面监控表现。',

    // ===== 交易相关 =====
    faqHowAIDecides: 'AI 如何做出交易决策？',
    faqHowAIDecidesAnswer:
      'AI 使用思维链（CoT）推理分 4 步：1）持仓分析 - 审查当前持仓和盈亏；2）风险评估 - 检查账户保证金、可用余额；3）机会评估 - 分析市场数据、指标、候选币种；4）最终决策 - 输出具体操作（买入/卖出/持有）及理由。您可以在决策日志中查看完整推理过程。',

    faqDecisionFrequency: 'AI 多久做一次决策？',
    faqDecisionFrequencyAnswer:
      '每个交易员可单独配置，默认 15 分钟。过于频繁会造成来回开平和手续费损耗；15-30 分钟能给信号足够时间兑现。执行层也会阻止过早的小亏小赚平仓和快速重新进场。',

    faqNoTradesExecuting: '为什么交易员不执行任何交易？',
    faqNoTradesExecutingAnswer:
      '常见原因：1）AI 决定等待（查看决策日志了解原因）；2）合约账户余额不足；3）达到最大持仓数限制（默认：3）；4）交易所 API 问题（检查错误信息）；5）策略约束太严格。查看仪表板 → 决策日志了解每个周期的 AI 推理详情。',

    faqOnlyShortPositions: '为什么 AI 只开空单？',
    faqOnlyShortPositionsAnswer:
      '通常是因为币安持仓模式问题。解决方案：在币安合约 → 偏好设置 → 持仓模式中切换为双向持仓。必须先平掉所有持仓。切换后，AI 可以独立开多单和空单。',

    faqLeverageSettings: '杠杆设置如何工作？',
    faqLeverageSettingsAnswer:
      '杠杆在策略 → 风控中设置：BTC/ETH 杠杆（通常 5-20 倍）和山寨币杠杆（通常 3-10 倍）。更高杠杆 = 更高风险和潜在收益。子账户可能有限制（如币安子账户限制 5 倍）。AI 下单时会遵守这些限制。',

    faqStopLossTakeProfit: 'NOFX 支持止损止盈吗？',
    faqStopLossTakeProfitAnswer:
      'AI 可以在决策中建议止损/止盈价位，但这是基于指导而非交易所硬编码订单。AI 每个周期监控持仓，可能根据盈亏决定平仓。如需保证止损，可以手动在交易所设置订单，或调整策略提示词使其更保守。',

    faqMultipleTraders: '可以运行多个交易员吗？',
    faqMultipleTradersAnswer:
      '可以！NOFX 支持运行 20+ 个并发交易员。每个交易员可以有不同的：AI 模型、交易所账户、策略、决策间隔。用于 A/B 测试策略、比较 AI 模型或跨交易所分散风险。在竞赛页面监控所有交易员。',

    faqAICosts: 'AI API 调用费用是多少？',
    faqAICostsAnswer:
      '每个交易员每天大约费用（15 分钟间隔）：DeepSeek：$0.03-0.20；Qwen：$0.07-0.30；OpenAI：$0.70-2；Claude：$0.30-1。费用取决于提示词长度和响应 token 数。DeepSeek 性价比最高。更长的决策间隔可降低费用。',

    // ===== 技术问题 =====
    faqPortInUse: '端口 8080 或 3000 被占用',
    faqPortInUseAnswer:
      '查看占用端口的进程：macOS/Linux 用 "lsof -i :8080"，Windows 用 "netstat -ano | findstr 8080"。终止进程或在 .env 中修改端口：NOFX_BACKEND_PORT=8081、NOFX_FRONTEND_PORT=3001。然后 "docker compose down && docker compose up -d" 重启。',

    faqFrontendNotLoading: '前端一直显示"加载中..."',
    faqFrontendNotLoadingAnswer:
      '后端可能未运行或无法访问。检查：1）"curl http://127.0.0.1:8080/api/health" 应返回 "status":"ok"；2）"docker compose ps" 验证容器运行中；3）查看后端日志："docker compose logs nofx-backend"；4）确保防火墙允许 8080 端口。',

    faqDatabaseLocked: '数据库锁定错误',
    faqDatabaseLockedAnswer:
      '多个进程同时访问 SQLite 导致。解决方案：1）停止所有进程："docker compose down" 或 "pkill nofx"；2）如有锁文件删除："rm -f data/data.db-wal data/data.db-shm"；3）重启："docker compose up -d"。只能有一个后端实例访问数据库。',

    faqTALibNotFound: '构建时找不到 TA-Lib',
    faqTALibNotFoundAnswer:
      'TA-Lib 是技术指标所需。安装：macOS："brew install ta-lib"；Ubuntu/Debian："sudo apt-get install libta-lib0-dev"；CentOS："yum install ta-lib-devel"。安装后重新构建："go build -o nofx"。Docker 镜像已预装 TA-Lib。',

    faqAIAPITimeout: 'AI API 超时或连接被拒绝',
    faqAIAPITimeoutAnswer:
      '检查：1）API 密钥有效（用 curl 测试）；2）网络能访问 API 端点（ping/curl）；3）API 提供商未宕机（查看状态页）；4）VPN/防火墙未阻止；5）未超过速率限制。默认超时 120 秒。',

    faqBinancePositionMode: '币安错误代码 -4061（持仓模式）',
    faqBinancePositionModeAnswer:
      '错误："Order\'s position side does not match user\'s setting"。您处于单向持仓模式，但 NOFX 需要双向持仓模式。修复：1）先平掉所有持仓；2）币安合约 → 设置（齿轮图标）→ 偏好设置 → 持仓模式 → 切换为"双向持仓"；3）重启交易员。',

    faqBalanceShowsZero: '账户余额显示 0',
    faqBalanceShowsZeroAnswer:
      '资金可能在现货钱包而非合约钱包。解决方案：1）在币安进入钱包 → 合约 → 划转；2）将 USDT 从现货划转到合约；3）刷新 NOFX 仪表板。也检查：资金未被理财/质押产品锁定。',

    faqDockerPullFailed: 'Docker 镜像拉取失败或缓慢',
    faqDockerPullFailedAnswer:
      'Docker Hub 在某些地区可能较慢。解决方案：1）在 /etc/docker/daemon.json 配置 Docker 镜像："registry-mirrors": ["https://mirror.gcr.io"]；2）重启 Docker；3）重试拉取。或使用 GitHub Container Registry（ghcr.io）在您的地区可能连接更好。',

    // ===== 安全相关 =====
    faqAPIKeyStorage: 'API 密钥如何存储？',
    faqAPIKeyStorageAnswer:
      'API 密钥使用 AES-256-GCM 加密后存储在本地 SQLite 数据库中。加密密钥（DATA_ENCRYPTION_KEY）存储在您的 .env 文件中。密钥仅在 API 调用需要时在内存中解密。切勿分享您的 data.db 或 .env 文件。',

    faqEncryptionDetails: 'NOFX 使用什么加密？',
    faqEncryptionDetailsAnswer:
      'NOFX 使用多层加密：1）AES-256-GCM 用于数据库存储（API 密钥、密钥）；2）RSA-2048 用于可选的传输加密（浏览器到服务器）；3）JWT 用于认证令牌。密钥在安装时生成。HTTPS 环境启用 TRANSPORT_ENCRYPTION=true。',

    faqSecurityBestPractices: '安全最佳实践是什么？',
    faqSecurityBestPracticesAnswer:
      '建议：1）使用带 IP 白名单和最小权限（仅合约交易）的交易所 API 密钥；2）为 NOFX 使用专用子账户；3）远程部署启用 TRANSPORT_ENCRYPTION；4）切勿分享 .env 或 data.db 文件；5）使用有效证书的 HTTPS；6）定期轮换 API 密钥；7）监控账户活动。',

    faqCanNOFXStealFunds: 'NOFX 会盗取我的资金吗？',
    faqCanNOFXStealFundsAnswer:
      'NOFX 是开源的（AGPL-3.0 许可）- 您可以在 GitHub 审计所有代码。API 密钥存储在您的机器本地，从不发送到外部服务器。NOFX 只有您通过 API 密钥授予的权限。为最大安全：使用仅交易权限（无提现）的 API 密钥，启用 IP 白名单，使用专用子账户。',

    // ===== 功能介绍 =====
    faqStrategyStudio: '什么是策略工作室？',
    faqStrategyStudioAnswer:
      '策略工作室是可视化策略构建器，您可以配置：1）币种来源 - 交易哪些加密货币（静态列表、AI500 热门币、OI 排行）；2）技术指标 - EMA、MACD、RSI、ATR、成交量、持仓量、资金费率；3）风控 - 杠杆限制、仓位大小、保证金上限；4）自定义提示词 - AI 的特定指令。无需编程。',

    faqCompetitionMode: '什么是竞赛模式？',
    faqCompetitionModeAnswer:
      '竞赛页面显示所有交易员的实时排行榜。比较：ROI、盈亏、夏普比率、胜率、交易次数。用于 A/B 测试不同 AI 模型、策略或配置。交易员可标记为"在竞赛中显示"以出现在排行榜上。',

    faqChainOfThought: '什么是思维链（CoT）？',
    faqChainOfThoughtAnswer:
      '思维链是 AI 的推理过程，可在决策日志中查看。AI 分 4 步解释思考：1）当前持仓分析；2）账户风险评估；3）市场机会评估；4）最终决策理由。这种透明度帮助您理解 AI 为什么做出每个决策，有助于改进策略。',

    // ===== AI 模型 =====
    faqWhichAIModelBest: '应该使用哪个 AI 模型？',
    faqWhichAIModelBestAnswer:
      '推荐：DeepSeek 性价比最高（每天 $0.10-0.50）。备选：OpenAI 推理能力最强但贵（每天 $2-5）；Claude 适合细致分析；Qwen 价格有竞争力。您可以运行多个交易员使用不同模型进行比较。查看竞赛页面看哪个对您的策略表现最好。',

    faqCustomAIAPI: '可以使用自定义 AI API 吗？',
    faqCustomAIAPIAnswer:
      '可以！NOFX 支持任何 OpenAI 兼容的 API。在配置 → AI 模型 → 自定义 API 中：1）输入 API 端点 URL（如 https://your-api.com/v1）；2）输入 API 密钥；3）指定模型名称。适用于自托管模型、替代提供商或通过第三方代理的 Claude。',

    faqAIHallucinations: 'AI 幻觉问题怎么办？',
    faqAIHallucinationsAnswer:
      'AI 模型有时会产生不正确或虚构的信息（"幻觉"）。NOFX 通过以下方式缓解：1）提供带真实市场数据的结构化提示词；2）强制 JSON 输出格式；3）执行前验证订单。但 AI 交易是实验性的 - 始终监控决策，不要完全依赖 AI 判断。',

    faqCompareAIModels: '如何比较不同 AI 模型？',
    faqCompareAIModelsAnswer:
      '创建多个交易员，使用不同 AI 模型但相同策略/交易所。同时运行并在竞赛页面比较。关注指标：ROI、胜率、夏普比率、最大回撤。',

    // ===== 参与贡献 =====
    faqHowToContribute: '如何为 NOFX 做贡献？',
    faqHowToContributeAnswer:
      'NOFX 是开源项目，欢迎贡献！贡献方式：1）代码 - 修复 bug、添加功能（查看 GitHub Issues）；2）文档 - 改进指南、翻译；3）Bug 报告 - 详细报告问题；4）功能建议 - 提出改进意见。从标记为"good first issue"的问题开始。所有贡献者可能获得空投奖励。',

    faqPRGuidelines: 'PR 指南是什么？',
    faqPRGuidelinesAnswer:
      'PR 流程：1）Fork 仓库到您的账户；2）从 dev 创建功能分支："git checkout -b feat/your-feature"；3）修改代码，运行 lint："npm --prefix web run lint"；4）使用 Conventional Commits 格式提交；5）推送并创建 PR 到 NoFxAiOS/nofx:dev；6）关联相关 issue（Closes #123）；7）等待审核。保持 PR 小而聚焦。',

    faqBountyProgram: '有赏金计划吗？',
    faqBountyProgramAnswer:
      '有！贡献者根据贡献获得空投奖励：代码提交（权重最高）、bug 修复、功能建议、文档。带"bounty"标签的 issue 有现金奖励。完成工作后提交 Bounty Claim。查看 CONTRIBUTING.md 了解奖励结构详情。',

    faqReportBugs: '如何报告 bug？',
    faqReportBugsAnswer:
      'Bug 报告：在 GitHub 开 Issue，包含：1）问题清晰描述；2）复现步骤；3）预期 vs 实际行为；4）系统信息（OS、Docker 版本、浏览器）；5）相关日志。安全漏洞：不要开公开 issue - 请在 Twitter 私信 @Web3Tinkle。',

    // Web Crypto Environment Check
    environmentCheck: {
      button: '一键检测环境',
      checking: '正在检测...',
      description: '系统将自动检测当前浏览器是否允许使用 Web Crypto。',
      secureTitle: '环境安全，已启用 Web Crypto',
      secureDesc: '页面处于安全上下文，可继续输入敏感信息并使用加密传输。',
      insecureTitle: '检测到非安全环境',
      insecureDesc:
        '当前访问未通过 HTTPS 或可信 localhost，浏览器会阻止 Web Crypto 调用。',
      tipsTitle: '修改建议：',
      tipHTTPS:
        '通过 HTTPS 访问（即使是 IP 也需证书），或部署到支持 TLS 的域名。',
      tipLocalhost: '开发阶段请使用 http://localhost 或 127.0.0.1。',
      tipIframe:
        '避免把应用嵌入在不安全的 HTTP iframe 或会降级协议的反向代理中。',
      unsupportedTitle: '浏览器未提供 Web Crypto',
      unsupportedDesc:
        '请通过 HTTPS 或本机 localhost 访问 NOFX，并避免嵌入不安全 iframe/反向代理，以符合浏览器的 Web Crypto 规则。',
      summary: '当前来源：{origin} · 协议：{protocol}',
      disabledTitle: '传输加密已禁用',
      disabledDesc:
        '服务端传输加密已关闭，API 密钥将以明文传输。如需增强安全性，请设置 TRANSPORT_ENCRYPTION=true。',
    },

    environmentSteps: {
      checkTitle: '1. 环境检测',
      selectTitle: '2. 选择交易所',
    },

    // Two-Stage Key Modal
    twoStageKey: {
      title: '两阶段私钥输入',
      stage1Description: '请输入私钥的前 {length} 位字符',
      stage2Description: '请输入私钥的后 {length} 位字符',
      stage1InputLabel: '第一部分',
      stage2InputLabel: '第二部分',
      characters: '位字符',
      processing: '处理中...',
      nextButton: '下一步',
      cancelButton: '取消',
      backButton: '返回',
      encryptButton: '加密并提交',
      obfuscationCopied: '混淆数据已复制到剪贴板',
      obfuscationInstruction: '请粘贴其他内容清空剪贴板，然后继续',
      obfuscationManual: '需要手动混淆',
    },

    // Error Messages
    errors: {
      privatekeyIncomplete: '请输入至少 {expected} 位字符',
      privatekeyInvalidFormat: '私钥格式无效（应为64位十六进制字符）',
      privatekeyObfuscationFailed: '剪贴板混淆失败',
    },

    // Position History
    positionHistory: {
      title: '历史仓位',
      loading: '加载历史仓位...',
      noHistory: '暂无历史仓位',
      noHistoryDesc: '平仓后的仓位记录将显示在此处',
      showingPositions: '显示 {count} / {total} 条记录',
      totalPnL: '总盈亏',
      // Stats
      totalTrades: '总交易次数',
      winLoss: '盈利: {win} / 亏损: {loss}',
      winRate: '胜率',
      profitFactor: '盈利因子',
      profitFactorDesc: '总盈利 / 总亏损',
      plRatio: '盈亏比',
      plRatioDesc: '平均盈利 / 平均亏损',
      sharpeRatio: '夏普比率',
      sharpeRatioDesc: '风险调整收益',
      maxDrawdown: '最大回撤',
      avgWin: '平均盈利',
      avgLoss: '平均亏损',
      netPnL: '净盈亏',
      netPnLDesc: '扣除手续费后',
      fee: '手续费',
      // Direction Stats
      trades: '交易次数',
      avgPnL: '平均盈亏',
      // Symbol Performance
      symbolPerformance: '品种表现',
      // Filters
      symbol: '交易对',
      allSymbols: '全部交易对',
      side: '方向',
      all: '全部',
      sort: '排序',
      latestFirst: '最新优先',
      oldestFirst: '最早优先',
      highestPnL: '盈利最高',
      lowestPnL: '亏损最多',
      // Table Headers
      entry: '开仓价',
      exit: '平仓价',
      qty: '数量',
      value: '仓位价值',
      lev: '杠杆',
      pnl: '盈亏',
      duration: '持仓时长',
      closedAt: '平仓时间',
    },

    // Data Page
    dataCenter: '数据中心',

    // Strategy Market Page
    strategyMarket: {
      title: '策略市场',
      subtitle: 'STRATEGY MARKETPLACE',
      description: '发现、学习并复用社区精英交易员的策略配置',
      search: '搜索参数...',
      all: '全部协议',
      popular: '热门配置',
      recent: '最新提交',
      myStrategies: '我的库',
      noStrategies: '无信号',
      noStrategiesDesc: '当前频段未检测到策略信号',
      author: 'OPERATOR',
      createdAt: 'TIMESTAMP',
      viewConfig: 'DECRYPT CONFIG',
      hideConfig: 'ENCRYPT',
      copyConfig: 'CLONE CONFIG',
      copied: 'COPIED',
      configHidden: 'ENCRYPTED',
      configHiddenDesc: '配置参数已加密',
      indicators: 'INDICATORS',
      maxPositions: 'POS_LIMIT',
      maxLeverage: 'LEV_MAX',
      shareYours: 'UPLOAD_STRATEGY',
      makePublic: 'PUBLISH',
      loading: 'INITIALIZING...',
    },

    // Strategy Studio Page
    strategyStudio: {
      title: '策略工作室',
      subtitle: '可视化配置和测试交易策略',
      strategies: '策略',
      newStrategy: '新建',
      strategyType: '策略类型',
      aiTrading: 'AI 智能交易',
      aiTradingDesc: 'AI 分析市场并自主决策买卖',
      gridTrading: 'AI 网格交易',
      gridTradingDesc: 'AI 控制网格策略，在震荡市场获利',
      gridConfig: '网格配置',
      coinSource: '币种来源',
      indicators: '技术指标',
      riskControl: '风控参数',
      promptSections: 'Prompt 编辑',
      customPrompt: '附加提示',
      save: '保存',
      saving: '保存中...',
      activate: '激活',
      active: '激活中',
      default: '默认',
      promptPreview: 'Prompt 预览',
      aiTestRun: 'AI 测试',
      systemPrompt: 'System Prompt',
      userPrompt: 'User Prompt',
      loadPrompt: '生成 Prompt',
      refreshPrompt: '刷新',
      promptVariant: '风格',
      balanced: '平衡',
      aggressive: '激进',
      conservative: '保守',
      selectModel: '选择 AI 模型',
      runTest: '运行 AI 测试',
      running: '运行中...',
      aiOutput: 'AI 输出',
      reasoning: '思维链',
      decisions: '决策',
      duration: '耗时',
      noModel: '请先配置 AI 模型',
      testNote: '使用真实 AI 模型测试，不执行交易',
      publishSettings: '发布设置',
      newStrategyName: '新策略',
      strategyCopy: '策略副本',
      strategyDeleted: '策略已删除',
      cannotDeleteActiveStrategy: '激活中的策略不能删除',
      confirmDeleteStrategy: '确定删除此策略？',
      confirmDelete: '确认删除',
      delete: '删除',
      cancel: '取消',
      strategyExported: '策略已导出',
      invalidStrategyFile: '无效的策略文件',
      imported: '导入',
      strategyImported: '策略已导入',
      strategySaved: '策略已保存',
      importStrategy: '导入策略',
      newStrategyTooltip: '新建策略',
      export: '导出',
      duplicate: '复制',
      deleteTooltip: '删除',
      public: '公开',
      addDescription: '添加策略简介...',
      unsaved: '未保存',
      discardChanges: '撤销',
      selectOrCreate: '选择或创建策略',
      customPromptDesc:
        '附加在 System Prompt 末尾的额外提示，用于补充个性化交易风格',
      customPromptPlaceholder: '输入自定义提示词...',
      generatePromptPreview: '点击生成 Prompt 预览',
      runAiTestHint: '点击运行 AI 测试',
      tokenEstimate: 'Token 预估',
      tokenExceedWarning: 'Token 估算超过 128K，部分模型请求可能失败',
      tokenEstimating: '预估中...',
      tokenTooltip: '基于 200K 上下文计算',
    },

    // Metric Tooltip
    metricTooltip: {
      formula: '计算公式',
    },

    // Login Required Overlay
    loginRequired: {
      title: '系统访问受限',
      accessDenied: '访问被拒绝',
      subtitleWithFeature: '访问「{featureName}」需要更高权限',
      subtitleDefault: '此模块需要授权访问',
      description:
        '初始化身份验证协议以解锁完整系统功能：AI 交易员配置、策略市场数据流。',
      benefit1: 'AI 交易员控制权',
      benefit2: '高频策略核心市场',
      benefit4: '全系统数据可视化',
      loginButton: '执行登录指令',
      registerButton: '注册新用户 ID',
      abort: '中止操作',
    },

    // Advanced Chart
    advancedChart: {
      updating: '更新中...',
      indicators: '指标',
      orderMarkers: '订单标记',
      technicalIndicators: '技术指标',
      clickToToggle: '点击选择需要显示的指标',
      shares: '股',
      units: '个',
    },

    // Chart With Orders
    chartWithOrders: {
      failedToLoad: '加载图表数据失败',
      loading: '加载中...',
      buy: 'BUY (买入)',
      sell: 'SELL (卖出)',
    },

    // Comparison Chart
    comparisonChart: {
      '1d': '1天',
      '3d': '3天',
      '7d': '7天',
      '30d': '30天',
      all: '全部',
    },

    traderDashboard: {
      connectionFailed: '无法连接到服务器',
      connectionFailedDesc: '请确认后端服务已启动。',
      retry: '重试',
      confirmClosePosition: '确定要平仓 {symbol} {side} 吗？',
      confirmClose: '确认平仓',
      confirm: '确认',
      cancel: '取消',
      positionClosed: '平仓成功',
      closeFailed: '平仓失败',
      hideAddress: '隐藏地址',
      showFullAddress: '显示完整地址',
      copyAddress: '复制地址',
      noAddressConfigured: '未配置地址',
      action: '操作',
      entry: '入场价',
      mark: '标记价',
      qty: '数量',
      value: '价值',
      lev: '杠杆',
      uPnL: '未实现盈亏',
      liq: '强平价',
      closePosition: '平仓',
      close: '平仓',
      showingPositions: '显示 {shown} / {total} 个持仓',
      perPage: '每页',
      accountFetchFailed: 'DATA_FETCH::FAILED — 账户数据请求失败，请检查连接',
      positionsFetchFailed: '持仓数据请求失败',
      decisionsFetchFailed: '决策记录请求失败',
    },

    aiTradersToast: {
      creating: '正在创建…',
      created: '创建成功',
      createFailed: '创建失败',
      saving: '正在保存…',
      saved: '保存成功',
      saveFailed: '保存失败',
      deleting: '正在删除…',
      deleted: '删除成功',
      deleteFailed: '删除失败',
      stopping: '正在停止…',
      stopped: '已停止',
      stopFailed: '停止失败',
      starting: '正在启动…',
      started: '已启动',
      startFailed: '启动失败',
      updating: '正在更新…',
      updatingConfig: '正在更新配置…',
      configUpdated: '配置已更新',
      configUpdateFailed: '更新配置失败',
      showInCompetition: '已在竞技场显示',
      hideInCompetition: '已在竞技场隐藏',
      updateFailed: '更新失败',
      updatingModelConfig: '正在更新模型配置…',
      modelConfigUpdated: '模型配置已更新',
      modelConfigUpdateFailed: '更新模型配置失败',
      deletingExchange: '正在删除交易所账户…',
      exchangeDeleted: '交易所账户已删除',
      exchangeDeleteFailed: '删除交易所账户失败',
      updatingExchangeConfig: '正在更新交易所配置…',
      exchangeConfigUpdated: '交易所配置已更新',
      exchangeConfigUpdateFailed: '更新交易所配置失败',
      creatingExchange: '正在创建交易所账户…',
      exchangeCreated: '交易所账户已创建',
      exchangeCreateFailed: '创建交易所账户失败',
    },

    modelConfig: {
      selectModel: '选择模型',
      configure: '配置',
      configureApi: '配置 API',
      configureWallet: '配置钱包',
      chooseProvider: '选择 AI 模型提供商',
      claw402EntryDesc:
        '默认推荐走这条路。直接用 Base USDC 按次付费，不需要自己管理 API Key。',
      otherApiEntry: '其他 API 模型',
      otherApiEntryDesc:
        '如果你已经有自己的 OpenAI、Claude、Gemini、DeepSeek 等 API Key，再从这里进入。',
      payPerCall: 'USDC 按次付费 · 支持全部 AI 模型 · 无需 API Key',
      recommended: '推荐',
      allModelsClaw: '用 USDC 按次付费，支持所有主流 AI 模型',
      selectAiModel: '① 选择 AI 模型',
      allModelsUnified: '配置任意受支持的模型，创建后可随时切换',
      setupWallet: '② 设置钱包',
      walletInfo: '💡 Claw402 使用 Base 链上的 USDC 付费，你需要一个 EVM 钱包',
      exportKey: '可以用 MetaMask、Rabby 等钱包导出私钥',
      dedicatedWallet: '建议新建一个专用钱包，充入少量 USDC 即可',
      walletPrivateKey: '钱包私钥（Base 链 EVM）',
      privateKeyNote:
        '私钥仅在本地签名使用，不会上传或发送交易。无需 ETH，无 Gas 费用。',
      howToFundUsdc: '如何充值 USDC',
      fundStep1: '从交易所（Binance / OKX / Coinbase）提 USDC 到你的钱包地址',
      fundStep2: '选择 Base 网络（手续费极低）',
      fundStep3: '充入 $5-10 USDC 即可使用很长时间（约 $0.003/次调用）',
      back: '返回',
      startTrading: '开始交易',
      modelsConfigured: '带金色标记的模型已配置',
      getStarted: '开始使用',
      getApiKey: '获取 API Key',
      walletPrivateKeyLabel: '钱包私钥 *',
      selectModelLabel: '选择模型',
      validating: '验证中...',
      walletAddress: '钱包地址',
      usdcBalance: 'Base USDC 余额',
      claw402Connected: 'claw402 已连接',
      claw402Unreachable: 'claw402 不可达',
      depositUsdc: '请往此地址充值 Base 链 USDC',
      invalidKeyPrefix: '请在开头加 0x',
      invalidKeyLength: '应为 66 个字符，当前',
      invalidKeyChars: '包含非法字符',
      testConnection: '测试连接',
      testingConnection: '测试中...',
    },

    exchangeConfig: {
      selectExchange: '选择交易所',
      configure: '配置账户',
      chooseExchange: '选择您的交易所',
      centralizedExchanges: '中心化交易所 (CEX)',
      decentralizedExchanges: '去中心化交易所 (DEX)',
      register: '注册',
      bonus: '优惠',
      accountName: '账户名称',
      accountNamePlaceholder: '例如：主账户、套利账户',
      pleaseEnterAccountName: '请输入账户名称',
      useBinanceFuturesApi: '币安用户必读：使用「现货与合约交易」API',
      viewTutorial: '查看官方教程',
      lighterApiKeySetup: 'Lighter API Key 配置',
      lighterApiKeyDesc: '请在 Lighter 网站生成 API Key',
      apiKeyIndex: 'API Key 索引',
      apiKeyIndexTooltip: 'API Key 索引从0开始',
      back: '返回',
    },

    telegram: {
      botSetup: 'Telegram Bot 配置',
      createBot: '创建 Bot',
      bindAccount: '绑定账号',
      done: '完成',
      invalidTokenFormat: 'Bot Token 格式不正确，应为 "数字:字母数字串"',
      tokenSaved: 'Bot Token 已保存，等待绑定',
      saveFailed: '保存失败，请检查 Token 是否正确',
      unbound: '已解绑 Telegram 账号',
      unbindFailed: '解绑失败',
      step1Title: '第一步：在 Telegram 创建你的 Bot',
      step1Desc1: '打开 Telegram，搜索',
      step1Desc2: '发送',
      step1Desc2Suffix: '命令',
      step1Desc3: '按提示输入 Bot 名称和用户名',
      step1Desc4: 'BotFather 会返回一个 Token，复制它',
      openBotFather: '打开 @BotFather',
      pasteToken: '粘贴 Bot Token',
      tokenFormat: 'Token 格式：数字:字母数字串，如 123456789:ABCdef...',
      selectAiModel: '选择 AI 模型（可选）',
      noEnabledModels: '暂无启用的模型，请先在「AI 模型」中配置',
      autoSelect: '— 自动选择（推荐）',
      autoUseEnabled: '不选则自动使用已启用的模型',
      savingToken: '保存中...',
      saveAndContinue: '保存并继续',
      step2Title: '第二步：向你的 Bot 发送 /start',
      step2Desc1: '在 Telegram 中搜索你刚创建的 Bot',
      step2Desc2: '点击 Start 或发送',
      step2Desc3: 'Bot 会自动绑定到你的账号',
      currentToken: '当前 Token',
      waitingForStart: '⏳ 等待你发送 /start... 发送后刷新页面查看状态',
      reconfigureToken: '重新配置 Token',
      bindSuccess: '绑定成功！',
      noStartReceived: '尚未收到 /start，请先向 Bot 发送 /start',
      checkFailed: '检查失败',
      checkStatus: '检查绑定状态',
      botActive: 'Telegram Bot 已绑定！',
      botActiveDesc: '你现在可以通过 Telegram 用自然语言控制交易系统',
      supportedCommands: '支持的命令',
      cmdHelp: '查看所有命令',
      cmdStatus: '查看交易员状态',
      cmdNaturalLang: '自然语言查询',
      cmdStartStop: '启动/停止交易员',
      cmdControl: '自然语言控制',
      cmdPositions: '查看持仓',
      cmdPositionsDesc: '实时持仓查询',
      cmdStrategy: '配置策略',
      cmdStrategyDesc: '修改交易策略',
      unbinding: '解绑中...',
      unbindAccount: '解绑账号',
      aiModelLabel: 'AI 模型（用于自然语言解析）',
      aiModelAutoSelect: '— 自动选择',
      modelUpdated: 'AI 模型已更新',
      modelUpdateFailed: '更新失败',
      save: '保存',
      loading: '加载中...',
    },

    traderConfigView: {
      traderConfig: '交易员配置',
      configInfo: '{name} 的配置信息',
      running: '运行中',
      stopped: '已停止',
      basicInfo: '基础信息',
      traderName: '交易员名称',
      aiModel: 'AI模型',
      exchange: '交易所',
      initialBalance: '初始余额',
      marginMode: '保证金模式',
      crossMargin: '全仓',
      isolatedMargin: '逐仓',
      scanInterval: '{minutes} 分钟',
      scanIntervalLabel: '扫描间隔',
      strategyUsed: '使用策略',
      strategyName: '策略名称',
      close: '关闭',
      yes: '是',
      no: '否',
    },
} satisfies Translation

export default zh
