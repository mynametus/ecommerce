import Link from "next/link";
import { MOCK_NEWS } from "@/data/news";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

export function NewsSection() {
  return (
    <section className="news-section bg-gray-50 py-12 sm:py-16">
      <Container>
        <SectionHeading title="Tin nổi bật" />
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {MOCK_NEWS.map((article) => (
            <article
              key={article.id}
              className="news-section__card flex flex-col rounded-lg border border-gray-200 bg-white p-5 shadow-sm"
            >
              <p className="text-xs font-medium uppercase tracking-wide text-[var(--color-brand)]">
                {article.category}
              </p>
              <time
                dateTime={article.publishedAt}
                className="mt-1 text-xs text-gray-500"
              >
                {new Date(article.publishedAt).toLocaleDateString("vi-VN")}
              </time>
              <h3 className="mt-3 flex-1 text-base font-semibold text-gray-900 line-clamp-3">
                <Link
                  href={`/tin-tuc/${article.slug}`}
                  className="hover:text-[var(--color-brand)]"
                >
                  {article.title}
                </Link>
              </h3>
              <Link
                href={`/tin-tuc/${article.slug}`}
                className="mt-4 text-sm font-semibold text-[var(--color-brand)] hover:underline"
              >
                Xem chi tiết →
              </Link>
            </article>
          ))}
        </div>
        <p className="mt-8 text-center">
          <Link
            href="/tin-tuc"
            className="text-sm font-semibold text-[var(--color-brand)] hover:underline"
          >
            Xem tất cả tin tức
          </Link>
        </p>
      </Container>
    </section>
  );
}
