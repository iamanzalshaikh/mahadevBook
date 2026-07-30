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
    default: "Mahadev Book | Best Online Cricket ID Provider | Get Mahadev ID",
    template: "%s | Mahadev Book",
  },
  description:
    "Join Mahadev Book, India's #1 platform for Online Cricket ID, live betting, fantasy sports, casino games, and 24/7 customer support since 2015.",
  keywords: [
    "Mahadev Book",
    "Mahadev Book ID",
    "online cricket ID",
    "Mahadev Book login",
    "cricket betting India",
    "fantasy cricket ID",
    "Mahadev betting app",
    "online betting India",
    "IPL betting",
    "cricket ID online",
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
    canonical: "https://mahadevbooks.today",
  },
  openGraph: {
    title: "Mahadev Book | Best Online Cricket ID Provider | Get Mahadev ID",
    description:
      "Join Mahadev Book, India's #1 platform for Online Cricket ID, live betting, fantasy sports, casino games, and 24/7 customer support since 2015.",
    url: "https://mahadevbooks.today/",
    siteName: "Mahadev Book",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "https://mahadevbooks.today/wp-content/uploads/2026/05/Hero-Page.png",
        width: 1983,
        height: 793,
        alt: "Mahadev Book – Best Online Cricket ID Provider in India",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mahadev Book | Best Online Cricket ID Provider",
    description:
      "India's #1 Online Cricket ID platform. Get your Mahadev Book ID in 2 minutes. Live betting, fantasy sports & casino games.",
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

