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

// 开源工具（自动更新于 2026/3/3）
const openSourceTools: Tool[] = [
  {
    id: '1',
    name: 'Ollama',
    slug: 'ollama',
    repo: 'ollama/ollama',
    description: '本地运行大语言模型，支持 DeepSeek、Llama、Qwen 等主流模型，一行命令即可启动。',
    longDescription: 'Ollama 让你在本地机器上轻松运行大语言模型。支持 DeepSeek、Llama 3、Qwen、Gemma 等数十种主流模型，提供 REST API，可与任何应用集成。完全离线，数据不出本地，适合对隐私有要求的开发者和企业。',
    category: 'Agent',
    stars: 163895,
    todayStars: 0,
    language: 'Go',
    icon: '○',
    badge: 'hot',
    url: 'https://ollama.com',
    tags: ['本地模型', 'LLM', '开源', 'API'],
  },
  {
    id: '2',
    name: 'Transformers',
    slug: 'transformers',
    repo: 'huggingface/transformers',
    description: 'Hugging Face 出品，业界标准的预训练模型库，支持 NLP、视觉、多模态任务。',
    longDescription: 'Hugging Face Transformers 是机器学习领域最重要的开源库之一。提供数千个预训练模型，支持 PyTorch、TensorFlow、JAX，覆盖文本分类、生成、翻译、问答、图像识别等几乎所有 AI 任务。',
    category: '开发',
    stars: 157279,
    todayStars: 0,
    language: 'Python',
    icon: '◈',
    badge: 'hot',
    url: 'https://github.com/huggingface/transformers',
    tags: ['NLP', '预训练模型', 'PyTorch', 'HuggingFace'],
  },
  {
    id: '3',
    name: 'Dify',
    slug: 'dify',
    repo: 'langgenius/dify',
    description: '生产级 AI 应用开发平台，可视化编排 Agent 工作流，支持 RAG、工具调用、多模型。',
    longDescription: 'Dify 是面向企业的 AI 应用开发平台，提供可视化的 Workflow 编排、RAG 知识库、Agent 构建、模型管理等能力。支持接入 OpenAI、Claude、本地模型等数十种 LLM，已有数万家企业在生产环境使用。',
    category: 'Agent',
    stars: 131007,
    todayStars: 0,
    language: 'TypeScript',
    icon: '◇',
    badge: 'hot',
    url: 'https://dify.ai',
    tags: ['Agent', 'RAG', '工作流', '企业级'],
  },
  {
    id: '4',
    name: 'Cherry Studio',
    slug: 'cherry-studio',
    repo: 'CherryHQ/cherry-studio',
    description: '多模型 AI 桌面客户端，支持 300+ 助手预设，内置 Agent 和知识库管理。',
    longDescription: 'Cherry Studio 是一款功能强大的 AI 生产力桌面应用，支持同时接入 OpenAI、Claude、Gemini、本地模型等多个 AI 服务。内置 300+ 专业助手，支持 Agent 自动化、知识库、文档处理，适合重度 AI 用户。',
    category: '效率',
    stars: 40588,
    todayStars: 0,
    language: 'TypeScript',
    icon: '◉',
    url: 'https://github.com/CherryHQ/cherry-studio',
    tags: ['桌面应用', '多模型', 'Agent', '知识库'],
  },
  {
    id: '5',
    name: 'ChatGPT on WeChat',
    slug: 'chatgpt-on-wechat',
    repo: 'zhayujie/chatgpt-on-wechat',
    description: '基于大模型的微信 AI 助手，支持飞书、钉钉、企业微信，可接入多种模型。',
    longDescription: '将 ChatGPT、Claude、文心一言等大模型接入微信、企业微信、飞书、钉钉等国内主流 IM 平台。支持多轮对话、角色扮演、图片生成、插件扩展，是国内最流行的 AI 机器人框架之一。',
    category: '效率',
    stars: 41780,
    todayStars: 0,
    language: 'Python',
    icon: '◎',
    url: 'https://github.com/zhayujie/chatgpt-on-wechat',
    tags: ['微信', '机器人', '企业微信', '飞书'],
  },
]

// 付费工具（联盟变现）
const paidTools: Tool[] = [
  {
    id: 'p1',
    name: 'Perplexity Pro',
    slug: 'perplexity',
    repo: 'perplexity.ai',
    description: 'AI 驱动的搜索引擎，实时联网检索并给出带引用来源的精准答案，告别信息噪音。',
    longDescription: 'Perplexity 是新一代 AI 搜索引擎，结合了 GPT-4、Claude 等顶级模型与实时网络检索能力。每个答案都附带可验证的来源引用，支持追问和深度研究模式。Pro 版本解锁无限次高级模型查询、文件上传分析和 API 访问，是研究人员和知识工作者的首选工具。',
    category: '搜索',
    stars: 0,
    todayStars: 0,
    language: 'Web',
    icon: '◈',
    badge: 'affiliate',
    url: 'https://perplexity.ai',
    affiliateUrl: 'https://perplexity.ai',  // TODO: 替换为你的联盟链接
    tags: ['AI搜索', '实时联网', '引用来源', 'Pro'],
  },
  {
    id: 'p2',
    name: 'Notion AI',
    slug: 'notion-ai',
    repo: 'notion.so',
    description: '内嵌于 Notion 的 AI 写作助手，总结、翻译、润色、生成内容，无需切换工具。',
    longDescription: 'Notion AI 将强大的 AI 能力直接集成到你的工作空间。可以一键总结会议记录、翻译多语言内容、润色文章、生成行动计划，还能基于你的知识库回答问题。与 Notion 的数据库、文档、项目管理深度融合，是团队协作的效率倍增器。',
    category: '效率',
    stars: 0,
    todayStars: 0,
    language: 'Web',
    icon: '◻',
    badge: 'affiliate',
    url: 'https://notion.so',
    affiliateUrl: 'https://notion.so',  // TODO: 替换为你的联盟链接
    tags: ['写作助手', '知识库', '团队协作', 'AI写作'],
  },
  {
    id: 'p3',
    name: 'Jasper AI',
    slug: 'jasper',
    repo: 'jasper.ai',
    description: '专为营销团队打造的 AI 内容创作平台，支持品牌声音训练，批量生成高转化文案。',
    longDescription: 'Jasper 是企业级 AI 内容创作平台，专注于营销文案、博客文章、社交媒体内容的批量生成。支持品牌声音（Brand Voice）训练，让 AI 输出符合你品牌调性的内容。内置 50+ 内容模板，支持 30+ 语言，已帮助超过 10 万个品牌提升内容生产效率。',
    category: '创作',
    stars: 0,
    todayStars: 0,
    language: 'Web',
    icon: '◆',
    badge: 'affiliate',
    url: 'https://jasper.ai',
    affiliateUrl: 'https://jasper.ai',  // TODO: 替换为你的联盟链接
    tags: ['AI写作', '营销文案', '品牌声音', '内容创作'],
  },
  {
    id: 'p4',
    name: 'Writesonic',
    slug: 'writesonic',
    repo: 'writesonic.com',
    description: 'AI 写作 + SEO 一体化平台，生成文章同时优化搜索排名，内容即流量。',
    longDescription: 'Writesonic 将 AI 写作与 SEO 优化深度结合。可以根据关键词自动生成 SEO 友好的长文、落地页、广告文案，内置 Surfer SEO 集成，实时评分并给出优化建议。支持 Chatsonic（联网版 ChatGPT）、AI 图片生成，是内容营销团队的全能工具。',
    category: '创作',
    stars: 0,
    todayStars: 0,
    language: 'Web',
    icon: '◐',
    badge: 'affiliate',
    url: 'https://writesonic.com',
    affiliateUrl: 'https://writesonic.com',  // TODO: 替换为你的联盟链接
    tags: ['AI写作', 'SEO优化', '内容营销', '落地页'],
  },
  {
    id: 'p5',
    name: 'Copy.ai',
    slug: 'copy-ai',
    repo: 'copy.ai',
    description: '销售和营销团队的 AI 工作流平台，自动化从潜客研究到文案生成的全流程。',
    longDescription: 'Copy.ai 已从 AI 文案工具进化为完整的 GTM（Go-to-Market）AI 平台。支持构建自动化工作流，将潜客研究、个性化邮件、销售话术、内容生成串联成一条流水线。企业版支持 CRM 集成、团队协作和自定义 AI 工作流，帮助销售和营销团队 10 倍提升产出。',
    category: '创作',
    stars: 0,
    todayStars: 0,
    language: 'Web',
    icon: '◑',
    badge: 'affiliate',
    url: 'https://copy.ai',
    affiliateUrl: 'https://copy.ai',  // TODO: 替换为你的联盟链接
    tags: ['AI文案', '销售自动化', 'GTM', '工作流'],
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
