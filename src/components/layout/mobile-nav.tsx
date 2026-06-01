"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { MOBILE_NAV } from "@/data/navigation";
import { cn } from "@/lib/utils";

export function MobileNav() {
  const pathname = usePathname();

  return (
    <nav
      className="mobile-nav fixed bottom-0 left-0 right-0 z-50 border-t border-gray-200 bg-white lg:hidden"
      aria-label="Điều hướng di động"
    >
      <ul className="grid grid-cols-6">
        {MOBILE_NAV.map((item) => {
          const isActive =
            item.href === "/"
              ? pathname === "/"
              : pathname.startsWith(item.href);

          return (
            <li key={item.href}>
              <Link
                href={item.href}
                className={cn(
                  "flex flex-col items-center gap-0.5 px-1 py-2 text-[10px] font-medium",
                  isActive
                    ? "text-[var(--color-brand)]"
                    : "text-gray-600 hover:text-[var(--color-brand)]",
                )}
              >
                <NavIcon label={item.label} />
                <span className="truncate">{item.label}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

function NavIcon({ label }: { label: string }) {
  const shared = "h-5 w-5";

  if (label === "Trang chủ") {
    return (
      <svg className={shared} viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M3 10.5 12 3l9 7.5V21a1 1 0 0 1-1 1h-5v-7H9v7H4a1 1 0 0 1-1-1v-10.5Z" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    );
  }

  if (label === "Sản phẩm") {
    return (
      <svg className={shared} viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="4" y="4" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.5" />
        <rect x="13" y="4" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.5" />
        <rect x="4" y="13" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.5" />
        <rect x="13" y="13" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    );
  }

  if (label === "Tin tức") {
    return (
      <svg className={shared} viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M6 4h12a1 1 0 0 1 1 1v15l-4-3-4 3-4-3-4 3V5a1 1 0 0 1 1-1Z" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    );
  }

  if (label === "Liên hệ") {
    return (
      <svg className={shared} viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M4 6h16v12H4V6Zm0 0 8 6 8-6" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    );
  }

  return (
    <svg className={shared} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.5" />
      <path d="M12 10v6M12 8h.01" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}
