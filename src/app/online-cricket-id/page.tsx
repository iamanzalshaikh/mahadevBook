import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Online Cricket ID | Get Cricket Betting ID Instantly | Mahadev Book",
  description:
    "Get your Online Cricket ID from Mahadev Book in just 1 minute. Enjoy free first bet, welcome bonuses, IPL fantasy leagues, 1000+ casino games, and instant ID activation.",
  keywords: [
    "online cricket ID",
    "cricket ID online",
    "get cricket ID",
    "cricket betting ID India",
    "Mahadev Book cricket ID",
    "IPL cricket ID",
    "fantasy cricket ID",
  ],
  alternates: {
    canonical: "https://mahadevbooks.today/online-cricket-id",
  },
  openGraph: {
    title: "Online Cricket ID | Get Cricket Betting ID Instantly | Mahadev Book",
    description:
      "Get your Online Cricket ID from Mahadev Book in just 1 minute. Enjoy free first bet, welcome bonuses, and IPL fantasy leagues.",
    url: "https://mahadevbooks.today/online-cricket-id",
    type: "website",
    images: [
      {
        url: "https://mahadevbooks.today/wp-content/uploads/2025/04/cricket-id-online.jpg",
        width: 1200,
        height: 630,
        alt: "Online Cricket ID – Mahadev Book",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Get Your Online Cricket ID Instantly | Mahadev Book",
    description:
      "Get your Online Cricket ID from Mahadev Book in 1 minute. Free first bet + welcome bonus!",
    images: [
      "https://mahadevbooks.today/wp-content/uploads/2025/04/cricket-id-online.jpg",
    ],
  },
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Online Cricket ID",
  provider: {
    "@type": "Organization",
    name: "Mahadev Book",
    url: "https://mahadevbooks.today",
  },
  description:
    "Get an instant Online Cricket ID from Mahadev Book. Enjoy fantasy cricket, live betting, IPL leagues, casino games, and exclusive welcome bonuses.",
  areaServed: "IN",
  serviceType: "Online Cricket Betting ID",
};

export default function OnlineCricketId() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <Header />
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Online Cricket ID" },
        ]}
      />
      <main className="bg-black text-white py-6 px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Banner image */}
        <div className="max-w-7xl mx-auto rounded-3xl overflow-hidden shadow-2xl border border-gold/20">
          <img
            src="https://mahadevbooks.today/wp-content/uploads/2025/04/cricket-id-online.jpg"
            alt="Cricket ID Online"
            className="w-full h-auto object-cover"
            loading="eager"
          />
        </div>

        {/* Section 1: H1 Title */}
        <section className="max-w-7xl mx-auto border border-gold/30 rounded-2xl p-6 md:p-10 bg-[#0c0c0e] text-center shadow-lg">
          <h1 className="text-2xl md:text-4xl font-extrabold text-gold leading-tight tracking-wide uppercase">
            Get Your Online Cricket ID Fast for Exciting Bonuses!
          </h1>
        </section>

        {/* Section 2: Why Choose */}
        <section className="max-w-7xl mx-auto border border-gold/30 rounded-2xl p-6 md:p-10 bg-[#0c0c0e] shadow-lg">
          <div className="text-center mb-8">
            <h2 className="text-xl md:text-2xl font-bold text-gold uppercase tracking-wider">
              Why Choose Mahadev Book for Your Online Cricket ID?
            </h2>
            <div className="w-16 h-0.5 bg-gold mx-auto mt-2" />
          </div>

          <div className="space-y-6 max-w-4xl mx-auto text-gray-300">
            <p className="text-sm md:text-base leading-relaxed text-center">
              At <strong className="text-gold">Mahadev Book</strong>, we make your online gaming experience <strong>seamless, fast, and secure</strong>. Here’s what you get with your <strong>Online Cricket ID</strong>:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 text-left">
              {[
                {
                  title: "✅ Instant ID Creation – Get Cricket ID Online in 1 Minute",
                  desc: "No delays! Complete your simple registration and receive your Online Cricket ID instantly. Start playing right away without any hassle.",
                },
                {
                  title: "✅ Exciting Bonuses and Offers",
                  desc: "New users enjoy a welcome bonus and first bet free. Plus, grab daily offers, cashback, and festive promotions to boost your gameplay.",
                },
                {
                  title: "✅ Affordable Cricket ID Online",
                  desc: "Our Cricket IDs are priced reasonably so that everyone, from beginners to seasoned players, can enjoy fantasy sports without breaking the bank.",
                },
                {
                  title: "✅ First Bet Free",
                  desc: "Experience the thrill of your first bet absolutely free. It’s the perfect head start to your fantasy journey with zero risks involved.",
                },
                {
                  title: "✅ Big Leaderboard Prizes",
                  desc: "Climb the leaderboard and win huge cash prizes daily, weekly, and monthly. The more you play, the higher your chances of winning big!",
                },
                {
                  title: "✅ Create Your Dream Team with Cricket ID Online",
                  desc: "Use your Cricket ID to enter fantasy leagues, pick your favorite players, and build your winning dream team.",
                },
                {
                  title: "✅ Multiple Betting Options",
                  desc: "Bet on international cricket, local tournaments, IPL fantasy matches, and much more. You’ll never run out of exciting games to bet on!",
                },
                {
                  title: "✅ 1000+ Live Casino Games",
                  desc: "Apart from cricket, indulge in 1000+ live casino games like roulette, poker, blackjack, and slots for non-stop entertainment.",
                },
              ].map((feature, i) => (
                <div key={i} className="bg-black/40 border border-gold/10 p-5 rounded-xl space-y-2">
                  <h3 className="text-gold font-bold text-sm md:text-base">{feature.title}</h3>
                  <p className="text-xs md:text-sm text-gray-300 leading-relaxed">{feature.desc}</p>
                </div>
              ))}
            </div>

            <div className="bg-black/40 border border-gold/10 p-5 rounded-xl text-left mt-6">
              <h3 className="text-gold font-bold text-sm md:text-base">✅ Unmatched User Experience</h3>
              <p className="text-xs md:text-sm text-gray-300 leading-relaxed mt-2">
                Our platform is designed for smooth navigation, secure transactions, and 24/7 customer support to ensure your gaming experience is top-notch.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: How to Get */}
        <section className="max-w-7xl mx-auto border border-gold/30 rounded-2xl p-6 md:p-10 bg-[#0c0c0e] shadow-lg">
          <div className="text-center mb-6">
            <h2 className="text-xl md:text-2xl font-bold text-gold uppercase tracking-wider">
              How to Get Your Online Cricket ID?
            </h2>
            <div className="w-16 h-0.5 bg-gold mx-auto mt-2" />
          </div>

          <div className="max-w-xl mx-auto bg-black/40 border border-gold/10 p-6 md:p-8 rounded-xl space-y-4">
            <ol className="space-y-3 text-xs md:text-sm text-gray-200">
              <li>
                <strong className="text-gold">Step 1:</strong> Visit Official Site Of <a href="/" className="text-gold hover:underline">Mahadev Book</a>
              </li>
              <li>
                <strong className="text-gold">Step 2:</strong> Click on <strong>“Get Instant ID”</strong>
              </li>
              <li>
                <strong className="text-gold">Step 3:</strong> Fill in basic details
              </li>
              <li>
                <strong className="text-gold">Step 4:</strong> Complete verification and receive your <strong>Online Cricket ID within 1 minute</strong>!
              </li>
            </ol>
            <p className="text-center text-xs text-gray-400 font-semibold mt-4">
              It’s quick, easy, and 100% secure.
            </p>
          </div>
        </section>

        {/* Section 4: Start Journey */}
        <section className="max-w-7xl mx-auto border border-gold/30 rounded-2xl p-6 md:p-10 bg-[#0c0c0e] shadow-lg text-center space-y-6">
          <h2 className="text-xl md:text-2xl font-bold text-gold uppercase tracking-wider">
            Start Your Fantasy Cricket Journey Today!
          </h2>
          <div className="w-16 h-0.5 bg-gold mx-auto" />
          <p className="text-gray-300 text-sm md:text-base leading-relaxed max-w-3xl mx-auto">
            Don&apos;t miss the action. Get your <strong>Online Cricket ID</strong> from <strong>Mahadev Book</strong> today and explore a world full of thrilling cricket matches, fantasy sports, live casino games, and massive rewards. Create your dream team, place your bets, and grab amazing bonuses now!
          </p>
          <div className="pt-2">
            <a
              href="https://wa.me/+919864360936"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-transparent hover:bg-gold text-gold hover:text-black border border-gold px-8 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-200"
            >
              Get Instant ID Now
            </a>
          </div>
        </section>
      </main>

      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
