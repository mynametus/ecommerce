import { MOCK_PRODUCTS } from "@/data/products";
import { ProductCard } from "@/components/product/product-card";
import { Container } from "@/components/ui/container";
import { PageHeader } from "@/components/ui/page-header";

export const metadata = {
  title: "Sản phẩm",
};

export default function ProductsPage() {
  return (
    <>
      <PageHeader
        title="Sản phẩm"
        description="Tổng hợp ổ cắm, công tắc, thanh ray điện và phụ kiện LG Tech."
      />
      <Container className="py-10">
        <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
          {MOCK_PRODUCTS.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </Container>
    </>
  );
}
