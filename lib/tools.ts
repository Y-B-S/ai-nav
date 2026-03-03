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

// 自动更新于 2026/3/3
export const tools: Tool[] = [
  {
    id: '1',
    name: 'ollama',
    slug: 'ollama',
    repo: 'ollama/ollama',
    description: 'Get up and running with Kimi-K2.5, GLM-5, MiniMax, DeepSeek, gpt-oss, Qwen, Gemm',
    longDescription: 'Get up and running with Kimi-K2.5, GLM-5, MiniMax, DeepSeek, gpt-oss, Qwen, Gemm',
    category: 'Agent',
    stars: 163895,
    todayStars: 0,
    language: 'Go',
    icon: '🤖',
    badge: 'hot' as const,
    url: 'https://github.com/ollama/ollama',
    tags: ['AI', '开源', 'Go'],
  },
  {
    id: '2',
    name: 'transformers',
    slug: 'transformers',
    repo: 'huggingface/transformers',
    description: '🤗 Transformers: the model-definition framework for state-of-the-art machine lea',
    longDescription: '🤗 Transformers: the model-definition framework for state-of-the-art machine lea',
    category: '效率',
    stars: 157279,
    todayStars: 0,
    language: 'Python',
    icon: '🧠',
    badge: 'hot' as const,
    url: 'https://github.com/huggingface/transformers',
    tags: ['AI', '开源', 'Python'],
  },
  {
    id: '3',
    name: 'prompts.chat',
    slug: 'prompts-chat',
    repo: 'f/prompts.chat',
    description: 'f.k.a. Awesome ChatGPT Prompts. Share, discover, and collect prompts from the co',
    longDescription: 'f.k.a. Awesome ChatGPT Prompts. Share, discover, and collect prompts from the co',
    category: '编程',
    stars: 149816,
    todayStars: 0,
    language: 'HTML',
    icon: '⚡',
    badge: 'hot' as const,
    url: 'https://github.com/f/prompts.chat',
    tags: ['AI', '开源', 'HTML'],
  },
  {
    id: '4',
    name: 'dify',
    slug: 'dify',
    repo: 'langgenius/dify',
    description: 'Production-ready platform for agentic workflow development.',
    longDescription: 'Production-ready platform for agentic workflow development.',
    category: '创作',
    stars: 131007,
    todayStars: 0,
    language: 'TypeScript',
    icon: '🔧',
    badge: 'hot' as const,
    url: 'https://github.com/langgenius/dify',
    tags: ['AI', '开源', 'TypeScript'],
  },
  {
    id: '5',
    name: 'chatgpt-on-wechat',
    slug: 'chatgpt-on-wechat',
    repo: 'zhayujie/chatgpt-on-wechat',
    description: 'CowAgent是基于大模型的超级AI助理，能主动思考和任务规划、访问操作系统和外部资源、创造和执行Skills、拥有长期记忆并不断成长。同时支持飞书、钉钉、企',
    longDescription: 'CowAgent是基于大模型的超级AI助理，能主动思考和任务规划、访问操作系统和外部资源、创造和执行Skills、拥有长期记忆并不断成长。同时支持飞书、钉钉、企',
    category: '研究',
    stars: 41780,
    todayStars: 0,
    language: 'Python',
    icon: '📦',
    
    url: 'https://github.com/zhayujie/chatgpt-on-wechat',
    tags: ['AI', '开源', 'Python'],
  },
  {
    id: '6',
    name: 'cherry-studio',
    slug: 'cherry-studio',
    repo: 'CherryHQ/cherry-studio',
    description: 'AI productivity studio with smart chat, autonomous agents, and 300+ assistants. ',
    longDescription: 'AI productivity studio with smart chat, autonomous agents, and 300+ assistants. ',
    category: '效率',
    stars: 40588,
    todayStars: 0,
    language: 'TypeScript',
    icon: '🌊',
    
    url: 'https://github.com/CherryHQ/cherry-studio',
    tags: ['AI', '开源', 'TypeScript'],
  }
]

export function getToolBySlug(slug: string): Tool | undefined {
  return tools.find(t => t.slug === slug)
}

export function getAllSlugs(): string[] {
  return tools.map(t => t.slug)
}
