import {
  StartupItem,
  ProjectItem,
  SkillItem,
  TimelineItem,
  GitHubStats,
  BlogPost,
} from '../types';

export const profileData = {
  name: 'Yashvir Paul',
  roles: [
    'Web Developer',
    'UI/UX Designer',
    'AI Automations Maker',
    'Data Analyst',
  ],
  tagline: 'Engineering high-impact web apps, autonomous AI agents, intuitive interfaces, and real-time analytics architectures.',
  bio: 'Founder & Full-Stack Engineer with deep focus on building scalable web products, frictionless UI/UX systems, enterprise LLM workflow automation, and actionable business intelligence pipelines. Founder of GROW BUISNESS, StantUp, and Fluid.',
  location: 'Hyderabad / Global Remote',
  email: 'yveer8609@gmail.com',
  phone: '+91 9394389413',
  whatsappUrl: 'https://wa.me/919394389413?text=Hi%20Yashvir,%20I%20reviewed%20your%20portfolio%20and%20would%20like%20to%20connect!',
  github: 'https://github.com/yashvirpaul',
  availability: 'Available for Founders, Startups & High-Impact Consulting',
};

export const startupsData: StartupItem[] = [
  {
    id: 'grow-buisness',
    name: 'GROW BUISNESS',
    tagline: 'Global Business Acceleration, AI Workflows & Growth Infrastructure',
    role: 'Founder & Head of Engineering',
    period: '2024 - Present',
    status: 'Active & Scaling',
    category: 'Venture Scaling & Automation',
    description:
      'GROW BUISNESS is a high-velocity ecosystem engineered to accelerate business operations, automated workflows, AI receptionist tooling, top Google ranking pipelines, and global market scaling.',
    metrics: [
      { label: 'Active Clients & Members', value: '14,000+' },
      { label: 'Workflow Efficiency', value: '+85%' },
      { label: 'Avg Ops Time Saved', value: '38 hrs/mo' },
      { label: 'Global Scaling Hubs', value: '25+' },
    ],
    highlights: [
      'Architected end-to-end full-stack automation platform powering business scaling, automated lead qualification, and dynamic client onboarding.',
      'Engineered automated n8n workflows and AI receptionist pipelines reducing client operational overhead by 65%.',
      'Designed high-converting geometric web interfaces and search-optimized architectures driving top Google listing positions.',
    ],
    techStack: ['React 19', 'TypeScript', 'Node.js', 'n8n Automations', 'Gemini AI', 'Tailwind CSS', 'PostgreSQL', 'Redis'],
    link: 'https://growbuisness.com',
  },
  {
    id: 'stantup',
    name: 'StantUp',
    tagline: 'Venture Intelligence & Founder Network Platform',
    role: 'Co-Founder & Chief Product Architect',
    period: '2024 - Present',
    status: 'Venture Live',
    category: 'Venture & Collaboration',
    description:
      'StantUp delivers curated venture intelligence, founder-investor deal discovery, and autonomous traction scoring for early-stage technology startups.',
    metrics: [
      { label: 'Startups Profiled', value: '1,200+' },
      { label: 'Connections Made', value: '3,800+' },
      { label: 'Data Accuracy', value: '99.4%' },
      { label: 'Weekly Active Founders', value: '2,400+' },
    ],
    highlights: [
      'Built automated pipeline scraping and normalizing venture signal data across 50+ funding registries.',
      'Engineered matchmaking scoring engine using vector embeddings for targeted founder-investor pairing.',
      'Constructed dense analytical portfolio overview dashboards with custom Recharts visualizers.',
    ],
    techStack: ['Next.js', 'Python', 'FastAPI', 'Gemini AI', 'Tailwind CSS', 'D3.js'],
    link: 'https://stantup.network',
  },
  {
    id: 'fluid',
    name: 'Fluid',
    tagline: 'Adaptive UI Component Toolchain & Real-Time Design System',
    role: 'Founder & Lead Designer',
    period: '2025 - Present',
    status: 'Active Production',
    category: 'Developer Tooling & UI/UX',
    description:
      'Fluid is a high-velocity design system generator and component library that guarantees zero runtime overhead, strict optical mathematical scales, and automated dark/light token synthesis.',
    metrics: [
      { label: 'Component Primitives', value: '65+' },
      { label: 'NPM Downloads / mo', value: '28k+' },
      { label: 'Core Bundle Size', value: '< 4.2kb' },
      { label: 'Accessibility Score', value: '100%' },
    ],
    highlights: [
      'Crafted geometric design tokens adhering to strict optical alignment and mathematical typography step ratios.',
      'Built live interactive theme studio allowing developers to export production-grade Tailwind config files.',
      'Integrated WCAG AA compliance checkers directly into component render cycles.',
    ],
    techStack: ['TypeScript', 'Vite', 'Tailwind CSS', 'Figma API', 'Rollup', 'Web Components'],
    link: 'https://fluid-ui.design',
  },
];

export const projectsData: ProjectItem[] = [
  {
    id: 'p1',
    title: 'Autonomous Multi-Agent Workflow Engine',
    category: 'AI Automations Maker',
    description:
      'Engineered an enterprise autonomous AI agent system coordinating multiple LLM sub-agents to conduct web research, summarize documentation, and generate code patches automatically.',
    impact: 'Reduced research synthesis time from 4 hours to 90 seconds for technical product teams.',
    tags: ['Gemini 3.7 Flash', 'LangChain', 'Python', 'FastAPI', 'Vector Store'],
    githubUrl: 'https://github.com/yashvirpaul/multi-agent-orchestrator',
    liveUrl: 'https://agent-orchestrator-demo.run.app',
    metrics: { label: 'Task Execution Speed', value: '4.2x Faster' },
  },
  {
    id: 'p2',
    title: 'Real-Time Telemetry & Financial Analytics Board',
    category: 'Data Analyst',
    description:
      'Architected a streaming business intelligence dashboard that aggregates millions of payment transactions into real-time visual charts with predictive anomaly detection.',
    impact: 'Processed $12M+ monthly transaction volume with sub-100ms render latency.',
    tags: ['Recharts', 'React 19', 'TypeScript', 'Tailwind CSS', 'WebSockets', 'SQL'],
    githubUrl: 'https://github.com/yashvirpaul/telemetry-bi-dashboard',
    liveUrl: 'https://telemetry-bi.run.app',
    metrics: { label: 'Event Throughput', value: '50k eps' },
  },
  {
    id: 'p3',
    title: 'Zero-Lag Interactive SaaS Dashboard System',
    category: 'Web Developer',
    description:
      'High-performance full-stack web application featuring optimistic UI updates, background data syncing, server-side caching, and responsive bento-grid layouts.',
    impact: 'Maintained 60 FPS animation fluidness on low-tier mobile devices with perfect 100 Lighthouse score.',
    tags: ['React', 'TypeScript', 'Node.js', 'Express', 'Tailwind CSS'],
    githubUrl: 'https://github.com/yashvirpaul/saas-dashboard-core',
    liveUrl: 'https://saas-core-preview.run.app',
    metrics: { label: 'Lighthouse Score', value: '100 / 100' },
  },
  {
    id: 'p4',
    title: 'Geometric Minimalist Design System & Token Studio',
    category: 'UI/UX Designer',
    description:
      'Comprehensive design system designed with strict mathematical grid constraints, high-contrast monochrome color palettes, and accessible touch target mechanics.',
    impact: 'Adopted across 12 client production web applications with 0 accessibility defects.',
    tags: ['Figma', 'UI Architecture', 'Mathematical Typography', 'Design Tokens', 'Tailwind'],
    githubUrl: 'https://github.com/yashvirpaul/geometric-tokens',
    liveUrl: 'https://fluid-ui.design',
    metrics: { label: 'Design Tokens', value: '120+ tokens' },
  },
  {
    id: 'p5',
    title: 'Customer Sentiment & Revenue Forecasting Model',
    category: 'Data Analyst',
    description:
      'Built an end-to-end data pipeline processing customer feedback surveys, support tickets, and churn signals to accurately predict quarter revenue trajectories.',
    impact: 'Achieved 94.2% forecasting accuracy over 4 consecutive fiscal quarters.',
    tags: ['Python', 'Pandas', 'Scikit-Learn', 'D3.js', 'PostgreSQL'],
    githubUrl: 'https://github.com/yashvirpaul/revenue-forecast-analytics',
    liveUrl: 'https://forecast-model-preview.run.app',
    metrics: { label: 'Accuracy', value: '94.2%' },
  },
  {
    id: 'p6',
    title: 'Smart WhatsApp & Telegram Lead Automation Bot',
    category: 'AI Automations Maker',
    description:
      'Conversational AI agent connected to CRM and calendar systems that qualifies incoming customer leads in natural language, handles objections, and schedules discovery calls.',
    impact: 'Automated 80% of top-of-funnel customer intake without human triage.',
    tags: ['Node.js', 'WhatsApp Business API', 'Gemini API', 'Webhook Pipelines'],
    githubUrl: 'https://github.com/yashvirpaul/whatsapp-lead-bot',
    liveUrl: 'https://leadbot-demo.run.app',
    metrics: { label: 'Lead Conversion', value: '+34%' },
  },
];

export const skillsData: SkillItem[] = [
  {
    id: 's-ai-receptionist',
    name: 'AI RECEPTIONIST',
    category: 'AI Automations Maker',
    proficiency: 96,
    experience: '3+ yrs',
    tools: ['Gemini 3.7 Flash', 'Twilio Voice', 'WhatsApp Business API', 'Whisper STT', 'ElevenLabs TTS', 'Webhooks'],
    description:
      'Deploying intelligent 24/7 multi-channel voice & conversational receptionists that triage inquiries, qualify inbound leads, schedule calendar bookings, and resolve FAQs seamlessly.',
  },
  {
    id: 's-saas-edits',
    name: 'SAAS EDITS',
    category: 'Web Developer',
    proficiency: 95,
    experience: '4+ yrs',
    tools: ['React 19', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Vite', 'Full-Stack Audits', 'Performance Tuning'],
    description:
      'Precision code refactoring, rapid SaaS feature upgrades, conversion-focused layout revamps, responsiveness overhauls, and sub-second load time optimizations for production web apps.',
  },
  {
    id: 's-n8n-automations',
    name: 'N8N AUTOMATIONS',
    category: 'AI Automations Maker',
    proficiency: 94,
    experience: '3+ yrs',
    tools: ['n8n Self-Hosted', 'Node.js Code Nodes', 'REST APIs', 'Custom Webhooks', 'PostgreSQL', 'OAuth 2.0'],
    description:
      'Architecting complex event-driven workflow automations, custom n8n node integrations, automated data sync pipelines, and reliable microservice orchestrations without third-party vendor lock-in.',
  },
  {
    id: 's-automated-workflows',
    name: 'AUTOMATED WORKFLOWS',
    category: 'AI Automations Maker',
    proficiency: 96,
    experience: '4+ yrs',
    tools: ['Zapier', 'Make.com', 'n8n', 'CRON Jobs', 'Slack Bots', 'Stripe Webhooks', 'Airtable Sync'],
    description:
      'Building automated end-to-end business operations connecting CRM, invoicing, client onboarding, instant notifications, and multi-app data synchronization with zero manual friction.',
  },
  {
    id: 's-web-dev',
    name: 'WEB DEVELOPMENT',
    category: 'Web Developer',
    proficiency: 98,
    experience: '5+ yrs',
    tools: ['React 19', 'TypeScript', 'Node.js', 'Express', 'Tailwind CSS', 'Vite', 'PostgreSQL', 'REST & GraphQL'],
    description:
      'Engineering lightning-fast, production-grade web applications with modular architecture, strict type-safety, responsive geometric layouts, and rock-solid backend microservices.',
  },
  {
    id: 's-data-analyst',
    name: 'DATA ANALYST',
    category: 'Data Analyst',
    proficiency: 92,
    experience: '4+ yrs',
    tools: ['Python', 'Pandas', 'SQL', 'PostgreSQL', 'Recharts', 'D3.js', 'Statistical Modeling', 'Tableau'],
    description:
      'Extracting deep insights from high-velocity telemetry logs, customer event tracking, and financial transactions to build intuitive, real-time business intelligence dashboards.',
  },
  {
    id: 's-ui-ux-design',
    name: 'UI/UX DESIGN',
    category: 'UI/UX Designer',
    proficiency: 95,
    experience: '4+ yrs',
    tools: ['Figma', 'Geometric Balance System', 'Design Tokens', 'Mathematical Scaling', 'WCAG AA', 'Motion'],
    description:
      'Designing clean, distraction-free minimalist user interfaces adhering to strict optical mathematics, high-contrast monochrome palettes, and ergonomic touch/click interactions.',
  },
  {
    id: 's-social-management',
    name: 'SOCIAL MANAGEMENT',
    category: 'Growth & SEO',
    proficiency: 89,
    experience: '3+ yrs',
    tools: ['Social Media APIs', 'Automated Content Queues', 'AI Copy Generation', 'Engagement Analytics', 'Multi-Platform Distribution'],
    description:
      'Automated multi-channel social media scheduling, cross-platform distribution engines, AI-assisted technical post generation, and audience growth analytics pipelines.',
  },
  {
    id: 's-google-search-listing',
    name: 'GOOGLE SEARCH TOP LISTING',
    category: 'Growth & SEO',
    proficiency: 93,
    experience: '4+ yrs',
    tools: ['Technical SEO', 'Schema.org JSON-LD', 'Core Web Vitals 100', 'Google Search Console', 'Keyword Mapping', 'Semantic HTML5'],
    description:
      'Dominating search rankings with rigorous technical SEO, sub-100ms TTFB server response speeds, rich snippet structured data, and high-authority search intent optimization.',
  },
  {
    id: 's-scaling-business',
    name: 'SCALING BUISNESS GLOBALLY',
    category: 'Global Scaling',
    proficiency: 91,
    experience: '3+ yrs',
    tools: ['Global Cloud Run & Edge', 'Multi-Currency Stripe', 'i18n Localization', 'Distributed Systems', 'Venture Ops'],
    description:
      'Structuring enterprise architectures for cross-border expansion, multi-region low-latency cloud deployments, localized checkout flows, and automated scaling playbooks.',
  },
];

export const timelineData: TimelineItem[] = [
  {
    id: 't1',
    role: 'Founder & Head of Product',
    organization: 'GROW BUISNESS & Fluid',
    location: 'Hyderabad, India',
    period: '2024 - Present',
    type: 'startup',
    description:
      'Leading product direction, technical architecture, and UI/UX design across GROW BUISNESS automation platform and Fluid design toolchain.',
    achievements: [
      'Grew GROW BUISNESS active client and scaling ecosystem past 14,000 members across global hubs.',
      'Shipped Fluid open-source component library used by 28,000+ monthly developers.',
      'Managed all full-stack engineering, API design, n8n automations, and global operations.',
    ],
    technologies: ['React 19', 'TypeScript', 'Node.js', 'n8n Automations', 'Express', 'Tailwind CSS', 'Figma'],
  },
  {
    id: 't2',
    role: 'Co-Founder & Engineering Lead',
    organization: 'StantUp',
    location: 'Hyderabad, India',
    period: '2024 - Present',
    type: 'startup',
    description:
      'Architected the venture intelligence engine and founder matchmaking platform.',
    achievements: [
      'Built automated intelligence scrapers profiling 1,200+ technology startups.',
      'Designed matching algorithms connecting hundreds of founders to angel investors.',
    ],
    technologies: ['Python', 'FastAPI', 'Gemini AI', 'Next.js', 'PostgreSQL'],
  },
  {
    id: 't3',
    role: 'Full-Stack Developer & AI Consultant',
    organization: 'Autonomous Tech Consultancies',
    location: 'Remote',
    period: '2023 - 2024',
    type: 'experience',
    description:
      'Delivered custom web applications, LLM workflow automations, and data analytics dashboards for enterprise and startup clients.',
    achievements: [
      'Designed and deployed 15+ custom web apps with 99.9% uptime reliability.',
      'Automated customer support pipelines with conversational LLM bots saving 200+ monthly team hours.',
    ],
    technologies: ['React', 'TypeScript', 'Gemini API', 'PostgreSQL', 'Tailwind'],
  },
  {
    id: 't4',
    role: 'Computer Science & Technology Education',
    organization: 'Technical University',
    location: 'India',
    period: '2021 - 2025',
    type: 'education',
    description:
      'Specialized in Software Engineering, Human-Computer Interaction, Distributed Systems, and Data Science.',
    achievements: [
      'Graduated with honors in core computer science modules.',
      'Led university Developer Club and organized 3 major regional hackathons.',
    ],
    technologies: ['Data Structures', 'Algorithms', 'Database Management', 'System Design'],
  },
];

export const githubStatsData: GitHubStats = {
  totalCommits: 1480,
  currentStreakDays: 142,
  starsEarned: 384,
  pullRequests: 215,
  topLanguages: [
    { name: 'TypeScript', percentage: 48, color: '#3178c6' },
    { name: 'JavaScript / React', percentage: 26, color: '#f7df1e' },
    { name: 'Python', percentage: 16, color: '#3776ab' },
    { name: 'HTML / CSS / Tailwind', percentage: 10, color: '#38bdf8' },
  ],
  featuredRepos: [
    {
      name: 'fluid-design-system',
      description: 'Zero-runtime geometric component tokens and accessible React primitives.',
      stars: 189,
      forks: 34,
      language: 'TypeScript',
      url: 'https://github.com/yashvirpaul/fluid-design-system',
    },
    {
      name: 'autonomous-llm-orchestrator',
      description: 'Multi-agent coordination framework using Gemini 3.7 Flash & tool calling.',
      stars: 124,
      forks: 28,
      language: 'Python',
      url: 'https://github.com/yashvirpaul/autonomous-llm-orchestrator',
    },
    {
      name: 'grow-buisness-platform',
      description: 'Scalable business automation engine with real-time analytics and workflow verification.',
      stars: 86,
      forks: 19,
      language: 'TypeScript',
      url: 'https://github.com/yashvirpaul/grow-buisness-platform',
    },
    {
      name: 'telemetry-dashboard-recharts',
      description: 'Sub-100ms financial transaction and time-series analytical visualization board.',
      stars: 62,
      forks: 12,
      language: 'TypeScript',
      url: 'https://github.com/yashvirpaul/telemetry-dashboard-recharts',
    },
  ],
  contributions: Array.from({ length: 52 * 7 }, (_, i) => {
    const d = new Date();
    d.setDate(d.getDate() - (52 * 7 - i));
    const count = (i % 7 === 0 || i % 5 === 0) ? Math.floor(Math.sin(i * 0.4) * 4 + 4) : Math.floor(Math.random() * 6);
    return {
      date: d.toISOString().split('T')[0],
      count: Math.max(0, count),
    };
  }),
};

export const blogPostsData: BlogPost[] = [
  {
    id: 'b1',
    title: 'Building Autonomous AI Agents with Gemini 3.7 Flash: Practical Patterns',
    excerpt:
      'A deep dive into tool-calling architectures, system prompt design, and latency optimization when building enterprise LLM workflows.',
    category: 'AI & Automation',
    date: 'February 2026',
    readTime: '6 min read',
    tags: ['Gemini 3.7 Flash', 'LLM Agents', 'Function Calling', 'TypeScript'],
    views: 1420,
    likes: 128,
    author: 'Yashvir Paul',
    content: `### Introduction
Autonomous AI agent workflows are transforming how software engineers interface with large language models. Rather than simple text-in, text-out chatbots, modern systems execute complex, multi-step tasks by decomposing user intent and executing deterministic tool calls.

### Why Gemini 3.7 Flash?
With Gemini 3.7 Flash, token throughput is exceptionally fast, allowing multiple rounds of reasoning and tool calls in sub-second intervals. Combining system instructions with explicit JSON function declarations enables zero-ambiguity execution.

\`\`\`ts
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
  httpOptions: { headers: { 'User-Agent': 'aistudio-build' } }
});

const response = await ai.models.generateContent({
  model: 'gemini-3.7-flash',
  contents: 'Analyze telemetry logs and trigger anomaly webhook',
  config: {
    systemInstruction: 'You are an autonomous operations engineer...',
  }
});
\`\`\`

### Core Architectural Rules
1. **Never expose keys to the client**: Always route agent requests through server-side endpoints.
2. **Deterministic Fallbacks**: Provide clear, graceful error responses if rate limits or network issues occur.
3. **Structured Schemas**: Use strongly-typed interfaces to validate agent outputs before triggering downstream business logic.`,
  },
  {
    id: 'b2',
    title: 'Optical Mathematics in Modern UI: The Geometric Balance System',
    excerpt:
      'Why generic rounded cards create visual clutter, and how mathematical step ratios (1.25+), nested corner physics, and monochrome contrast build timeless software.',
    category: 'UI/UX Design',
    date: 'January 2026',
    readTime: '5 min read',
    tags: ['Design Systems', 'Typography', 'Figma', 'Tailwind CSS'],
    views: 1980,
    likes: 215,
    author: 'Yashvir Paul',
    content: `### The Problem with "AI Slop" UI
Much of contemporary web design relies on identical 3-column card layouts, loud purple-to-blue gradients, and arbitrary rounded pill buttons. These aesthetic tropes degrade cognitive clarity.

### The Nested Border Radius Formula
When placing a container inside another container, standard rounded corners look distorted if radii match. The mathematical formula for harmonious nesting is:
\`Inner Radius = Outer Radius - Padding\`

When padding equals or exceeds the outer radius, the inner corner should be sharp (0px) or precisely calculated.

### Monochromatic Contrast & Typography
Using high-contrast black (#000000) and white (#FFFFFF) with subtle grid lines (#222222) emphasizes content hierarchy over decorative noise. Pairing a distinctive geometric display typeface with a monospace metadata font provides instant visual rhythm.`,
  },
  {
    id: 'b3',
    title: 'Zero-Lag Analytics: Visualizing 50,000 Events per Second in React',
    excerpt:
      'Techniques for rendering high-density financial metrics and time-series telemetry charts without freezing the browser main thread.',
    category: 'Data Analytics',
    date: 'December 2025',
    readTime: '7 min read',
    tags: ['React 19', 'Recharts', 'Performance', 'WebSockets'],
    views: 1640,
    likes: 174,
    author: 'Yashvir Paul',
    content: `### High-Frequency Telemetry Challenges
Rendering thousands of real-time data points per minute can cause severe UI layout thrashing if state updates trigger full React component tree re-renders.

### Key Optimization Strategies
1. **Data Decimation & Downsampling**: Using the Largest-Triangle-Three-Buckets (LTTB) algorithm on the server before streaming data chunks.
2. **Worker-Thread Computation**: Offloading aggregation, regression calculation, and rolling averages to Web Workers.
3. **Optimized SVG/Canvas Layers**: Using lightweight Recharts primitives configured without unnecessary animations on rapid streaming intervals.`,
  },
];
