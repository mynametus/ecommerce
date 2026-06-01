import { SITE_CONFIG } from "@/lib/constants";
import { Container } from "@/components/ui/container";
import { PageHeader } from "@/components/ui/page-header";

export const metadata = {
  title: "Liên hệ",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        title="Liên hệ với chúng tôi"
        description="Hỗ trợ tư vấn sản phẩm và chính sách đại lý."
      />
      <Container className="max-w-3xl py-10">
        <form className="space-y-4" action="#" method="post">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Họ tên
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              className="mt-1 w-full rounded-md border border-gray-300 px-4 py-2 text-sm focus:border-[var(--color-brand)] focus:outline-none focus:ring-1 focus:ring-[var(--color-brand)]"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="mt-1 w-full rounded-md border border-gray-300 px-4 py-2 text-sm focus:border-[var(--color-brand)] focus:outline-none focus:ring-1 focus:ring-[var(--color-brand)]"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
              Nội dung
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              className="mt-1 w-full rounded-md border border-gray-300 px-4 py-2 text-sm focus:border-[var(--color-brand)] focus:outline-none focus:ring-1 focus:ring-[var(--color-brand)]"
            />
          </div>
          <button
            type="submit"
            className="rounded-md bg-[var(--color-brand)] px-6 py-2 text-sm font-semibold text-white hover:bg-[var(--color-brand-dark)]"
          >
            Gửi liên hệ
          </button>
        </form>

        <aside className="mt-12 rounded-lg border border-gray-200 bg-gray-50 p-6">
          <h2 className="font-bold text-gray-900">Thông tin liên hệ</h2>
          <p className="mt-2 text-sm text-gray-700">{SITE_CONFIG.address}</p>
          <p className="mt-2 text-sm">
            Hotline:{" "}
            <a
              href={`tel:${SITE_CONFIG.hotline.replace(/\./g, "")}`}
              className="font-semibold text-[var(--color-brand)]"
            >
              {SITE_CONFIG.hotline}
            </a>
          </p>
          <p className="mt-2 text-sm">
            Email:{" "}
            <a
              href={`mailto:${SITE_CONFIG.email}`}
              className="font-semibold text-[var(--color-brand)]"
            >
              {SITE_CONFIG.email}
            </a>
          </p>
        </aside>
      </Container>
    </>
  );
}
