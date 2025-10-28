import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://seagull-ltd.com"),
  title: {
    template: "%s | Seagull Ltd",
    default: "Seagull Ltd – OEM & Spare Parts for Shipyards",
  },
  description:
    "Seagull Ltd supplies OEM and spare parts for shipyards with reliable service and global delivery.",
  keywords: [
    "Seagull Ltd",
    "shipyard",
    "OEM parts",
    "spare parts",
    "marine",
    "maritime",
    "İstanbul",
  ],
  applicationName: "Seagull Ltd",
  authors: [{ name: "Seagull Ltd" }],
  category: "Maritime",
  alternates: {
    canonical: "https://seagull-ltd.com",
    languages: {
      en: "https://seagull-ltd.com",
      tr: "https://seagull-ltd.com",
      de: "https://seagull-ltd.com",
    },
  },
  openGraph: {
    title: "Seagull Ltd – OEM & Spare Parts for Shipyards",
    description:
      "Trusted partner for shipyard supplies, delivering excellence and reliability worldwide.",
    url: "https://seagull-ltd.com",
    siteName: "Seagull Ltd",
    images: [
      { url: "/Slider1.png", width: 1600, height: 900, alt: "Seagull Ltd banner" },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Seagull Ltd – OEM & Spare Parts for Shipyards",
    description:
      "Trusted partner for shipyard supplies, delivering excellence and reliability worldwide.",
    images: ["/Slider1.png"],
  },
  icons: {
    icon: [{ url: "/favicon.ico" }],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport = {
  themeColor: "#0A2342",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        {/* JSON-LD Organization schema for basic SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Seagull Ltd",
              url: "https://seagull-ltd.com",
              logo: "https://seagull-ltd.com/seagull-logo.png",
              sameAs: [],
            }),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
