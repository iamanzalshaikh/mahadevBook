import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Mahadev Book Online – Trusted Safe Betting Platform Since 2015",
  description:
    "Mahadev Book Online is India's most trusted betting platform since 2015. Enjoy cricket, football, casino games, fantasy sports, instant withdrawals, and 24/7 support.",
  keywords: [
    "Mahadev Book Online",
    "Mahadevbook",
    "Mahadev betting",
    "online betting India",
    "safe betting platform",
    "Mahadev Book app",
    "cricket football betting India",
  ],
  alternates: {
    canonical: "https://mahadevbooks.today/mahadev-book-online",
  },
  openGraph: {
    title: "Mahadev Book Online – Trusted Safe Betting Platform Since 2015",
    description:
      "Mahadev Book Online is India's most trusted betting platform since 2015. Cricket, casino games, fantasy sports, and instant withdrawals.",
    url: "https://mahadevbooks.today/mahadev-book-online",
    type: "website",
    images: [
      {
        url: "https://mahadevbooks.today/wp-content/uploads/2025/05/mahadev-book-online.jpg",
        width: 1200,
        height: 630,
        alt: "Mahadev Book Online – Trusted Betting Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mahadev Book Online | Safe & Trusted Betting Since 2015",
    description:
      "Join Mahadev Book Online – India's #1 betting platform. Cricket, casino, fantasy sports & instant payouts.",
    images: [
      "https://mahadevbooks.today/wp-content/uploads/2025/05/mahadev-book-online.jpg",
    ],
  },
};

export default function MahadevBookOnline() {
  return (
    <>
      <Header />
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Mahadev Book Online" },
        ]}
      />
      <main className="bg-black text-white py-6 px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Banner Image */}
        <div className="max-w-7xl mx-auto rounded-3xl overflow-hidden shadow-2xl border border-gold/20">
          <img
            src="https://mahadevbooks.today/wp-content/uploads/2025/05/mahadev-book-online.jpg"
            alt="Mahadev Book Online Banner"
            className="w-full h-auto object-cover"
            loading="eager"
          />
        </div>

        {/* Section 1: H1 Title & Intro */}
        <section className="max-w-7xl mx-auto border border-gold/30 rounded-2xl p-6 md:p-10 bg-[#0c0c0e] shadow-lg space-y-6">
          <h1 className="text-2xl md:text-4xl font-extrabold text-gold leading-tight tracking-wide uppercase text-center">
            Mahadev Book Online – Trusted Platform for Safe &amp; Smart Betting
          </h1>
          <div className="w-16 h-0.5 bg-gold mx-auto" />
          <div className="space-y-4 max-w-4xl mx-auto text-gray-300 text-sm md:text-base leading-relaxed">
            <p>
              <strong className="text-gold">Mahadev Book Online</strong>, also known as <strong className="text-gold">Mahadevbook</strong> was established in 2015. It is a reputed and leading name in the world of legal and responsible betting in India. We bring you a cutting-edge online betting platform that combines secure transactions, real-time sports coverage, fast payouts, and unmatched customer support. Whether you&apos;re passionate about cricket, football, or online casino games, Mahadevbook is your one-stop solution for a thrilling betting experience.
            </p>
            <p>
              With an active community of thousands of users, <strong className="text-gold">Mahadev betting</strong> has quickly emerged as one of the most trusted platforms for enthusiasts who seek both fun and profit.
            </p>
          </div>
        </section>

        {/* Section 2: Why Choose & Image Split */}
        <section className="max-w-7xl mx-auto border border-gold/30 rounded-2xl p-6 md:p-10 bg-[#0c0c0e] shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-6 text-left">
              <h2 className="text-xl md:text-2xl font-bold text-gold uppercase tracking-wider">
                Why Choose Mahadev Book Online?
              </h2>
              <div className="w-16 h-0.5 bg-gold" />
              <p className="text-gray-300 text-sm leading-relaxed">
                The name <strong className="text-gold">Mahadevbook</strong> has become synonymous with <strong className="text-gold">safe betting</strong> and <strong className="text-gold">quick returns</strong>. Our platform stands out due to its:
              </p>
              <ul className="space-y-2 text-xs md:text-sm text-gray-300 list-disc pl-5">
                <li><strong>Advanced security protocols</strong></li>
                <li><strong>Seamless user experience</strong></li>
                <li><strong>Instant deposits and withdrawals</strong></li>
                <li><strong>Transparent and fair gaming</strong></li>
              </ul>
              <p className="text-gray-300 text-sm leading-relaxed pt-2">
                Our team continuously works on improving features and interfaces to ensure you enjoy an exciting, smooth, and stress-free betting experience.
              </p>
              <div className="pt-2">
                <a
                  href="https://wa.me/+919864360936"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-transparent hover:bg-gold text-gold hover:text-black border border-gold px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-200"
                >
                  Get Mahadev Book ID
                </a>
              </div>
            </div>
            <div className="lg:col-span-5 flex justify-center">
              <div className="rounded-2xl overflow-hidden border border-gold/20 shadow-md">
                <img
                  src="https://mahadevbooks.today/wp-content/uploads/2025/05/Why-choose-Mahadev-Book-Online.jpg"
                  alt="Why Choose Mahadev Book Online"
                  className="w-full max-w-sm h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Features */}
        <section className="max-w-7xl mx-auto border border-gold/30 rounded-2xl p-6 md:p-10 bg-[#0c0c0e] shadow-lg">
          <div className="text-center mb-8">
            <h2 className="text-xl md:text-2xl font-bold text-gold uppercase tracking-wider">
              Features of Mahadev Online Book
            </h2>
            <div className="w-16 h-0.5 bg-gold mx-auto mt-2" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              {
                title: "1. Secure Betting Environment:",
                desc: "Mahadev book online prioritizes your safety. All transactions, whether deposits or withdrawals, are conducted through highly secure payment gateways. We support UPI, PayTM, PhonePe, and net banking.",
              },
              {
                title: "2. 24x7 Customer Support:",
                desc: "Our trained support staff is available around the clock to help with account setup, payment issues, or general queries. Connect with us via WhatsApp, email, or live chat support.",
              },
              {
                title: "3. Multiple Betting Options:",
                desc: "From cricket, football, tennis, kabaddi, and even online casino games, the Mahadev betting app provides an all-in-one platform for diversified betting.",
              },
              {
                title: "4. Instant Withdrawals & Unlimited Transactions:",
                desc: "Forget waiting hours for payments! With Mahadev betting, winnings can be withdrawn instantly with no daily limits. Play and earn continuously without interruptions.",
              },
              {
                title: "5. Mobile-Friendly Experience:",
                desc: "With the Mahadev book app, you can place bets from anywhere. Our app is optimized for Android and iOS devices, ensuring responsive and lag-free betting on the go.",
              },
            ].map((feat, i) => (
              <div key={i} className="border border-gold/20 rounded-xl p-5 bg-black/40 flex flex-col justify-between space-y-3">
                <h3 className="text-gold font-bold text-sm md:text-base">{feat.title}</h3>
                <p className="text-gray-300 text-xs md:text-sm leading-relaxed">{feat.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 4: Create Account */}
        <section className="max-w-7xl mx-auto border border-gold/30 rounded-2xl p-6 md:p-10 bg-[#0c0c0e] shadow-lg">
          <div className="text-center mb-6">
            <h2 className="text-xl md:text-2xl font-bold text-gold uppercase tracking-wider">
              How to Create an Account on Mahadev Book Online
            </h2>
            <div className="w-16 h-0.5 bg-gold mx-auto mt-2" />
          </div>

          <div className="max-w-2xl mx-auto bg-black/40 border border-gold/10 p-6 md:p-8 rounded-xl space-y-4">
            <p className="text-gray-300 text-sm">
              Setting up your account for <strong>Mahadev book ID</strong> is quick and beginner-friendly. Here’s how you can get started:
            </p>
            <ul className="space-y-4 text-xs md:text-sm text-gray-200">
              <li>
                <strong className="text-gold">🔹 Step 1: Visit the Official Mahadev Book Online Website</strong>
                <p className="pl-6 text-gray-400 mt-1">Go to the official website for Mahadev Book Online. You’ll find all information related to betting IDs, supported games, and more.</p>
              </li>
              <li>
                <strong className="text-gold">🔹 Step 2: Click “Get Online Cricket ID” or “Create an Account”</strong>
                <p className="pl-6 text-gray-400 mt-1">Locate the “Get Online ID” button. Once clicked, you’ll be redirected to a secure WhatsApp chat where you can submit details.</p>
              </li>
              <li>
                <strong className="text-gold">🔹 Step 3: Share Required Information</strong>
                <p className="pl-6 text-gray-400 mt-1">To activate your Mahadev betting account, share essential details like Full Name and Email ID (for verification).</p>
              </li>
              <li>
                <strong className="text-gold">🔹 Step 4: Instant ID Activation</strong>
                <p className="pl-6 text-gray-400 mt-1">After submitting your details, your betting ID will be generated instantly. You’ll receive login credentials and links to start betting.</p>
              </li>
            </ul>
          </div>
        </section>

        {/* Section 5: Betting Options Grid */}
        <section className="max-w-7xl mx-auto border border-gold/30 rounded-2xl p-6 md:p-10 bg-[#0c0c0e] shadow-lg space-y-6">
          <div className="text-center">
            <h2 className="text-xl md:text-2xl font-bold text-gold uppercase tracking-wider">
              Betting Options Available on Mahadev Online Book
            </h2>
            <div className="w-16 h-0.5 bg-gold mx-auto mt-2" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="border border-gold/20 rounded-xl p-5 bg-black/40 text-left space-y-3">
              <h3 className="text-gold font-bold text-base">⚽ Sports Betting</h3>
              <ul className="text-xs md:text-sm text-gray-300 space-y-1 list-disc pl-5">
                <li>Cricket (IPL, T20, ODIs, Test Matches)</li>
                <li>Football (FIFA, EPL, La Liga)</li>
                <li>Tennis, Basketball, Kabaddi, and Horse Racing</li>
              </ul>
            </div>
            <div className="border border-gold/20 rounded-xl p-5 bg-black/40 text-left space-y-3">
              <h3 className="text-gold font-bold text-base">🃏 Casino Gaming</h3>
              <ul className="text-xs md:text-sm text-gray-300 space-y-1 list-disc pl-5">
                <li>Live Dealer Games</li>
                <li>Roulette, Blackjack, Poker</li>
                <li>Indian favorites like Teen Patti and Andar Bahar</li>
              </ul>
            </div>
          </div>

          <div className="bg-black/40 border border-gold/10 p-5 rounded-xl max-w-xl mx-auto text-center space-y-2">
            <h4 className="text-gold font-bold text-sm md:text-base">📊 Live Betting and Real-Time Odds</h4>
            <p className="text-xs md:text-sm text-gray-300 leading-relaxed">
              Experience the thrill of live betting where odds change dynamically. Participate in over <strong>60,000 live events per month.</strong> Place your bets mid-match and leverage your instincts to win big!
            </p>
          </div>
        </section>

        {/* Section 6: 24/7 Support Assistance */}
        <section className="max-w-7xl mx-auto border border-gold/30 rounded-2xl p-6 md:p-10 bg-[#0c0c0e] shadow-lg text-center space-y-4">
          <h3 className="text-xl font-bold text-gold uppercase tracking-wider">
            24/7 Support with Dedicated Betting Assistance
          </h3>
          <div className="w-16 h-0.5 bg-gold mx-auto" />
          <p className="text-gray-300 text-sm md:text-base leading-relaxed max-w-3xl mx-auto">
            The <strong>Mahadev Betting App</strong> and website offer full-time support. Whether it’s a technical issue, payout concern, or general query, the expert team is always available to help through WhatsApp, live chat, or email.
          </p>
        </section>

        {/* Section 7: Promo Split Section */}
        <section className="max-w-7xl mx-auto border border-gold/30 rounded-2xl p-6 md:p-10 bg-[#0c0c0e] shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <h3 className="text-xl md:text-2xl font-bold text-gold uppercase tracking-wider">
                Promotions &amp; Bonuses on Mahadev Online Book
              </h3>
              <div className="w-16 h-0.5 bg-gold" />
              <p className="text-gray-300 text-sm leading-relaxed">
                We believe in rewarding our users. That’s why <strong>Mahadev book</strong> offers exciting bonuses and seasonal promotions, including:
              </p>
              <ul className="space-y-2 text-xs md:text-sm text-gray-300 list-disc pl-5">
                <li><strong>Welcome Bonus</strong> for new users</li>
                <li><strong>Referral Rewards</strong> when you invite friends</li>
                <li><strong>Loyalty Programs</strong> for returning players</li>
                <li><strong>Event-Specific Offers</strong> during IPL, FIFA, etc.</li>
              </ul>
              <p className="text-gray-300 text-sm pt-2">
                Stay tuned through the app or website for the latest offers and cashback deals.
              </p>
              <div className="pt-2">
                <a
                  href="https://wa.me/+919864360936"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-transparent hover:bg-gold text-gold hover:text-black border border-gold px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-200"
                >
                  Get Mahadev Book ID
                </a>
              </div>
            </div>
            {/* Right */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="rounded-2xl overflow-hidden border border-gold/20 shadow-md">
                <img
                  src="https://mahadevbooks.today/wp-content/uploads/2025/05/mahadev-book-online-bonuses.jpg"
                  alt="Mahadev Book Online Bonuses"
                  className="w-full max-w-sm h-auto object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
