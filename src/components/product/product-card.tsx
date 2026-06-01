import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/lib/types";
import { formatPriceRange, formatVnd } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const priceLabel = product.priceMax
    ? formatPriceRange(product.price, product.priceMax)
    : formatVnd(product.price);

  return (
    <article className="product-card group flex h-full flex-col overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-shadow hover:shadow-md">
      <Link
        href={`/san-pham/${product.slug}`}
        className="product-card__image relative block aspect-square overflow-hidden bg-gray-50"
      >
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          className="object-contain p-4 transition-transform duration-300 group-hover:scale-105"
        />
        <span className="absolute left-3 top-3 rounded bg-gray-900/80 px-2 py-0.5 text-xs font-medium text-white">
          {product.sku}
        </span>
      </Link>

      <div className="product-card__body flex flex-1 flex-col p-4">
        <div
          className="product-card__rating mb-2 flex items-center gap-1 text-xs text-gray-500"
          aria-label={`Đánh giá ${product.rating} trên 5, ${product.reviewCount} nhận xét`}
        >
          <span className="font-semibold text-amber-500">{product.rating}</span>
          <span>out of 5</span>
          <span>({product.reviewCount})</span>
        </div>

        <h3 className="product-card__title mb-2 line-clamp-2 text-sm font-medium text-gray-900">
          <Link
            href={`/san-pham/${product.slug}`}
            className="hover:text-[var(--color-brand)]"
          >
            {product.name}
          </Link>
        </h3>

        <p className="product-card__price mb-4 text-base font-bold text-[var(--color-brand)]">
          {priceLabel}
        </p>

        <div className="product-card__actions mt-auto flex flex-col gap-2 sm:flex-row">
          <Button
            href={`/san-pham/${product.slug}`}
            variant="outline"
            className="w-full flex-1 text-center"
          >
            Xem sản phẩm
          </Button>
          {product.inStock ? (
            <Button href="/gio-hang" className="w-full flex-1 text-center">
              Mua ngay
            </Button>
          ) : (
            <span className="inline-flex w-full flex-1 items-center justify-center rounded-md bg-gray-100 px-4 py-2 text-sm font-semibold text-gray-500">
              Hết hàng
            </span>
          )}
        </div>
      </div>
    </article>
  );
}
