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

// Curated paid tools (affiliate)
const paidTools: Tool[] = [
  {
    id: 'p1',
    name: 'Perplexity Pro',
    slug: 'perplexity',
    repo: 'perplexity.ai',
    description: 'AI-powered search engine with real-time web access and cited answers. No more information overload.',
    longDescription: 'Perplexity is the next-generation AI search engine combining GPT-4, Claude, and real-time web retrieval. Every answer comes with verifiable source citations. Pro unlocks unlimited advanced model queries, file analysis, and API access — the go-to tool for researchers and knowledge workers.',
    category: 'Search',
    stars: 0,
    todayStars: 0,
    language: 'Web',
    icon: '◈',
    badge: 'affiliate',
    url: 'https://perplexity.ai',
    affiliateUrl: 'https://perplexity.ai', // TODO: replace with affiliate link
    tags: ['AI Search', 'Real-time', 'Citations', 'Pro'],
  },
  {
    id: 'p2',
    name: 'Notion AI',
    slug: 'notion-ai',
    repo: 'notion.so',
    description: 'AI writing assistant built into Notion. Summarize, translate, polish, and generate content without switching tools.',
    longDescription: 'Notion AI brings powerful AI capabilities directly into your workspace. Summarize meeting notes, translate content, polish writing, generate action plans, and answer questions from your knowledge base — all deeply integrated with Notion databases, docs, and project management.',
    category: 'Productivity',
    stars: 0,
    todayStars: 0,
    language: 'Web',
    icon: '◻',
    badge: 'affiliate',
    url: 'https://notion.so',
    affiliateUrl: 'https://notion.so', // TODO: replace with affiliate link
    tags: ['Writing', 'Knowledge Base', 'Team', 'AI Writing'],
  },
  {
    id: 'p3',
    name: 'Jasper AI',
    slug: 'jasper',
    repo: 'jasper.ai',
    description: 'AI content platform built for marketing teams. Train your brand voice and generate high-converting copy at scale.',
    longDescription: 'Jasper is an enterprise AI content platform focused on marketing copy, blog posts, and social media at scale. Supports Brand Voice training so AI outputs match your tone. 50+ templates, 30+ languages, trusted by 100k+ brands to 10x content output.',
    category: 'Writing',
    stars: 0,
    todayStars: 0,
    language: 'Web',
    icon: '◆',
    badge: 'affiliate',
    url: 'https://jasper.ai',
    affiliateUrl: 'https://jasper.ai', // TODO: replace with affiliate link
    tags: ['AI Writing', 'Marketing', 'Brand Voice', 'Content'],
  },
  {
    id: 'p4',
    name: 'Writesonic',
    slug: 'writesonic',
    repo: 'writesonic.com',
    description: 'AI writing + SEO in one platform. Generate articles optimized for search rankings — content that drives traffic.',
    longDescription: 'Writesonic combines AI writing with deep SEO optimization. Generate SEO-friendly long-form articles, landing pages, and ad copy from keywords. Built-in Surfer SEO integration scores content in real-time. Includes Chatsonic (web-connected ChatGPT) and AI image generation.',
    category: 'Writing',
    stars: 0,
    todayStars: 0,
    language: 'Web',
    icon: '◐',
    badge: 'affiliate',
    url: 'https://writesonic.com',
    affiliateUrl: 'https://writesonic.com', // TODO: replace with affiliate link
    tags: ['AI Writing', 'SEO', 'Content Marketing', 'Landing Page'],
  },
  {
    id: 'p5',
    name: 'Copy.ai',
    slug: 'copy-ai',
    repo: 'copy.ai',
    description: 'AI workflow platform for sales and marketing. Automate everything from prospect research to personalized outreach.',
    longDescription: 'Copy.ai has evolved from an AI copywriting tool into a full GTM AI platform. Build automated workflows connecting prospect research, personalized emails, sales scripts, and content generation. Enterprise version supports CRM integration, team collaboration, and custom AI workflows.',
    category: 'Writing',
    stars: 0,
    todayStars: 0,
    language: 'Web',
    icon: '◑',
    badge: 'affiliate',
    url: 'https://copy.ai',
    affiliateUrl: 'https://copy.ai', // TODO: replace with affiliate link
    tags: ['AI Copy', 'Sales Automation', 'GTM', 'Workflow'],
  },
]

// Open source tools
const openSourceTools: Tool[] = [
  {
    id: '1',
    name: 'Ollama',
    slug: 'ollama',
    repo: 'ollama/ollama',
    description: 'Run large language models locally. Supports DeepSeek, Llama, Qwen and more — one command to start.',
    longDescription: 'Ollama makes it easy to run large language models on your local machine. Supports DeepSeek, Llama 3, Qwen, Gemma and dozens of models. Provides a REST API for integration with any app. Fully offline, data never leaves your machine.',
    category: 'Agent',
    stars: 163895,
    todayStars: 0,
    language: 'Go',
    icon: '○',
    badge: 'hot',
    url: 'https://ollama.com',
    tags: ['Local LLM', 'Open Source', 'API', 'Privacy'],
  },
  {
    id: '2',
    name: 'Dify',
    slug: 'dify',
    repo: 'langgenius/dify',
    description: 'Production-ready AI app platform. Visual workflow orchestration, RAG, tool calling, multi-model support.',
    longDescription: 'Dify is an enterprise AI application development platform with visual Workflow orchestration, RAG knowledge base, Agent builder, and model management. Supports OpenAI, Claude, local models and dozens of LLMs. Used by tens of thousands of companies in production.',
    category: 'Agent',
    stars: 131007,
    todayStars: 0,
    language: 'TypeScript',
    icon: '◇',
    badge: 'hot',
    url: 'https://dify.ai',
    tags: ['Agent', 'RAG', 'Workflow', 'Enterprise'],
  },
  {
    id: '3',
    name: 'Transformers',
    slug: 'transformers',
    repo: 'huggingface/transformers',
    description: 'The industry-standard pretrained model library by Hugging Face. NLP, vision, multimodal — all covered.',
    longDescription: 'Hugging Face Transformers is one of the most important open-source libraries in ML. Thousands of pretrained models, supports PyTorch, TensorFlow, JAX. Covers text classification, generation, translation, QA, image recognition and virtually every AI task.',
    category: 'Dev',
    stars: 157279,
    todayStars: 0,
    language: 'Python',
    icon: '◈',
    badge: 'hot',
    url: 'https://github.com/huggingface/transformers',
    tags: ['NLP', 'Pretrained Models', 'PyTorch', 'HuggingFace'],
  },
  {
    id: '4',
    name: 'Cherry Studio',
    slug: 'cherry-studio',
    repo: 'CherryHQ/cherry-studio',
    description: 'Multi-model AI desktop client with 300+ assistant presets, built-in Agent and knowledge base.',
    longDescription: 'Cherry Studio is a powerful AI productivity desktop app supporting OpenAI, Claude, Gemini, and local models simultaneously. 300+ professional assistants, Agent automation, knowledge base, document processing — built for power users.',
    category: 'Productivity',
    stars: 40588,
    todayStars: 0,
    language: 'TypeScript',
    icon: '◉',
    url: 'https://github.com/CherryHQ/cherry-studio',
    tags: ['Desktop', 'Multi-model', 'Agent', 'Knowledge Base'],
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
