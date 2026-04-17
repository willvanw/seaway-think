import type { Metadata } from "next";
import { EB_Garamond, DM_Sans } from "next/font/google";
import Footer from "@/components/Footer";
import "./globals.css";

const ebGaramond = EB_Garamond({
  variable: "--font-eb-garamond",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: {
    default: "Seaway Think",
    template: "%s — Seaway Think",
  },
  description: "Long-form thinking, organized by thread.",
  metadataBase: new URL("https://seawaythink.com"),
  openGraph: {
    title: "Seaway Think",
    description: "Long-form thinking, organized by thread.",
    type: "website",
    siteName: "Seaway Think",
  },
  twitter: {
    card: "summary",
    title: "Seaway Think",
    description: "Long-form thinking, organized by thread.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${ebGaramond.variable} ${dmSans.variable}`}>
      <body>
        <div className="page-transition">
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
