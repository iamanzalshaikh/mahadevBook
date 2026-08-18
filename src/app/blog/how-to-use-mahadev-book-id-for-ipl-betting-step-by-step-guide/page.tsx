import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "How to Use Mahadev Book ID for IPL Betting – Step-by-Step Guide",
  description:
    "A complete step-by-step guide to using your Mahadev Book ID for IPL betting — from getting your ID to placing your first bet, understanding IPL markets, and making UPI deposits.",
  alternates: {
    canonical:
      "https://mahadevbooks.today/blog/how-to-use-mahadev-book-id-for-ipl-betting-step-by-step-guide",
  },
  openGraph: {
    title: "How to Use Mahadev Book ID for IPL Betting – Step-by-Step Guide",
    description:
      "Step-by-step: get your Mahadev Book Cricket ID, deposit via UPI, navigate IPL markets, and place your first bet on the Indian Premier League.",
    url: "https://mahadevbooks.today/blog/how-to-use-mahadev-book-id-for-ipl-betting-step-by-step-guide",
    type: "article",
    images: [
      {
        url: "https://mahadevbooks.today/wp-content/uploads/2025/05/How-to-Use-Mahadev-Book-ID-for-IPL-Betting-–-Step-by-Step-Guide.jpg",
        width: 1200,
        height: 630,
        alt: "How to Use Mahadev Book ID for IPL Betting",
      },
    ],
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How to Use Mahadev Book ID for IPL Betting – Step-by-Step Guide",
  description:
    "A step-by-step guide to using a Mahadev Book Cricket ID for IPL betting — account setup, UPI deposit, reading IPL markets, and placing your first bet.",
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
  datePublished: "2025-05-17",
  dateModified: "2026-08-14",
  image:
    "https://mahadevbooks.today/wp-content/uploads/2025/05/How-to-Use-Mahadev-Book-ID-for-IPL-Betting-–-Step-by-Step-Guide.jpg",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://mahadevbooks.today/blog/how-to-use-mahadev-book-id-for-ipl-betting-step-by-step-guide",
  },
};

const steps = [
  {
    step: "Step 1 – Get Your Mahadev Book Cricket ID",
    content:
      "Before you can place any IPL bets, you need a Mahadev Book Cricket ID. Contact our support team via WhatsApp at +91 98643 60936. Share your name and phone number and your ID will be generated within minutes. Your Cricket ID is your unique login for the platform — keep it private.",
    tip: "You can also request a demo ID first if you want to explore the platform before committing funds.",
  },
  {
    step: "Step 2 – Log In to Your Account",
    content:
      "Visit mahadevbooks.today and click Login. Enter your Cricket ID and password. If you are on mobile, use the same credentials on our mobile-optimised site — no separate app login is needed. Enable 'Remember Me' only on personal devices you trust.",
    tip: "If you forget your password, contact support via WhatsApp for a manual reset after identity verification.",
  },
  {
    step: "Step 3 – Make a Deposit via UPI",
    content:
      "Navigate to the Deposit section of your account. Select UPI as your payment method. Enter the amount you wish to deposit and choose your UPI app — Google Pay, PhonePe, or BHIM are all supported. Confirm the payment using your UPI PIN. Funds are credited instantly.",
    tip: "Always verify the recipient name shown in your UPI app before confirming. Never share your UPI PIN with anyone.",
  },
  {
    step: "Step 4 – Navigate to IPL Betting Markets",
    content:
      "Once your account is funded, go to the Sports section and select Cricket. Find the current or upcoming IPL match you want to bet on. You will see a list of available markets — Match Winner, Top Batsman, Total Sixes, and more. Click any market to see the current odds.",
    tip: "Markets typically open 24–48 hours before the match. Live markets activate at the toss and update ball by ball.",
  },
  {
    step: "Step 5 – Understand the Odds Before Betting",
    content:
      "IPL odds are shown in decimal format. A 2.50 odds means a ₹100 bet returns ₹250 total (₹150 profit). Lower odds = higher probability but smaller return. Higher odds = less likely outcome but bigger payout. Check our Cricket Betting Guide for a full odds breakdown.",
    tip: "Compare odds across different markets before placing a bet. The same team may be priced differently across match winner vs handicap markets.",
  },
  {
    step: "Step 6 – Place Your First IPL Bet",
    content:
      "Select the outcome you want to bet on. A bet slip will appear on the right side. Enter your stake amount. Review the potential payout shown. Click 'Place Bet' to confirm. You will receive an on-screen confirmation and a notification if you have enabled alerts.",
    tip: "Start with small stakes while you are learning the markets. Only increase stakes once you are comfortable with how IPL betting works.",
  },
  {
    step: "Step 7 – Track Your Bet and Withdraw Winnings",
    content:
      "Go to My Bets to track all open and settled bets. Once a match is complete, winnings are credited to your account balance automatically. To withdraw, go to Withdrawal, enter the amount, and select your UPI method. Withdrawals are processed within 24–48 hours.",
    tip: "First-time withdrawals require identity verification. Have your documents ready to avoid delays.",
  },
];

export default function HowToUseIPLBetting() {
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
          { label: "How to Use Mahadev Book ID for IPL Betting" },
        ]}
      />
      <main className="bg-black text-white py-6 px-4 sm:px-6 lg:px-8">
        <article className="max-w-3xl mx-auto space-y-8">

          {/* Hero image */}
          <div className="rounded-2xl overflow-hidden border border-gold/20 shadow-xl">
            <img
              src="https://mahadevbooks.today/wp-content/uploads/2025/05/How-to-Use-Mahadev-Book-ID-for-IPL-Betting-–-Step-by-Step-Guide.jpg"
              alt="How to Use Mahadev Book ID for IPL Betting – Step-by-Step Guide"
              className="w-full h-auto object-cover"
              loading="eager"
            />
          </div>

          {/* Header */}
          <header className="border-2 border-gold/40 rounded-2xl p-6 md:p-10 bg-[#0c0c0e] shadow-lg space-y-3">
            <div className="flex flex-wrap items-center justify-center gap-3 text-xs text-gray-500 uppercase tracking-wider">
              <span>Mahadev Book Editorial Team</span>
              <span>·</span>
              <time dateTime="2025-05-17">May 17, 2025</time>
              <span>·</span>
              <span>Updated August 2026</span>
              <span>·</span>
              <span>9 min read</span>
            </div>
            <h1 className="text-2xl md:text-3xl font-extrabold text-gold leading-tight text-center">
              How to Use Mahadev Book ID for IPL Betting
            </h1>
            <p className="text-gray-400 text-sm md:text-base text-center">A Complete Step-by-Step Guide</p>
            <div className="w-20 h-0.5 bg-gold mx-auto" />
          </header>

          {/* Intro */}
          <section className="border border-gold/15 rounded-2xl p-6 md:p-8 bg-[#0c0c0e] space-y-4">
            <p className="text-gray-300 text-sm md:text-base leading-relaxed">
              With the popularity of the Indian Premier League (IPL) soaring every year, cricket betting has taken on a new dimension. Among the many platforms available, Mahadev Book has become a popular choice for users who want a fast, secure, and straightforward IPL betting experience.
            </p>
            <p className="text-gray-300 text-sm md:text-base leading-relaxed">
              This step-by-step guide walks you through the entire process — from obtaining your Mahadev Book Cricket ID to making your first IPL bet and withdrawing winnings. If you are new to cricket betting, we recommend also reading our{" "}
              <a href="/ipl-betting-guide" className="text-gold font-semibold hover:underline">
                IPL Betting Guide
              </a>{" "}
              to understand markets and odds before you start.
            </p>
            <div className="bg-gold/5 border border-gold/20 rounded-xl p-4">
              <p className="text-gold text-sm font-semibold">⚡ Quick summary</p>
              <ol className="mt-2 space-y-1 text-gray-300 text-sm list-decimal list-inside">
                <li>Get your Cricket ID via WhatsApp</li>
                <li>Log in and deposit via UPI</li>
                <li>Find your IPL match and market</li>
                <li>Understand the odds</li>
                <li>Place your bet</li>
                <li>Track and withdraw winnings</li>
              </ol>
            </div>
          </section>

          {/* Steps */}
          {steps.map((s, i) => (
            <section
              key={i}
              className="border border-gold/15 rounded-2xl p-6 md:p-8 bg-[#0c0c0e] space-y-4"
            >
              <div className="flex items-start gap-4">
                <div className="shrink-0 w-9 h-9 rounded-full bg-gold/10 border border-gold/40 flex items-center justify-center">
                  <span className="text-gold font-extrabold text-sm">{i + 1}</span>
                </div>
                <h2 className="text-lg md:text-xl font-bold text-gold leading-snug">{s.step}</h2>
              </div>
              <p className="text-gray-300 text-sm md:text-base leading-relaxed">{s.content}</p>
              <div className="bg-black/40 border-l-4 border-gold/50 pl-4 py-2 rounded-r-xl">
                <p className="text-gold text-xs font-bold uppercase tracking-wider mb-1">💡 Tip</p>
                <p className="text-gray-400 text-sm leading-relaxed">{s.tip}</p>
              </div>
            </section>
          ))}

          {/* Responsible gaming reminder */}
          <section className="border border-gold/20 rounded-2xl p-6 md:p-8 bg-[#0c0c0e] space-y-3">
            <h2 className="text-lg md:text-xl font-bold text-gold">Bet Responsibly</h2>
            <p className="text-gray-300 text-sm md:text-base leading-relaxed">
              IPL betting should be entertainment — not a financial strategy. Always set a budget before each match and stick to it, regardless of results. Never chase losses with larger bets.
            </p>
            <p className="text-gray-300 text-sm md:text-base leading-relaxed">
              If you ever feel your betting is becoming a problem, Mahadev Book offers deposit limits and self-exclusion options. See our full{" "}
              <a href="/responsible-gaming" className="text-gold font-semibold hover:underline">
                Responsible Gaming
              </a>{" "}
              page for tools and support resources.
            </p>
          </section>

          {/* Internal links */}
          <section className="border border-gold/15 rounded-2xl p-6 md:p-8 bg-[#0c0c0e] space-y-4">
            <h2 className="text-lg font-bold text-gold">Related Guides</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { title: "IPL Betting Guide", href: "/ipl-betting-guide", desc: "Markets, live odds, and IPL strategy." },
                { title: "Cricket Betting Guide", href: "/cricket-betting-guide", desc: "How odds and bet types work." },
                { title: "UPI Payment Guide", href: "/upi-payment-guide", desc: "Step-by-step UPI deposit & withdrawal." },
                { title: "Responsible Gaming", href: "/responsible-gaming", desc: "Tools for safe, controlled betting." },
              ].map((link, i) => (
                <a
                  key={i}
                  href={link.href}
                  className="block bg-black/40 border border-gold/10 hover:border-gold/40 p-4 rounded-xl space-y-1 transition-colors duration-200"
                >
                  <p className="text-gold font-bold text-sm">{link.title} →</p>
                  <p className="text-gray-400 text-xs">{link.desc}</p>
                </a>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className="border-2 border-gold/40 rounded-2xl p-6 md:p-10 bg-[#0c0c0e] shadow-lg text-center space-y-4">
            <h2 className="text-xl font-bold text-gold uppercase">Ready to Start?</h2>
            <p className="text-gray-300 text-sm md:text-base max-w-xl mx-auto">
              Get your{" "}
              <a href="/online-cricket-id" className="text-gold font-semibold hover:underline">
                Online Cricket ID
              </a>{" "}
              via WhatsApp in minutes and access all IPL betting markets on Mahadev Book.
            </p>
            <a
              href="https://wa.me/+919864360936"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-transparent hover:bg-gold text-gold hover:text-black border-2 border-gold px-10 py-4 rounded-full text-sm font-bold uppercase tracking-wider transition-all duration-200"
            >
              Get Cricket ID Now
            </a>
            <p className="text-xs text-gray-600">18+ only. Please bet responsibly.</p>
          </section>

          <p className="text-center text-xs text-gray-600 pb-4">
            Published: May 17, 2025 · Updated August 2026 · Mahadev Book Editorial Team ·{" "}
            <a href="/responsible-gaming" className="hover:text-gold underline">
              Responsible Gaming
            </a>
          </p>
        </article>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
