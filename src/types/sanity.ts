// Sanity Document Types

export interface SanityImage {
  _type: "image";
  asset: {
    _ref: string;
    _type: "reference";
  };
  alt?: string;
}

export interface HeroSection {
  _id: string;
  _type: "heroSection";
  title: string;
  subtitle: string;
  description: string;
  backgroundImage: SanityImage;
  ctaText: string;
  ctaLink?: string;
  showVideoButton?: boolean;
  videoUrl?: string;
}

export interface Service {
  _id: string;
  _type: "service";
  title: string;
  description: string;
  icon: SanityImage;
  order: number;
}

export interface WorkProcess {
  _id: string;
  _type: "workProcess";
  title: string;
  description: string;
  stepNumber: number;
  icon?: SanityImage;
}

export interface FAQ {
  _id: string;
  _type: "faq";
  question: string;
  answer: string;
  order: number;
  category?: string;
}

export interface Stats {
  _id: string;
  _type: "stats";
  label: string;
  value: number;
  suffix?: string;
  prefix?: string;
  icon?: SanityImage;
  order: number;
}

export interface Partner {
  _id: string;
  _type: "partner";
  name: string;
  logo: SanityImage;
  website?: string;
  order: number;
}

export interface Blog {
  _id: string;
  _type: "blog";
  title: string;
  slug: {
    current: string;
  };
  excerpt: string;
  content: any[]; // Portable Text / Block content
  mainImage: SanityImage;
  category: string;
  author: string;
  publishedAt: string;
  readTime: number;
  featured: boolean;
  tags?: string[];
  metaDescription?: string;
  _createdAt: string;
  _updatedAt: string;
}

export interface CompanyInfo {
  _id: string;
  _type: "companyInfo";
  name: string;
  fullName: string;
  description: string;
  email: string;
  phone: string;
  address: string;
  logo: SanityImage;
  socialMedia: {
    instagram?: string;
    linkedin?: string;
    facebook?: string;
    twitter?: string;
  };
}

export interface SiteSettings {
  _id: string;
  _type: "siteSettings";
  title: string;
  description: string;
  keywords: string[];
  favicon: SanityImage;
  ogImage: SanityImage;
}
