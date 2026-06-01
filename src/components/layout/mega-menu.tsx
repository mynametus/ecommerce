"use client";

import Link from "next/link";
import { useState } from "react";
import type { NavLink } from "@/lib/types";

interface MegaMenuProps {
  columns: NavLink[];
}

export function MegaMenu({ columns }: MegaMenuProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeColumn = columns[activeIndex];

  return (
    <div
      className="mega-menu absolute left-0 right-0 top-full z-50 hidden border-t border-gray-100 bg-white shadow-lg group-hover:block"
      role="navigation"
      aria-label="Menu sản phẩm"
    >
      <div className="mx-auto flex max-w-7xl">
        <ul className="mega-menu__sidebar w-56 shrink-0 border-r border-gray-100 bg-gray-50 py-4">
          {columns.map((column, index) => (
            <li key={column.href}>
              <Link
                href={column.href}
                className={`block px-4 py-2.5 text-sm font-medium transition-colors ${
                  index === activeIndex
                    ? "border-l-4 border-[var(--color-brand)] bg-white text-[var(--color-brand)]"
                    : "text-gray-700 hover:bg-white hover:text-[var(--color-brand)]"
                }`}
                onMouseEnter={() => setActiveIndex(index)}
                onFocus={() => setActiveIndex(index)}
              >
                {column.label}
              </Link>
            </li>
          ))}
        </ul>

        {activeColumn?.children ? (
          <ul className="mega-menu__content grid flex-1 grid-cols-2 gap-x-8 gap-y-2 p-6 lg:grid-cols-3">
            {activeColumn.children.map((child) => (
              <li key={child.href}>
                <Link
                  href={child.href}
                  className="text-sm text-gray-600 hover:text-[var(--color-brand)]"
                >
                  {child.label}
                </Link>
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </div>
  );
}
