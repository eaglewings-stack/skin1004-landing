import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: "SKIN1004 | Madagascar Centella Ampoule",
  description:
    "마다가스카르 센텔라의 순수한 힘. SKIN1004 마다가스카르 센텔라 앰플 — 민감 피부를 위한 진정 & 장벽 강화 솔루션.",
  openGraph: {
    title: "SKIN1004 Madagascar Centella Ampoule",
    description: "순수 센텔라, 피부 본연의 힘을 깨우다",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={outfit.variable}>
      <head>
        <link
          rel="stylesheet"
          as="style"
          crossOrigin="anonymous"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css"
        />
      </head>
      <body
        className="font-sans antialiased"
        style={{ fontFamily: "Pretendard Variable, Pretendard, system-ui, sans-serif" }}
      >
        <div className="noise-overlay" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
