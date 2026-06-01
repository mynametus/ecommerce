import { Container } from "@/components/ui/container";
import { PageHeader } from "@/components/ui/page-header";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "Giỏ hàng",
};

export default function CartPage() {
  return (
    <>
      <PageHeader title="Giỏ hàng" />
      <Container className="py-16 text-center">
        <p className="text-gray-600">Chưa có sản phẩm trong giỏ hàng.</p>
        <Button href="/san-pham" className="mt-6">
          Tiếp tục mua sắm
        </Button>
        <p className="mt-4 text-sm text-gray-500">
          Tích hợp giỏ hàng: Zustand + Shopify Storefront API hoặc WooCommerce REST API.
        </p>
      </Container>
    </>
  );
}
