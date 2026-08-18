import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import FAQAccordion from "@/components/FAQAccordion";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "FAQs – Mahadev Book Frequently Asked Questions",
  description:
    "Find answers to the most common questions about Mahadev Book — account registration, cricket IDs, deposits via UPI, withdrawals, app downloads, and responsible gaming.",
  alternates: {
    canonical: "https://mahadevbooks.today/faqs",
  },
  openGraph: {
    title: "FAQs – Frequently Asked Questions | Mahadev Book",
    description:
      "Answers to common questions about cricket IDs, UPI deposits, withdrawals, app access, responsible gaming, and account management on Mahadev Book.",
    url: "https://mahadevbooks.today/faqs",
    type: "website",
    images: [
      {
        url: "https://mahadevbooks.today/wp-content/uploads/2026/05/Hero-Page.png",
        width: 1983,
        height: 793,
        alt: "FAQs – Mahadev Book",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "FAQs – Frequently Asked Questions | Mahadev Book",
    description:
      "Answers to common questions about cricket IDs, UPI deposits, withdrawals, app access, responsible gaming, and account management on Mahadev Book.",
    images: ["https://mahadevbooks.today/wp-content/uploads/2026/05/Hero-Page.png"],
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is Mahadev Book and how does it work?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Mahadev Book is a secure online sports betting platform offering cricket betting, casino games, and fantasy gaming. Users register, obtain a Cricket ID, deposit funds via UPI, and place bets on cricket, football, and other sports.",
      },
    },
    {
      "@type": "Question",
      name: "How do I get a Mahadev Book Cricket ID?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Contact us via WhatsApp at +91 98643 60936. Share your basic details and you will receive your Cricket ID within minutes.",
      },
    },
    {
      "@type": "Question",
      name: "Is Mahadev Book available on mobile?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Mahadev Book has a fully optimised mobile website. An Android APK is also available — contact support via WhatsApp for the download link.",
      },
    },
    {
      "@type": "Question",
      name: "What payment methods does Mahadev Book accept?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We accept UPI (Google Pay, PhonePe, BHIM), debit and credit cards, and approved e-wallets. All transactions are encrypted and processed securely.",
      },
    },
    {
      "@type": "Question",
      name: "How long do withdrawals take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Withdrawals are processed within 24–48 hours. First-time withdrawals may require identity verification which can extend this timeline.",
      },
    },
    {
      "@type": "Question",
      name: "What sports can I bet on at Mahadev Book?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Mahadev Book offers markets on cricket (IPL, T20, ODI, Test), football (EPL, La Liga, UEFA Champions League), tennis, basketball, horse racing, and more.",
      },
    },
    {
      "@type": "Question",
      name: "Can I self-exclude from Mahadev Book?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Contact support via WhatsApp to request temporary (1 week to 6 months) or permanent self-exclusion. Requests are actioned within 24 hours.",
      },
    },
    {
      "@type": "Question",
      name: "What age do I need to be to use Mahadev Book?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You must be at least 18 years of age to register and use Mahadev Book. We may request age verification documents at any time.",
      },
    },
  ],
};

const extraFaqs = [
  {
    q: "How do I reset my Mahadev Book password?",
    a: "Contact support via WhatsApp. Password resets are handled manually by our team after identity verification.",
  },
  {
    q: "Are welcome bonuses available for new users?",
    a: "New users may be eligible for a welcome bonus on their first deposit. Bonuses are subject to wagering requirements. Contact support for current offers.",
  },
  {
    q: "What is the minimum deposit amount?",
    a: "Minimum deposits vary by payment method. Contact support for the current minimum limits.",
  },
  {
    q: "How do I contact Mahadev Book support?",
    a: "You can reach our 24/7 support team via WhatsApp at +91 98643 60936. We aim to respond to all messages within a few minutes.",
  },
];

export default function FAQsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Header />
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "FAQs" },
        ]}
      />
      <main className="bg-black text-white py-6 px-4 sm:px-6 lg:px-8 space-y-8">

        {/* Hero */}
        <section className="max-w-4xl mx-auto border-2 border-gold/40 rounded-2xl p-6 md:p-10 bg-[#0c0c0e] shadow-lg text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gold mb-4 font-heading">
            Frequently Asked Questions
          </h1>
          <div className="w-24 h-0.5 bg-gold mx-auto" />
          <p className="text-center text-gray-300 max-w-2xl mx-auto mt-6 text-sm md:text-base">
            Find quick answers about getting your Cricket ID, UPI deposits, withdrawals, app access, and responsible gaming on Mahadev Book.
          </p>
        </section>

        {/* Main FAQ accordion */}
        <section className="max-w-4xl mx-auto border border-gold/20 rounded-2xl p-5 sm:p-6 md:p-10 bg-[#ffca61] shadow-sm">
          <h2 className="text-xl font-bold text-black uppercase tracking-wider mb-6">General Questions</h2>
          <FAQAccordion />
        </section>

        {/* Extra FAQs */}
        <section className="max-w-4xl mx-auto border border-gold/20 rounded-2xl p-6 md:p-10 bg-[#0c0c0e] shadow-lg space-y-5">
          <h2 className="text-xl md:text-2xl font-bold text-gold uppercase tracking-wider">
            Accounts, Payments &amp; Support
          </h2>
          {extraFaqs.map((faq, i) => (
            <div key={i} className="border-b border-gold/10 pb-5 last:border-0 last:pb-0 space-y-2">
              <h3 className="text-gold font-bold text-sm md:text-base">{faq.q}</h3>
              <p className="text-gray-300 text-sm leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </section>

        {/* Links to guides */}
        <section className="max-w-4xl mx-auto border border-gold/15 rounded-2xl p-6 md:p-8 bg-[#0c0c0e] shadow-lg">
          <h2 className="text-lg font-bold text-gold uppercase tracking-wider mb-4">Related Guides</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { title: "Cricket Betting Guide", href: "/cricket-betting-guide", desc: "How betting odds, markets and bet types work." },
              { title: "IPL Betting Guide", href: "/ipl-betting-guide", desc: "IPL-specific markets, live betting, and tips." },
              { title: "UPI Payment Guide", href: "/upi-payment-guide", desc: "How to use UPI safely for online payments." },
            ].map((guide, i) => (
              <a key={i} href={guide.href} className="block bg-black/40 border border-gold/10 hover:border-gold/40 p-4 rounded-xl space-y-1 transition-colors duration-200">
                <p className="text-gold font-bold text-sm">{guide.title} →</p>
                <p className="text-gray-400 text-xs">{guide.desc}</p>
              </a>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="max-w-4xl mx-auto border-2 border-gold/40 rounded-2xl p-6 md:p-10 bg-[#0c0c0e] shadow-lg text-center space-y-4">
          <h2 className="text-xl font-bold text-gold uppercase">Still Have Questions?</h2>
          <p className="text-gray-300 text-sm md:text-base">
            Our support team is available 24/7 on WhatsApp.
          </p>
          <a
            href="https://wa.me/+919864360936"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-transparent hover:bg-gold text-gold hover:text-black border-2 border-gold px-10 py-4 rounded-full text-sm font-bold uppercase tracking-wider transition-all duration-200"
          >
            Chat With Support
          </a>
          <p className="text-xs text-gray-600">
            18+ only. Please bet responsibly. See our{" "}
            <a href="/responsible-gaming" className="hover:text-gold underline">Responsible Gaming</a> page.
          </p>
        </section>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
