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
}

export const tools: Tool[] = [
  {
    id: '1',
    name: 'Ollama',
    slug: 'ollama',
    repo: 'ollama/ollama',
    description: '本地运行大语言模型，支持 Llama、DeepSeek、Qwen 等主流模型，一行命令即可启动。',
    longDescription: 'Ollama 让你在本地机器上轻松运行大语言模型。支持 Llama 3、DeepSeek、Qwen、Gemma 等数十种主流模型，提供 REST API，可与任何应用集成。完全离线，数据不出本地，适合对隐私有要求的开发者和企业。',
    category: 'Agent',
    stars: 163892,
    todayStars: 0,
    language: 'Go',
    icon: '🤖',
    badge: 'hot',
    url: 'https://github.com/ollama/ollama',
    tags: ['本地模型', 'LLM', '开源', 'API'],
  },
  {
    id: '2',
    name: 'Transformers',
    slug: 'transformers',
    repo: 'huggingface/transformers',
    description: 'Hugging Face 出品，业界标准的预训练模型库，支持 NLP、视觉、多模态任务。',
    longDescription: 'Hugging Face Transformers 是机器学习领域最重要的开源库之一。提供数千个预训练模型，支持 PyTorch、TensorFlow、JAX，覆盖文本分类、生成、翻译、问答、图像识别等几乎所有 AI 任务。',
    category: '效率',
    stars: 157273,
    todayStars: 0,
    language: 'Python',
    icon: '🧠',
    badge: 'hot',
    url: 'https://github.com/huggingface/transformers',
    tags: ['NLP', '预训练模型', 'PyTorch', 'HuggingFace'],
  },
  {
    id: '3',
    name: 'Prompts.chat',
    slug: 'prompts-chat',
    repo: 'f/prompts.chat',
    description: '精选 ChatGPT Prompt 合集，覆盖写作、编程、分析等场景，社区持续贡献。',
    longDescription: '全网最受欢迎的 ChatGPT Prompt 合集，收录了数百个经过验证的高质量 Prompt，涵盖写作助手、代码审查、数据分析、角色扮演等场景。社区驱动，持续更新。',
    category: '编程',
    stars: 149806,
    todayStars: 0,
    language: 'HTML',
    icon: '⚡',
    badge: 'hot',
    url: 'https://github.com/f/prompts.chat',
    tags: ['Prompt', 'ChatGPT', '提示词', '效率'],
  },
  {
    id: '4',
    name: 'ChatGPT on WeChat',
    slug: 'chatgpt-on-wechat',
    repo: 'zhayujie/chatgpt-on-wechat',
    description: '基于大模型的微信 AI 助手，支持飞书、钉钉、企业微信，可接入多种模型。',
    longDescription: '将 ChatGPT、Claude、文心一言等大模型接入微信、企业微信、飞书、钉钉等国内主流 IM 平台。支持多轮对话、角色扮演、图片生成、插件扩展，是国内最流行的 AI 机器人框架之一。',
    category: '创作',
    stars: 41775,
    todayStars: 0,
    language: 'Python',
    icon: '🔧',
    url: 'https://github.com/zhayujie/chatgpt-on-wechat',
    tags: ['微信', '机器人', '企业微信', '飞书'],
  },
  {
    id: '5',
    name: 'Cherry Studio',
    slug: 'cherry-studio',
    repo: 'CherryHQ/cherry-studio',
    description: '多模型 AI 桌面客户端，支持 300+ 助手预设，内置 Agent 和生成式 UI。',
    longDescription: 'Cherry Studio 是一款功能强大的 AI 生产力桌面应用，支持同时接入 OpenAI、Claude、Gemini、本地模型等多个 AI 服务。内置 300+ 专业助手，支持 Agent 自动化、知识库、文档处理，适合重度 AI 用户。',
    category: '研究',
    stars: 40581,
    todayStars: 0,
    language: 'TypeScript',
    icon: '📦',
    url: 'https://github.com/CherryHQ/cherry-studio',
    tags: ['桌面应用', '多模型', 'Agent', '知识库'],
  },
  {
    id: '6',
    name: 'CopilotKit',
    slug: 'copilotkit',
    repo: 'CopilotKit/CopilotKit',
    description: '为 React 应用快速集成 AI Copilot 能力，支持对话、操作、生成式 UI。',
    longDescription: 'CopilotKit 是面向前端开发者的 AI 集成框架，让你用几行代码就能为任何 React 应用添加 AI Copilot 功能。支持自然语言操作 UI、上下文感知对话、Agent 工作流，是构建 AI 原生应用的最快路径。',
    category: '效率',
    stars: 29132,
    todayStars: 0,
    language: 'TypeScript',
    icon: '🌊',
    url: 'https://github.com/CopilotKit/CopilotKit',
    tags: ['React', 'Copilot', '前端', 'Agent'],
  },
]

export function getToolBySlug(slug: string): Tool | undefined {
  return tools.find(t => t.slug === slug)
}

export function getAllSlugs(): string[] {
  return tools.map(t => t.slug)
}
