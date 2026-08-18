import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export const metadata: Metadata = {
  title: "Mahadev Book Login – Access Your Betting Account Instantly",
  description:
    "Login to your Mahadev Book account securely. Access cricket betting, casino games, fantasy sports, and live betting with your Mahadev Book ID. Fast, safe, and 24/7 accessible.",
  keywords: [
    "Mahadev Book login",
    "Mahadev Book ID login",
    "online betting login India",
    "cricket ID login",
    "Mahadev Book account access",
  ],
  alternates: {
    canonical: "https://mahadevbooks.today/login",
  },
  robots: {
    index: false,
    follow: false,
  },
  openGraph: {
    title: "Mahadev Book Login – Access Your Betting Account Instantly",
    description:
      "Login to your Mahadev Book account securely. Access cricket betting, casino games, fantasy sports, and live betting with your Mahadev Book ID.",
    url: "https://mahadevbooks.today/login",
    type: "website",
    images: [
      {
        url: "https://mahadevbooks.today/wp-content/uploads/2026/05/Login-1024x683.png",
        width: 1024,
        height: 683,
        alt: "Mahadev Book Login – Secure Account Access",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mahadev Book Login | Secure Cricket Betting Access",
    description:
      "Login to your Mahadev Book ID and start betting on cricket, football, casino and more. Fast and secure.",
  },
};

export default function Login() {
  return (
    <>
      <Header />
      <main className="bg-black text-white py-12 px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Top Split Section: Login Box & Description */}
        <section className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Form Box */}
          <div className="lg:col-span-5 bg-dark-card border border-gold rounded-2xl p-5 sm:p-6 md:p-8 space-y-6 shadow-xl w-full max-w-md mx-auto lg:max-w-none lg:mx-0">
            <h2 className="text-2xl md:text-3xl font-extrabold text-gold text-center tracking-wide">
              Mahadev Book
            </h2>
            <form className="space-y-4 text-left">
              <div>
                <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-1">
                  User ID
                </label>
                <input
                  type="text"
                  placeholder="Enter your User ID"
                  className="w-full bg-black/60 border border-gold/30 rounded-md py-2 px-3 text-white placeholder-gray-600 focus:outline-none focus:border-gold transition-colors text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-1">
                  Password
                </label>
                <input
                  type="password"
                  placeholder="Enter your Password"
                  className="w-full bg-black/60 border border-gold/30 rounded-md py-2 px-3 text-white placeholder-gray-600 focus:outline-none focus:border-gold transition-colors text-sm"
                />
              </div>

              <div className="flex justify-end">
                <a href="#" className="text-xs text-gold hover:underline">
                  Forgot Password?
                </a>
              </div>

              <div className="flex items-center">
                <input
                  id="remember-me"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gold/30 bg-black/60 text-gold focus:ring-gold"
                />
                <label htmlFor="remember-me" className="ml-2 block text-xs text-gray-300">
                  Remember Me
                </label>
              </div>

              <button
                type="submit"
                className="w-full bg-gold hover:bg-gold-hover text-black py-2.5 rounded-md text-sm font-bold uppercase tracking-wider transition-colors duration-200"
              >
                Log In
              </button>
            </form>

            <div className="text-center">
              <p className="text-xs text-gray-400">
                Don&apos;t have an account?{" "}
                <a href="/register" className="text-gold font-bold hover:underline">
                  Register Now
                </a>
              </p>
            </div>
          </div>

          {/* Right Description */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <h1 className="text-xl sm:text-2xl md:text-4xl font-extrabold text-gold leading-tight tracking-wide">
              Mahadev Book Login: Access Your Account Seamlessly!
            </h1>
            <p className="text-gray-300 text-sm md:text-base leading-relaxed">
              Welcome to <strong>Mahadev Book Login</strong> portal is your gateway to a world of exciting betting opportunities, including cricket, football, tennis, and exclusive casino games. Whether you&apos;re a seasoned bettor or a newcomer, logging into your Mahadev Book account is quick, safe, and designed to get you into the action in seconds.
            </p>
            <div className="pt-2">
              <a
                href="https://wa.me/+919864360936"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-transparent hover:bg-gold hover:text-black text-gold border border-gold px-8 py-3 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-200"
              >
                Mahadev Book Login
              </a>
            </div>
          </div>
        </section>

        {/* Section 1: Step-by-Step Guide */}
        <section className="max-w-7xl mx-auto space-y-6">
          <div className="border border-gold rounded-full py-2 px-4 sm:px-6 bg-black text-center max-w-xl mx-auto">
            <h2 className="text-xs sm:text-sm font-bold text-white uppercase tracking-wider">
              How to Log In to Mahadev Book: Step-by-Step Guide
            </h2>
          </div>

          <div className="border border-gold/30 rounded-2xl p-6 md:p-10 bg-[#0c0c0e] shadow-lg">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left Image */}
              <div className="lg:col-span-5 flex justify-center">
                <div className="rounded-2xl overflow-hidden border border-gold/20 shadow-md">
                  <img
                    src="https://mahadevbooks.today/wp-content/uploads/2026/05/Login-1024x683.png"
                    alt="How to Login"
                    className="w-full max-w-sm h-auto object-cover"
                  />
                </div>
              </div>

              {/* Right Steps */}
              <div className="lg:col-span-7 space-y-6 text-left">
                <ol className="space-y-4 text-xs md:text-sm text-gray-300">
                  <li>
                    <strong className="text-gold">1. Visit the Official Website:</strong> Open your browser and navigate to the official Mahadev Book website at <span className="text-gold font-semibold">mahadevbook.solutions</span>. Ensure you&apos;re on the legitimate site to protect your account.
                  </li>
                  <li>
                    <strong className="text-gold">2. Locate the Login Button:</strong> On the homepage, find the &quot;Login&quot; button at the top-right corner.
                  </li>
                  <li>
                    <strong className="text-gold">3. Enter Your Credentials:</strong> Input your Mahadev Book ID (or registered email/phone number) and password in the provided fields.
                  </li>
                  <li>
                    <strong className="text-gold">4. Click Login:</strong> Press the &quot;Login&quot; button to access your account dashboard.
                  </li>
                  <li>
                    <strong className="text-gold">5. Enable Two-Factor Authentication (Optional):</strong> For added security, activate 2FA during your first login to receive a verification code via email or SMS.
                  </li>
                </ol>

                <div className="border-t border-gold/10 pt-4 space-y-2">
                  <h3 className="text-base font-bold text-gold font-heading">
                    Forgot Your Password?
                  </h3>
                  <p className="text-xs md:text-sm text-gray-300">
                    If you can&apos;t remember your password, don&apos;t worry! Use the &quot;Forgot Password&quot; link on the login page:
                  </p>
                  <ul className="list-disc pl-5 text-xs md:text-sm text-gray-400 space-y-1">
                    <li>Enter your registered email or phone number.</li>
                    <li>Receive a password reset link or OTP.</li>
                    <li>Create a new, strong password and log in again.</li>
                  </ul>
                  <p className="text-xs text-gray-400 italic">
                    Our system ensures a secure and swift recovery process, so you&apos;re back to betting in no time.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Register Today */}
        <section className="max-w-7xl mx-auto space-y-6">
          <div className="border border-gold rounded-full py-2 px-6 bg-black text-center max-w-xl mx-auto">
            <h2 className="text-xs md:text-sm font-bold text-white uppercase tracking-wider">
              Don&apos;t Have a Mahadev Book ID? Register Today!
            </h2>
          </div>

          <div className="border border-gold/30 rounded-2xl p-6 md:p-10 bg-[#0c0c0e] shadow-lg text-center space-y-6">
            <p className="text-gray-300 text-xs md:text-sm max-w-3xl mx-auto leading-relaxed">
              If you&apos;re new to Mahadev Book, creating an account is fast and straightforward:
            </p>
            <ul className="text-left max-w-2xl mx-auto space-y-2 text-xs md:text-sm text-gray-300 pl-4 list-decimal">
              <li>Visit Mahadev Book Website and click &quot;Sign Up&quot; or &quot;Register Now&quot;.</li>
              <li>Fill in your details: full name, email, phone number, and preferred payment method.</li>
              <li>Submit the registration form via the website or WhatsApp (available on the official site).</li>
              <li>Receive your unique <strong>Mahadev Book ID</strong> and set a secure password.</li>
              <li>Log in and claim your welcome bonus to kickstart your betting journey!</li>
            </ul>
            <p className="text-gray-400 text-xs max-w-3xl mx-auto italic">
              Registration takes less than a minute, and new users can enjoy exclusive promotions to enhance their betting experience.
            </p>
            <div className="pt-2">
              <a
                href="https://wa.me/+919864360936"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-transparent hover:bg-gold hover:text-black text-gold border border-gold px-8 py-3 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-200"
              >
                Get Mahadev Book ID
              </a>
            </div>
          </div>
        </section>

        {/* Section 3: Tips for Secure Login */}
        <section className="max-w-7xl mx-auto space-y-6">
          <div className="border border-gold rounded-full py-2 px-6 bg-black text-center max-w-xl mx-auto">
            <h2 className="text-xs md:text-sm font-bold text-white uppercase tracking-wider">
              Tips for a Secure Mahadev Book Login
            </h2>
          </div>

          <div className="border border-gold/30 rounded-2xl p-6 md:p-8 bg-[#0c0c0e] shadow-lg max-w-4xl mx-auto">
            <p className="text-gray-300 text-xs md:text-sm text-center mb-6">
              Protecting your account is our priority, and we encourage users to follow these best practices:
            </p>
            <ul className="space-y-4 pl-4 text-xs md:text-sm text-gray-300">
              <li>
                🔑 <strong className="text-gold">Use a Strong Password:</strong> Combine letters, numbers, and symbols to create a unique password.
              </li>
              <li>
                🔒 <strong className="text-gold">Avoid Public Wi-Fi:</strong> Log in using a secure, private internet connection to prevent data breaches.
              </li>
              <li>
                🔄 <strong className="text-gold">Update Regularly:</strong> Keep your password updated every few months for added security.
              </li>
              <li>
                ⚠️ <strong className="text-gold">Beware of Phishing:</strong> Only use the official Mahadev Book website or app for login. Avoid clicking suspicious links claiming to be from Mahadev Book.
              </li>
              <li>
                🛡️ <strong className="text-gold">Enable 2FA:</strong> Add an extra layer of protection with two-factor authentication.
              </li>
            </ul>
          </div>
        </section>

        {/* Section 4: Login Stands Out */}
        <section className="max-w-7xl mx-auto space-y-6">
          <div className="border border-gold rounded-full py-2 px-6 bg-black text-center max-w-xl mx-auto">
            <h2 className="text-xs md:text-sm font-bold text-white uppercase tracking-wider">
              Easy, Simple, and Secure – Mahadev Book Login Stands Out!
            </h2>
          </div>

          <div className="border border-gold/30 rounded-2xl p-6 md:p-8 bg-[#0c0c0e] shadow-lg max-w-4xl mx-auto">
            <p className="text-gray-300 text-xs md:text-sm text-center mb-6">
              Our login system is designed with user convenience and security in mind:
            </p>
            <ul className="space-y-4 pl-4 text-xs md:text-sm text-gray-300">
              <li>
                ⚡ <strong className="text-gold">Instant Access:</strong> Log in within seconds to explore thousands of betting options.
              </li>
              <li>
                📱 <strong className="text-gold">Cross-Platform Compatibility:</strong> Use the same Mahadev Book ID across the website, mobile site, and app.
              </li>
              <li>
                📊 <strong className="text-gold">Personalized Dashboard:</strong> View your betting history, track live bets, and manage your account with ease.
              </li>
              <li>
                📞 <strong className="text-gold">24/7 Support:</strong> Contact our team via WhatsApp, email, or live chat for login related assistance.
              </li>
            </ul>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
