import type { MainNavItem } from "@/lib/types";

export const MAIN_NAV: MainNavItem[] = [
  {
    label: "Trang chủ",
    href: "/",
  },
  {
    label: "Sản phẩm",
    href: "/san-pham",
    megaMenu: [
      {
        label: "Ổ cắm thanh ray",
        href: "/san-pham/o-cam-thanh-ray",
        children: [
          { label: "Tổng hợp ổ cắm thanh ray", href: "/san-pham/o-cam-thanh-ray" },
          { label: "Thanh ray thế hệ một", href: "/san-pham/thanh-ray-the-he-mot" },
          { label: "Thanh ray thế hệ hai", href: "/san-pham/thanh-ray-the-he-hai" },
          { label: "Thanh ray điện nổi", href: "/san-pham/thanh-ray-dien-noi" },
          { label: "Thanh ray điện âm", href: "/san-pham/thanh-ray-dien-am" },
          { label: "Ổ cắm điện gắn cho thanh ray", href: "/san-pham/o-cam-gan-thanh-ray" },
        ],
      },
      {
        label: "Ổ cắm điện",
        href: "/san-pham/o-cam-dien",
        children: [
          { label: "Tổng hợp ổ cắm điện", href: "/san-pham/o-cam-dien" },
          { label: "Ổ cắm âm tường", href: "/san-pham/o-cam-am-tuong" },
          { label: "Ổ cắm USB âm tường", href: "/san-pham/o-cam-usb-am-tuong" },
          { label: "Ổ cắm mạng âm tường", href: "/san-pham/o-cam-mang-am-tuong" },
          { label: "Ổ âm tường đa phương tiện", href: "/san-pham/o-am-tuong-da-phuong-tien" },
          { label: "Hộp điện âm bàn và âm sàn", href: "/san-pham/hop-dien-am-ban-san" },
          { label: "Ổ cắm âm bàn", href: "/san-pham/o-cam-am-ban" },
          { label: "Ổ cắm âm bàn đảo", href: "/san-pham/o-cam-am-ban-dao" },
          { label: "Ổ cắm âm sàn", href: "/san-pham/o-cam-am-san" },
          { label: "Ổ cắm chống giật", href: "/san-pham/o-cam-chong-giat" },
          { label: "Ổ cắm điện ngoài trời", href: "/san-pham/o-cam-dien-ngoai-troi" },
        ],
      },
      {
        label: "Công tắc điện",
        href: "/san-pham/cong-tac-dien",
        children: [
          { label: "Tổng hợp công tắc điện", href: "/san-pham/cong-tac-dien" },
          { label: "Công tắc 2 cực – một chiều", href: "/san-pham/cong-tac-2-cuc" },
          { label: "Công tắc 3 cực – hai chiều", href: "/san-pham/cong-tac-3-cuc" },
          { label: "Công tắc trung gian – đa chiều", href: "/san-pham/cong-tac-trung-gian" },
          { label: "Các loại công tắc điện khác", href: "/san-pham/cong-tac-khac" },
        ],
      },
      {
        label: "Dòng sản phẩm",
        href: "/san-pham/dong-san-pham",
        children: [
          { label: "LG-F21-Series", href: "/san-pham/lg-f21-series" },
          { label: "LG-TT-Series", href: "/san-pham/lg-tt-series" },
          { label: "LG-F71-Series", href: "/san-pham/lg-f71-series" },
          { label: "LG-F71W Series", href: "/san-pham/lg-f71w-series" },
          { label: "LG-B20-Series", href: "/san-pham/lg-b20-series" },
          { label: "LG-C60-Series", href: "/san-pham/lg-c60-series" },
        ],
      },
      {
        label: "Sản phẩm khác",
        href: "/san-pham/khac",
        children: [
          { label: "Module", href: "/san-pham/module" },
          { label: "Đế âm/Đế nổi", href: "/san-pham/de-am-noi" },
          { label: "Hộp điện chống nước", href: "/san-pham/hop-dien-chong-nuoc" },
        ],
      },
    ],
  },
  {
    label: "Chính sách",
    href: "/chinh-sach",
    megaMenu: [
      { label: "Chính sách đại lý", href: "/chinh-sach/dai-ly" },
      { label: "Chính sách bảo hành", href: "/chinh-sach/bao-hanh" },
      { label: "Chính sách vận chuyển", href: "/chinh-sach/van-chuyen" },
      { label: "Chính sách bảo mật", href: "/chinh-sach/bao-mat" },
    ],
  },
  {
    label: "Tin tức",
    href: "/tin-tuc",
    megaMenu: [
      { label: "Tin tức", href: "/tin-tuc" },
      { label: "Tin công ty", href: "/tin-tuc/tin-cong-ty" },
      { label: "FAQ", href: "/tin-tuc/faq" },
    ],
  },
  {
    label: "Về chúng tôi",
    href: "/ve-chung-toi",
  },
  {
    label: "Liên hệ",
    href: "/lien-he",
  },
];

export const FOOTER_SUPPORT_LINKS = [
  { label: "Giới thiệu về LG Tech", href: "/ve-chung-toi" },
  { label: "Chính sách đại lý", href: "/chinh-sach/dai-ly" },
  { label: "Chính sách bảo hành", href: "/chinh-sach/bao-hanh" },
  { label: "Chính sách giao hàng", href: "/chinh-sach/van-chuyen" },
  { label: "Chính sách đổi trả hàng", href: "/chinh-sach/doi-tra" },
  { label: "Chính sách bảo mật thông tin", href: "/chinh-sach/bao-mat" },
  { label: "Chính sách và quy định chung", href: "/chinh-sach/quy-dinh-chung" },
];

export const MOBILE_NAV = [
  { label: "Trang chủ", href: "/" },
  { label: "Sản phẩm", href: "/san-pham" },
  { label: "Chính sách", href: "/chinh-sach" },
  { label: "Tin tức", href: "/tin-tuc" },
  { label: "Về chúng tôi", href: "/ve-chung-toi" },
  { label: "Liên hệ", href: "/lien-he" },
];
