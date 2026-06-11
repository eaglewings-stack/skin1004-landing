import type { Metadata } from "next";
import { Nunito, DM_Sans, Playfair_Display } from "next/font/google";
import ScrollRestoration from "@/components/ScrollRestoration";
import "./globals.css";

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
  display: "swap",
  weight: ["600", "700", "800"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "TEABLESS | Lily Musk White Tea Perfume Body Wash",
  description:
    "TEABLESS Lily Musk White Tea Perfume Body Wash — 24-hour fragrance longevity, gel lather with green tea therapy, Ceramide NP barrier care. Made in Korea, 500g.",
  openGraph: {
    title: "TEABLESS Lily Musk White Tea Perfume Body Wash",
    description:
      "A transparent floral musk body wash inspired by white tea. Gentle cleansing, lasting scent, tea-time comfort every day.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${nunito.variable} ${dmSans.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased">
        <ScrollRestoration />
        {children}
      </body>
    </html>
  );
}
