import Link from "next/link";
import { SITE_CONFIG } from "@/lib/constants";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";

export function HeroBanner() {
  return (
    <section className="hero-banner relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-[var(--color-brand)] text-white">
      <Container className="relative py-16 sm:py-24">
        <p className="mb-2 text-sm font-medium uppercase tracking-widest text-white/80">
          {SITE_CONFIG.tagline}
        </p>
        <h1 className="max-w-2xl text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
          {SITE_CONFIG.name} là cửa hàng trực tuyến sản phẩm điện tử tốt nhất
        </h1>
        <p className="mt-4 max-w-xl text-lg text-white/90">
          Ổ cắm, công tắc, thanh ray điện cao cấp — chất lượng LG Technology Vietnam.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button href="/san-pham" variant="primary" className="bg-white text-[var(--color-brand)] hover:bg-gray-100">
            Khám phá sản phẩm
          </Button>
          <Button href="/tin-tuc" variant="outline" className="border-white text-white hover:bg-white/10">
            Tin tức & khuyến mãi
          </Button>
        </div>
        <Link
          href="#featured-products"
          className="mt-8 inline-block text-sm text-white/80 underline-offset-4 hover:text-white hover:underline"
        >
          Bỏ qua nội dung chính ↓
        </Link>
      </Container>
    </section>
  );
}
