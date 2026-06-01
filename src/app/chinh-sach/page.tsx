import Link from "next/link";
import { Container } from "@/components/ui/container";
import { PageHeader } from "@/components/ui/page-header";

const policies = [
  { slug: "dai-ly", title: "Chính sách đại lý" },
  { slug: "bao-hanh", title: "Chính sách bảo hành" },
  { slug: "van-chuyen", title: "Chính sách vận chuyển hàng" },
  { slug: "bao-mat", title: "Chính sách bảo mật" },
  { slug: "doi-tra", title: "Chính sách đổi trả hàng" },
  { slug: "quy-dinh-chung", title: "Chính sách và quy định chung" },
];

export const metadata = {
  title: "Chính sách",
};

export default function PoliciesIndexPage() {
  return (
    <>
      <PageHeader
        title="Chính sách"
        description="Các chính sách hỗ trợ đại lý, bảo hành, vận chuyển và bảo mật."
      />
      <Container className="py-10">
        <ul className="space-y-3">
          {policies.map((policy) => (
            <li key={policy.slug}>
              <Link
                href={`/chinh-sach/${policy.slug}`}
                className="text-lg font-medium text-[var(--color-brand)] hover:underline"
              >
                {policy.title}
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </>
  );
}
