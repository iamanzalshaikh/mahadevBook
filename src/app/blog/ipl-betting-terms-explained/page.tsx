import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "IPL Betting Terms Explained for Beginners",
  description:
    "A clear glossary of IPL betting terms for beginners — from run line and toss bet to top batsman, in-play market, and cash out. Understand every term before you bet.",
  alternates: {
    canonical: "https://mahadevbooks.today/blog/ipl-betting-terms-explained",
  },
  openGraph: {
    title: "IPL Betting Terms Explained for Beginners",
    description:
      "Don't bet before you understand the terminology. A plain-English glossary of IPL and cricket betting terms for new bettors.",
    url: "https://mahadevbooks.today/blog/ipl-betting-terms-explained",
    type: "article",
    images: [
      {
        url: "https://mahadevbooks.today/wp-content/uploads/2025/05/mahadev-book-id.jpg",
        width: 1200,
        height: 630,
        alt: "IPL Betting Terms Explained",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "IPL Betting Terms Explained for Beginners",
    description:
      "Don't bet before you understand the terminology. A plain-English glossary of IPL and cricket betting terms for new bettors.",
    images: ["https://mahadevbooks.today/wp-content/uploads/2025/05/mahadev-book-id.jpg"],
  },
  other: {
    "article:published_time": "2026-08-14",
    "article:modified_time": "2026-08-14",
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "IPL Betting Terms Explained for Beginners",
  description:
    "A comprehensive glossary of IPL betting terminology for new bettors covering markets, bet types, odds formats, and in-play betting concepts.",
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
    "@id": "https://mahadevbooks.today/blog/ipl-betting-terms-explained",
  },
};

const terms = [
  {
    term: "Match Winner",
    definition: "A bet on which team wins the match. The most straightforward IPL bet and the best starting point for beginners.",
  },
  {
    term: "Toss Bet",
    definition: "A bet on which team wins the coin toss before a match starts. Toss outcome is completely independent of the match result.",
  },
  {
    term: "Top Batsman",
    definition: "A bet on which player will score the highest number of runs in the match or innings. Consider batting position and recent form.",
  },
  {
    term: "Top Bowler",
    definition: "A bet on which bowler takes the most wickets in the match. Useful when a strike bowler is in great form.",
  },
  {
    term: "Run Line / Handicap",
    definition: "One team is given a virtual head start (e.g. Mumbai Indians -10.5 runs). Mumbai must win by more than 10 runs for this bet to win.",
  },
  {
    term: "Over/Under (Totals)",
    definition: "A bet on whether a specific stat (total runs, sixes, wickets) will be above or below a number set by the bookmaker.",
  },
  {
    term: "Outright Bet (Tournament Winner)",
    definition: "Betting on which franchise will win the IPL season title. Placed before or during the tournament — higher odds, longer time horizon.",
  },
  {
    term: "In-Play / Live Bet",
    definition: "A bet placed while the match is in progress. Odds update ball by ball. Includes markets like 'next wicket method' and 'runs in the over'.",
  },
  {
    term: "Decimal Odds",
    definition: "The most common odds format in India. A 2.50 decimal odds means a ₹100 bet returns ₹250 total (₹150 profit + ₹100 stake).",
  },
  {
    term: "Implied Probability",
    definition: "The probability of an outcome suggested by the odds. Calculated as: 1 ÷ Decimal Odds × 100. Odds of 2.00 = 50% implied probability.",
  },
  {
    term: "Cash Out",
    definition: "A feature that lets you settle a bet early — before the match ends — for a return based on the current market position. Useful to lock in profit or limit loss.",
  },
  {
    term: "Accumulator (Acca)",
    definition: "Combining multiple bets into one. All selections must win for the accumulator to pay out. Higher risk, but significantly higher potential return.",
  },
  {
    term: "Void Bet",
    definition: "A bet that is cancelled — your stake is returned. This can happen if a match is abandoned, rained off, or if an event listed did not occur as described.",
  },
  {
    term: "Wagering Requirement",
    definition: "A condition on bonus money. If you receive a ₹500 bonus with a 10× wagering requirement, you must bet ₹5,000 before you can withdraw the bonus funds.",
  },
  {
    term: "Stake",
    definition: "The amount of money you are wagering on a bet. Always bet only what you can comfortably afford to lose.",
  },
];

export default function IplTermsExplained() {
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
          { label: "IPL Betting Terms Explained" },
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
              IPL Betting Terms Explained for Beginners
            </h1>
            <p className="text-gray-400 text-sm md:text-base">A Plain-English Glossary of Every Cricket Betting Term You Need to Know</p>
            <div className="w-20 h-0.5 bg-gold mx-auto" />
          </header>

          {/* Intro */}
          <section className="border border-gold/15 rounded-2xl p-6 md:p-8 bg-[#0c0c0e] space-y-3">
            <p className="text-gray-300 text-sm md:text-base leading-relaxed">
              IPL betting has its own language. If you are new to cricket betting, encountering terms like &ldquo;run line&rdquo;, &ldquo;accumulator&rdquo;, or &ldquo;implied probability&rdquo; can be confusing. This glossary explains every common term in plain English — so you can understand exactly what you are looking at before placing a bet.
            </p>
            <p className="text-gray-300 text-sm md:text-base leading-relaxed">
              Once you are comfortable with the terminology, check out our full <a href="/ipl-betting-guide" className="text-gold font-semibold hover:underline">IPL Betting Guide</a> and <a href="/cricket-betting-guide" className="text-gold font-semibold hover:underline">Cricket Betting Guide</a> for strategy and market breakdowns.
            </p>
          </section>

          {/* Glossary */}
          <section className="border border-gold/15 rounded-2xl p-6 md:p-8 bg-[#0c0c0e] space-y-4">
            <h2 className="text-xl md:text-2xl font-bold text-gold">IPL Betting Glossary – A to Z</h2>
            <div className="space-y-4">
              {terms.map((item, i) => (
                <div key={i} className="flex gap-4 border-b border-gold/10 pb-4 last:border-0 last:pb-0">
                  <div className="shrink-0 w-6 h-6 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center mt-0.5">
                    <span className="text-gold text-xs font-bold">{i + 1}</span>
                  </div>
                  <div>
                    <h3 className="text-gold font-bold text-sm md:text-base">{item.term}</h3>
                    <p className="text-gray-300 text-sm leading-relaxed mt-1">{item.definition}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Tips section */}
          <section className="border border-gold/15 rounded-2xl p-6 md:p-8 bg-[#0c0c0e] space-y-4">
            <h2 className="text-xl md:text-2xl font-bold text-gold">Before You Place Your First IPL Bet</h2>
            <ol className="space-y-3 text-sm md:text-base text-gray-200">
              {[
                "Read the terms and conditions for any bonus offer before accepting — wagering requirements matter.",
                "Start with simple markets (Match Winner, Top Batsman) before exploring in-play or accumulator bets.",
                "Set a fixed budget per match and per session. Never bet money you cannot afford to lose.",
                "Keep a record of your bets — wins, losses, and the markets you chose. This helps you improve over time.",
                "If you ever feel you are losing control, use our self-exclusion option or visit our Responsible Gaming page.",
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
            <h2 className="text-xl font-bold text-gold">Continue Learning</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { title: "IPL Betting Guide", href: "/ipl-betting-guide", desc: "Full guide to IPL markets, live betting, and strategy." },
                { title: "Cricket Betting Guide", href: "/cricket-betting-guide", desc: "How cricket betting odds and bet types work." },
                { title: "Responsible Gaming", href: "/responsible-gaming", desc: "Tools and support for safe, controlled betting." },
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
