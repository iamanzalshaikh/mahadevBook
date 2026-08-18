import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Terms and Conditions | Mahadev Book",
  description:
    "Read Mahadev Book's Terms and Conditions covering account registration, betting rules, deposits, withdrawals, responsible gaming, and user obligations.",
  alternates: {
    canonical: "https://mahadevbooks.today/terms-and-conditions",
  },
  openGraph: {
    title: "Terms and Conditions | Mahadev Book",
    description:
      "Mahadev Book Terms and Conditions — account rules, eligible users (18+), betting policies, payment terms, and responsible gaming obligations.",
    url: "https://mahadevbooks.today/terms-and-conditions",
    type: "website",
    images: [
      {
        url: "https://mahadevbooks.today/wp-content/uploads/2026/05/Hero-Page.png",
        width: 1983,
        height: 793,
        alt: "Terms and Conditions | Mahadev Book",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms and Conditions | Mahadev Book",
    description:
      "Mahadev Book Terms and Conditions — account rules, eligible users (18+), betting policies, payment terms, and responsible gaming obligations.",
    images: ["https://mahadevbooks.today/wp-content/uploads/2026/05/Hero-Page.png"],
  },
};

const sections = [
  {
    title: "1. Acceptance of Terms",
    content:
      "By accessing or using Mahadev Book (mahadevbooks.today), you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, you must not use our platform. We reserve the right to update these terms at any time with notice provided on this page.",
  },
  {
    title: "2. Eligibility",
    content:
      "You must be at least 18 years of age to register and use Mahadev Book. By creating an account, you confirm that you are of legal gambling age in your jurisdiction and that online sports betting is permitted where you reside. We reserve the right to request age verification documents at any time.",
  },
  {
    title: "3. Account Registration",
    content:
      "Each user may hold only one account. Creating multiple accounts is prohibited and may result in permanent suspension. You are responsible for keeping your login credentials secure. If you suspect unauthorized access to your account, contact support immediately via WhatsApp.",
  },
  {
    title: "4. Deposits",
    content:
      "All deposits must be made using payment methods registered in your own name. We support UPI (Google Pay, PhonePe, BHIM), debit/credit cards, and approved e-wallets. Minimum and maximum deposit amounts are specified at the time of transaction. We do not accept deposits intended for use in illegal activities.",
  },
  {
    title: "5. Withdrawals",
    content:
      "Withdrawal requests are processed within 24–48 hours subject to verification. We may request identity verification documents before processing any withdrawal. Withdrawals will only be returned to the payment method used for deposit. Any bonuses are subject to wagering requirements before withdrawal.",
  },
  {
    title: "6. Betting Rules",
    content:
      "All bets are accepted subject to availability and our right to void any bet placed in error, including incorrect odds. Bets accepted after an event has started may be voided at our discretion unless explicitly offered as in-play markets. Users are responsible for verifying their bet details before confirming.",
  },
  {
    title: "7. Bonuses and Promotions",
    content:
      "Bonuses are subject to individual promotion terms and wagering requirements. Bonuses may not be withdrawn directly and must be played through the stated number of times. We reserve the right to withdraw or modify any promotion at any time. Abuse of bonus offers will result in account suspension.",
  },
  {
    title: "8. Responsible Gaming",
    content:
      "We are committed to responsible gaming. Users may request deposit limits, self-exclusion, or account closure at any time by contacting support. We do not extend credit for betting purposes. See our Responsible Gaming page for full policy details and support resources.",
  },
  {
    title: "9. Prohibited Activities",
    content:
      "The following are strictly prohibited: creating multiple accounts, colluding with others to manipulate betting outcomes, using automated bots or software to place bets, placing bets on behalf of an excluded user, and any activity that constitutes fraud or money laundering.",
  },
  {
    title: "10. Intellectual Property",
    content:
      "All content on mahadevbooks.today including text, graphics, logos, and software is the property of Mahadev Book or its licensors. You may not reproduce, distribute, or create derivative works without express written permission.",
  },
  {
    title: "11. Limitation of Liability",
    content:
      "Mahadev Book is not liable for any loss of profits, data, or opportunity arising from use of the platform. Our liability in any circumstance is limited to the amount deposited in your account at the time of the incident. We make no warranties that the platform will be uninterrupted or error-free.",
  },
  {
    title: "12. Governing Law",
    content:
      "These terms are governed by applicable law in the jurisdiction in which Mahadev Book operates. Any disputes shall be resolved through negotiation in the first instance, and if unresolved, referred to appropriate legal proceedings.",
  },
  {
    title: "13. Contact",
    content:
      "For questions about these terms, contact us via WhatsApp at +91 98643 60936 or through the contact options on our website. We aim to respond to all inquiries within 24 hours.",
  },
];

export default function TermsAndConditions() {
  return (
    <>
      <Header />
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Terms & Conditions" },
        ]}
      />
      <main className="bg-black text-white py-6 px-4 sm:px-6 lg:px-8 space-y-8">
        <section className="max-w-4xl mx-auto border-2 border-gold/40 rounded-2xl p-6 md:p-10 bg-[#0c0c0e] shadow-lg text-center">
          <h1 className="text-2xl md:text-4xl font-extrabold text-gold leading-tight tracking-wide uppercase">
            Terms &amp; Conditions
          </h1>
          <p className="text-gray-400 text-sm mt-2">Last updated: August 2026</p>
          <div className="w-24 h-0.5 bg-gold mx-auto mt-4" />
          <p className="text-gray-300 text-sm md:text-base mt-6 leading-relaxed">
            Please read these Terms and Conditions carefully before using Mahadev Book. These terms govern your use of our platform and the services we provide. This platform is intended for users aged <strong className="text-gold">18 and above only</strong>.
          </p>
        </section>

        <section className="max-w-4xl mx-auto space-y-4">
          {sections.map((section, i) => (
            <div key={i} className="border border-gold/15 rounded-xl p-5 md:p-7 bg-[#0c0c0e] space-y-2">
              <h2 className="text-gold font-bold text-base md:text-lg">{section.title}</h2>
              <p className="text-gray-300 text-sm md:text-base leading-relaxed">{section.content}</p>
            </div>
          ))}
        </section>

        <section className="max-w-4xl mx-auto border border-gold/10 rounded-xl p-5 bg-[#0c0c0e] text-center space-y-2">
          <p className="text-gray-400 text-xs">
            These Terms and Conditions were last updated in August 2026. For the most current version, always refer to this page.
          </p>
          <p className="text-gray-400 text-xs">
            Questions? Contact us:{" "}
            <a href="https://wa.me/+919864360936" target="_blank" rel="noopener noreferrer" className="text-gold hover:underline">
              WhatsApp Support
            </a>{" "}
            | See also:{" "}
            <a href="/privacy-policy" className="text-gold hover:underline">Privacy Policy</a>{" "}
            |{" "}
            <a href="/responsible-gaming" className="text-gold hover:underline">Responsible Gaming</a>
          </p>
        </section>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
