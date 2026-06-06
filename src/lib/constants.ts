import type { NavLink, Service, Project, Testimonial, CaseStudy, Metric, ProcessStep, TeamMember } from '@/types';

export const NAV_LINKS: NavLink[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Contact', href: '/contact' },
];

export const METRICS: Metric[] = [
  { value: '200', label: 'Projects Delivered', suffix: '+' },
  { value: '5', label: 'Years Experience', suffix: '+' },
  { value: '98', label: 'Client Satisfaction', suffix: '%' },
  { value: '15', label: 'Industries Served', suffix: '+' },
];

export const SERVICES: Service[] = [
  {
    id: 'seo',
    title: 'SEO & Search Visibility',
    description: 'Dominate search rankings and drive qualified organic traffic that converts.',
    icon: 'Search',
    benefits: ['Technical SEO audits', 'Keyword strategy', 'Content optimization', 'Link building'],
    group: 'growth',
  },
  {
    id: 'digital-marketing',
    title: 'Digital Marketing',
    description: 'Full-funnel digital marketing campaigns that generate measurable ROI.',
    icon: 'TrendingUp',
    benefits: ['PPC advertising', 'Social media ads', 'Email campaigns', 'Analytics & reporting'],
    group: 'growth',
  },
  {
    id: 'content-strategy',
    title: 'Content Strategy',
    description: 'Strategic content that builds authority, trust, and drives conversions.',
    icon: 'FileText',
    benefits: ['Content planning', 'Blog writing', 'Video scripts', 'Brand voice'],
    group: 'growth',
  },
  {
    id: 'branding',
    title: 'Brand Identity',
    description: 'Compelling brand identities that make your business unforgettable.',
    icon: 'Palette',
    benefits: ['Logo design', 'Brand guidelines', 'Visual system', 'Brand strategy'],
    group: 'growth',
  },
  {
    id: 'websites',
    title: 'Business Websites',
    description: 'High-performance websites built to convert visitors into customers.',
    icon: 'Globe',
    benefits: ['Custom design', 'CMS integration', 'Speed optimized', 'Mobile-first'],
    group: 'systems',
  },
  {
    id: 'web-apps',
    title: 'Web Applications',
    description: 'Scalable web applications with exceptional user experiences.',
    icon: 'Code2',
    benefits: ['React/Next.js', 'Real-time features', 'API integration', 'Cloud deployment'],
    group: 'systems',
  },
  {
    id: 'software',
    title: 'Software Solutions',
    description: 'Custom software engineered to solve your unique business challenges.',
    icon: 'Cpu',
    benefits: ['Custom development', 'System architecture', 'API development', 'Database design'],
    group: 'systems',
  },
  {
    id: 'enterprise',
    title: 'Enterprise Systems',
    description: 'Enterprise-grade systems that scale with your growing organization.',
    icon: 'Building2',
    benefits: ['ERP integrations', 'CRM systems', 'Data pipelines', 'Security compliance'],
    group: 'systems',
  },
  {
    id: 'automation',
    title: 'Business Automation',
    description: 'Eliminate repetitive tasks and multiply your team\'s productivity.',
    icon: 'Zap',
    benefits: ['Workflow automation', 'Process mapping', 'Tool integration', 'ROI tracking'],
    group: 'scale',
  },
  {
    id: 'ai',
    title: 'AI Integration',
    description: 'Embed AI capabilities into your products and workflows.',
    icon: 'Brain',
    benefits: ['LLM integration', 'AI chatbots', 'Data analysis', 'Predictive models'],
    group: 'scale',
  },
  {
    id: 'analytics',
    title: 'Analytics & Insights',
    description: 'Turn your data into actionable insights and competitive advantages.',
    icon: 'BarChart3',
    benefits: ['Dashboard design', 'KPI tracking', 'Business intelligence', 'Data visualization'],
    group: 'scale',
  },
  {
    id: 'optimization',
    title: 'Growth Optimization',
    description: 'Continuous optimization of your systems for compounding growth.',
    icon: 'Rocket',
    benefits: ['A/B testing', 'Conversion rate optimization', 'Performance audits', 'Growth strategy'],
    group: 'scale',
  },
];

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'NexaCommerce Platform',
    category: 'Web',
    description: 'Enterprise e-commerce platform handling $2M+ monthly transactions with real-time inventory management.',
    tags: ['Next.js', 'TypeScript', 'PostgreSQL'],
    gradient: 'from-purple-600 via-pink-500 to-cyan-400',
  },
  {
    id: '2',
    title: 'FlowCRM System',
    category: 'Software',
    description: 'Custom CRM built for a 200-person sales team, increasing deal close rates by 34%.',
    tags: ['React', 'Node.js', 'MongoDB'],
    gradient: 'from-cyan-500 via-blue-500 to-purple-600',
  },
  {
    id: '3',
    title: 'PulseHealth Brand',
    category: 'Branding',
    description: 'Complete brand identity for a health-tech startup that raised $4M Series A.',
    tags: ['Brand Strategy', 'Visual Identity', 'UI/UX'],
    gradient: 'from-pink-500 via-rose-500 to-orange-400',
  },
  {
    id: '4',
    title: 'AutomateIQ Dashboard',
    category: 'Software',
    description: 'Business automation platform that saved a logistics company 1,200 hours/month.',
    tags: ['Python', 'React', 'AWS'],
    gradient: 'from-green-400 via-cyan-500 to-blue-500',
  },
  {
    id: '5',
    title: 'Elevate Marketing Hub',
    category: 'Marketing',
    description: 'Digital marketing strategy that grew organic traffic 312% in 8 months.',
    tags: ['SEO', 'Content', 'Analytics'],
    gradient: 'from-yellow-400 via-orange-500 to-pink-500',
  },
  {
    id: '6',
    title: 'ArchitectPro Web',
    category: 'Web',
    description: 'Award-winning portfolio site for a leading architecture firm with immersive 3D showcases.',
    tags: ['Three.js', 'GSAP', 'Next.js'],
    gradient: 'from-purple-500 via-indigo-500 to-blue-400',
  },
  {
    id: '7',
    title: 'TrustGuard SaaS',
    category: 'Software',
    description: 'B2B SaaS platform for compliance management used by 50+ enterprises.',
    tags: ['SaaS', 'React', 'Microservices'],
    gradient: 'from-teal-400 via-cyan-500 to-blue-600',
  },
  {
    id: '8',
    title: 'SkyLaunch Rebrand',
    category: 'Branding',
    description: 'Full rebrand for an aerospace startup resulting in 3x investor inquiries.',
    tags: ['Branding', 'Pitch Deck', 'Identity'],
    gradient: 'from-blue-500 via-purple-500 to-pink-500',
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Mitchell',
    role: 'CEO',
    company: 'NexaCommerce',
    quote: 'Zenthoz transformed our entire digital infrastructure. The platform they built handles millions in transactions flawlessly. They don\'t just build — they engineer growth.',
    avatar: 'SM',
  },
  {
    id: '2',
    name: 'James Adeyemi',
    role: 'Founder',
    company: 'FlowCRM',
    quote: 'Working with Zenthoz felt like having a world-class tech co-founder. Their attention to detail and strategic thinking is unmatched. Our team productivity doubled.',
    avatar: 'JA',
  },
  {
    id: '3',
    name: 'Priya Sharma',
    role: 'Marketing Director',
    company: 'PulseHealth',
    quote: 'The brand Zenthoz created for us was instrumental in our Series A fundraise. Investors noticed — they literally said "your brand stands out." Pure excellence.',
    avatar: 'PS',
  },
  {
    id: '4',
    name: 'Marcus Chen',
    role: 'COO',
    company: 'AutomateIQ',
    quote: 'The automation systems Zenthoz built saved us 1,200 hours per month. The ROI was evident within the first 30 days. These people truly understand business.',
    avatar: 'MC',
  },
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: '1',
    client: 'NexaCommerce',
    industry: 'E-Commerce',
    challenge: 'Legacy platform crashing under traffic, losing $50K/month in abandoned carts.',
    solution: 'Built a high-performance Next.js platform with real-time inventory and seamless checkout flow.',
    outcome: '300% increase in conversions, zero downtime, $2M+ monthly transactions handled.',
    gradient: 'from-purple-600 to-pink-500',
  },
  {
    id: '2',
    client: 'TrustGuard',
    industry: 'B2B SaaS',
    challenge: 'Manual compliance processes taking 40+ hours per week per team member.',
    solution: 'Designed and built a full SaaS compliance management platform with automated workflows.',
    outcome: '85% reduction in compliance time, 50+ enterprise clients, $1.2M ARR in year one.',
    gradient: 'from-cyan-500 to-blue-600',
  },
  {
    id: '3',
    client: 'SkyLaunch',
    industry: 'Aerospace',
    challenge: 'Weak brand identity causing credibility issues with potential investors and clients.',
    solution: 'Complete brand overhaul including identity, pitch deck, website, and go-to-market strategy.',
    outcome: '3x increase in investor meetings, secured $8M seed round, 200% website traffic growth.',
    gradient: 'from-pink-500 to-orange-400',
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: '01',
    title: 'Discover',
    description: 'Deep-dive into your business, goals, audience, and competitive landscape to build a strategic foundation.',
  },
  {
    number: '02',
    title: 'Design',
    description: 'Craft pixel-perfect designs that marry aesthetics with conversion psychology and brand identity.',
  },
  {
    number: '03',
    title: 'Engineer',
    description: 'Build with precision using modern tech stacks, clean architecture, and performance as a first principle.',
  },
  {
    number: '04',
    title: 'Launch',
    description: 'Deploy with zero-downtime pipelines, thorough QA, and a comprehensive go-live strategy.',
  },
  {
    number: '05',
    title: 'Scale',
    description: 'Continuously optimize, iterate, and expand your digital systems for compounding growth.',
  },
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: '1',
    name: 'Alex Zenthoz',
    role: 'Founder & CEO',
    bio: 'Visionary leader with 8+ years building digital products that redefine industries.',
  },
  {
    id: '2',
    name: 'Maya Rodriguez',
    role: 'Head of Design',
    bio: 'Award-winning designer obsessed with creating experiences that feel inevitable.',
  },
  {
    id: '3',
    name: 'David Park',
    role: 'Lead Engineer',
    bio: 'Full-stack architect who has built systems serving millions of users globally.',
  },
  {
    id: '4',
    name: 'Zara Ahmed',
    role: 'Growth Strategist',
    bio: 'Data-driven growth expert who has scaled brands from zero to market leaders.',
  },
];

export const SOCIAL_LINKS = [
  { label: 'Twitter', href: 'https://twitter.com/zenthoz', icon: 'Twitter' },
  { label: 'LinkedIn', href: 'https://linkedin.com/company/zenthoz', icon: 'Linkedin' },
  { label: 'Instagram', href: 'https://instagram.com/zenthoz', icon: 'Instagram' },
  { label: 'GitHub', href: 'https://github.com/zenthoz', icon: 'Github' },
];

export const COMPANY_VALUES = [
  {
    title: 'Excellence First',
    description: 'We refuse mediocrity. Every pixel, every line of code, every strategy is crafted to be exceptional.',
    icon: 'Star',
  },
  {
    title: 'Results Obsessed',
    description: 'Beautiful work is worthless without impact. We measure everything and optimize relentlessly.',
    icon: 'Target',
  },
  {
    title: 'Radical Transparency',
    description: 'No black boxes. You get full visibility into our process, progress, and thinking.',
    icon: 'Eye',
  },
  {
    title: 'Strategic Partnership',
    description: 'We\'re not vendors — we\'re invested partners who care about your long-term success.',
    icon: 'Handshake',
  },
  {
    title: 'Velocity & Precision',
    description: 'We move fast without breaking things. Speed and quality are not mutually exclusive.',
    icon: 'Zap',
  },
  {
    title: 'Continuous Learning',
    description: 'Technology evolves daily. We stay ahead so your business always has the edge.',
    icon: 'BookOpen',
  },
];

export const MILESTONES = [
  { year: '2019', title: 'Founded', description: 'Zenthoz was born with a mission to democratize world-class digital execution.' },
  { year: '2020', title: 'First 50 Clients', description: 'Rapid growth driven by word-of-mouth and exceptional client results.' },
  { year: '2021', title: 'AI Division Launch', description: 'Launched our AI & Automation practice, ahead of the industry curve.' },
  { year: '2022', title: '100+ Projects', description: 'Crossed the milestone of 100 successful project deliveries.' },
  { year: '2023', title: 'Enterprise Expansion', description: 'Began serving Fortune 500 companies with enterprise-grade solutions.' },
  { year: '2024', title: '200+ Projects & Global', description: 'Expanded operations globally, serving clients across 15+ industries.' },
];
