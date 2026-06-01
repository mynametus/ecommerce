import type { ProductCategory, SiteConfig } from "@/lib/types";

export const SITE_CONFIG: SiteConfig = {
  name: "LG Tech",
  tagline: "Technology For Life",
  companyName: "Công ty Cổ Phần Đầu Tư Công Nghệ Linh Gia",
  taxCode: "0108914506",
  representative: "Phan Anh Tuấn",
  address:
    "Số 18 TT1, Khu đô thị Ao Sào, Phường Hoàng Mai, Hà Nội",
  hotline: "0787.568.113",
  email: "tuan.pa.ht@gmail.com",
};

export const PRODUCT_CATEGORY_LABELS: Record<ProductCategory, string> = {
  "noi-bat": "Sản phẩm nổi bật",
  "o-cam-ray-truot": "Ổ cắm ray trượt",
  "o-cam-dien": "Ổ cắm điện",
  "cong-tac-dien": "Công tắc điện",
};

export const FEATURED_TABS: { id: ProductCategory; label: string }[] = [
  { id: "noi-bat", label: "Sản phẩm nổi bật" },
  { id: "o-cam-ray-truot", label: "Ổ cắm ray trượt" },
  { id: "o-cam-dien", label: "Ổ cắm điện" },
  { id: "cong-tac-dien", label: "Công tắc điện" },
];
