import Image from "next/image";
import Link from "next/link";
import { MOCK_VIDEOS } from "@/data/videos";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

export function VideosSection() {
  return (
    <section className="videos-section bg-gray-50 py-12 sm:py-16">
      <Container>
        <SectionHeading title="Videos" align="center" />
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {MOCK_VIDEOS.map((video) => (
            <article key={video.id} className="videos-section__card overflow-hidden rounded-lg bg-white shadow-sm">
              <Link href={video.url} className="group relative block aspect-video">
                <Image
                  src={video.thumbnail}
                  alt={video.title}
                  fill
                  sizes="(max-width: 640px) 100vw, 25vw"
                  className="object-cover transition-opacity group-hover:opacity-90"
                />
              </Link>
              <h3 className="p-4 text-sm font-medium text-gray-900 line-clamp-2">
                <Link href={video.url} className="hover:text-[var(--color-brand)]">
                  {video.title}
                </Link>
              </h3>
            </article>
          ))}
        </div>
        <p className="mt-6 text-center">
          <Link
            href="/tin-tuc"
            className="text-sm font-semibold text-[var(--color-brand)] hover:underline"
          >
            Xem tất cả →
          </Link>
        </p>
      </Container>
    </section>
  );
}
