import type { Metadata } from "next";
import { Nunito, DM_Sans, Playfair_Display } from "next/font/google";
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
  title: "SKIN1004 | Madagascar Centella Ampoule",
  description:
    "Pure Madagascar Centella power. SKIN1004 Madagascar Centella Ampoule — a calming & barrier-strengthening solution for sensitive skin.",
  openGraph: {
    title: "SKIN1004 Madagascar Centella Ampoule",
    description: "Pure centella. Awaken your skin's natural strength.",
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
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
