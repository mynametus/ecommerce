import Link from "next/link";
import { Container } from "@/components/ui/container";

export default function NotFound() {
  return (
    <Container className="py-24 text-center">
      <h1 className="text-4xl font-bold text-gray-900">404</h1>
      <p className="mt-4 text-gray-600">Trang bạn tìm không tồn tại.</p>
      <Link
        href="/"
        className="mt-6 inline-block font-semibold text-[var(--color-brand)] hover:underline"
      >
        Về trang chủ
      </Link>
    </Container>
  );
}
