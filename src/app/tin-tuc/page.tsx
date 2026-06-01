import Link from "next/link";
import { MOCK_NEWS } from "@/data/news";
import { Container } from "@/components/ui/container";
import { PageHeader } from "@/components/ui/page-header";

export const metadata = {
  title: "Tin tức",
};

export default function NewsIndexPage() {
  return (
    <>
      <PageHeader
        title="Tin tức"
        description="Tin tức, tin công ty và FAQ từ LG Tech."
      />
      <Container className="py-10">
        <ul className="divide-y divide-gray-200">
          {MOCK_NEWS.map((article) => (
            <li key={article.id} className="py-6">
              <p className="text-xs text-gray-500">
                {article.category} ·{" "}
                {new Date(article.publishedAt).toLocaleDateString("vi-VN")}
              </p>
              <h2 className="mt-1 text-xl font-semibold text-gray-900">
                <Link
                  href={`/tin-tuc/${article.slug}`}
                  className="hover:text-[var(--color-brand)]"
                >
                  {article.title}
                </Link>
              </h2>
              <p className="mt-2 text-gray-600">{article.excerpt}</p>
            </li>
          ))}
        </ul>
      </Container>
    </>
  );
}
