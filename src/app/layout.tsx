import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { SiteShell } from "@/components/layout/site-shell";
import { SITE_CONFIG } from "@/lib/constants";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "vietnamese"],
});

export const metadata: Metadata = {
  title: {
    default: `${SITE_CONFIG.name} | Sản phẩm điện - Phân phối điện gia dụng`,
    template: `%s | ${SITE_CONFIG.name}`,
  },
  description:
    "Cửa hàng trực tuyến sản phẩm điện tử: ổ cắm, công tắc, thanh ray điện cao cấp LG Tech.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
