import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "How Live Cricket Betting Odds Work – Complete Guide",
  description:
    "Learn exactly how live cricket betting odds work — decimal vs fractional odds, why odds move during a match, how to read in-play markets, and how to use odds to make informed decisions.",
  alternates: {
    canonical: "https://mahadevbooks.today/blog/how-live-cricket-betting-odds-work",
  },
  openGraph: {
    title: "How Live Cricket Betting Odds Work – Complete Guide",
    description:
      "A complete guide to understanding live cricket betting odds — how they are set, why they change during play, and how to read them before placing a bet.",
    url: "https://mahadevbooks.today/blog/how-live-cricket-betting-odds-work",
    type: "article",
    images: [
      {
        url: "https://mahadevbooks.today/wp-content/uploads/2025/05/How-to-Use-Mahadev-Book-ID-for-IPL-Betting-–-Step-by-Step-Guide.jpg",
        width: 1200,
        height: 630,
        alt: "How Live Cricket Betting Odds Work",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "How Live Cricket Betting Odds Work – Complete Guide",
    description:
      "A complete guide to understanding live cricket betting odds — how they are set, why they change during play, and how to read them before placing a bet.",
    images: ["https://mahadevbooks.today/wp-content/uploads/2025/05/How-to-Use-Mahadev-Book-ID-for-IPL-Betting-–-Step-by-Step-Guide.jpg"],
  },
  other: {
    "article:published_time": "2026-08-14",
    "article:modified_time": "2026-08-14",
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How Live Cricket Betting Odds Work – Complete Guide",
  description:
    "A comprehensive explainer on how cricket betting odds work, including decimal odds, fractional odds, live market movements, and practical examples.",
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
    "@id": "https://mahadevbooks.today/blog/how-live-cricket-betting-odds-work",
  },
};

export default function HowOddsWork() {
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
          { label: "How Live Cricket Betting Odds Work" },
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
              <span>7 min read</span>
            </div>
            <h1 className="text-2xl md:text-4xl font-extrabold text-gold leading-tight">
              How Live Cricket Betting Odds Work
            </h1>
            <p className="text-gray-400 text-sm md:text-base">A Complete Guide for Beginners and Intermediate Bettors</p>
            <div className="w-20 h-0.5 bg-gold mx-auto" />
          </header>

          {/* Intro */}
          <section className="border border-gold/15 rounded-2xl p-6 md:p-8 bg-[#0c0c0e] space-y-4">
            <p className="text-gray-300 text-sm md:text-base leading-relaxed">
              If you have ever looked at a cricket betting screen and wondered what &ldquo;2.40&rdquo; or &ldquo;11/8&rdquo; actually means — you are in the right place. Understanding how odds work is the single most important skill for anyone who wants to bet on cricket intelligently.
            </p>
            <p className="text-gray-300 text-sm md:text-base leading-relaxed">
              This guide explains how cricket betting odds are set, what the different formats mean, why odds change during a live match, and how to use them to make better decisions.
            </p>
          </section>

          {/* Section 1 */}
          <section className="border border-gold/15 rounded-2xl p-6 md:p-8 bg-[#0c0c0e] space-y-4">
            <h2 className="text-xl md:text-2xl font-bold text-gold">What Are Betting Odds?</h2>
            <p className="text-gray-300 text-sm md:text-base leading-relaxed">
              Odds represent two things simultaneously: the probability of an outcome happening, and the payout you receive if that outcome occurs.
            </p>
            <p className="text-gray-300 text-sm md:text-base leading-relaxed">
              Sportsbooks (also called bookmakers or exchanges) employ analysts called traders who assess every factor — team form, pitch conditions, weather, injuries, head-to-head records — and assign odds accordingly. The market then adjusts based on how much money is being wagered on each side.
            </p>
            <div className="bg-black/40 border border-gold/10 p-4 rounded-xl">
              <p className="text-gold font-bold text-sm">Key principle:</p>
              <p className="text-gray-300 text-sm mt-1">Lower odds = more likely outcome = smaller payout. Higher odds = less likely outcome = bigger payout.</p>
            </div>
          </section>

          {/* Section 2: Decimal odds */}
          <section className="border border-gold/15 rounded-2xl p-6 md:p-8 bg-[#0c0c0e] space-y-4">
            <h2 className="text-xl md:text-2xl font-bold text-gold">Decimal Odds – Most Common in India</h2>
            <p className="text-gray-300 text-sm md:text-base leading-relaxed">
              Decimal odds are the standard format on most Indian cricket betting platforms. They represent your <strong className="text-gold">total return</strong> (profit + original stake) for every ₹1 wagered.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left text-gray-300 border border-gold/10 rounded-xl overflow-hidden">
                <thead className="bg-gold/10 text-gold uppercase text-xs">
                  <tr>
                    <th className="px-4 py-3">Decimal Odds</th>
                    <th className="px-4 py-3">₹100 Stake Returns</th>
                    <th className="px-4 py-3">Profit</th>
                    <th className="px-4 py-3">Implied Probability</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { odds: "1.50", returns: "₹150", profit: "₹50", prob: "66.7%" },
                    { odds: "2.00", returns: "₹200", profit: "₹100", prob: "50%" },
                    { odds: "3.50", returns: "₹350", profit: "₹250", prob: "28.6%" },
                    { odds: "6.00", returns: "₹600", profit: "₹500", prob: "16.7%" },
                  ].map((row, i) => (
                    <tr key={i} className="border-t border-gold/10">
                      <td className="px-4 py-3 font-mono text-gold">{row.odds}</td>
                      <td className="px-4 py-3">{row.returns}</td>
                      <td className="px-4 py-3 text-green-400">{row.profit}</td>
                      <td className="px-4 py-3 text-gray-400">{row.prob}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-gray-400 text-xs">Formula: Total Return = Stake × Decimal Odds. Profit = Total Return − Stake.</p>
          </section>

          {/* Section 3: Live odds */}
          <section className="border border-gold/15 rounded-2xl p-6 md:p-8 bg-[#0c0c0e] space-y-4">
            <h2 className="text-xl md:text-2xl font-bold text-gold">Why Live Cricket Odds Change During a Match</h2>
            <p className="text-gray-300 text-sm md:text-base leading-relaxed">
              In live (in-play) cricket betting, odds update continuously — sometimes ball by ball. Here is what causes them to shift:
            </p>
            <div className="space-y-3">
              {[
                { event: "A wicket falls", effect: "Batting team odds lengthen (become less favourable), bowling team odds shorten." },
                { event: "A six or boundary", effect: "Run rate improves — batting team odds shorten, target becomes more reachable." },
                { event: "A dot ball", effect: "Run rate pressure increases — slight shift towards the bowling team." },
                { event: "Rain delay / Duckworth-Lewis", effect: "Odds can swing dramatically as target revisions happen." },
                { event: "A key player injured", effect: "If a top batsman or strike bowler is injured, odds adjust significantly." },
              ].map((item, i) => (
                <div key={i} className="flex gap-3 bg-black/30 border border-gold/10 p-3 rounded-lg">
                  <span className="text-gold text-sm font-bold shrink-0">⚡</span>
                  <div>
                    <p className="text-white text-sm font-semibold">{item.event}</p>
                    <p className="text-gray-400 text-xs mt-0.5">{item.effect}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Section 4: Practical tips */}
          <section className="border border-gold/15 rounded-2xl p-6 md:p-8 bg-[#0c0c0e] space-y-4">
            <h2 className="text-xl md:text-2xl font-bold text-gold">Practical Tips for Reading Live Odds</h2>
            <ol className="space-y-3 text-sm md:text-base text-gray-200">
              {[
                "Compare odds across markets before placing a bet — the same outcome may be priced differently on different market types.",
                "Watch the \"implied probability\" — if you believe a team has a better chance than the odds suggest, that represents value.",
                "Avoid betting immediately after a major event (wicket/six) — odds adjust instantly and may overreact. Wait for the market to stabilise.",
                "Set a pre-match budget and a live betting budget separately. Live betting moves fast and it is easy to overspend.",
                "Use cash-out options carefully — taking an early profit locks in a return, but you sacrifice the full upside if the match swings back.",
              ].map((tip, i) => (
                <li key={i} className="flex gap-3">
                  <span className="text-gold font-bold shrink-0">{i + 1}.</span>
                  <span>{tip}</span>
                </li>
              ))}
            </ol>
          </section>

          {/* Internal links */}
          <section className="border border-gold/15 rounded-2xl p-6 md:p-8 bg-[#0c0c0e] space-y-4">
            <h2 className="text-xl font-bold text-gold">Further Reading</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { title: "Cricket Betting Guide", href: "/cricket-betting-guide", desc: "Types of bets, bet structures, and how to start." },
                { title: "IPL Betting Guide", href: "/ipl-betting-guide", desc: "IPL-specific markets and live betting strategy." },
                { title: "Responsible Gaming", href: "/responsible-gaming", desc: "Tools and resources for safe betting." },
                { title: "UPI Payment Guide", href: "/upi-payment-guide", desc: "How to deposit and withdraw using UPI." },
              ].map((link, i) => (
                <a key={i} href={link.href} className="block bg-black/40 border border-gold/10 hover:border-gold/40 p-4 rounded-xl space-y-1 transition-colors duration-200">
                  <p className="text-gold font-bold text-sm">{link.title} →</p>
                  <p className="text-gray-400 text-xs">{link.desc}</p>
                </a>
              ))}
            </div>
          </section>

          <p className="text-center text-xs text-gray-600 pb-4">
            Published: August 14, 2026 · Mahadev Book Editorial Team · 18+ Only ·{" "}
            <a href="/responsible-gaming" className="hover:text-gold underline">Responsible Gaming</a>
          </p>
        </article>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
