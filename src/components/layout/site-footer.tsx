import Link from "next/link";
import { FOOTER_SUPPORT_LINKS } from "@/data/navigation";
import { SITE_CONFIG } from "@/lib/constants";
import { Container } from "@/components/ui/container";

export function SiteFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer mt-auto border-t border-gray-200 bg-gray-900 text-gray-300">
      <Container className="py-12">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="mb-4 text-lg font-bold text-white">Về {SITE_CONFIG.name}</h3>
            <p className="text-sm leading-relaxed">
              Là thương hiệu cho các sản phẩm điện tử, điện dân dụng cao cấp đã được
              bảo hộ bởi cục sở hữu trí tuệ. Với mục tiêu là đơn vị sản xuất, phân
              phối các sản phẩm điện tử cao cấp.
            </p>
            <p className="mt-4 text-sm font-semibold text-white">
              {SITE_CONFIG.companyName}
            </p>
            <ul className="mt-2 space-y-1 text-sm">
              <li>Mã số doanh nghiệp: {SITE_CONFIG.taxCode}</li>
              <li>Đại diện: {SITE_CONFIG.representative}</li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-bold text-white">Liên hệ</h3>
            <address className="space-y-2 text-sm not-italic">
              <p>Địa chỉ: {SITE_CONFIG.address}</p>
              <p>
                Hotline:{" "}
                <a
                  href={`tel:${SITE_CONFIG.hotline.replace(/\./g, "")}`}
                  className="text-white hover:text-[var(--color-brand-light)]"
                >
                  {SITE_CONFIG.hotline}
                </a>
              </p>
              <p>
                Email:{" "}
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="text-white hover:text-[var(--color-brand-light)]"
                >
                  {SITE_CONFIG.email}
                </a>
              </p>
            </address>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-bold text-white">Hỗ trợ khách hàng</h3>
            <ul className="space-y-2 text-sm">
              {FOOTER_SUPPORT_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-white hover:underline"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-bold text-white">Kết nối</h3>
            <p className="text-sm">
              Theo dõi {SITE_CONFIG.name} trên mạng xã hội để cập nhật khuyến mãi và
              sản phẩm mới.
            </p>
          </div>
        </div>
      </Container>

      <div className="border-t border-gray-800 py-4 text-center text-sm">
        <Container>
          Copyright {currentYear} © {SITE_CONFIG.name}
        </Container>
      </div>
    </footer>
  );
}
