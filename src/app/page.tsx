import { CatalogueSection } from "@/components/home/catalogue-section";
import { FeaturedProducts } from "@/components/home/featured-products";
import { HeroBanner } from "@/components/home/hero-banner";
import { NewsSection } from "@/components/home/news-section";
import { VideosSection } from "@/components/home/videos-section";

export default function HomePage() {
  return (
    <>
      <HeroBanner />
      <FeaturedProducts />
      <VideosSection />
      <CatalogueSection />
      <NewsSection />
    </>
  );
}
