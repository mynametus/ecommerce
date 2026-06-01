# LG Tech Clone — Next.js Base

Cấu trúc base e-commerce tham khảo [lg.com.vn](https://lg.com.vn/), xây bằng **Next.js App Router**, TypeScript và Tailwind CSS.

## Chạy dự án

```bash
npm install
npm run dev
```

Mở [http://localhost:3000](http://localhost:3000).

## Cấu trúc thư mục

```
src/
├── app/                    # Routes (App Router)
│   ├── page.tsx            # Trang chủ
│   ├── san-pham/           # Danh sách + chi tiết / danh mục
│   ├── chinh-sach/         # Chính sách
│   ├── tin-tuc/            # Tin tức
│   ├── ve-chung-toi/
│   ├── lien-he/
│   ├── tim-kiem/
│   └── gio-hang/
├── components/
│   ├── layout/             # Header, footer, mega menu, mobile nav
│   ├── home/               # Hero, sản phẩm nổi bật, video, tin tức
│   ├── product/            # Product card
│   └── ui/                 # Container, button, page header
├── data/                   # Mock navigation, products, news
└── lib/                    # Types, constants, utils (format VND)
```

## Routes chính (giống lg.com.vn)

| Route | Mô tả |
|-------|--------|
| `/` | Trang chủ: hero, tab sản phẩm, video, catalogue, tin |
| `/san-pham` | Tất cả sản phẩm |
| `/san-pham/[slug]` | Chi tiết SP hoặc danh mục |
| `/chinh-sach`, `/chinh-sach/[slug]` | Chính sách |
| `/tin-tuc`, `/tin-tuc/[slug]` | Tin tức |
| `/ve-chung-toi` | Giới thiệu |
| `/lien-he` | Liên hệ |
| `/tim-kiem?q=` | Tìm kiếm |
| `/gio-hang` | Giỏ hàng (placeholder) |

## Bước tiếp theo gợi ý

1. **CMS / API**: WooCommerce, Shopify Storefront, hoặc headless CMS cho sản phẩm & bài viết.
2. **Giỏ hàng**: Zustand + API add-to-cart.
3. **i18n**: `next-intl` nếu cần đa ngôn ngữ.
4. **SEO**: metadata động, sitemap, structured data Product.
5. **Hình ảnh**: thay placeholder trong `public/images/`.

## Tech stack

- Next.js 16 (App Router)
- React 19
- Tailwind CSS 4
- TypeScript
"# shop" 
"# shop" 
"# shop" 
"# ecommerce" 
"# ecommerce" 
