import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MOCK_PRODUCTS, getProductBySlug } from "@/data/products";
import { ProductCard } from "@/components/product/product-card";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { PageHeader } from "@/components/ui/page-header";
import { formatPriceRange, formatVnd } from "@/lib/utils";

interface ProductOrCategoryPageProps {
  params: Promise<{ slug: string }>;
}

function slugToTitle(slug: string): string {
  return slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export async function generateMetadata({ params }: ProductOrCategoryPageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (product) {
    return { title: product.name };
  }

  return { title: slugToTitle(slug) };
}

export default async function ProductOrCategoryPage({
  params,
}: ProductOrCategoryPageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (product) {
    const priceLabel = product.priceMax
      ? formatPriceRange(product.price, product.priceMax)
      : formatVnd(product.price);

    return (
      <>
        <PageHeader title={product.name} description={`Mã SP: ${product.sku}`} />
        <Container className="py-10">
          <div className="grid gap-10 lg:grid-cols-2">
            <div className="relative aspect-square overflow-hidden rounded-lg border border-gray-200 bg-gray-50">
              <Image
                src={product.image}
                alt={product.name}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-contain p-8"
              />
            </div>
            <div>
              <p className="text-sm text-gray-500">
                {product.rating} out of 5 ({product.reviewCount} đánh giá)
              </p>
              <p className="mt-4 text-2xl font-bold text-[var(--color-brand)]">
                {priceLabel}
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                {product.inStock ? (
                  <Button href="/gio-hang">Mua ngay</Button>
                ) : (
                  <span className="rounded-md bg-gray-100 px-4 py-2 text-sm font-semibold text-gray-500">
                    Hết hàng
                  </span>
                )}
                <Button href="/san-pham" variant="outline">
                  ← Quay lại danh sách
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </>
    );
  }

  const categoryProducts = MOCK_PRODUCTS.filter(
    (item) =>
      item.slug.includes(slug) ||
      item.category.includes(slug.replace(/-/g, "")),
  );

  const displayProducts =
    categoryProducts.length > 0 ? categoryProducts : MOCK_PRODUCTS.slice(0, 8);

  return (
    <>
      <PageHeader
        title={slugToTitle(slug)}
        description="Danh mục sản phẩm — dữ liệu mẫu, kết nối CMS/API sau."
      />
      <Container className="py-10">
        <p className="mb-6 text-sm text-gray-600">
          <Link href="/san-pham" className="text-[var(--color-brand)] hover:underline">
            ← Tất cả sản phẩm
          </Link>
        </p>
        <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
          {displayProducts.map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>
      </Container>
    </>
  );
}
