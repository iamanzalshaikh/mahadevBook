import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import Breadcrumb from "@/components/Breadcrumb";


export const metadata: Metadata = {
  title: "UPI Payment Guide for Online Sports Platforms",
  description:
    "A complete guide to using UPI for online payments on sports platforms. Learn how Google Pay, PhonePe, and BHIM UPI work, how to stay safe, and what to check before you pay.",
  alternates: {
    canonical: "https://mahadevbooks.today/upi-payment-guide",
  },
  openGraph: {
    title: "UPI Payment Guide for Online Sports Platforms",
    description:
      "Everything you need to know about using UPI safely for online payments — Google Pay, PhonePe, BHIM, safety tips, and what to avoid.",
    url: "https://mahadevbooks.today/upi-payment-guide",
    type: "article",
    images: [
      {
        url: "https://mahadevbooks.today/wp-content/uploads/2026/05/Hero-Page.png",
        width: 1983,
        height: 793,
        alt: "UPI Payment Guide – Mahadev Book",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "UPI Payment Guide for Online Sports Platforms",
    description:
      "Everything you need to know about using UPI safely for online payments — Google Pay, PhonePe, BHIM, safety tips, and what to avoid.",
    images: ["https://mahadevbooks.today/wp-content/uploads/2026/05/Hero-Page.png"],
  },
  other: {
    "article:modified_time": "2026-08-14",
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "UPI Payment Guide for Online Sports Platforms",
  description:
    "A comprehensive guide to using UPI (Unified Payments Interface) safely for online sports platform transactions including deposits and withdrawals.",
  author: {
    "@type": "Organization",
    name: "Mahadev Book",
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
    "@id": "https://mahadevbooks.today/upi-payment-guide",
  },
};

export default function UpiPaymentGuide() {
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
          { label: "UPI Payment Guide" },
        ]}
      />
      <main className="bg-black text-white py-6 px-4 sm:px-6 lg:px-8 space-y-8">

        {/* Hero */}
        <section className="max-w-4xl mx-auto border-2 border-gold/40 rounded-2xl p-6 md:p-10 bg-[#0c0c0e] shadow-lg text-center">
          <h1 className="text-2xl md:text-4xl font-extrabold text-gold leading-tight tracking-wide uppercase">
            UPI Payment Guide
          </h1>
          <p className="text-gray-400 text-sm mt-2">How UPI Works for Online Payments – Safety Tips & Step-by-Step Instructions</p>
          <div className="w-24 h-0.5 bg-gold mx-auto mt-4" />
          <p className="text-gray-300 text-base md:text-lg mt-6 leading-relaxed">
            UPI (Unified Payments Interface) is India&apos;s real-time payment system, developed by the National Payments Corporation of India (NPCI). It is now one of the most widely used payment methods for online transactions — instant, secure, and available 24/7.
          </p>
        </section>

        {/* Section: What is UPI */}
        <section className="max-w-4xl mx-auto border border-gold/20 rounded-2xl p-6 md:p-10 bg-[#0c0c0e] shadow-lg space-y-4">
          <h2 className="text-xl md:text-2xl font-bold text-gold uppercase tracking-wider">
            What Is UPI and How Does It Work?
          </h2>
          <p className="text-gray-300 text-sm md:text-base leading-relaxed">
            UPI connects your bank account directly to a Virtual Payment Address (VPA), also called a UPI ID. When you make a payment, money moves instantly from your bank account to the recipient — no card numbers, no passwords shared, no intermediaries.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
            {[
              { stat: "₹200T+", label: "Monthly transaction value in India" },
              { stat: "50+", label: "Banks supported on UPI network" },
              { stat: "24/7", label: "Available every day including holidays" },
            ].map((s, i) => (
              <div key={i} className="bg-black/40 border border-gold/10 p-4 rounded-xl text-center">
                <p className="text-gold font-extrabold text-2xl">{s.stat}</p>
                <p className="text-gray-400 text-xs mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Section: Popular UPI apps */}
        <section className="max-w-4xl mx-auto border border-gold/20 rounded-2xl p-6 md:p-10 bg-[#0c0c0e] shadow-lg space-y-6">
          <h2 className="text-xl md:text-2xl font-bold text-gold uppercase tracking-wider">
            Popular UPI Apps in India
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              {
                name: "Google Pay",
                desc: "One of the most widely used UPI apps. Offers cashback rewards, simple interface, and instant transfers between bank accounts.",
              },
              {
                name: "PhonePe",
                desc: "Supports multiple bank accounts and UPI IDs. Popular for its quick payment flow, bill payments, and insurance features.",
              },
              {
                name: "BHIM UPI",
                desc: "The NPCI official app. Lightweight, secure, and works on basic smartphones. Ideal for straightforward bank-to-bank transfers.",
              },
            ].map((app, i) => (
              <div key={i} className="bg-black/40 border border-gold/10 p-5 rounded-xl space-y-2">
                <h3 className="text-gold font-bold text-base">{app.name}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{app.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Section: How to pay step-by-step */}
        <section className="max-w-4xl mx-auto border border-gold/20 rounded-2xl p-6 md:p-10 bg-[#0c0c0e] shadow-lg space-y-4">
          <h2 className="text-xl md:text-2xl font-bold text-gold uppercase tracking-wider">
            How to Make a UPI Payment – Step by Step
          </h2>
          <ol className="space-y-4 text-sm md:text-base text-gray-200">
            {[
              "Open your preferred UPI app (Google Pay, PhonePe, or BHIM).",
              "Tap 'Send Money' or 'Pay' and enter the recipient's UPI ID or scan their QR code.",
              "Enter the amount you wish to transfer.",
              "Add an optional note or reference (e.g., your account username).",
              "Verify the recipient name shown — this is fetched directly from their bank. Confirm it matches who you intend to pay.",
              "Enter your UPI PIN to authenticate and confirm the transaction.",
              "You will receive an instant SMS and in-app confirmation once the transaction succeeds.",
            ].map((step, i) => (
              <li key={i} className="flex gap-3">
                <span className="text-gold font-bold shrink-0">{i + 1}.</span>
                <span>{step}</span>
              </li>
            ))}
          </ol>
        </section>

        {/* Section: Safety tips */}
        <section className="max-w-4xl mx-auto border border-gold/20 rounded-2xl p-6 md:p-10 bg-[#0c0c0e] shadow-lg space-y-6">
          <h2 className="text-xl md:text-2xl font-bold text-gold uppercase tracking-wider">
            UPI Safety Tips – What to Always Check
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {[
              { label: "✅ Verify recipient name", tip: "Always confirm the name shown after entering a UPI ID before approving payment." },
              { label: "✅ Use registered devices only", tip: "Never make UPI payments from a shared or public device. Always use your own registered phone." },
              { label: "✅ Keep your UPI PIN private", tip: "Your UPI PIN should never be shared with anyone — not even bank or platform support staff." },
              { label: "✅ Enable transaction limits", tip: "Most UPI apps let you set daily transaction limits. Use this to cap exposure from unauthorized use." },
              { label: "❌ Never scan QR to receive money", tip: "Scanning a QR code initiates a payment FROM you, not to you. Fraudsters often use this trick." },
              { label: "❌ Avoid unknown payment requests", tip: "Do not approve incoming UPI collect requests from unknown numbers or unfamiliar services." },
            ].map((tip, i) => (
              <div key={i} className="bg-black/40 border border-gold/10 p-4 rounded-xl space-y-1">
                <p className="text-gold font-bold text-sm">{tip.label}</p>
                <p className="text-gray-300 text-xs leading-relaxed">{tip.tip}</p>
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-500 pt-2">
            Source: NPCI UPI Safety Guidelines. Always refer to your bank&apos;s official communications for the latest advice.
          </p>
        </section>

        {/* Section: UPI limits */}
        <section className="max-w-4xl mx-auto border border-gold/20 rounded-2xl p-6 md:p-10 bg-[#0c0c0e] shadow-lg space-y-4">
          <h2 className="text-xl md:text-2xl font-bold text-gold uppercase tracking-wider">
            UPI Transaction Limits
          </h2>
          <p className="text-gray-300 text-sm md:text-base leading-relaxed">
            NPCI sets a default per-transaction UPI limit of <strong className="text-gold">₹1 lakh</strong> for most banks. Some banks allow up to ₹2 lakh. Daily limits vary by bank and app. Always check your bank&apos;s UPI limit before making large transactions.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left text-gray-300 border border-gold/10 rounded-xl overflow-hidden">
              <thead className="bg-gold/10 text-gold uppercase text-xs">
                <tr>
                  <th className="px-4 py-3">UPI App</th>
                  <th className="px-4 py-3">Per Transaction Limit</th>
                  <th className="px-4 py-3">Daily Limit</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { app: "Google Pay", per: "₹1 lakh", daily: "₹1 lakh" },
                  { app: "PhonePe", per: "₹1 lakh", daily: "₹1 lakh" },
                  { app: "BHIM UPI", per: "₹1 lakh", daily: "₹1 lakh" },
                ].map((row, i) => (
                  <tr key={i} className="border-t border-gold/10">
                    <td className="px-4 py-3">{row.app}</td>
                    <td className="px-4 py-3">{row.per}</td>
                    <td className="px-4 py-3">{row.daily}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500">Limits are indicative and may vary by bank. Check your bank&apos;s official UPI page for exact limits.</p>
        </section>

        {/* CTA */}
        <section className="max-w-4xl mx-auto border-2 border-gold/40 rounded-2xl p-6 md:p-10 bg-[#0c0c0e] shadow-lg text-center space-y-4">
          <h2 className="text-xl md:text-2xl font-bold text-gold uppercase">Ready to Get Started?</h2>
          <p className="text-gray-300 text-sm md:text-base max-w-xl mx-auto">
            Mahadev Book supports instant UPI deposits via Google Pay, PhonePe, and BHIM. Get your <a href="/online-cricket-id" className="text-gold font-semibold hover:underline">Cricket ID</a> and make your first deposit in under 2 minutes.
          </p>
          <a
            href="https://wa.me/+919864360936"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-transparent hover:bg-gold text-gold hover:text-black border-2 border-gold px-10 py-4 rounded-full text-sm font-bold uppercase tracking-wider transition-all duration-200"
          >
            Get Cricket ID via WhatsApp
          </a>
          <p className="text-xs text-gray-600">18+ only. Please play responsibly. See our <a href="/responsible-gaming" className="hover:text-gold underline">Responsible Gaming</a> page.</p>
        </section>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
