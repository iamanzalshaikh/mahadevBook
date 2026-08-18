import type { Metadata, Viewport } from "next";
import { Montserrat, Open_Sans } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://mahadevbooks.today"),
  title: {
    default: "Mahadev Book Official | Cricket ID & Sports Betting Platform",
    template: "%s | Mahadev Book",
  },
  description:
    "Get a verified Mahadev Book Cricket ID with quick activation, secure UPI payments, live cricket betting access, and 24/7 customer support.",
  keywords: [
    "Mahadev Book",
    "cricket betting ID",
    "online sports betting",
    "IPL betting guide",
    "live cricket betting",
    "cricket ID India",
  ],
  authors: [{ name: "Mahadev Book", url: "https://mahadevbooks.today" }],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://mahadevbooks.today/",
  },
  openGraph: {
    title: "Mahadev Book Official | Cricket ID & Sports Betting Platform",
    description:
      "Get a verified Mahadev Book Cricket ID with quick activation, secure UPI payments, live cricket betting access, and 24/7 customer support.",
    url: "https://mahadevbooks.today/",
    siteName: "Mahadev Book",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "https://mahadevbooks.today/wp-content/uploads/2026/05/Hero-Page.png",
        width: 1983,
        height: 793,
        alt: "Mahadev Book – Official Cricket ID & Sports Betting Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mahadev Book Official | Cricket ID & Sports Betting Platform",
    description:
      "Get a verified Mahadev Book Cricket ID with quick activation, secure UPI payments, and 24/7 customer support.",
    images: [
      "https://mahadevbooks.today/wp-content/uploads/2026/05/Hero-Page.png",
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${openSans.variable} h-full scroll-smooth`}
    >
      <body className="min-h-full flex flex-col font-sans bg-dark-bg text-white antialiased">
        {children}
      </body>
    </html>
  );
}

