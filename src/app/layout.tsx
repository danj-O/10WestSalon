import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { BookNow } from "@/components/BookNow";
import { GoogleAnalytics } from "@/components/GoogleAnalytics";
import { LocalBusinessJsonLd } from "@/components/LocalBusinessJsonLd";
import { SiteNav } from "@/components/SiteNav";
import { defaultDescription, site } from "@/data/site";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const ogTitle = "10 West Salon | Chagrin Falls, Ohio";

export const metadata: Metadata = {
  metadataBase: new URL(site.canonicalBase),
  title: {
    default: ogTitle,
    template: "%s | 10 West Salon",
  },
  description: defaultDescription,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: site.canonicalBase,
    siteName: site.name,
    title: ogTitle,
    description: defaultDescription,
    images: [
      {
        url: "/og-image.webp",
        width: 1200,
        height: 630,
        alt: `${site.name} logo`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: ogTitle,
    description: defaultDescription,
    images: ["/og-image.webp"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        <LocalBusinessJsonLd />
        <GoogleAnalytics measurementId={site.googleAnalyticsId} />
        <BookNow />
        <SiteNav />
        {children}
      </body>
    </html>
  );
}
