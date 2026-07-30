import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FAQAccordion from "@/components/FAQAccordion";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Mahadev Book",
  url: "https://mahadevbooks.today",
  potentialAction: {
    "@type": "SearchAction",
    target: "https://mahadevbooks.today/?s={search_term_string}",
    "query-input": "required name=search_term_string",
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Mahadev Book",
  url: "https://mahadevbooks.today",
  logo: "https://mahadevbooks.today/wp-content/uploads/2026/05/Hero-Page.png",
  description:
    "India's #1 Online Cricket ID provider. Get Mahadev Book ID, live betting, fantasy sports, and 24/7 customer support since 2015.",
  foundingDate: "2015",
  areaServed: "IN",
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer support",
    availableLanguage: ["English", "Hindi"],
  },
  sameAs: [],
};

const homeFaqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is Mahadev Book and how does it work?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Mahadev Book is a secure online betting platform offering sports betting, casino games, and fantasy gaming. Users can register, get a Mahadev Book ID, deposit funds, and place bets on various events using a secure and user-friendly interface.",
      },
    },
    {
      "@type": "Question",
      name: "How can I get a Mahadev Book ID for online betting?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "To get a Mahadev Book ID, visit the official website at mahadevbooks.today or contact support via WhatsApp. Fill out the registration form, verify your details, and receive your unique ID for betting access.",
      },
    },
    {
      "@type": "Question",
      name: "Is Mahadev Book a legal and safe platform?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, Mahadev Book uses certified RNG technology, encryption protocols, and operates under strict compliance to offer fair, legal, and secure online betting in India.",
      },
    },
    {
      "@type": "Question",
      name: "Can I use Mahadev Book on mobile devices?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely. Mahadev Book offers a fully optimized mobile website and a downloadable app for Android and iOS, allowing you to bet anytime, anywhere.",
      },
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeFaqJsonLd) }}
      />
      <Header />

      <main className="bg-black text-white py-8 sm:py-12 px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-12">
        {/* Banner Hero Image */}
        <div className="max-w-7xl mx-auto rounded-xl sm:rounded-3xl overflow-hidden shadow-2xl border border-gold/20">
          <img
            src="https://mahadevbooks.today/wp-content/uploads/2026/05/Hero-Page.png"
            alt="Mahadev Book Hero Banner – India's Best Online Cricket ID Provider"
            className="w-full h-auto object-cover"
            width={1983}
            height={793}
            loading="eager"
          />
        </div>

        {/* Section 1: India's Trusted Platform */}
        <section className="max-w-7xl mx-auto border-2 border-gold/40 rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-12 bg-[#0c0c0e] shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <h1 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-gold leading-tight tracking-wide uppercase">
                India’s Trusted Platform for Mahadev Book ID &amp; App Access
              </h1>
              <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                Welcome to <strong className="text-gold font-bold">Mahadev Book</strong>, your trusted source for information on Mahadev Book ID, Mahadev Book login, and app access. Secure login features, quick registration guidance and smooth mobile-friendly experience all in one place. From fantasy cricket to live casino games, real-time sports betting to instant withdrawals, we bring the most complete and user-friendly betting environment to your fingertips. Whether you&apos;re a beginner or a seasoned gamer, <strong className="text-gold font-bold">Mahadev Book ID</strong> gives you access to a premium betting experience with advanced technology, real-time odds, and unbeatable promotions.
              </p>
              <div className="pt-2">
                <a
                  href="https://wa.me/+919864360936"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-transparent hover:bg-gold text-gold hover:text-black border-2 border-gold px-10 py-4 rounded-full text-base font-bold uppercase tracking-wider transition-all duration-200"
                >
                  Get Mahadev Book ID
                </a>
              </div>
            </div>
            {/* Right */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="rounded-2xl overflow-hidden border border-gold/20 shadow-md">
                <img
                  src="https://mahadevbooks.today/wp-content/uploads/2026/05/About-us-1024x683.png"
                  alt="About Mahadev Book – Trusted Online Cricket ID Platform India"
                  className="w-full max-w-sm h-auto object-cover"
                  width={512}
                  height={341}
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Why Choose Mahadev Book */}
        <section className="max-w-7xl mx-auto border-2 border-gold/40 rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-12 bg-[#0c0c0e] shadow-lg">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gold uppercase tracking-wider">
              Why Choose Mahadev Book?
            </h2>
            <div className="w-24 h-0.5 bg-gold mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Fast Login Access",
                desc: "Quick and easy Mahadev Book login system with smooth account access anytime.",
              },
              {
                title: "Secure Platform",
                desc: "Mahadev Book offers a secure and reliable experience for users accessing their accounts and login features.",
              },
              {
                title: "Mobile-Friendly Interface",
                desc: "Enjoy a seamless experience on smartphones, tablets, and desktop devices.",
              },
              {
                title: "24/7 User Support",
                desc: "Helpful support and guidance available for users whenever needed.",
              },
              {
                title: "Smooth User Experience",
                desc: "Simple navigation, fast loading speed, and user-friendly design for better accessibility.",
              },
              {
                title: "All-in-One Gaming Platform",
                desc: "Whether it is cricket, football or Teen Patti, fantasy sports, We have all betting options, which can be accessed by mobile or Laptop, smooth point navigation and timely odds.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-black/40 p-8 rounded-xl border border-gold/20 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="text-gold font-bold text-lg md:text-xl flex items-center gap-2">
                    <span className="text-gold font-mono">{index + 1}.</span>
                    {item.title}
                  </div>
                  <p className="text-gray-300 text-sm md:text-base leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 3: Login & Registration Intro */}
        <section className="max-w-7xl mx-auto border-2 border-gold/40 rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-12 bg-[#0c0c0e] shadow-lg">
          <div className="text-center mb-10">
            <h2 className="text-xl sm:text-3xl md:text-4xl font-extrabold text-gold uppercase tracking-wider">
              Mahadev Book Login And Registration
            </h2>
            <p className="text-gray-300 text-base md:text-lg mt-4">
              Using Mahadev Book Web App you started quickly and easily. This is the process of registration and login:
            </p>
            <div className="w-24 h-0.5 bg-gold mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Register */}
            <div className="border border-gold/30 rounded-2xl p-8 bg-black/50 flex flex-col justify-between space-y-8">
              <div className="space-y-6">
                <div className="rounded-xl overflow-hidden border border-gold/20">
                  <img
                    src="https://mahadevbooks.today/wp-content/uploads/2026/05/Register-now-1024x683.png"
                    alt="Register on Mahadev Book – Get Cricket ID Online India"
                    className="w-full h-56 md:h-64 object-cover"
                    width={1024}
                    height={683}
                    loading="lazy"
                  />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-gold">Mahadev Book Registration:</h3>
                <ul className="space-y-3 text-sm md:text-base text-gray-300">
                  <li>✔ <strong>Visit the Official Website:</strong> Go to https://mahadevbooks.today/</li>
                  <li>✔ <strong>Press on “Sign Up” or “Create Account”:</strong> Clicking on this button you&apos;ll be redirected to the homepage.</li>
                  <li>✔ <strong>Fill in Your Details:</strong> Provide information such as name, phone number and email.</li>
                  <li>✔ <strong>Verify via OTP or Email:</strong> For extra security, you&apos;ll get a verification link or an OTP.</li>
                  <li>✔ <strong>Complete Registration:</strong> Your Mahadev Book ID is created once it is verified.</li>
                </ul>
              </div>
              <div>
                <a
                  href="https://wa.me/+919864360936"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-transparent hover:bg-gold text-gold hover:text-black border-2 border-gold py-3 rounded-full text-sm font-bold uppercase tracking-wider transition-all duration-200"
                >
                  Register Now!
                </a>
              </div>
            </div>

            {/* Login */}
            <div className="border border-gold/30 rounded-2xl p-8 bg-black/50 flex flex-col justify-between space-y-8">
              <div className="space-y-6">
                <div className="rounded-xl overflow-hidden border border-gold/20">
                  <img
                    src="https://mahadevbooks.today/wp-content/uploads/2026/05/Login-1024x683.png"
                    alt="Mahadev Book Login – Access Your Betting Account"
                    className="w-full h-56 md:h-64 object-cover"
                    width={1024}
                    height={683}
                    loading="lazy"
                  />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-gold">Mahadev Book Login:</h3>
                <p className="text-sm md:text-base text-gray-300">
                  After completing the registration process, go back to the homepage and click on <strong>Mahadev Book Login:</strong>
                </p>
                <ul className="space-y-3 text-sm md:text-base text-gray-300">
                  <li>✔ Enter your ID and password</li>
                  <li>✔ Access your betting dashboard instantly</li>
                  <li>✔ You can set customizations for language, currency and payment methods for personalized interaction.</li>
                </ul>
              </div>
              <div>
                <a
                  href="https://wa.me/+919864360936"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-transparent hover:bg-gold text-gold hover:text-black border-2 border-gold py-3 rounded-full text-sm font-bold uppercase tracking-wider transition-all duration-200"
                >
                  Login Now!
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Get ID in 2 Minutes */}
        <section className="max-w-7xl mx-auto border-2 border-gold/40 rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-12 bg-[#0c0c0e] shadow-lg">
          <div className="text-center mb-8">
            <h2 className="text-xl sm:text-3xl md:text-4xl font-extrabold text-gold uppercase tracking-wider">
              How to Get Mahadev Book ID in 2 Minute
            </h2>
            <div className="w-24 h-0.5 bg-gold mx-auto mt-4" />
          </div>

          <div className="max-w-3xl mx-auto space-y-8 text-center">
            <p className="text-gray-300 text-base md:text-lg leading-relaxed">
              We understand your excitement to start betting, so we’ve made getting your <strong className="text-gold">Mahadev Book ID</strong> ultra-fast:
            </p>
            <div className="text-left bg-black/40 border border-gold/20 rounded-2xl p-5 sm:p-8 md:p-10 space-y-6 max-w-2xl mx-auto">
              <h4 className="text-gold font-bold text-lg md:text-xl mb-2 text-center">Easy Steps to Get Online Cricket ID</h4>
              <ol className="space-y-4 text-sm md:text-base text-gray-200">
                <li className="flex gap-2">
                  <span className="text-gold font-bold">1.</span>
                  <span>Click on the <strong className="text-gold">“ Get Mahadev Book ID ”</strong> button on our website.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-gold font-bold">2.</span>
                  <span><strong>Chat with Our Buddy via WhatsApp:</strong> Share your basic details like name and number.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-gold font-bold">3.</span>
                  <span><strong>Get Your ID Within 2 Minute:</strong> Our team will generate your <strong>Mahadev Book ID</strong> instantly and guide you on how to log in and start betting.</span>
                </li>
              </ol>
            </div>
            <p className="text-sm text-gray-400">
              You can also request a <strong>demo ID</strong> if you’re new and want to explore the platform before committing.
            </p>
          </div>
        </section>

        {/* Section 5: Top Sports (REBUILT SAME-TO-SAME) */}
        <section className="max-w-7xl mx-auto border border-gold rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-12 bg-black shadow-lg">
          {/* Pill Shaped Title */}
          <div className="max-w-2xl mx-auto border border-gold rounded-full py-2.5 px-4 sm:px-8 bg-black text-center mb-8 sm:mb-12 shadow-md">
            <h2 className="text-base sm:text-lg md:text-2xl font-bold text-white uppercase tracking-wider">
              Top Sports to Bet on Mahadev Book
            </h2>
          </div>

          <div className="space-y-8">
            {/* Top row: 3 columns */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Cricket :",
                  desc: "Mahadev Book offers cricket coverage for IPL, T20, ODI, and Test matches with live updates, match insights, and a smooth user experience for cricket fans worldwide.",
                  img: "https://mahadevbooks.today/wp-content/uploads/2025/05/cricket-1.png",
                },
                {
                  title: "Football :",
                  desc: "Enjoy football coverage from top international leagues including EPL, La Liga, and UEFA tournaments with live scores and real-time updates on Mahadev Book.",
                  img: "https://mahadevbooks.today/wp-content/uploads/2025/05/cricket-1.png",
                },
                {
                  title: "Tennis :",
                  desc: "From Grand Slam tournaments to ATP events, Mahadev Book keeps users updated with live tennis action, match statistics, and fast-paced game information.",
                  img: "https://mahadevbooks.today/wp-content/uploads/2025/05/tennis.png",
                },
              ].map((sport, i) => (
                <div key={i} className="border border-gold rounded-2xl p-8 bg-black text-center flex flex-col items-center space-y-5">
                  <div className="flex justify-center items-center h-20">
                    <img src={sport.img} alt={sport.title} className="w-16 h-16 object-contain" />
                  </div>
                  <h3 className="text-white font-bold text-xl font-heading">{sport.title}</h3>
                  <p className="text-gray-300 text-sm md:text-base leading-relaxed">{sport.desc}</p>
                </div>
              ))}
            </div>

            {/* Bottom row: 2 columns centered */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {[
                {
                  title: "Basketball :",
                  desc: "Get access to basketball events including NBA and global leagues with live scores, team updates, and detailed match coverage on Mahadev Book.",
                  img: "https://mahadevbooks.today/wp-content/uploads/2025/05/basketball.png",
                },
                {
                  title: "Horse Racing :",
                  desc: "Follow major horse racing events worldwide with live race details, event schedules, and real-time updates through Mahadev Book.",
                  img: "https://mahadevbooks.today/wp-content/uploads/2025/05/equestrian.png",
                },
              ].map((sport, i) => (
                <div key={i} className="border border-gold rounded-2xl p-8 bg-black text-center flex flex-col items-center space-y-5">
                  <div className="flex justify-center items-center h-20">
                    <img src={sport.img} alt={sport.title} className="w-16 h-16 object-contain" />
                  </div>
                  <h3 className="text-white font-bold text-xl font-heading">{sport.title}</h3>
                  <p className="text-gray-300 text-sm md:text-base leading-relaxed">{sport.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 6: Download App */}
        <section className="max-w-7xl mx-auto border-2 border-gold/40 rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-12 bg-[#0c0c0e] shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="rounded-2xl overflow-hidden border border-gold/20">
                <img
                  src="https://mahadevbooks.today/wp-content/uploads/2026/05/Download-app-1024x683.png"
                  alt="Download Mahadev Book App – Bet Anytime Anywhere on Android iOS"
                  className="w-full max-w-sm h-auto object-cover"
                  width={512}
                  height={341}
                  loading="lazy"
                />
              </div>
            </div>
            {/* Right */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <h2 className="text-xl sm:text-2xl md:text-4xl font-extrabold text-gold leading-tight tracking-wide">
                Download Mahadev Betting App – Bet Anytime, Anywhere!
              </h2>
              <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                Looking for the latest <a href="#" className="text-gold font-bold hover:underline text-base md:text-lg">Mahadev Book App</a>? The Mahadev Book APK is designed to deliver a fast and secure mobile experience with easy account access, live notifications, and smooth performance. Compatible with Android and iOS, the app helps users stay connected anytime, anywhere.
              </p>
              <div className="space-y-3">
                <h4 className="text-gold font-bold text-base md:text-lg">Key Features of Mahadev Book App:</h4>
                <ul className="space-y-2 text-sm md:text-base text-left max-w-md mx-auto lg:mx-0 text-gray-300">
                  <li>⚡ Real-time betting with lightning-fast updates</li>
                  <li>⚡ Push notifications for match updates and bonuses</li>
                  <li>⚡ Instant deposits and withdrawals on the go</li>
                  <li>⚡ Smooth, lag-free interface</li>
                  <li>⚡ One-tap access to favorite games</li>
                </ul>
              </div>
              <div className="pt-2">
                <a
                  href="https://wa.me/+919864360936"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-transparent hover:bg-gold text-gold hover:text-black border-2 border-gold px-10 py-3.5 rounded-full text-sm font-bold uppercase tracking-wider transition-all duration-200"
                >
                  Download App Now
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Section 7: Top Casino Games */}
        <section className="max-w-7xl mx-auto border-2 border-gold/40 rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-12 bg-[#0c0c0e] shadow-lg">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-4xl font-extrabold text-gold uppercase tracking-wider">
              Top Casino Games on Mahadev Book Online
            </h2>
            <div className="w-24 h-0.5 bg-gold mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Teen Patti:",
                desc: "An excellent card game in India, Teen Patti on Mahadev Book provides real-time multiplayer tables, interesting game play, and adrenaline-pumping side bets which makes Teen Patti an all-time favorite.",
              },
              {
                title: "Andar Bahar:",
                desc: "Incredibly simple and very brisk paced, Andar Bahar ensures instant fun. Spend some time on either side and stone the cards as they unfold live. Perfect game for beginners and experienced gamblers.",
              },
              {
                title: "Roulette:",
                desc: "The orgasm will be felt and The Roulette spins will be placed on your lucky numbers. Mahadev Book has several betting options and live dealers and brings you European and American versions.",
              },
              {
                title: "Baccarat:",
                desc: "Take part in one of the most super elegant and high roller games in the entire casino universe – Baccarat. Predict the winning hand of Player vs Banker and enjoy hefty returns with secure bets.",
              },
            ].map((game, i) => (
              <div key={i} className="border border-gold/20 rounded-xl p-6 bg-black/40 flex flex-col justify-between space-y-4">
                <h3 className="text-gold font-bold text-lg md:text-xl">{game.title}</h3>
                <p className="text-gray-300 text-sm md:text-base leading-relaxed">{game.desc}</p>
              </div>
            ))}
          </div>

          <p className="text-sm text-center text-gray-400 mt-8 italic">
            Get the Vegas vibe right from your home and enjoy interactive, real-time casino experiences...
          </p>
        </section>

        {/* Section 8: Fantasy Cricket */}
        <section className="max-w-7xl mx-auto border-2 border-gold/40 rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-12 bg-[#0c0c0e] shadow-lg">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-4xl font-extrabold text-gold uppercase tracking-wider">
              Fantasy Cricket with Mahadev Book
            </h2>
            <div className="w-24 h-0.5 bg-gold mx-auto mt-4" />
          </div>

          <div className="max-w-3xl mx-auto text-center space-y-6">
            <p className="text-gray-300 text-base md:text-lg leading-relaxed">
              Dive into the world of strategic fantasy cricket, where your game knowledge earns you real rewards. Build your dream team, compete against others, and win big.
            </p>
            <ul className="text-left bg-black/40 border border-gold/20 rounded-2xl p-8 space-y-3 max-w-xl mx-auto text-sm md:text-base text-gray-200">
              <li>🏏 Choose players from real-time matches</li>
              <li>🏏 Join paid or free contests</li>
              <li>🏏 Earn points off player performances</li>
              <li>🏏 Beat the leaderboard and win cash</li>
              <li>🏏 Ideal for IPL, World Cup and other cricket leagues</li>
            </ul>
          </div>
        </section>

        {/* Section 9: Promotions */}
        <section className="max-w-7xl mx-auto border border-black rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-12 bg-[#ffca61] text-black shadow-lg">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-4xl font-extrabold text-black uppercase tracking-wider font-heading">
              Bonuses, Leaderboard Prizes &amp; Promotions
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Welcome and Daily Rewards:",
                desc: "Earn a decent welcome bonus when you make your first deposit and you will get daily login rewards for simply logging in. Mahadev Book makes sure that all users begin keeping strong and getting the same encouragement day in and day out.",
                img: "https://mahadevbooks.today/wp-content/uploads/2025/05/gift.png",
              },
              {
                title: "Referral and Cashback Offers:",
                desc: "Invite your friends and get referral bonuses each time your friends join and play. Plus, get the deposit cashback offers regularly, making every top-up a rewarding way to top up your account in the blink of an eye.",
                img: "https://mahadevbooks.today/wp-content/uploads/2025/05/bonus-6.png",
              },
              {
                title: "Leaderboard Prizes for Top Bettors:",
                desc: "Challenge other users and challenge your way to the top of the Mahadev Book leaderboard with huge weekly and monthly incentives. The more you play, and the more your win, you rank up, and the more exclusive rewards you uncover.",
                img: "https://mahadevbooks.today/wp-content/uploads/2025/05/prize.png",
              },
              {
                title: "Festive & Match Promotions:",
                desc: "Celebrate such life events as IPL or World Cup with festival bonuses and special deals related to certain matches. Be on the lookout for our app and website for quick promotions purposefully designed to enhance your betting experience.",
                img: "https://mahadevbooks.today/wp-content/uploads/2025/05/present.png",
              },
            ].map((promo, i) => (
              <div key={i} className="border border-black/20 rounded-2xl p-8 bg-white/40 flex flex-col items-center text-center space-y-5">
                <img src={promo.img} alt={promo.title} className="w-20 h-20 object-contain" />
                <div className="space-y-3">
                  <h3 className="font-extrabold text-black text-base md:text-lg font-heading">{promo.title}</h3>
                  <p className="text-black/85 text-sm md:text-base leading-relaxed">{promo.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 10: Payment Options */}
        <section className="max-w-7xl mx-auto border-2 border-gold/40 rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-12 bg-[#0c0c0e] shadow-lg">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-4xl font-extrabold text-gold uppercase tracking-wider">
              Payment Options for Deposits and Withdrawals
            </h2>
            <div className="w-24 h-0.5 bg-gold mx-auto mt-4" />
          </div>

          <div className="space-y-8 max-w-5xl mx-auto text-center">
            <p className="text-gray-300 text-base md:text-lg">
              We ensure <strong>safe and fast financial transactions</strong> with a wide range of options:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
              {[
                {
                  title: "Multiple UPI Options:",
                  desc: "Mahadev Book facilitates secure and instant UPI transactions using Google Pay, PhonePe, and BHIM hence making deposits and withdrawals easy and hassle free.",
                },
                {
                  title: "Card Payments:",
                  desc: "Users can utilize Visa and MasterCard credit or debit cards for fast deposits and painless withdrawals with encrypted processing for full transaction security.",
                },
                {
                  title: "E-Wallet Transfers:",
                  desc: "Experience smooth gaming with rapid transactions using approved e-wallets. Mahadev Book ensures no wallet-based payment is processed haphazardly.",
                },
              ].map((pay, i) => (
                <div key={i} className="border border-gold/20 rounded-xl p-6 bg-black/40 space-y-3">
                  <h4 className="text-gold font-bold text-base md:text-lg">{pay.title}</h4>
                  <p className="text-gray-300 text-sm md:text-base leading-relaxed">{pay.desc}</p>
                </div>
              ))}
            </div>
            <p className="text-sm text-gray-400 italic pt-4">
              All transactions are encrypted and processed in real-time, allowing instant fund transfers.
            </p>
          </div>
        </section>

        {/* Section 11: Trusted Active Users */}
        <section className="max-w-7xl mx-auto border-2 border-gold/40 rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-12 bg-[#0c0c0e] shadow-lg">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-4xl font-extrabold text-gold uppercase tracking-wider">
              Trusted by 10 Lakh+ Mahadevbook Active Users
            </h2>
            <div className="w-24 h-0.5 bg-gold mx-auto mt-4" />
          </div>

          <div className="max-w-4xl mx-auto text-center space-y-8 text-base">
            <p className="text-gray-300 leading-relaxed md:text-lg">
              Having more than a million active bettors, Mahadev Book has become reputable by offering security, fairness and transparency. The emphasis on customer satisfaction, safe technology and quick assistance make us the #1 choice for Indian online bettors.
            </p>
            <p className="text-gold font-bold md:text-lg">
              Don’t believe us about it, enter the community and see the difference yourself! Start Today – The Winning Process of the Mahadev Book Starts Here!
            </p>
            <p className="text-gray-300 font-semibold md:text-lg">
              Click below to get your Mahadev Book ID and download Mahadev betting app and start massive winning today.
            </p>
            
            <div className="bg-black/50 border border-gold/25 rounded-2xl p-6 max-w-md mx-auto space-y-3">
              <p className="font-bold text-gold text-sm uppercase tracking-wider">Your Checklist:</p>
              <ul className="text-left text-sm text-gray-200 space-y-2 max-w-xs mx-auto">
                <li>🎯 Get Your Mahadev Book Id Now!</li>
                <li>📱 Mahadev Betting App To access.</li>
                <li>🏆 Get Your Welcome Bonus &amp; Play!</li>
              </ul>
            </div>

            <div className="pt-4">
              <a
                href="https://wa.me/+919864360936"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-transparent hover:bg-gold text-gold hover:text-black border-2 border-gold px-10 py-4 rounded-full text-sm font-bold uppercase tracking-wider transition-all duration-200"
              >
                Get Your ID Now
              </a>
            </div>
          </div>
        </section>

        {/* Section 12: FAQs Accordion Container */}
        <section className="max-w-7xl mx-auto border border-black rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-12 bg-[#ffca61] text-black shadow-lg" id="faqs">
          {/* Pill Shaped Title */}
          <div className="max-w-xl mx-auto border border-black rounded-full py-3 px-4 sm:px-8 bg-[#ffca61] text-center mb-8 sm:mb-10 shadow-sm">
            <h2 className="text-base sm:text-lg md:text-2xl font-bold text-black uppercase tracking-wider font-heading">
              Mahadev Book FAQs
            </h2>
          </div>

          <FAQAccordion />
        </section>
      </main>

      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
