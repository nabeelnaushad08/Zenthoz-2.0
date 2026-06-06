export interface NavLink {
  label: string;
  href: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  benefits: string[];
  group: 'growth' | 'systems' | 'scale';
}

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  tags: string[];
  gradient: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  quote: string;
  avatar: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
}

export interface CaseStudy {
  id: string;
  client: string;
  industry: string;
  challenge: string;
  solution: string;
  outcome: string;
  gradient: string;
}

export interface Metric {
  value: string;
  label: string;
  suffix?: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  company: string;
  phone: string;
  projectType: string;
  budget: string;
  timeline: string;
  message: string;
}
