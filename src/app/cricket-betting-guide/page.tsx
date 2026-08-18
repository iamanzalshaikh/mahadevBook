import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Cricket Betting Guide – How Online Cricket Betting Works",
  description:
    "A complete cricket betting guide for beginners. Learn how cricket betting odds work, types of bets, how to read markets, and tips for responsible betting in India.",
  alternates: {
    canonical: "https://mahadevbooks.today/cricket-betting-guide",
  },
  openGraph: {
    title: "Cricket Betting Guide – How Online Cricket Betting Works",
    description:
      "Learn how cricket betting works, understand odds, explore bet types, and discover responsible betting practices in this complete beginner guide.",
    url: "https://mahadevbooks.today/cricket-betting-guide",
    type: "article",
    images: [
      {
        url: "https://mahadevbooks.today/wp-content/uploads/2026/05/Hero-Page.png",
        width: 1983,
        height: 793,
        alt: "Cricket Betting Guide – Mahadev Book",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cricket Betting Guide – How Online Cricket Betting Works",
    description:
      "Learn how cricket betting works, understand odds, explore bet types, and discover responsible betting practices in this complete beginner guide.",
    images: ["https://mahadevbooks.today/wp-content/uploads/2026/05/Hero-Page.png"],
  },
  other: {
    "article:modified_time": "2026-08-14",
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Cricket Betting Guide – How Online Cricket Betting Works",
  description:
    "A complete guide to online cricket betting covering odds, bet types, live betting, and responsible gaming.",
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
    "@id": "https://mahadevbooks.today/cricket-betting-guide",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the easiest type of cricket bet for beginners?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Match winner bets are the easiest for beginners — you simply pick which team will win the match. As you gain experience you can explore top batsman, top bowler, and run-line markets.",
      },
    },
    {
      "@type": "Question",
      name: "How do decimal odds work in cricket betting?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Decimal odds represent your total return per unit staked. For example, odds of 2.50 mean a ₹100 bet returns ₹250 (₹150 profit + ₹100 stake). Higher decimal odds mean a less likely outcome with a bigger potential payout.",
      },
    },
    {
      "@type": "Question",
      name: "Is live cricket betting different from pre-match betting?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. In live (in-play) betting, odds update in real time as the match progresses. You can bet on events like next wicket, runs in an over, or the match winner at any point during the game.",
      },
    },
  ],
};

export default function CricketBettingGuide() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Header />
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Cricket Betting Guide" },
        ]}
      />
      <main className="bg-black text-white py-6 px-4 sm:px-6 lg:px-8 space-y-8">

        {/* Hero */}
        <section className="max-w-4xl mx-auto border-2 border-gold/40 rounded-2xl p-6 md:p-10 bg-[#0c0c0e] shadow-lg text-center">
          <h1 className="text-2xl md:text-4xl font-extrabold text-gold leading-tight tracking-wide uppercase">
            Cricket Betting Guide
          </h1>
          <p className="text-gray-400 text-sm mt-2">How Online Cricket Betting Works – Beginner to Intermediate</p>
          <div className="w-24 h-0.5 bg-gold mx-auto mt-4" />
          <p className="text-gray-300 text-base md:text-lg mt-6 leading-relaxed">
            Cricket betting in India has grown dramatically over the past decade. Whether you&apos;re curious about IPL markets, T20 internationals, or Test cricket, this guide explains how it all works — from reading odds to placing your first bet responsibly.
          </p>
        </section>

        {/* Section: How betting works */}
        <section className="max-w-4xl mx-auto border border-gold/20 rounded-2xl p-6 md:p-10 bg-[#0c0c0e] shadow-lg space-y-6">
          <h2 className="text-xl md:text-2xl font-bold text-gold uppercase tracking-wider">
            How Cricket Betting Works
          </h2>
          <p className="text-gray-300 text-sm md:text-base leading-relaxed">
            Online cricket betting works through a platform (called a sportsbook or exchange) where you place a wager on a predicted outcome. If your prediction is correct, you win money based on the odds offered. If incorrect, you lose your stake.
          </p>
          <p className="text-gray-300 text-sm md:text-base leading-relaxed">
            The key elements of any cricket bet are:
          </p>
          <ul className="space-y-3 text-sm md:text-base text-gray-200">
            <li className="flex gap-3">
              <span className="text-gold font-bold shrink-0">1.</span>
              <span><strong className="text-gold">Selection</strong> — what you are betting on (e.g., India to win, Virat Kohli top scorer)</span>
            </li>
            <li className="flex gap-3">
              <span className="text-gold font-bold shrink-0">2.</span>
              <span><strong className="text-gold">Odds</strong> — the price the platform offers for that outcome</span>
            </li>
            <li className="flex gap-3">
              <span className="text-gold font-bold shrink-0">3.</span>
              <span><strong className="text-gold">Stake</strong> — the amount of money you wager</span>
            </li>
            <li className="flex gap-3">
              <span className="text-gold font-bold shrink-0">4.</span>
              <span><strong className="text-gold">Payout</strong> — stake × odds (if your selection wins)</span>
            </li>
          </ul>
        </section>

        {/* Section: Types of odds */}
        <section className="max-w-4xl mx-auto border border-gold/20 rounded-2xl p-6 md:p-10 bg-[#0c0c0e] shadow-lg space-y-6">
          <h2 className="text-xl md:text-2xl font-bold text-gold uppercase tracking-wider">
            Understanding Cricket Betting Odds
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                type: "Decimal Odds",
                example: "2.50",
                explain: "Most common in India. Multiply your stake by the decimal to get total return. Odds of 2.50 on a ₹100 bet = ₹250 return (₹150 profit).",
              },
              {
                type: "Fractional Odds",
                example: "3/2",
                explain: "Used in some UK-style markets. Numerator is profit, denominator is stake. 3/2 means ₹150 profit on a ₹100 bet.",
              },
              {
                type: "Moneyline (American)",
                example: "+150 / -200",
                explain: "Less common in India. +150 means ₹150 profit on ₹100 staked. -200 means you must stake ₹200 to win ₹100 profit.",
              },
            ].map((odd, i) => (
              <div key={i} className="bg-black/40 border border-gold/10 p-5 rounded-xl space-y-2">
                <h3 className="text-gold font-bold text-base">{odd.type}</h3>
                <p className="text-gold/70 font-mono text-sm">e.g. {odd.example}</p>
                <p className="text-gray-300 text-sm leading-relaxed">{odd.explain}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Section: Types of bets */}
        <section className="max-w-4xl mx-auto border border-gold/20 rounded-2xl p-6 md:p-10 bg-[#0c0c0e] shadow-lg space-y-6">
          <h2 className="text-xl md:text-2xl font-bold text-gold uppercase tracking-wider">
            Popular Cricket Bet Types
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              { title: "Match Winner", desc: "Simply pick which team wins the match. The most beginner-friendly market." },
              { title: "Top Batsman", desc: "Bet on which player will score the most runs in a match or innings." },
              { title: "Top Bowler", desc: "Predict which bowler takes the most wickets." },
              { title: "Total Runs (Over/Under)", desc: "Bet on whether total runs will be above or below a set figure." },
              { title: "Toss Winner", desc: "Predict which team wins the coin toss — independent of match result." },
              { title: "Live / In-Play Bets", desc: "Place bets while the match is in progress. Odds shift with every ball." },
            ].map((bet, i) => (
              <div key={i} className="bg-black/40 border border-gold/10 p-5 rounded-xl space-y-2">
                <h3 className="text-gold font-bold text-sm md:text-base">✅ {bet.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{bet.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Section: Live betting */}
        <section className="max-w-4xl mx-auto border border-gold/20 rounded-2xl p-6 md:p-10 bg-[#0c0c0e] shadow-lg space-y-4">
          <h2 className="text-xl md:text-2xl font-bold text-gold uppercase tracking-wider">
            Live Cricket Betting Explained
          </h2>
          <p className="text-gray-300 text-sm md:text-base leading-relaxed">
            Live (in-play) betting lets you place wagers while a match is happening. Odds update ball by ball, reflecting the current state of play. For example, if a top batsman has just been dismissed, the odds for a big total may lengthen significantly — creating new opportunities.
          </p>
          <p className="text-gray-300 text-sm md:text-base leading-relaxed">
            Live betting requires fast decision-making. It&apos;s important to set a budget before the match and stick to it regardless of what happens during play. Learn more in our{" "}
            <a href="/ipl-betting-guide" className="text-gold font-semibold hover:underline">
              IPL Betting Guide
            </a>
            .
          </p>
        </section>

        {/* Section: FAQs */}
        <section className="max-w-4xl mx-auto border border-gold/20 rounded-2xl p-6 md:p-10 bg-[#0c0c0e] shadow-lg space-y-6">
          <h2 className="text-xl md:text-2xl font-bold text-gold uppercase tracking-wider">
            Frequently Asked Questions
          </h2>
          {[
            {
              q: "What is the easiest type of cricket bet for beginners?",
              a: "Match winner bets are the easiest — you simply pick which team will win. As you grow more confident, explore markets like top batsman or total runs.",
            },
            {
              q: "How do decimal odds work in cricket betting?",
              a: "Decimal odds show your total return per unit staked. Odds of 2.50 on a ₹100 bet return ₹250 total (₹150 profit). Higher decimals = less likely outcome = bigger payout.",
            },
            {
              q: "Is live cricket betting different from pre-match betting?",
              a: "Yes. In live betting, odds update in real time as the match progresses. You can bet on next wicket, over runs, or match winner at any point during the game.",
            },
          ].map((faq, i) => (
            <div key={i} className="border-b border-gold/10 pb-5 last:border-0 last:pb-0 space-y-2">
              <h3 className="text-gold font-bold text-sm md:text-base">{faq.q}</h3>
              <p className="text-gray-300 text-sm leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </section>

        {/* CTA */}
        <section className="max-w-4xl mx-auto border-2 border-gold/40 rounded-2xl p-6 md:p-10 bg-[#0c0c0e] shadow-lg text-center space-y-6">
          <h2 className="text-xl md:text-2xl font-bold text-gold uppercase">
            Ready to Start Betting?
          </h2>
          <p className="text-gray-300 text-sm md:text-base max-w-xl mx-auto">
            Get your <a href="/online-cricket-id" className="text-gold font-semibold hover:underline">Online Cricket ID</a> from Mahadev Book and access live cricket betting markets, IPL fantasy leagues, and secure UPI payments — all in one place.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/+919864360936"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-transparent hover:bg-gold text-gold hover:text-black border-2 border-gold px-8 py-3.5 rounded-full text-sm font-bold uppercase tracking-wider transition-all duration-200"
            >
              Get Cricket ID Now
            </a>
            <a
              href="/responsible-gaming"
              className="inline-block text-gray-400 hover:text-gold border border-gray-700 hover:border-gold px-8 py-3.5 rounded-full text-sm font-semibold uppercase tracking-wider transition-all duration-200"
            >
              Responsible Gaming
            </a>
          </div>
          <p className="text-xs text-gray-600">18+ only. Please bet responsibly.</p>
        </section>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
