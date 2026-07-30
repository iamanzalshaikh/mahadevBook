import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import FAQAccordion from "@/components/FAQAccordion";

export const metadata: Metadata = {
  title: "FAQs – Mahadev Book Cricket ID & Betting Questions Answered",
  description:
    "Find answers to all common questions about Mahadev Book ID, online cricket betting, deposits, withdrawals, and account security. Get help 24/7.",
  alternates: {
    canonical: "https://mahadevbooks.today/faqs",
  },
  openGraph: {
    title: "FAQs – Mahadev Book Cricket ID & Betting Questions Answered",
    description:
      "Find answers to all common questions about Mahadev Book ID, online cricket betting, deposits, withdrawals, and account security.",
    url: "https://mahadevbooks.today/faqs",
    type: "website",
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
        text: "Mahadev Book is a secure online betting platform offering sports betting, casino games, and fantasy gaming. Users can register, get a Mahadev Book ID, deposit funds, and place bets on various events using a secure and user-friendly interface.",
      },
    },
    {
      "@type": "Question",
      name: "How can I get a Mahadev Book ID for online betting?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "To get a Mahadev Book ID, visit the official website or contact support via WhatsApp. Fill out the registration form, verify your details, and receive your unique ID for betting access.",
      },
    },
    {
      "@type": "Question",
      name: "Is Mahadev Book a legal and safe platform?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, Mahadev Book uses certified RNG technology, encryption protocols, and operates under strict compliance to offer fair, legal, and secure online betting in India.",
      },
    },
    {
      "@type": "Question",
      name: "Can I use Mahadev Book on mobile devices?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely. Mahadev Book offers a fully optimized mobile website and a downloadable app for Android and iOS, allowing you to bet anytime, anywhere.",
      },
    },
  ],
};

export default function FAQsPage() {

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Header />
      <main className="flex-grow bg-black py-12 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gold mb-4 text-center font-heading">
            Frequently Asked Questions
          </h1>
          <p className="text-center text-gray-300 max-w-2xl mx-auto mb-10 sm:mb-12 text-sm md:text-base">
            Got questions about Mahadev Book? Find quick answers here about getting your Cricket ID, deposits, withdrawals, and security.
          </p>
          <div className="bg-[#ffca61] p-5 sm:p-6 md:p-10 rounded-2xl border border-black/10 shadow-sm">
            <FAQAccordion />
          </div>
        </div>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}

