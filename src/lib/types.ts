export interface NavLink {
  label: string;
  href: string;
  children?: NavLink[];
}

export interface MainNavItem {
  label: string;
  href: string;
  megaMenu?: NavLink[];
  highlight?: boolean;
}

export interface Product {
  id: string;
  sku: string;
  slug: string;
  name: string;
  category: ProductCategory;
  price: number;
  priceMax?: number;
  image: string;
  rating: number;
  reviewCount: number;
  inStock: boolean;
}

export type ProductCategory =
  | "noi-bat"
  | "o-cam-ray-truot"
  | "o-cam-dien"
  | "cong-tac-dien";

export interface NewsArticle {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  publishedAt: string;
  image?: string;
}

export interface VideoItem {
  id: string;
  title: string;
  thumbnail: string;
  url: string;
}

export interface PolicyPage {
  slug: string;
  title: string;
  description: string;
}

export interface SiteConfig {
  name: string;
  tagline: string;
  companyName: string;
  taxCode: string;
  representative: string;
  address: string;
  hotline: string;
  email: string;
}
