import { MOCK_PRODUCTS } from "@/data/products";
import { ProductCard } from "@/components/product/product-card";
import { Container } from "@/components/ui/container";
import { PageHeader } from "@/components/ui/page-header";

interface SearchPageProps {
  searchParams: Promise<{ q?: string }>;
}

export const metadata = {
  title: "Tìm kiếm",
};

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const { q } = await searchParams;
  const query = q?.trim().toLowerCase() ?? "";

  const results = query
    ? MOCK_PRODUCTS.filter(
        (product) =>
          product.name.toLowerCase().includes(query) ||
          product.sku.toLowerCase().includes(query),
      )
    : [];

  return (
    <>
      <PageHeader
        title="Tìm kiếm"
        description={query ? `Kết quả cho "${q}"` : "Nhập từ khóa để tìm sản phẩm."}
      />
      <Container className="py-10">
        <form action="/tim-kiem" method="get" className="mb-8 flex max-w-xl gap-2">
          <label htmlFor="search-q" className="sr-only">
            Từ khóa
          </label>
          <input
            id="search-q"
            name="q"
            type="search"
            defaultValue={q}
            placeholder="Tìm theo tên hoặc mã SKU..."
            className="flex-1 rounded-md border border-gray-300 px-4 py-2 text-sm focus:border-[var(--color-brand)] focus:outline-none focus:ring-1 focus:ring-[var(--color-brand)]"
          />
          <button
            type="submit"
            className="rounded-md bg-[var(--color-brand)] px-4 py-2 text-sm font-semibold text-white"
          >
            Tìm
          </button>
        </form>

        {query && results.length === 0 ? (
          <p className="text-gray-600">Không tìm thấy sản phẩm phù hợp.</p>
        ) : null}

        <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
          {results.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </Container>
    </>
  );
}
