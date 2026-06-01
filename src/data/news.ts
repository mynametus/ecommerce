import type { NewsArticle } from "@/lib/types";

export const MOCK_NEWS: NewsArticle[] = [
  {
    id: "1",
    slug: "top-5-o-dien-am-tuong",
    title:
      "Top 5 mẫu ổ điện âm tường đẹp, sang trọng và an toàn nhất hiện nay",
    excerpt:
      "Gợi ý các mẫu ổ điện âm tường LG Tech phù hợp không gian hiện đại.",
    category: "Tin tức",
    publishedAt: "2025-07-03",
  },
  {
    id: "2",
    slug: "o-cam-ray-truot-lg-tech",
    title:
      "Ổ cắm ray trượt LG Tech – Sự lựa chọn tối ưu cho gia đình hiện đại",
    excerpt:
      "Giải pháp ổ cắm thanh ray tiện lợi, thẩm mỹ cho phòng khách và văn phòng.",
    category: "Tin tức",
    publishedAt: "2025-01-24",
  },
  {
    id: "3",
    slug: "thong-bao-tem-bao-hanh",
    title: "Thông báo về dán tem bảo hành sản phẩm LG Tech",
    excerpt: "Cập nhật quy trình dán tem bảo hành chính hãng.",
    category: "Tin tức",
    publishedAt: "2024-10-15",
  },
  {
    id: "4",
    slug: "huong-dan-kich-hoat-bao-hanh",
    title: "Hướng dẫn kích hoạt bảo hành điện tử sản phẩm LG Tech",
    excerpt: "Các bước kích hoạt bảo hành điện tử nhanh chóng.",
    category: "Tin tức",
    publishedAt: "2024-10-09",
  },
];

export function getNewsBySlug(slug: string): NewsArticle | undefined {
  return MOCK_NEWS.find((article) => article.slug === slug);
}
