import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";

export function CatalogueSection() {
  return (
    <section className="catalogue-section py-12 sm:py-16">
      <Container>
        <SectionHeading title="Download catalogue" align="center" />
        <div className="mt-8 grid gap-6 sm:grid-cols-2 max-w-2xl mx-auto">
          <div className="rounded-lg border border-gray-200 bg-white p-6 text-center shadow-sm">
            <h3 className="text-lg font-bold text-gray-900">LG TECH CATALOGUE</h3>
            <Button href="#" variant="primary" className="mt-4">
              Download
            </Button>
          </div>
          <div className="rounded-lg border border-gray-200 bg-white p-6 text-center shadow-sm">
            <h3 className="text-lg font-bold text-gray-900">NHẬN CHÍNH SÁCH ĐẠI LÝ</h3>
            <Button href="/chinh-sach/dai-ly" variant="outline" className="mt-4">
              Đăng ký đại lý
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
