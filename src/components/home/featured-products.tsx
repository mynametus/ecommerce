"use client";

import { useState } from "react";
import { FEATURED_TABS } from "@/lib/constants";
import type { ProductCategory } from "@/lib/types";
import { getProductsByCategory } from "@/data/products";
import { ProductCard } from "@/components/product/product-card";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";

export function FeaturedProducts() {
  const [activeTab, setActiveTab] = useState<ProductCategory>("noi-bat");
  const products = getProductsByCategory(activeTab);

  return (
    <section
      id="featured-products"
      className="featured-products py-12 sm:py-16"
      aria-labelledby="featured-heading"
    >
      <Container>
        <SectionHeading
          title="Khám phá sản phẩm nổi bật"
          subtitle="Danh mục sản phẩm theo nhu cầu — tương tự lg.com.vn"
        />

        <div
          className="featured-products__tabs mt-8 flex flex-wrap gap-2 border-b border-gray-200"
          role="tablist"
          aria-label="Danh mục sản phẩm nổi bật"
        >
          {FEATURED_TABS.map((tab) => (
            <button
              key={tab.id}
              type="button"
              role="tab"
              aria-selected={activeTab === tab.id}
              className={`border-b-2 px-4 py-2 text-sm font-medium transition-colors ${
                activeTab === tab.id
                  ? "border-[var(--color-brand)] text-[var(--color-brand)]"
                  : "border-transparent text-gray-600 hover:text-gray-900"
              }`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div
          className="featured-products__grid mt-8 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4"
          role="tabpanel"
        >
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="mt-8 text-center">
          <Button href="/san-pham" variant="outline">
            Xem tất cả sản phẩm
          </Button>
        </div>
      </Container>
    </section>
  );
}
