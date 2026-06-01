import Link from "next/link";
import { notFound } from "next/navigation";
import { getNewsBySlug } from "@/data/news";
import { Container } from "@/components/ui/container";
import { PageHeader } from "@/components/ui/page-header";

interface NewsDetailPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: NewsDetailPageProps) {
  const { slug } = await params;
  const article = getNewsBySlug(slug);
  return { title: article?.title ?? "Tin tức" };
}

export default async function NewsDetailPage({ params }: NewsDetailPageProps) {
  const { slug } = await params;
  const article = getNewsBySlug(slug);

  if (!article) {
    notFound();
  }

  return (
    <>
      <PageHeader title={article.title} />
      <Container className="max-w-3xl py-10">
        <p className="text-sm text-gray-500">
          {article.category} ·{" "}
          {new Date(article.publishedAt).toLocaleDateString("vi-VN")}
        </p>
        <div className="prose prose-gray mt-6">
          <p>{article.excerpt}</p>
          <p>
            Nội dung bài viết đầy đủ sẽ được render từ CMS (WordPress headless,
            Shopify Blog, hoặc markdown).
          </p>
        </div>
        <p className="mt-8">
          <Link href="/tin-tuc" className="text-[var(--color-brand)] hover:underline">
            ← Quay lại tin tức
          </Link>
        </p>
      </Container>
    </>
  );
}
