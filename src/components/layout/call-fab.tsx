import { SITE_CONFIG } from "@/lib/constants";

export function CallFab() {
  const phone = SITE_CONFIG.hotline.replace(/\./g, "");

  return (
    <a
      href={`tel:${phone}`}
      className="call-fab fixed bottom-20 right-4 z-40 flex items-center gap-2 rounded-full bg-[var(--color-brand)] px-4 py-3 text-sm font-semibold text-white shadow-lg transition-transform hover:scale-105 lg:bottom-6"
      aria-label={`Gọi hotline ${SITE_CONFIG.hotline}`}
    >
      <PhoneIcon />
      Gọi ngay
    </a>
  );
}

function PhoneIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M6.6 10.8a15.9 15.9 0 0 0 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.3 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.3 21 3 13.7 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.3 1L6.6 10.8Z"
        fill="currentColor"
      />
    </svg>
  );
}
