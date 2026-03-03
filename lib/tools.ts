export interface Tool {
  id: string
  name: string
  slug: string
  repo: string
  description: string
  longDescription: string
  category: string
  stars: number
  todayStars: number
  language: string
  icon: string
  badge?: 'hot' | 'new' | 'affiliate'
  url: string
  affiliateUrl?: string
  tags: string[]
  pricing?: 'free' | 'freemium' | 'paid'
  pricingDetail?: string       // e.g. "免费 / Pro $20/月"
  rating?: number              // 1-5
  alternatives?: string[]      // slugs of similar tools
  pros?: string[]
  cons?: string[]
}

export const CATEGORIES = [
  'Agent / 自动化',
  'AI 写作',
  'AI 编程',
  'AI 搜索',
  '图像生成',
  '视频生成',
  '效率工具',
  '本地模型',
] as const

export const openSourceTools: Tool[] = [
  // Agent / 自动化
  {
    id: '1', name: 'Dify', slug: 'dify', repo: 'langgenius/dify',
    description: '生产级 AI 应用开发平台，可视化编排 Agent 工作流，支持 RAG、工具调用、多模型。',
    longDescription: 'Dify 是面向企业的 AI 应用开发平台，提供可视化的 Workflow 编排、RAG 知识库、Agent 构建、模型管理等能力。支持接入 OpenAI、Claude、本地模型等数十种 LLM，已有数万家企业在生产环境使用。',
    category: 'Agent / 自动化', stars: 131007, todayStars: 0, language: 'TypeScript',
    icon: '◇', badge: 'hot', url: 'https://dify.ai', pricing: 'freemium',
    tags: ['Agent', 'RAG', '工作流', '企业级'],
    pricingDetail: '免费自托管 / Cloud 版 $59/月起',
    pros: ['可视化工作流，无需写代码', '支持 RAG 知识库', '企业级功能完整'],
    cons: ['自托管需要一定运维能力', '复杂流程学习曲线较陡'],
    alternatives: ['langchain', 'n8n', 'autogpt'],
  },
  {
    id: '2', name: 'AutoGPT', slug: 'autogpt', repo: 'Significant-Gravitas/AutoGPT',
    description: '最早的自主 AI Agent 框架，让 GPT-4 自主分解任务、调用工具、完成复杂目标。',
    longDescription: 'AutoGPT 是最具影响力的自主 AI Agent 项目，能让 GPT-4 自主规划、分解任务、调用搜索/代码执行等工具，无需人工干预完成复杂目标。开创了 AI Agent 这一赛道，是理解 Agent 架构的必读项目。',
    category: 'Agent / 自动化', stars: 172000, todayStars: 0, language: 'Python',
    icon: '◆', badge: 'hot', url: 'https://github.com/Significant-Gravitas/AutoGPT', pricing: 'free',
    tags: ['Agent', '自主AI', 'GPT-4', '任务规划'],
    pricingDetail: '完全免费开源',
    pros: ['开创 Agent 赛道，社区活跃', '支持多种工具调用', '完全开源可定制'],
    cons: ['稳定性一般，任务容易跑偏', '需要较多 API 费用'],
    alternatives: ['dify', 'langchain'],
  },
  {
    id: '3', name: 'n8n', slug: 'n8n', repo: 'n8n-io/n8n',
    description: '可自托管的工作流自动化平台，支持 400+ 集成，内置 AI 节点，比 Zapier 更灵活。',
    longDescription: 'n8n 是开源的工作流自动化工具，支持 400+ 服务集成，可完全自托管保护数据隐私。内置 AI Agent 节点，可将 LLM 接入任意自动化流程。相比 Zapier 更灵活，支持复杂逻辑和代码节点，是开发者首选的自动化平台。',
    category: 'Agent / 自动化', stars: 98000, todayStars: 0, language: 'TypeScript',
    icon: '○', badge: 'hot', url: 'https://n8n.io', pricing: 'freemium',
    tags: ['工作流', '自动化', '自托管', '集成'],
    pricingDetail: '自托管免费 / Cloud 版 €20/月起',
    pros: ['400+ 集成，覆盖面广', '可完全自托管', '支持 AI 节点'],
    cons: ['免费版有流量限制', '复杂流程调试较麻烦'],
    alternatives: ['dify'],
  },
  {
    id: '4', name: 'LangChain', slug: 'langchain', repo: 'langchain-ai/langchain',
    description: '构建 LLM 应用的标准框架，提供链式调用、记忆、工具调用、RAG 等核心能力。',
    longDescription: 'LangChain 是构建大语言模型应用的最流行框架。提供 Chain、Agent、Memory、RAG 等核心抽象，支持接入所有主流 LLM 和向量数据库。拥有庞大的生态系统和社区，是 AI 应用开发的事实标准。',
    category: 'Agent / 自动化', stars: 102000, todayStars: 0, language: 'Python',
    icon: '◉', badge: 'hot', url: 'https://langchain.com', pricing: 'free',
    tags: ['LLM', 'RAG', 'Chain', '框架'],
    pricingDetail: '完全免费开源',
    pros: ['生态最完整，文档丰富', '支持所有主流 LLM', '社区插件多'],
    cons: ['抽象层较重，调试困难', '版本迭代快，API 变化频繁'],
    alternatives: ['dify', 'autogpt'],
  },
  {
    id: '5', name: 'ChatGPT on WeChat', slug: 'chatgpt-on-wechat', repo: 'zhayujie/chatgpt-on-wechat',
    description: '基于大模型的微信 AI 助手，支持飞书、钉钉、企业微信，可接入多种模型。',
    longDescription: '将 ChatGPT、Claude、文心一言等大模型接入微信、企业微信、飞书、钉钉等国内主流 IM 平台。支持多轮对话、角色扮演、图片生成、插件扩展，是国内最流行的 AI 机器人框架之一。',
    category: 'Agent / 自动化', stars: 41780, todayStars: 0, language: 'Python',
    icon: '◎', url: 'https://github.com/zhayujie/chatgpt-on-wechat', pricing: 'free',
    tags: ['微信', '机器人', '企业微信', '飞书'],
    pricingDetail: '完全免费开源，需自备 API Key',
    pros: ['国内平台支持最全', '部署简单', '社区活跃'],
    cons: ['依赖第三方 API，有成本', '功能扩展需要改代码'],
    alternatives: ['cherry-studio'],
  },

  // AI 写作
  {
    id: '6', name: 'Prompts.chat', slug: 'prompts-chat', repo: 'f/prompts.chat',
    description: '精选 ChatGPT Prompt 合集，覆盖写作、编程、分析等场景，社区持续贡献。',
    longDescription: '全网最受欢迎的 ChatGPT Prompt 合集，收录了数百个经过验证的高质量 Prompt，涵盖写作助手、代码审查、数据分析、角色扮演等场景。社区驱动，持续更新，是提升 AI 使用效率的必备资源。',
    category: 'AI 写作', stars: 149816, todayStars: 0, language: 'HTML',
    icon: '◈', badge: 'hot', url: 'https://prompts.chat', pricing: 'free',
    tags: ['Prompt', 'ChatGPT', '提示词', '效率'],
    pricingDetail: '完全免费',
    pros: ['Prompt 质量高，经过社区验证', '分类清晰', '持续更新'],
    cons: ['以英文 Prompt 为主', '无法直接在平台使用'],
    alternatives: ['open-webui'],
  },
  {
    id: '7', name: 'Open WebUI', slug: 'open-webui', repo: 'open-webui/open-webui',
    description: '功能完整的本地 AI 聊天界面，支持 Ollama 和 OpenAI API，可自托管部署。',
    longDescription: 'Open WebUI 是最受欢迎的本地 AI 聊天界面，支持 Ollama 本地模型和 OpenAI API。提供对话历史、多模型切换、文件上传、RAG 知识库、插件系统等完整功能，界面美观，可完全自托管。',
    category: 'AI 写作', stars: 89000, todayStars: 0, language: 'Python',
    icon: '◐', badge: 'hot', url: 'https://openwebui.com', pricing: 'free',
    tags: ['聊天界面', 'Ollama', '自托管', 'RAG'],
    pricingDetail: '完全免费开源',
    pros: ['界面美观，功能完整', '支持 Ollama 和 OpenAI', '插件系统丰富'],
    cons: ['需要自己部署', '移动端体验一般'],
    alternatives: ['cherry-studio', 'ollama'],
  },

  // AI 编程
  {
    id: '8', name: 'Continue', slug: 'continue', repo: 'continuedev/continue',
    description: '开源 AI 编程助手，支持 VS Code 和 JetBrains，可接入任意本地或云端模型。',
    longDescription: 'Continue 是最受欢迎的开源 AI 编程助手，支持 VS Code 和 JetBrains IDE。可接入 GPT-4、Claude、本地 Ollama 模型等，提供代码补全、对话式编程、代码解释、重构建议等功能，完全可定制。',
    category: 'AI 编程', stars: 23000, todayStars: 0, language: 'TypeScript',
    icon: '◑', badge: 'new', url: 'https://continue.dev', pricing: 'free',
    tags: ['VS Code', '代码补全', '开源', 'IDE'],
    pricingDetail: '完全免费开源',
    pros: ['支持任意模型，不绑定厂商', 'VS Code 和 JetBrains 双支持', '高度可定制'],
    cons: ['需要自己配置模型', '补全速度取决于模型'],
    alternatives: ['tabby', 'cursor'],
  },
  {
    id: '9', name: 'Aider', slug: 'aider', repo: 'paul-gauthier/aider',
    description: '终端里的 AI 编程助手，直接修改代码文件并自动 git commit，支持多文件编辑。',
    longDescription: 'Aider 是在终端中运行的 AI 编程工具，可以直接读取和修改你的代码文件，并自动生成 git commit。支持 GPT-4、Claude 等模型，擅长跨多文件的复杂重构任务，是命令行开发者的利器。',
    category: 'AI 编程', stars: 26000, todayStars: 0, language: 'Python',
    icon: '◆', url: 'https://aider.chat', pricing: 'free',
    tags: ['终端', 'git', '多文件', '重构'],
    pricingDetail: '完全免费开源，需自备 API Key',
    pros: ['多文件编辑能力强', '自动 git commit', '支持多种模型'],
    cons: ['纯命令行，无 GUI', '需要熟悉终端操作'],
    alternatives: ['continue', 'cursor'],
  },
  {
    id: '10', name: 'Tabby', slug: 'tabby', repo: 'TabbyML/tabby',
    description: '可自托管的 AI 代码补全服务，GitHub Copilot 的开源替代，支持本地模型。',
    longDescription: 'Tabby 是 GitHub Copilot 的开源自托管替代方案。可以在自己的服务器上运行，支持 StarCoder、CodeLlama 等代码模型，提供实时代码补全。数据完全私有，适合对代码安全有要求的企业和个人。',
    category: 'AI 编程', stars: 23000, todayStars: 0, language: 'Rust',
    icon: '○', url: 'https://tabby.tabbyml.com', pricing: 'freemium',
    tags: ['代码补全', '自托管', 'Copilot替代', '私有部署'],
    pricingDetail: '自托管免费 / Cloud 版付费',
    pros: ['数据完全私有', '支持本地模型', '企业级权限管理'],
    cons: ['自托管需要 GPU', '配置较复杂'],
    alternatives: ['continue', 'cursor'],
  },

  // AI 搜索
  {
    id: '11', name: 'Morphic', slug: 'morphic', repo: 'miurla/morphic',
    description: '开源 AI 搜索引擎，Perplexity 的开源替代，支持自托管，实时联网检索。',
    longDescription: 'Morphic 是 Perplexity 的开源替代方案，提供 AI 驱动的实时网络搜索，每个答案附带来源引用。基于 Next.js 构建，可完全自托管，支持接入 OpenAI、Anthropic 等模型，是构建 AI 搜索产品的最佳起点。',
    category: 'AI 搜索', stars: 7800, todayStars: 0, language: 'TypeScript',
    icon: '◇', badge: 'new', url: 'https://morphic.sh', pricing: 'free',
    tags: ['AI搜索', '开源', '自托管', 'Perplexity替代'],
    pricingDetail: '完全免费开源，可自托管',
    pros: ['Perplexity 开源替代', '答案带来源引用', '可完全自托管'],
    cons: ['功能比 Perplexity Pro 少', '需要自己部署'],
    alternatives: ['perplexity'],
  },

  // 图像生成
  {
    id: '12', name: 'Stable Diffusion WebUI', slug: 'stable-diffusion-webui', repo: 'AUTOMATIC1111/stable-diffusion-webui',
    description: '最流行的 Stable Diffusion 本地运行界面，功能完整，插件生态丰富。',
    longDescription: 'AUTOMATIC1111 的 Stable Diffusion WebUI 是最受欢迎的本地图像生成界面。支持文生图、图生图、Inpainting、ControlNet 等完整功能，拥有数百个社区插件，是 AI 绘画爱好者的标配工具。',
    category: '图像生成', stars: 145000, todayStars: 0, language: 'Python',
    icon: '◈', badge: 'hot', url: 'https://github.com/AUTOMATIC1111/stable-diffusion-webui', pricing: 'free',
    tags: ['Stable Diffusion', '文生图', '本地运行', 'ControlNet'],
    pricingDetail: '完全免费开源，需要 GPU',
    pros: ['功能最完整', '插件生态丰富', '社区资源多'],
    cons: ['需要较好的 GPU', '安装配置复杂'],
    alternatives: ['comfyui'],
  },
  {
    id: '13', name: 'ComfyUI', slug: 'comfyui', repo: 'comfyanonymous/ComfyUI',
    description: '节点式 AI 图像生成工作流，灵活强大，支持 SD、Flux 等主流模型。',
    longDescription: 'ComfyUI 采用节点式工作流设计，让你像搭积木一样构建图像生成流程。支持 Stable Diffusion、Flux、SDXL 等主流模型，可实现复杂的图像处理管线。相比 WebUI 更灵活，是进阶用户的首选。',
    category: '图像生成', stars: 68000, todayStars: 0, language: 'Python',
    icon: '◉', badge: 'hot', url: 'https://github.com/comfyanonymous/ComfyUI', pricing: 'free',
    tags: ['节点工作流', 'Flux', 'SDXL', '图像生成'],
    pricingDetail: '完全免费开源，需要 GPU',
    pros: ['节点式工作流灵活强大', '支持最新模型最快', '性能优秀'],
    cons: ['学习曲线陡峭', '新手不友好'],
    alternatives: ['stable-diffusion-webui'],
  },

  // 视频生成
  {
    id: '14', name: 'Wan2.1', slug: 'wan2', repo: 'Wan-Video/Wan2.1',
    description: '阿里开源的视频生成模型，支持文生视频和图生视频，效果媲美商业产品。',
    longDescription: 'Wan2.1 是阿里巴巴开源的视频生成大模型，支持文本生成视频和图像生成视频。在多项基准测试上超越 Sora 等商业产品，完全开源可本地运行，是目前最强的开源视频生成模型之一。',
    category: '视频生成', stars: 12000, todayStars: 0, language: 'Python',
    icon: '◐', badge: 'new', url: 'https://github.com/Wan-Video/Wan2.1', pricing: 'free',
    tags: ['视频生成', '文生视频', '开源', '阿里'],
    pricingDetail: '完全免费开源，需要高端 GPU',
    pros: ['效果媲美商业产品', '完全开源', '支持文生视频和图生视频'],
    cons: ['需要高端 GPU（24GB+）', '生成速度慢'],
  },

  // 效率工具
  {
    id: '15', name: 'Cherry Studio', slug: 'cherry-studio', repo: 'CherryHQ/cherry-studio',
    description: '多模型 AI 桌面客户端，支持 300+ 助手预设，内置 Agent 和知识库管理。',
    longDescription: 'Cherry Studio 是一款功能强大的 AI 生产力桌面应用，支持同时接入 OpenAI、Claude、Gemini、本地模型等多个 AI 服务。内置 300+ 专业助手，支持 Agent 自动化、知识库、文档处理，适合重度 AI 用户。',
    category: '效率工具', stars: 40588, todayStars: 0, language: 'TypeScript',
    icon: '◑', url: 'https://github.com/CherryHQ/cherry-studio', pricing: 'free',
    tags: ['桌面应用', '多模型', 'Agent', '知识库'],
    pricingDetail: '完全免费开源',
    pros: ['300+ 助手预设', '多模型同时使用', '界面美观'],
    cons: ['桌面端，无移动版', '部分功能仍在完善'],
    alternatives: ['open-webui', 'chatgpt-on-wechat'],
  },
  {
    id: '16', name: 'Cursor', slug: 'cursor', repo: 'getcursor.com',
    description: 'AI 原生代码编辑器，深度集成 GPT-4 和 Claude，支持整个代码库的对话式编程。',
    longDescription: 'Cursor 是基于 VS Code 构建的 AI 原生代码编辑器，深度集成 GPT-4、Claude 等顶级模型。支持对整个代码库进行对话、自动补全、错误修复、代码生成，是目前最受开发者欢迎的 AI 编程工具。',
    category: '效率工具', stars: 0, todayStars: 0, language: 'Web',
    icon: '◆', badge: 'hot', url: 'https://cursor.com', pricing: 'freemium',
    tags: ['代码编辑器', 'VS Code', 'AI编程', 'Claude'],
    pricingDetail: '免费版每月 2000 次补全 / Pro $20/月',
    pros: ['代码库级别的 AI 理解', '补全质量最高', '基于 VS Code 无迁移成本'],
    cons: ['Pro 版较贵', '重度依赖云端 API'],
    alternatives: ['continue', 'tabby'],
  },
  {
    id: '17', name: 'Raycast AI', slug: 'raycast-ai', repo: 'raycast.com',
    description: 'Mac 效率启动器内置 AI，快捷键唤起 AI 对话、翻译、总结，无需切换应用。',
    longDescription: 'Raycast 是 Mac 上最强大的效率启动器，内置 AI 功能让你用快捷键随时唤起 AI 对话、翻译、总结、代码解释。支持接入 OpenAI、Anthropic 等模型，与系统深度集成，是 Mac 用户的必装工具。',
    category: '效率工具', stars: 0, todayStars: 0, language: 'macOS',
    icon: '○', url: 'https://raycast.com', pricing: 'freemium',
    tags: ['Mac', '启动器', '快捷键', '效率'],
    pricingDetail: 'Raycast 免费 / AI 功能 $8/月',
    pros: ['系统级集成，随时唤起', '快捷键操作流畅', '支持多种 AI 模型'],
    cons: ['仅限 macOS', 'AI 功能需要付费'],
    alternatives: ['cherry-studio'],
  },

  // 本地模型
  {
    id: '18', name: 'Ollama', slug: 'ollama', repo: 'ollama/ollama',
    description: '本地运行大语言模型，支持 DeepSeek、Llama、Qwen 等主流模型，一行命令即可启动。',
    longDescription: 'Ollama 让你在本地机器上轻松运行大语言模型。支持 DeepSeek、Llama 3、Qwen、Gemma 等数十种主流模型，提供 REST API，可与任何应用集成。完全离线，数据不出本地，适合对隐私有要求的开发者和企业。',
    category: '本地模型', stars: 163895, todayStars: 0, language: 'Go',
    icon: '◎', badge: 'hot', url: 'https://ollama.com', pricing: 'free',
    tags: ['本地模型', 'LLM', '开源', 'API'],
    pricingDetail: '完全免费开源',
    pros: ['一行命令启动', '支持模型最多', '提供 REST API'],
    cons: ['纯命令行，无 GUI', '需要足够内存/显存'],
    alternatives: ['lm-studio'],
  },
  {
    id: '19', name: 'LM Studio', slug: 'lm-studio', repo: 'lmstudio.ai',
    description: '最易用的本地大模型运行工具，图形界面，支持一键下载和运行 HuggingFace 模型。',
    longDescription: 'LM Studio 是最易上手的本地大模型运行工具，提供图形界面，无需命令行。支持从 HuggingFace 一键下载模型，内置聊天界面和 OpenAI 兼容 API，适合不熟悉命令行的用户快速体验本地 AI。',
    category: '本地模型', stars: 0, todayStars: 0, language: 'Desktop',
    icon: '◇', url: 'https://lmstudio.ai', pricing: 'free',
    tags: ['本地模型', '图形界面', 'HuggingFace', '无需命令行'],
    pricingDetail: '完全免费',
    pros: ['图形界面，新手友好', '一键下载模型', '内置聊天界面'],
    cons: ['功能比 Ollama 少', '不支持 API 调用（免费版）'],
    alternatives: ['ollama'],
  },
  {
    id: '20', name: 'Transformers', slug: 'transformers', repo: 'huggingface/transformers',
    description: 'Hugging Face 出品，业界标准的预训练模型库，支持 NLP、视觉、多模态任务。',
    longDescription: 'Hugging Face Transformers 是机器学习领域最重要的开源库之一。提供数千个预训练模型，支持 PyTorch、TensorFlow、JAX，覆盖文本分类、生成、翻译、问答、图像识别等几乎所有 AI 任务。',
    category: '本地模型', stars: 157279, todayStars: 0, language: 'Python',
    icon: '◈', badge: 'hot', url: 'https://huggingface.co/transformers', pricing: 'free',
    tags: ['NLP', '预训练模型', 'PyTorch', 'HuggingFace'],
    pricingDetail: '完全免费开源',
    pros: ['模型数量最多', '文档完善', '支持所有主流框架'],
    cons: ['学习曲线较陡', '需要 Python 基础'],
    alternatives: ['ollama'],
  },
]

export const paidTools: Tool[] = [
  {
    id: 'p1', name: 'Perplexity Pro', slug: 'perplexity', repo: 'perplexity.ai',
    description: 'AI 驱动的搜索引擎，实时联网检索并给出带引用来源的精准答案，告别信息噪音。',
    longDescription: 'Perplexity 是新一代 AI 搜索引擎，结合了 GPT-4、Claude 等顶级模型与实时网络检索能力。每个答案都附带可验证的来源引用，支持追问和深度研究模式。Pro 版本解锁无限次高级模型查询、文件上传分析和 API 访问。',
    category: 'AI 搜索', stars: 0, todayStars: 0, language: 'Web',
    icon: '◈', badge: 'affiliate', url: 'https://perplexity.ai',
    affiliateUrl: 'https://perplexity.ai', pricing: 'paid',
    tags: ['AI搜索', '实时联网', '引用来源', 'Pro'],
    pricingDetail: '免费版每日限额 / Pro $20/月',
    pros: ['实时联网，信息最新', '答案带来源引用', '支持追问'],
    cons: ['免费版有次数限制', '无法完全替代搜索引擎'],
    alternatives: ['morphic'],
  },
  {
    id: 'p2', name: 'Notion AI', slug: 'notion-ai', repo: 'notion.so',
    description: '内嵌于 Notion 的 AI 写作助手，总结、翻译、润色、生成内容，无需切换工具。',
    longDescription: 'Notion AI 将强大的 AI 能力直接集成到你的工作空间。可以一键总结会议记录、翻译多语言内容、润色文章、生成行动计划，还能基于你的知识库回答问题。与 Notion 的数据库、文档、项目管理深度融合。',
    category: '效率工具', stars: 0, todayStars: 0, language: 'Web',
    icon: '◻', badge: 'affiliate', url: 'https://notion.so',
    affiliateUrl: 'https://notion.so', pricing: 'paid',
    tags: ['写作助手', '知识库', '团队协作', 'AI写作'],
    pricingDetail: 'Notion 免费版可用 / AI 功能 $10/月',
    pros: ['与 Notion 深度集成', '无需切换工具', '支持知识库问答'],
    cons: ['依赖 Notion 生态', '功能不如专业 AI 写作工具'],
    alternatives: ['jasper', 'writesonic'],
  },
  {
    id: 'p3', name: 'Jasper AI', slug: 'jasper', repo: 'jasper.ai',
    description: '专为营销团队打造的 AI 内容创作平台，支持品牌声音训练，批量生成高转化文案。',
    longDescription: 'Jasper 是企业级 AI 内容创作平台，专注于营销文案、博客文章、社交媒体内容的批量生成。支持品牌声音训练，让 AI 输出符合你品牌调性的内容。内置 50+ 内容模板，支持 30+ 语言。',
    category: 'AI 写作', stars: 0, todayStars: 0, language: 'Web',
    icon: '◆', badge: 'affiliate', url: 'https://jasper.ai',
    affiliateUrl: 'https://jasper.ai', pricing: 'paid',
    tags: ['AI写作', '营销文案', '品牌声音', '内容创作'],
    pricingDetail: 'Creator $39/月 / Teams $99/月起',
    pros: ['品牌声音训练', '50+ 内容模板', '支持 30+ 语言'],
    cons: ['价格较贵', '需要学习使用方法'],
    alternatives: ['writesonic', 'copy-ai'],
  },
  {
    id: 'p4', name: 'Writesonic', slug: 'writesonic', repo: 'writesonic.com',
    description: 'AI 写作 + SEO 一体化平台，生成文章同时优化搜索排名，内容即流量。',
    longDescription: 'Writesonic 将 AI 写作与 SEO 优化深度结合。可以根据关键词自动生成 SEO 友好的长文、落地页、广告文案，内置 Surfer SEO 集成，实时评分并给出优化建议。',
    category: 'AI 写作', stars: 0, todayStars: 0, language: 'Web',
    icon: '◐', badge: 'affiliate', url: 'https://writesonic.com',
    affiliateUrl: 'https://writesonic.com', pricing: 'paid',
    tags: ['AI写作', 'SEO优化', '内容营销', '落地页'],
    pricingDetail: '免费版 / Pro $16/月起',
    pros: ['SEO 优化集成', '价格相对实惠', '内容质量高'],
    cons: ['免费版字数有限', '部分功能需要高级套餐'],
    alternatives: ['jasper', 'copy-ai'],
  },
  {
    id: 'p5', name: 'Copy.ai', slug: 'copy-ai', repo: 'copy.ai',
    description: '销售和营销团队的 AI 工作流平台，自动化从潜客研究到文案生成的全流程。',
    longDescription: 'Copy.ai 已从 AI 文案工具进化为完整的 GTM AI 平台。支持构建自动化工作流，将潜客研究、个性化邮件、销售话术、内容生成串联成一条流水线。企业版支持 CRM 集成和团队协作。',
    category: 'AI 写作', stars: 0, todayStars: 0, language: 'Web',
    icon: '◑', badge: 'affiliate', url: 'https://copy.ai',
    affiliateUrl: 'https://copy.ai', pricing: 'paid',
    tags: ['AI文案', '销售自动化', 'GTM', '工作流'],
    pricingDetail: '免费版 / Pro $36/月',
    pros: ['GTM 工作流自动化', '销售场景覆盖全', 'CRM 集成'],
    cons: ['价格偏高', '学习成本较高'],
    alternatives: ['jasper', 'writesonic'],
  },
]

export const tools: Tool[] = [...openSourceTools, ...paidTools]

export function getToolBySlug(slug: string): Tool | undefined {
  return tools.find(t => t.slug === slug)
}

export function getAllSlugs(): string[] {
  return tools.map(t => t.slug)
}

export function getPaidTools(): Tool[] {
  return paidTools
}

export function getOpenSourceTools(): Tool[] {
  return openSourceTools
}

export function getToolsByCategory(category: string): Tool[] {
  return tools.filter(t => t.category === category)
}
