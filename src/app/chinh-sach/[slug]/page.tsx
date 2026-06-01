import Link from "next/link";
import { Container } from "@/components/ui/container";
import { PageHeader } from "@/components/ui/page-header";

interface PolicyPageProps {
  params: Promise<{ slug: string }>;
}

const policyTitles: Record<string, string> = {
  "dai-ly": "Chính sách đại lý",
  "bao-hanh": "Chính sách bảo hành",
  "van-chuyen": "Chính sách vận chuyển hàng",
  "bao-mat": "Chính sách bảo mật",
  "doi-tra": "Chính sách đổi trả hàng",
  "quy-dinh-chung": "Chính sách và quy định chung",
};

export async function generateMetadata({ params }: PolicyPageProps) {
  const { slug } = await params;
  return { title: policyTitles[slug] ?? "Chính sách" };
}

export default async function PolicyDetailPage({ params }: PolicyPageProps) {
  const { slug } = await params;
  const title = policyTitles[slug] ?? "Chính sách";

  return (
    <>
      <PageHeader title={title} />
      <Container className="prose prose-gray max-w-3xl py-10">
        <p>
          Nội dung trang chính sách sẽ được lấy từ CMS hoặc file markdown. Đây là
          placeholder cho cấu trúc route tương tự{" "}
          <a
            href="https://lg.com.vn/"
            className="text-[var(--color-brand)]"
            target="_blank"
            rel="noopener noreferrer"
          >
            lg.com.vn
          </a>
          .
        </p>
        <p>
          <Link href="/chinh-sach" className="text-[var(--color-brand)] hover:underline">
            ← Quay lại danh sách chính sách
          </Link>
        </p>
      </Container>
    </>
  );
}
