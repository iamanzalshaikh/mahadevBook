import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Start Your IPL Fantasy Cricket Journey with Mahadev Book",
  description:
    "Everything you need to start your IPL fantasy cricket journey — how fantasy cricket works, how to build a winning team, scoring rules, contest types, and tips for beginners.",
  alternates: {
    canonical:
      "https://mahadevbooks.today/blog/start-your-ipl-fantasy-cricket-journey-with-mahadev-book",
  },
  openGraph: {
    title: "Start Your IPL Fantasy Cricket Journey with Mahadev Book",
    description:
      "A beginner's guide to IPL fantasy cricket — team building, scoring systems, contest types, captain and vice-captain strategy, and how to use your Cricket ID to join leagues.",
    url: "https://mahadevbooks.today/blog/start-your-ipl-fantasy-cricket-journey-with-mahadev-book",
    type: "article",
    images: [
      {
        url: "https://mahadevbooks.today/wp-content/uploads/2025/05/mahadev-book-id.jpg",
        width: 1200,
        height: 630,
        alt: "IPL Fantasy Cricket with Mahadev Book",
      },
    ],
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Start Your IPL Fantasy Cricket Journey with Mahadev Book",
  description:
    "A complete beginner's guide to IPL fantasy cricket — how it works, team building rules, scoring, contest types, and tips for building a winning lineup.",
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
  datePublished: "2025-05-07",
  dateModified: "2026-08-14",
  image: "https://mahadevbooks.today/wp-content/uploads/2025/05/mahadev-book-id.jpg",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://mahadevbooks.today/blog/start-your-ipl-fantasy-cricket-journey-with-mahadev-book",
  },
};

const scoringRules = [
  { action: "Run scored", points: "+1 pt" },
  { action: "Boundary (4)", points: "+1 pt bonus" },
  { action: "Six", points: "+2 pts bonus" },
  { action: "Wicket taken", points: "+25 pts" },
  { action: "Maiden over", points: "+8 pts" },
  { action: "Catch taken", points: "+8 pts" },
  { action: "Stumping", points: "+12 pts" },
  { action: "Run out (direct)", points: "+12 pts" },
  { action: "Half century (50+)", points: "+8 pts bonus" },
  { action: "Century (100+)", points: "+16 pts bonus" },
  { action: "Duck (batsman)", points: "-2 pts" },
  { action: "Economy rate < 5 (min 2 overs)", points: "+6 pts" },
];

const teamBuildingRules = [
  "Select exactly 11 players from a pool of players from both teams",
  "You have a fixed credits budget (usually 100 credits) — each player costs credits based on form and ranking",
  "You must pick players from both teams — a minimum of 3–7 from each side depending on the platform",
  "You can select a maximum of 7 players from one team",
  "Choose 1 Captain (gets 2× points) and 1 Vice-Captain (gets 1.5× points)",
  "Team composition: 1 Wicket-Keeper, 3–5 Batsmen, 1–3 All-Rounders, 3–5 Bowlers",
];

const tips = [
  {
    title: "Pick your Captain wisely",
    detail:
      "Your Captain earns 2× all points scored. Choose a consistent performer in current form — not always the biggest name, but the most reliable scorer for that match.",
  },
  {
    title: "Prioritise pitch and venue conditions",
    detail:
      "Some IPL venues favour batsmen (Chinnaswamy, Wankhede) while others assist bowlers (Chepauk). Adjust your team composition based on the venue.",
  },
  {
    title: "Check the playing XI before locking in",
    detail:
      "IPL teams announce their playing XI close to toss. Always verify that all your selected players are actually playing before you submit your team.",
  },
  {
    title: "Balance high-risk, high-reward picks",
    detail:
      "Use 1–2 differential picks (low-ownership players likely to perform) alongside safe, consistent choices. This gives you an edge over teams with identical lineups.",
  },
  {
    title: "Track player form over the last 3–5 matches",
    detail:
      "Current IPL form matters more than career records in fantasy cricket. A player scoring 30–40 runs consistently is often safer than an in-form-but-volatile big hitter.",
  },
  {
    title: "Join multiple contests with different team lineups",
    detail:
      "Create 2–3 team variations with different captain and vice-captain choices. This spreads your risk across different outcomes.",
  },
];

export default function IplFantasyCricketJourney() {
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
          { label: "Start Your IPL Fantasy Cricket Journey" },
        ]}
      />
      <main className="bg-black text-white py-6 px-4 sm:px-6 lg:px-8">
        <article className="max-w-3xl mx-auto space-y-8">

          {/* Hero image */}
          <div className="rounded-2xl overflow-hidden border border-gold/20 shadow-xl">
            <img
              src="https://mahadevbooks.today/wp-content/uploads/2025/05/mahadev-book-id.jpg"
              alt="IPL Fantasy Cricket Journey with Mahadev Book"
              className="w-full h-auto object-cover"
              loading="eager"
            />
          </div>

          {/* Header */}
          <header className="border-2 border-gold/40 rounded-2xl p-6 md:p-10 bg-[#0c0c0e] shadow-lg space-y-3">
            <div className="flex flex-wrap items-center justify-center gap-3 text-xs text-gray-500 uppercase tracking-wider">
              <span>Mahadev Book Editorial Team</span>
              <span>·</span>
              <time dateTime="2025-05-07">May 7, 2025</time>
              <span>·</span>
              <span>Updated August 2026</span>
              <span>·</span>
              <span>10 min read</span>
            </div>
            <h1 className="text-2xl md:text-3xl font-extrabold text-gold leading-tight text-center">
              Start Your IPL Fantasy Cricket Journey with Mahadev Book
            </h1>
            <p className="text-gray-400 text-sm md:text-base text-center">A Complete Beginner&apos;s Guide to IPL Fantasy Cricket</p>
            <div className="w-20 h-0.5 bg-gold mx-auto" />
          </header>

          {/* Intro */}
          <section className="border border-gold/15 rounded-2xl p-6 md:p-8 bg-[#0c0c0e] space-y-4">
            <p className="text-gray-300 text-sm md:text-base leading-relaxed">
              IPL is not just another cricket tournament — it&apos;s a festival of cricket celebrated by millions across India. With the rise of digital platforms, fantasy cricket has added an entirely new layer to the IPL experience. Instead of just watching, you become the selector — building your own team and earning points based on how your chosen players actually perform.
            </p>
            <p className="text-gray-300 text-sm md:text-base leading-relaxed">
              This guide covers everything you need to know to start playing IPL fantasy cricket on Mahadev Book — how it works, how to build a team, the scoring system, contest types, and strategy tips that give you an edge.
            </p>
          </section>

          {/* What is fantasy cricket */}
          <section className="border border-gold/15 rounded-2xl p-6 md:p-8 bg-[#0c0c0e] space-y-4">
            <h2 className="text-xl md:text-2xl font-bold text-gold">What Is IPL Fantasy Cricket?</h2>
            <p className="text-gray-300 text-sm md:text-base leading-relaxed">
              Fantasy cricket is a skill-based game where you build a virtual team of real IPL players before a match. Your team earns points based on those players&apos; real-world performance — runs scored, wickets taken, catches, and more.
            </p>
            <p className="text-gray-300 text-sm md:text-base leading-relaxed">
              The key difference from regular cricket betting is that fantasy cricket rewards <strong className="text-gold">knowledge, research, and strategy</strong> — not just predicting the match result. The better your player selection, the more points your team earns.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              {[
                { label: "Research-based", icon: "🏏" },
                { label: "Skill-driven", icon: "🧠" },
                { label: "Real match data", icon: "📊" },
              ].map((item, i) => (
                <div key={i} className="bg-black/40 border border-gold/10 p-4 rounded-xl text-center">
                  <p className="text-2xl mb-1">{item.icon}</p>
                  <p className="text-gold font-bold text-sm">{item.label}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Team building rules */}
          <section className="border border-gold/15 rounded-2xl p-6 md:p-8 bg-[#0c0c0e] space-y-4">
            <h2 className="text-xl md:text-2xl font-bold text-gold">How to Build Your Fantasy Team</h2>
            <p className="text-gray-300 text-sm md:text-base">Standard IPL fantasy team rules:</p>
            <ul className="space-y-3">
              {teamBuildingRules.map((rule, i) => (
                <li key={i} className="flex gap-3 text-sm md:text-base text-gray-200">
                  <span className="text-gold shrink-0 font-bold">✅</span>
                  <span>{rule}</span>
                </li>
              ))}
            </ul>
            <div className="bg-black/40 border border-gold/10 rounded-xl p-4">
              <p className="text-gold font-bold text-sm mb-1">Captain &amp; Vice-Captain Strategy</p>
              <p className="text-gray-300 text-xs leading-relaxed">
                Your Captain earns <strong className="text-gold">2× points</strong> and your Vice-Captain earns <strong className="text-gold">1.5× points</strong>. These are your most important selections — a single century from your captain can be worth 200+ points.
              </p>
            </div>
          </section>

          {/* Scoring table */}
          <section className="border border-gold/15 rounded-2xl p-6 md:p-8 bg-[#0c0c0e] space-y-4">
            <h2 className="text-xl md:text-2xl font-bold text-gold">IPL Fantasy Scoring System</h2>
            <p className="text-gray-300 text-sm">Typical points awarded for player actions (may vary by platform):</p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left text-gray-300 border border-gold/10 rounded-xl overflow-hidden">
                <thead className="bg-gold/10 text-gold uppercase text-xs">
                  <tr>
                    <th className="px-4 py-3">Player Action</th>
                    <th className="px-4 py-3">Points</th>
                  </tr>
                </thead>
                <tbody>
                  {scoringRules.map((row, i) => (
                    <tr key={i} className="border-t border-gold/10">
                      <td className="px-4 py-2.5">{row.action}</td>
                      <td className={`px-4 py-2.5 font-bold font-mono ${row.points.startsWith("-") ? "text-red-400" : "text-green-400"}`}>
                        {row.points}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-gray-500 text-xs">Points are indicative. Check your specific contest rules for exact scoring.</p>
          </section>

          {/* Contest types */}
          <section className="border border-gold/15 rounded-2xl p-6 md:p-8 bg-[#0c0c0e] space-y-4">
            <h2 className="text-xl md:text-2xl font-bold text-gold">Types of Fantasy Cricket Contests</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  type: "Free Contests",
                  desc: "No entry fee required. Great for beginners to practice team selection without financial risk.",
                  ideal: "Beginners",
                },
                {
                  type: "Paid Contests (Small)",
                  desc: "Low entry fee (₹10–₹50). Compete against hundreds of players for proportional prize pools.",
                  ideal: "Intermediate",
                },
                {
                  type: "Mega Contests",
                  desc: "Higher entry fee, massive prize pools sometimes reaching lakhs. High competition, high reward.",
                  ideal: "Advanced",
                },
                {
                  type: "Head-to-Head",
                  desc: "Compete against just one other player. Whoever scores more points wins the prize.",
                  ideal: "All levels",
                },
              ].map((contest, i) => (
                <div key={i} className="bg-black/40 border border-gold/10 p-5 rounded-xl space-y-2">
                  <div className="flex items-center justify-between">
                    <h3 className="text-gold font-bold text-sm">{contest.type}</h3>
                    <span className="text-xs text-gray-500 bg-gold/5 border border-gold/10 px-2 py-0.5 rounded-full">
                      {contest.ideal}
                    </span>
                  </div>
                  <p className="text-gray-300 text-xs leading-relaxed">{contest.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Tips */}
          <section className="border border-gold/15 rounded-2xl p-6 md:p-8 bg-[#0c0c0e] space-y-5">
            <h2 className="text-xl md:text-2xl font-bold text-gold">6 Tips to Build a Winning Fantasy XI</h2>
            {tips.map((tip, i) => (
              <div key={i} className="flex gap-4 border-b border-gold/10 pb-5 last:border-0 last:pb-0">
                <div className="shrink-0 w-8 h-8 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center">
                  <span className="text-gold font-extrabold text-xs">{i + 1}</span>
                </div>
                <div className="space-y-1">
                  <h3 className="text-gold font-bold text-sm md:text-base">{tip.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{tip.detail}</p>
                </div>
              </div>
            ))}
          </section>

          {/* How to join */}
          <section className="border border-gold/15 rounded-2xl p-6 md:p-8 bg-[#0c0c0e] space-y-4">
            <h2 className="text-xl md:text-2xl font-bold text-gold">How to Join IPL Fantasy Contests on Mahadev Book</h2>
            <ol className="space-y-3 text-sm md:text-base text-gray-200">
              {[
                "Get your Mahadev Book Cricket ID via WhatsApp (+91 98643 60936)",
                "Log in and deposit funds via UPI (Google Pay, PhonePe, BHIM)",
                "Navigate to the Fantasy Cricket section and select the upcoming IPL match",
                "Build your 11-player team within the credits budget",
                "Choose your Captain (2×) and Vice-Captain (1.5×)",
                "Select a contest and pay the entry fee (or join a free contest)",
                "Watch the match — your team earns points in real time",
                "Check the leaderboard and collect winnings if you finish in the prize positions",
              ].map((step, i) => (
                <li key={i} className="flex gap-3">
                  <span className="text-gold font-bold shrink-0">{i + 1}.</span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </section>

          {/* Responsible gaming */}
          <section className="border border-gold/20 rounded-2xl p-6 md:p-8 bg-[#0c0c0e] space-y-3">
            <h2 className="text-lg font-bold text-gold">Play Responsibly</h2>
            <p className="text-gray-300 text-sm leading-relaxed">
              Fantasy cricket is a game of skill, but it still involves money. Set a budget for entry fees per week and treat it as entertainment rather than income. Never join contests using money you cannot afford to lose. See our{" "}
              <a href="/responsible-gaming" className="text-gold font-semibold hover:underline">
                Responsible Gaming
              </a>{" "}
              page for self-exclusion and deposit limit tools.
            </p>
          </section>

          {/* Internal links */}
          <section className="border border-gold/15 rounded-2xl p-6 md:p-8 bg-[#0c0c0e] space-y-4">
            <h2 className="text-lg font-bold text-gold">Continue Reading</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { title: "IPL Betting Guide", href: "/ipl-betting-guide", desc: "IPL markets, live betting, and odds strategy." },
                { title: "Cricket Betting Guide", href: "/cricket-betting-guide", desc: "How cricket odds and bet types work." },
                { title: "Responsible Gaming", href: "/responsible-gaming", desc: "Deposit limits and self-exclusion tools." },
                { title: "FAQs", href: "/faqs", desc: "Answers to common account and payment questions." },
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
            <h2 className="text-xl font-bold text-gold uppercase">Start Your Fantasy Cricket Journey</h2>
            <p className="text-gray-300 text-sm md:text-base max-w-xl mx-auto">
              Get your{" "}
              <a href="/online-cricket-id" className="text-gold font-semibold hover:underline">
                Cricket ID
              </a>{" "}
              on Mahadev Book and join IPL fantasy leagues, live betting markets, and leaderboard contests — all in one place.
            </p>
            <a
              href="https://wa.me/+919864360936"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-transparent hover:bg-gold text-gold hover:text-black border-2 border-gold px-10 py-4 rounded-full text-sm font-bold uppercase tracking-wider transition-all duration-200"
            >
              Get Cricket ID via WhatsApp
            </a>
            <p className="text-xs text-gray-600">18+ only. Please play responsibly.</p>
          </section>

          <p className="text-center text-xs text-gray-600 pb-4">
            Published: May 7, 2025 · Updated August 2026 · Mahadev Book Editorial Team ·{" "}
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
