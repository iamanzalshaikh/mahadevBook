import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Is UPI Safe for Online Payments? A Complete Safety Guide",
  description:
    "Is UPI safe? A complete guide to UPI payment security — how UPI encryption works, common scams to avoid, NPCI safety standards, and how to protect your UPI transactions.",
  alternates: {
    canonical: "https://mahadevbooks.today/blog/upi-payment-safety-guide",
  },
  openGraph: {
    title: "Is UPI Safe for Online Payments? A Complete Safety Guide",
    description:
      "Everything you need to know about UPI payment security — how it works, risks to watch for, scam tactics to avoid, and how to stay protected.",
    url: "https://mahadevbooks.today/blog/upi-payment-safety-guide",
    type: "article",
    images: [
      {
        url: "https://mahadevbooks.today/wp-content/uploads/2026/05/Hero-Page.png",
        width: 1983,
        height: 793,
        alt: "Is UPI Safe for Online Payments?",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Is UPI Safe for Online Payments? A Complete Safety Guide",
    description:
      "Everything you need to know about UPI payment security — how it works, risks to watch for, scam tactics to avoid, and how to stay protected.",
    images: ["https://mahadevbooks.today/wp-content/uploads/2026/05/Hero-Page.png"],
  },
  other: {
    "article:published_time": "2026-08-14",
    "article:modified_time": "2026-08-14",
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Is UPI Safe for Online Payments? A Complete Safety Guide",
  description:
    "A thorough guide to UPI payment security covering NPCI standards, encryption, common scam patterns, and practical safety tips for Indian users.",
  author: {
    "@type": "Organization",
    name: "Mahadev Book Editorial Team",
    url: "https://mahadevbooks.today",
  },
  publisher: {
    "@type": "Organization",
    name: "Mahadev Book",
    logo: {
      "@type": "ImageObject",
      url: "https://mahadevbooks.today/wp-content/uploads/2025/05/cropped-mahadev-book-logo-120x40.png",
    },
  },
  datePublished: "2026-08-14",
  dateModified: "2026-08-14",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://mahadevbooks.today/blog/upi-payment-safety-guide",
  },
};

export default function UpiSafetyGuide() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <Header />
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Blog", href: "/blog" },
          { label: "UPI Payment Safety Guide" },
        ]}
      />
      <main className="bg-black text-white py-6 px-4 sm:px-6 lg:px-8">
        <article className="max-w-3xl mx-auto space-y-8">

          {/* Header */}
          <header className="border-2 border-gold/40 rounded-2xl p-6 md:p-10 bg-[#0c0c0e] shadow-lg text-center space-y-3">
            <div className="flex items-center justify-center gap-3 text-xs text-gray-500 uppercase tracking-wider">
              <span>Mahadev Book Editorial Team</span>
              <span>·</span>
              <time dateTime="2026-08-14">August 14, 2026</time>
              <span>·</span>
              <span>8 min read</span>
            </div>
            <h1 className="text-2xl md:text-4xl font-extrabold text-gold leading-tight">
              Is UPI Safe for Online Payments?
            </h1>
            <p className="text-gray-400 text-sm md:text-base">A Complete Safety Guide – How UPI Works and How to Stay Protected</p>
            <div className="w-20 h-0.5 bg-gold mx-auto" />
          </header>

          {/* Intro */}
          <section className="border border-gold/15 rounded-2xl p-6 md:p-8 bg-[#0c0c0e] space-y-3">
            <p className="text-gray-300 text-sm md:text-base leading-relaxed">
              UPI (Unified Payments Interface) processed over <strong className="text-gold">₹200 trillion</strong> in transactions in a single month in 2026, making it one of the most widely used digital payment systems in the world. But with widespread adoption comes an increase in UPI-related fraud. So — is UPI actually safe?
            </p>
            <p className="text-gray-300 text-sm md:text-base leading-relaxed">
              The short answer is <strong className="text-gold">yes — UPI itself is highly secure</strong>. The risks come from human error and social engineering, not the technology itself. This guide explains how UPI security works and what you must do to protect yourself.
            </p>
          </section>

          {/* Section: How UPI security works */}
          <section className="border border-gold/15 rounded-2xl p-6 md:p-8 bg-[#0c0c0e] space-y-4">
            <h2 className="text-xl md:text-2xl font-bold text-gold">How UPI Security Works – The Technical Layer</h2>
            <p className="text-gray-300 text-sm md:text-base leading-relaxed">
              UPI was built by the National Payments Corporation of India (NPCI) with multiple security layers:
            </p>
            <div className="space-y-3">
              {[
                {
                  feature: "End-to-end encryption",
                  detail: "All UPI transaction data is encrypted using 256-bit SSL/TLS encryption — the same standard used by banks and financial institutions worldwide.",
                },
                {
                  feature: "Two-factor authentication",
                  detail: "Every UPI transaction requires your registered mobile number (factor 1) AND your UPI PIN (factor 2). Without both, no transaction can be completed.",
                },
                {
                  feature: "Virtual Payment Address (VPA)",
                  detail: "Your UPI ID (e.g. yourname@okaxis) acts as a secure alias for your bank account. You never share your account number or IFSC with anyone.",
                },
                {
                  feature: "Device binding",
                  detail: "UPI apps are bound to a specific SIM card and device. If you change phones, you must re-verify — preventing unauthorised access from other devices.",
                },
                {
                  feature: "Transaction limits",
                  detail: "NPCI caps standard UPI transactions at ₹1 lakh per transaction, limiting exposure from any single fraudulent transaction.",
                },
              ].map((item, i) => (
                <div key={i} className="bg-black/40 border border-gold/10 p-4 rounded-xl space-y-1">
                  <p className="text-gold font-bold text-sm">✅ {item.feature}</p>
                  <p className="text-gray-300 text-xs leading-relaxed">{item.detail}</p>
                </div>
              ))}
            </div>
            <p className="text-gray-400 text-xs">Source: NPCI UPI Technical Standards and Security Guidelines</p>
          </section>

          {/* Section: Common scams */}
          <section className="border border-gold/15 rounded-2xl p-6 md:p-8 bg-[#0c0c0e] space-y-4">
            <h2 className="text-xl md:text-2xl font-bold text-gold">Common UPI Scams – And How to Avoid Them</h2>
            <p className="text-gray-300 text-sm md:text-base leading-relaxed">
              The UPI system itself is not the weak point — fraudsters exploit <strong className="text-gold">human behaviour</strong>. Here are the most common UPI scam patterns:
            </p>
            <div className="space-y-4">
              {[
                {
                  scam: "Fake Collect Request",
                  how: "A fraudster sends a UPI collect request claiming to be from a company or platform. The request looks like a payment notification but actually takes money FROM you.",
                  avoid: "Never approve an incoming UPI collect request unless you initiated it yourself.",
                },
                {
                  scam: "'Scan to Receive' QR Trick",
                  how: "A scammer tells you to scan their QR code to receive money. Scanning a QR code initiates a payment FROM you — not to you.",
                  avoid: "QR codes are always used to send money, never to receive it.",
                },
                {
                  scam: "Fake Customer Care",
                  how: "Fraudsters pose as UPI app customer care and ask for your UPI PIN to 'verify' your account or 'process' a refund.",
                  avoid: "No legitimate company will ever ask for your UPI PIN. Hang up immediately.",
                },
                {
                  scam: "SIM Swap Attack",
                  how: "A fraudster convinces your telecom provider to issue a duplicate SIM, gaining access to OTPs sent to your number.",
                  avoid: "Register a UPI PIN alert with your bank and contact your telecom immediately if your SIM stops working unexpectedly.",
                },
              ].map((scam, i) => (
                <div key={i} className="border border-red-900/40 bg-red-950/10 p-4 rounded-xl space-y-2">
                  <p className="text-red-400 font-bold text-sm">⚠️ {scam.scam}</p>
                  <p className="text-gray-300 text-xs leading-relaxed"><strong className="text-gray-200">How it works:</strong> {scam.how}</p>
                  <p className="text-green-400 text-xs leading-relaxed"><strong>How to avoid:</strong> {scam.avoid}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Section: Checklist */}
          <section className="border border-gold/15 rounded-2xl p-6 md:p-8 bg-[#0c0c0e] space-y-4">
            <h2 className="text-xl md:text-2xl font-bold text-gold">UPI Safety Checklist – Do This Every Time</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                "Always verify the recipient name shown after entering their UPI ID — before confirming.",
                "Keep your UPI PIN private. Never share it with anyone, including support staff.",
                "Only make UPI payments from your personal, registered device.",
                "Enable transaction notifications on your bank app for instant alerts.",
                "Set a daily UPI transaction limit in your banking app.",
                "Regularly check your bank statement for unauthorised transactions.",
                "Never approve UPI collect requests you did not initiate.",
                "If your SIM stops working unexpectedly, contact your telecom provider immediately.",
              ].map((item, i) => (
                <div key={i} className="flex gap-2 items-start bg-black/30 border border-gold/10 p-3 rounded-lg">
                  <span className="text-gold text-sm shrink-0">✅</span>
                  <p className="text-gray-300 text-xs leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Internal links */}
          <section className="border border-gold/15 rounded-2xl p-6 md:p-8 bg-[#0c0c0e] space-y-4">
            <h2 className="text-xl font-bold text-gold">Related Guides</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { title: "UPI Payment Guide", href: "/upi-payment-guide", desc: "Step-by-step instructions for UPI deposits and withdrawals." },
                { title: "Responsible Gaming", href: "/responsible-gaming", desc: "Safe betting tools and support resources." },
                { title: "Cricket Betting Guide", href: "/cricket-betting-guide", desc: "How cricket betting markets and odds work." },
                { title: "FAQs", href: "/faqs", desc: "Answers to common account and payment questions." },
              ].map((link, i) => (
                <a key={i} href={link.href} className="block bg-black/40 border border-gold/10 hover:border-gold/40 p-4 rounded-xl space-y-1 transition-colors duration-200">
                  <p className="text-gold font-bold text-sm">{link.title} →</p>
                  <p className="text-gray-400 text-xs">{link.desc}</p>
                </a>
              ))}
            </div>
          </section>

          <p className="text-center text-xs text-gray-600 pb-4">
            Published: August 14, 2026 · Mahadev Book Editorial Team · Security information based on NPCI guidelines ·{" "}
            <a href="/responsible-gaming" className="hover:text-gold underline">Responsible Gaming</a>
          </p>
        </article>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
