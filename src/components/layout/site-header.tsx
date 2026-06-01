"use client";

import Link from "next/link";
import { useState } from "react";
import { MAIN_NAV } from "@/data/navigation";
import { SITE_CONFIG } from "@/lib/constants";
import { MegaMenu } from "@/components/layout/mega-menu";

export function SiteHeader() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <header className="site-header sticky top-0 z-40 border-b border-gray-200 bg-white shadow-sm">
      <div className="site-header__top hidden border-b border-gray-100 bg-gray-50 py-2 text-sm text-gray-600 lg:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <p>{SITE_CONFIG.tagline}</p>
          <a
            href={`tel:${SITE_CONFIG.hotline.replace(/\./g, "")}`}
            className="font-medium text-[var(--color-brand)] hover:underline"
          >
            Hotline: {SITE_CONFIG.hotline}
          </a>
        </div>
      </div>

      <div className="site-header__main mx-auto flex max-w-7xl items-center gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="site-header__logo shrink-0 text-xl font-bold text-[var(--color-brand)]"
        >
          {SITE_CONFIG.name}
        </Link>

        <nav
          className="site-header__nav hidden flex-1 lg:flex"
          aria-label="Điều hướng chính"
        >
          <ul className="flex items-center gap-1">
            {MAIN_NAV.map((item) => (
              <li key={item.href} className="group relative">
                <Link
                  href={item.href}
                  className="block rounded-md px-3 py-2 text-sm font-medium text-gray-800 hover:bg-gray-50 hover:text-[var(--color-brand)]"
                >
                  {item.label}
                </Link>
                {item.megaMenu ? <MegaMenu columns={item.megaMenu} /> : null}
              </li>
            ))}
          </ul>
        </nav>

        <div className="site-header__actions ml-auto flex items-center gap-2">
          <button
            type="button"
            className="rounded-md p-2 text-gray-700 hover:bg-gray-100 hover:text-[var(--color-brand)]"
            aria-label="Tìm kiếm"
            aria-expanded={isSearchOpen}
            onClick={() => setIsSearchOpen((open) => !open)}
          >
            <SearchIcon />
          </button>
          <button
            type="button"
            className="rounded-md p-2 text-gray-700 hover:bg-gray-100 hover:text-[var(--color-brand)]"
            aria-label="Tài khoản"
          >
            <UserIcon />
          </button>
          <Link
            href="/gio-hang"
            className="relative rounded-md p-2 text-gray-700 hover:bg-gray-100 hover:text-[var(--color-brand)]"
            aria-label="Giỏ hàng"
          >
            <CartIcon />
            <span className="absolute -right-0.5 -top-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-[var(--color-brand)] text-[10px] font-bold text-white">
              0
            </span>
          </Link>
        </div>
      </div>

      {isSearchOpen ? (
        <div className="site-header__search border-t border-gray-100 bg-gray-50 px-4 py-3 sm:px-6 lg:px-8">
          <form action="/tim-kiem" method="get" className="mx-auto flex max-w-2xl gap-2">
            <label htmlFor="site-search" className="sr-only">
              Tìm kiếm sản phẩm
            </label>
            <input
              id="site-search"
              name="q"
              type="search"
              placeholder="Tìm kiếm sản phẩm..."
              className="flex-1 rounded-md border border-gray-300 px-4 py-2 text-sm focus:border-[var(--color-brand)] focus:outline-none focus:ring-1 focus:ring-[var(--color-brand)]"
            />
            <button
              type="submit"
              className="rounded-md bg-[var(--color-brand)] px-4 py-2 text-sm font-semibold text-white hover:bg-[var(--color-brand-dark)]"
            >
              Tìm
            </button>
          </form>
        </div>
      ) : null}
    </header>
  );
}

function SearchIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M11 19a8 8 0 1 0 0-16 8 8 0 0 0 0 16ZM21 21l-4.35-4.35"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function UserIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="2" />
      <path
        d="M4 19c0-3.3137 3.134-6 8-6s8 2.6863 8 6"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  );
}

function CartIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M6 6h15l-1.5 9h-12L6 6ZM6 6 5 3H2M9 21a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM18 21a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
