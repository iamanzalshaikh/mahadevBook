import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "IPL Betting Guide – How to Bet on IPL Matches",
  description:
    "Complete IPL betting guide: how IPL markets work, which bets to place, how to read live odds during matches, and responsible betting tips for the Indian Premier League.",
  alternates: {
    canonical: "https://mahadevbooks.today/ipl-betting-guide",
  },
  openGraph: {
    title: "IPL Betting Guide – How to Bet on IPL Matches",
    description:
      "Learn how IPL betting works: markets, odds, live betting strategy, and responsible gaming tips. A complete guide for Indian cricket fans.",
    url: "https://mahadevbooks.today/ipl-betting-guide",
    type: "article",
    images: [
      {
        url: "https://mahadevbooks.today/wp-content/uploads/2026/05/Hero-Page.png",
        width: 1983,
        height: 793,
        alt: "IPL Betting Guide – Mahadev Book",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "IPL Betting Guide – How to Bet on IPL Matches",
    description:
      "Learn how IPL betting works: markets, odds, live betting strategy, and responsible gaming tips. A complete guide for Indian cricket fans.",
    images: ["https://mahadevbooks.today/wp-content/uploads/2026/05/Hero-Page.png"],
  },
  other: {
    "article:modified_time": "2026-08-14",
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "IPL Betting Guide – How to Bet on IPL Matches",
  description:
    "A complete guide to IPL betting covering market types, live odds, auction strategy, and responsible gaming.",
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
    "@id": "https://mahadevbooks.today/ipl-betting-guide",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the most popular IPL betting market?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The match winner market is the most popular for IPL betting. Other heavily traded markets include top batsman, highest partnership, and total sixes in a match.",
      },
    },
    {
      "@type": "Question",
      name: "Can I bet on IPL matches using UPI?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Most Indian sports platforms support UPI payments including Google Pay, PhonePe, and BHIM for instant deposits. Always check the platform's payment page for current options.",
      },
    },
    {
      "@type": "Question",
      name: "When do IPL betting markets open?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "IPL pre-match markets typically open 24–48 hours before the game. Live markets open at the toss and update ball by ball throughout the match.",
      },
    },
  ],
};

export default function IplBettingGuide() {
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
          { label: "IPL Betting Guide" },
        ]}
      />
      <main className="bg-black text-white py-6 px-4 sm:px-6 lg:px-8 space-y-8">

        {/* Hero */}
        <section className="max-w-4xl mx-auto border-2 border-gold/40 rounded-2xl p-6 md:p-10 bg-[#0c0c0e] shadow-lg text-center">
          <h1 className="text-2xl md:text-4xl font-extrabold text-gold leading-tight tracking-wide uppercase">
            IPL Betting Guide
          </h1>
          <p className="text-gray-400 text-sm mt-2">How to Bet on Indian Premier League Matches – Complete 2026 Guide</p>
          <div className="w-24 h-0.5 bg-gold mx-auto mt-4" />
          <p className="text-gray-300 text-base md:text-lg mt-6 leading-relaxed">
            The Indian Premier League is the most bet-on cricket competition in the world. This guide explains the key betting markets, how live IPL odds work, and how to approach IPL betting responsibly.
          </p>
        </section>

        {/* Section: Why IPL */}
        <section className="max-w-4xl mx-auto border border-gold/20 rounded-2xl p-6 md:p-10 bg-[#0c0c0e] shadow-lg space-y-4">
          <h2 className="text-xl md:text-2xl font-bold text-gold uppercase tracking-wider">
            Why IPL Is Different from Other Cricket Betting
          </h2>
          <p className="text-gray-300 text-sm md:text-base leading-relaxed">
            IPL matches are played in T20 format — high-scoring, fast-paced, and results can swing dramatically in a single over. This creates unique betting opportunities compared to Test cricket or one-day internationals:
          </p>
          <ul className="space-y-3 text-sm md:text-base text-gray-200">
            {[
              "More markets per match — sixes, fours, over totals, wicket method",
              "Higher variance — upsets are more frequent, meaning odds can be volatile",
              "Player auction and team composition significantly affects match odds",
              "Pitch and weather conditions at different venues have a large impact",
              "Live (in-play) markets are extremely active during IPL",
            ].map((item, i) => (
              <li key={i} className="flex gap-3">
                <span className="text-gold shrink-0">🏏</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Section: Key markets */}
        <section className="max-w-4xl mx-auto border border-gold/20 rounded-2xl p-6 md:p-10 bg-[#0c0c0e] shadow-lg space-y-6">
          <h2 className="text-xl md:text-2xl font-bold text-gold uppercase tracking-wider">
            Key IPL Betting Markets Explained
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              {
                title: "Match Winner",
                desc: "The most straightforward market. Pick which team wins the match. Toss outcomes can heavily influence short-format results.",
              },
              {
                title: "Top Batsman",
                desc: "Bet on which player scores the most runs in the match. Consider the batting order and recent form when making this selection.",
              },
              {
                title: "Total Sixes",
                desc: "Over/under on total sixes hit in the match. Venue matters — some IPL grounds are known for being high-six stadiums.",
              },
              {
                title: "Highest Powerplay Score",
                desc: "Bet on which team scores more in the first 6 overs. Opening pair form and death bowling quality are key factors.",
              },
              {
                title: "Man of the Match",
                desc: "Predict the player awarded man of the match. All-rounders often have an edge here as they can impact with both bat and ball.",
              },
              {
                title: "Tournament Winner (Outright)",
                desc: "Before the season starts, bet on which franchise wins the IPL title. These markets offer high odds early in the season.",
              },
            ].map((market, i) => (
              <div key={i} className="bg-black/40 border border-gold/10 p-5 rounded-xl space-y-2">
                <h3 className="text-gold font-bold text-sm md:text-base">✅ {market.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{market.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Section: Live betting */}
        <section className="max-w-4xl mx-auto border border-gold/20 rounded-2xl p-6 md:p-10 bg-[#0c0c0e] shadow-lg space-y-4">
          <h2 className="text-xl md:text-2xl font-bold text-gold uppercase tracking-wider">
            Live Betting During IPL Matches
          </h2>
          <p className="text-gray-300 text-sm md:text-base leading-relaxed">
            IPL live betting is where the action truly comes alive. Odds shift after every ball, reacting to wickets, sixes, dot balls, and powerplay scores. Common live IPL bets include:
          </p>
          <ul className="space-y-2 text-sm md:text-base text-gray-200 list-disc list-inside">
            <li>Match winner at any point during the innings</li>
            <li>Runs in the next over</li>
            <li>Next wicket — method (caught, bowled, LBW, run out)</li>
            <li>Whether a batsman will hit a six from the next delivery</li>
            <li>Required run rate vs actual run rate markets</li>
          </ul>
          <p className="text-gray-300 text-sm md:text-base leading-relaxed">
            Understanding how to <a href="/cricket-betting-guide" className="text-gold font-semibold hover:underline">read cricket betting odds</a> is essential before diving into live IPL markets where decisions must be made quickly.
          </p>
        </section>

        {/* Section: Responsible */}
        <section className="max-w-4xl mx-auto border border-gold/20 rounded-2xl p-6 md:p-10 bg-[#0c0c0e] shadow-lg space-y-4">
          <h2 className="text-xl md:text-2xl font-bold text-gold uppercase tracking-wider">
            IPL Betting Tips for Responsible Play
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { tip: "Set a match budget", detail: "Decide your maximum stake before the match starts and do not exceed it regardless of results." },
              { tip: "Don't chase losses", detail: "Losing a bet is part of the game. Increasing stakes to recover losses leads to larger losses." },
              { tip: "Research team news", detail: "IPL teams release playing XI close to toss. Check for late injuries, resting seniors, or uncapped debutants." },
              { tip: "Track your bets", detail: "Keep a record of every bet — amount, odds, and result. This helps you understand where your edge is (or isn't)." },
            ].map((tip, i) => (
              <div key={i} className="bg-black/40 border border-gold/10 p-5 rounded-xl space-y-1">
                <h3 className="text-gold font-bold text-sm">⚡ {tip.tip}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{tip.detail}</p>
              </div>
            ))}
          </div>
          <p className="text-sm text-gray-400 pt-2">
            Read our full <a href="/responsible-gaming" className="text-gold hover:underline font-semibold">Responsible Gaming guide</a> for more tools and resources.
          </p>
        </section>

        {/* FAQ */}
        <section className="max-w-4xl mx-auto border border-gold/20 rounded-2xl p-6 md:p-10 bg-[#0c0c0e] shadow-lg space-y-6">
          <h2 className="text-xl md:text-2xl font-bold text-gold uppercase tracking-wider">
            Frequently Asked Questions
          </h2>
          {[
            {
              q: "What is the most popular IPL betting market?",
              a: "The match winner market is the most popular. Other heavily traded markets include top batsman, highest powerplay score, total sixes, and man of the match.",
            },
            {
              q: "Can I bet on IPL matches using UPI?",
              a: "Yes. Most platforms support UPI via Google Pay, PhonePe, and BHIM for instant deposits. See our UPI Payment Guide for step-by-step instructions.",
            },
            {
              q: "When do IPL betting markets open?",
              a: "Pre-match markets typically open 24–48 hours before the game. Live markets open at toss and update ball by ball throughout the match.",
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
            Access IPL Betting Markets Today
          </h2>
          <p className="text-gray-300 text-sm md:text-base max-w-xl mx-auto">
            Get your <a href="/online-cricket-id" className="text-gold font-semibold hover:underline">Online Cricket ID</a> and explore live IPL betting markets, fantasy cricket leagues, and instant UPI deposits — all through Mahadev Book.
          </p>
          <a
            href="https://wa.me/+919864360936"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-transparent hover:bg-gold text-gold hover:text-black border-2 border-gold px-10 py-4 rounded-full text-sm font-bold uppercase tracking-wider transition-all duration-200"
          >
            Get Your Cricket ID
          </a>
          <p className="text-xs text-gray-600">18+ only. Please bet responsibly.</p>
        </section>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
