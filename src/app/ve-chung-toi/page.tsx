import { SITE_CONFIG } from "@/lib/constants";
import { Container } from "@/components/ui/container";
import { PageHeader } from "@/components/ui/page-header";

export const metadata = {
  title: "Về chúng tôi",
};

export default function AboutPage() {
  return (
    <>
      <PageHeader title="Về chúng tôi" />
      <Container className="max-w-3xl py-10">
        <p className="text-lg leading-relaxed text-gray-700">
          {SITE_CONFIG.name} là thương hiệu cho các sản phẩm điện tử, điện dân
          dụng cao cấp đã được bảo hộ bởi cục sở hữu trí tuệ. Với mục tiêu là đơn
          vị sản xuất, phân phối các sản phẩm điện tử cao cấp.
        </p>
        <dl className="mt-8 space-y-4 text-gray-700">
          <div>
            <dt className="font-semibold text-gray-900">Công ty</dt>
            <dd>{SITE_CONFIG.companyName}</dd>
          </div>
          <div>
            <dt className="font-semibold text-gray-900">Mã số doanh nghiệp</dt>
            <dd>{SITE_CONFIG.taxCode}</dd>
          </div>
          <div>
            <dt className="font-semibold text-gray-900">Đại diện</dt>
            <dd>{SITE_CONFIG.representative} — Tổng Giám Đốc</dd>
          </div>
          <div>
            <dt className="font-semibold text-gray-900">Địa chỉ</dt>
            <dd>{SITE_CONFIG.address}</dd>
          </div>
        </dl>
      </Container>
    </>
  );
}
