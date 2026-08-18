import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Privacy Policy – Mahadev Book | How We Protect Your Data",
  description:
    "Read Mahadev Book's Privacy Policy to understand how we collect, use, and protect your personal and financial data. SSL encrypted. Compliant and secure.",
  alternates: {
    canonical: "https://mahadevbooks.today/privacy-policy",
  },
  openGraph: {
    title: "Privacy Policy – Mahadev Book",
    description:
      "Read Mahadev Book's Privacy Policy to understand how we collect, use, and protect your personal and financial data.",
    url: "https://mahadevbooks.today/privacy-policy",
    type: "website",
    images: [
      {
        url: "https://mahadevbooks.today/wp-content/uploads/2026/05/Hero-Page.png",
        width: 1983,
        height: 793,
        alt: "Privacy Policy – Mahadev Book",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy – Mahadev Book",
    description:
      "Read Mahadev Book's Privacy Policy to understand how we collect, use, and protect your personal and financial data.",
    images: ["https://mahadevbooks.today/wp-content/uploads/2026/05/Hero-Page.png"],
  },
};

export default function PrivacyPolicy() {
  return (
    <>
      <Header />
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Privacy Policy" },
        ]}
      />
      <main className="bg-black text-white py-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Main Title */}
          <div className="space-y-4">
            <h1 className="text-3xl md:text-4xl font-extrabold text-gold font-heading border-b border-gold/10 pb-4">
              Privacy Policy – Mahadev Book
            </h1>
            <p className="text-gray-400 text-xs italic">
              Effective Date: [01 January 2026]
            </p>
            <p className="text-gray-300 text-sm md:text-base leading-relaxed">
              At Mahadev Book, available online, https://mahadevbooks.today/ we place privacy on top of the priority list. This Privacy Policy describes the ways of collecting, utilizing, and securing your personal and financial information when you visit our website, mobile application, or our services. By accessing a Mahadev Book ID, using the Mahadev online library, or even just exploring our betting and casinos, you agree to the terms set out in this policy.
            </p>
          </div>

          {/* Section 1 */}
          <div className="space-y-4">
            <h2 className="text-xl md:text-2xl font-bold text-gold font-heading">
              1. Information We Collect
            </h2>
            <p className="text-gray-300 text-sm leading-relaxed">
              To guarantee secure, customized and trouble-free betting conduct, Mahadev Book may collect the following information:
            </p>
            <ul className="space-y-2 pl-6 text-sm text-gray-300 list-disc">
              <li>
                <strong className="text-white">Personal Identification Information:</strong> Name, email, contact number, gender and date of birth.
              </li>
              <li>
                <strong className="text-white">Account Credentials:</strong> Mahadev Book ID, password, and login history.
              </li>
              <li>
                <strong className="text-white">Payment Information:</strong> UPI ID, bank account details, transaction history.
              </li>
              <li>
                <strong className="text-white">Device and Location Data:</strong> IP address, browser type, device type.
              </li>
              <li>
                <strong className="text-white">Usage Behavior:</strong> Betting history, click patterns, time spent, and preferences.
              </li>
            </ul>
          </div>

          {/* Section 2 */}
          <div className="space-y-4">
            <h2 className="text-xl md:text-2xl font-bold text-gold font-heading">
              2. How We Use Your Information
            </h2>
            <p className="text-gray-300 text-sm leading-relaxed">
              We use the data we collect to:
            </p>
            <ul className="space-y-2 pl-6 text-sm text-gray-300 list-disc">
              <li>Process your <strong>Mahadev Book ID</strong> registration and manage your account.</li>
              <li>Enable safe and secure betting across sports and casino games.</li>
              <li>Provide real-time odds, notifications, and betting updates.</li>
              <li>Improve user experience by personalizing content and promotional offers.</li>
              <li>Prevent fraudulent activities and ensure platform integrity.</li>
              <li>Comply with legal obligations and regulatory requirements.</li>
            </ul>
          </div>

          {/* Section 3 */}
          <div className="space-y-4">
            <h2 className="text-xl md:text-2xl font-bold text-gold font-heading">
              3. Data Sharing and Disclosure
            </h2>
            <p className="text-gray-300 text-sm leading-relaxed">
              Mahadev Book does not sell or rent your data to third parties. However, we may share your information in the following circumstances:
            </p>
            <ul className="space-y-2 pl-6 text-sm text-gray-300 list-disc">
              <li>With payment gateway providers for secure transactions.</li>
              <li>With authorized regulatory bodies if required by law.</li>
            </ul>
          </div>

          {/* Section 4 */}
          <div className="space-y-4">
            <h2 className="text-xl md:text-2xl font-bold text-gold font-heading">
              4. Data Security
            </h2>
            <p className="text-gray-300 text-sm leading-relaxed">
              Users privacy and security are our top priorities. We employ:
            </p>
            <ul className="space-y-2 pl-6 text-sm text-gray-300 list-disc">
              <li>SSL encryption for secure communication.</li>
              <li>Two-factor authentication (2FA) on account access.</li>
              <li>Certified RNG (Random Number Generator) technology for fair gaming.</li>
              <li>Regular security audits and real-time threat monitoring.</li>
            </ul>
          </div>

          {/* Section 5 */}
          <div className="space-y-4">
            <h2 className="text-xl md:text-2xl font-bold text-gold font-heading">
              5. Children&apos;s Privacy
            </h2>
            <p className="text-gray-300 text-sm leading-relaxed">
              Mahadev Book strictly prohibits access to anyone under the age of 18. We do not knowingly collect personal data from minors.
            </p>
          </div>

          {/* Section 6 */}
          <div className="space-y-4">
            <h2 className="text-xl md:text-2xl font-bold text-gold font-heading">
              6. Your Rights
            </h2>
            <p className="text-gray-300 text-sm leading-relaxed">
              As a user, you have the right to:
            </p>
            <ul className="space-y-2 pl-6 text-sm text-gray-300 list-disc">
              <li>Access and update your personal data.</li>
              <li>Request deletion of your Mahadev Book account.</li>
              <li>Withdraw consent for marketing communications at any time.</li>
            </ul>
          </div>

          {/* Changes */}
          <div className="space-y-4">
            <h2 className="text-xl md:text-2xl font-bold text-gold font-heading">
              Changes to This Privacy Policy
            </h2>
            <p className="text-gray-300 text-sm leading-relaxed">
              This Privacy Policy may be changed periodically. This Privacy Policy will be updated with a new &quot;Effective Date&quot;, and all updates will show up on this page. Be sure to visit this page regularly so you are kept to date.
            </p>
          </div>

          {/* Contact Us */}
          <div className="space-y-4 border-t border-gold/10 pt-6">
            <h2 className="text-xl md:text-2xl font-bold text-gold font-heading">
              Contact Us
            </h2>
            <p className="text-gray-300 text-sm leading-relaxed">
              For any privacy-related inquiries, data access requests, or complaints, you can reach our 24/7 support team:
            </p>
            <ul className="space-y-1.5 pl-6 text-sm text-gray-300 list-disc">
              <li>
                <strong>Email:</strong> <a href="mailto:support@mahadevbooks.digital" className="text-gold hover:underline">support@mahadevbooks.digital</a>
              </li>
              <li>
                <strong>Live Chat:</strong> Available on our website and app
              </li>
            </ul>
          </div>
        </div>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
