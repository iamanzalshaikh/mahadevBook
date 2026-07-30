import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export const metadata: Metadata = {
  title: "About Us – Mahadev Book | India's Trusted Betting Platform",
  description:
    "Learn about Mahadev Book, India's most trusted online betting platform with 1 million+ active users. Our vision, values, and what we offer — cricket, casino, fantasy sports.",
  alternates: {
    canonical: "https://mahadevbooks.today/about-us",
  },
  openGraph: {
    title: "About Us – Mahadev Book | India's Trusted Betting Platform",
    description:
      "Mahadev Book is India's leading online gaming platform with 1M+ active users. Secure, fast, and transparent betting since 2015.",
    url: "https://mahadevbooks.today/about-us",
    type: "website",
  },
};

export default function AboutUs() {
  return (
    <>
      <Header />
      <main className="bg-black text-white py-12 md:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Main Title */}
          <div className="space-y-4">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gold font-heading">
              About Us – Mahadev Book
            </h1>
            <p className="text-gray-300 text-sm md:text-base leading-relaxed">
              Welcome to the <strong className="text-gold font-bold">Mahadev book</strong>, India’s most reliable and dynamic online gaming platform. We just have more than a playground we are a prosperous society with more than 1 million+ active users who like a safe, spontaneous and high inam gaming environment. Whether you are an experienced gamer or a newcomer, the Mahadev book is top destination for online games, casino games, fantasy cricket and more.
            </p>
          </div>

          {/* Section 1: Our Vision */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-gold font-heading border-l-4 border-gold pl-3">
              Our Vision:
            </h2>
            <p className="text-gray-300 text-sm md:text-base leading-relaxed">
              Our vision is to redefine online gaming experience in India by offering a safe, fast and transparent platform. We aim to provide unmatched opportunities for all players through different types of gaming options, light-resistant withdrawal and regular promotional prices.
            </p>
          </div>

          {/* Section 2: What We Offer */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-gold font-heading border-l-4 border-gold pl-3">
              What We Offer:
            </h2>
            <p className="text-gray-300 text-sm md:text-base font-semibold">
              At Mahadev Book, we cater to a extensive spectrum of gaming options:
            </p>
            <ul className="space-y-3 pl-6 text-sm text-gray-300 list-disc">
              <li>
                <strong className="text-white">Sports Betting –</strong> Bet on cricket, football, tennis, horse racing, kabaddi, and more...
              </li>
              <li>
                <strong className="text-white">Casino Games –</strong> Play actual-time casino classics like Teen Patti, Roulette, Andar Bahar, Blackjack, and Baccarat.
              </li>
              <li>
                <strong className="text-white">Fantasy Cricket –</strong> Build your dream crew and win huge with your cricket know-how.
              </li>
              <li>
                <strong className="text-white">Live Betting –</strong> Wager in actual-time on over 1000 live matches every month with dynamic odds.
              </li>
            </ul>
          </div>

          {/* Section 3: Our Core Values */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-gold font-heading border-l-4 border-gold pl-3">
              Our Core Values:
            </h2>
            <ul className="space-y-3 pl-6 text-sm text-gray-300 list-disc">
              <li>
                <strong className="text-white">Trust –</strong> a platform where the money and personal information is safe.
              </li>
              <li>
                <strong className="text-white">Openness –</strong> clear words, immediate updates and honest obstacles.
              </li>
              <li>
                <strong className="text-white">Innovation –</strong> constant developed features, sports and user experience.
              </li>
              <li>
                <strong className="text-white">User satisfaction –</strong> We give significance to every player and work to continuously improve ourselves.
              </li>
              <li>
                <strong className="text-white">Fair Play –</strong> Our games are fair, verified, and monitored for honest betting.
              </li>
            </ul>
          </div>

          {/* Section 4: Join Community */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-gold font-heading border-l-4 border-gold pl-3">
              Join the Mahadev Book Community
            </h2>
            <p className="text-gray-300 text-sm md:text-base leading-relaxed">
              If you are looking for a fast-growing, reliable and exciting gaming platform, the Mahadev book is your top destination. From Mahadev Book Login to live bets, big bonuses and fantasy games, all you need is just one click away.
            </p>
            <p className="text-gold font-bold text-sm md:text-base">
              🎯 Now get your Mahadev Book ID and go into the world of endless opportunities, winnings and fun.
            </p>
          </div>

          {/* Action Button */}
          <div className="pt-6 text-center">
            <a
              href="https://wa.me/+919864360936"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-black hover:bg-gold hover:text-black hover:scale-105 active:scale-95 px-8 py-3.5 rounded-full text-sm font-bold uppercase tracking-wider shadow-lg transition-all duration-200"
            >
              Get Your Mahadev Book ID
            </a>
          </div>
        </div>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
