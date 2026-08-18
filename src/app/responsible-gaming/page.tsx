import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Responsible Gaming – Safe Betting Guidelines",
  description:
    "Mahadev Book is committed to responsible gaming. Learn how to set limits, recognise problem gambling signs, and access support resources. 18+ only.",
  alternates: {
    canonical: "https://mahadevbooks.today/responsible-gaming",
  },
  openGraph: {
    title: "Responsible Gaming – Safe Betting Guidelines | Mahadev Book",
    description:
      "Our responsible gaming policy, self-exclusion tools, warning signs of problem gambling, and helpline resources. Betting is for adults 18+ only.",
    url: "https://mahadevbooks.today/responsible-gaming",
    type: "website",
    images: [
      {
        url: "https://mahadevbooks.today/wp-content/uploads/2026/05/Hero-Page.png",
        width: 1983,
        height: 793,
        alt: "Responsible Gaming – Mahadev Book",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Responsible Gaming – Safe Betting Guidelines | Mahadev Book",
    description:
      "Our responsible gaming policy, self-exclusion tools, warning signs of problem gambling, and helpline resources. Betting is for adults 18+ only.",
    images: ["https://mahadevbooks.today/wp-content/uploads/2026/05/Hero-Page.png"],
  },
};

export default function ResponsibleGaming() {
  return (
    <>
      <Header />
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Responsible Gaming" },
        ]}
      />
      <main className="bg-black text-white py-6 px-4 sm:px-6 lg:px-8 space-y-8">

        {/* Hero */}
        <section className="max-w-4xl mx-auto border-2 border-gold/40 rounded-2xl p-6 md:p-10 bg-[#0c0c0e] shadow-lg text-center">
          <div className="inline-block bg-gold/10 border border-gold/30 text-gold text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
            18+ Only
          </div>
          <h1 className="text-2xl md:text-4xl font-extrabold text-gold leading-tight tracking-wide uppercase">
            Responsible Gaming
          </h1>
          <div className="w-24 h-0.5 bg-gold mx-auto mt-4" />
          <p className="text-gray-300 text-base md:text-lg mt-6 leading-relaxed">
            Mahadev Book is committed to providing a safe and enjoyable experience. Betting should be entertainment — never a way to solve financial problems. This page explains our responsible gaming policy and the tools available to help you stay in control.
          </p>
        </section>

        {/* Section: Our commitment */}
        <section className="max-w-4xl mx-auto border border-gold/20 rounded-2xl p-6 md:p-10 bg-[#0c0c0e] shadow-lg space-y-4">
          <h2 className="text-xl md:text-2xl font-bold text-gold uppercase tracking-wider">
            Our Commitment to You
          </h2>
          <ul className="space-y-3 text-sm md:text-base text-gray-200">
            {[
              "We only allow users aged 18 and above to register and use our platform.",
              "We do not target advertising at minors or vulnerable individuals.",
              "We provide self-exclusion and deposit limit tools to all registered users.",
              "Our customer support team is trained to recognise and assist users who may be experiencing gambling-related issues.",
              "We do not offer credit or loans for the purpose of betting.",
            ].map((item, i) => (
              <li key={i} className="flex gap-3">
                <span className="text-gold shrink-0">✅</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Section: Warning signs */}
        <section className="max-w-4xl mx-auto border border-gold/20 rounded-2xl p-6 md:p-10 bg-[#0c0c0e] shadow-lg space-y-6">
          <h2 className="text-xl md:text-2xl font-bold text-gold uppercase tracking-wider">
            Warning Signs of Problem Gambling
          </h2>
          <p className="text-gray-300 text-sm md:text-base">
            Gambling becomes a problem when it negatively affects your finances, relationships, or mental health. Watch for these warning signs:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              "Betting more than you can afford to lose",
              "Chasing losses with bigger bets",
              "Hiding your gambling from family or friends",
              "Feeling anxious or irritable when not betting",
              "Neglecting work, studies, or family responsibilities to bet",
              "Borrowing money to fund betting",
              "Thinking about gambling constantly",
              "Failed attempts to cut back or stop",
            ].map((sign, i) => (
              <div key={i} className="flex gap-2 items-start">
                <span className="text-red-400 shrink-0">⚠️</span>
                <span className="text-gray-300 text-sm">{sign}</span>
              </div>
            ))}
          </div>
          <p className="text-gray-400 text-sm">
            If you recognise 3 or more of these signs in yourself, please reach out for support immediately.
          </p>
        </section>

        {/* Section: Tools */}
        <section className="max-w-4xl mx-auto border border-gold/20 rounded-2xl p-6 md:p-10 bg-[#0c0c0e] shadow-lg space-y-6">
          <h2 className="text-xl md:text-2xl font-bold text-gold uppercase tracking-wider">
            Responsible Gaming Tools
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              {
                title: "Deposit Limits",
                desc: "Set a daily, weekly, or monthly deposit cap on your account. Once set, limits can only be lowered immediately — increases take 24 hours to activate.",
              },
              {
                title: "Self-Exclusion",
                desc: "Request a temporary break (1 week to 6 months) or permanent self-exclusion from the platform. Contact support via WhatsApp to activate.",
              },
              {
                title: "Reality Checks",
                desc: "Enable session time reminders to receive notifications showing how long you have been active and how much you have wagered.",
              },
            ].map((tool, i) => (
              <div key={i} className="bg-black/40 border border-gold/10 p-5 rounded-xl space-y-2">
                <h3 className="text-gold font-bold text-base">{tool.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{tool.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-sm text-gray-400">
            To activate any of these tools, contact our support team via WhatsApp at{" "}
            <a href="https://wa.me/+919864360936" target="_blank" rel="noopener noreferrer" className="text-gold hover:underline">
              +91 98643 60936
            </a>
            .
          </p>
        </section>

        {/* Section: Tips */}
        <section className="max-w-4xl mx-auto border border-gold/20 rounded-2xl p-6 md:p-10 bg-[#0c0c0e] shadow-lg space-y-4">
          <h2 className="text-xl md:text-2xl font-bold text-gold uppercase tracking-wider">
            Tips for Responsible Betting
          </h2>
          <ol className="space-y-3 text-sm md:text-base text-gray-200">
            {[
              "Only bet money you can afford to lose — treat it as entertainment, not income.",
              "Set a fixed budget before you start and stop when it is reached.",
              "Never chase losses. A losing streak is normal; bigger bets to recover losses make things worse.",
              "Take regular breaks — step away from betting for days or weeks when needed.",
              "Do not bet when emotional, stressed, or under the influence of alcohol.",
              "Keep betting separate from your savings, rent, and essential expenses.",
              "Tell a trusted friend or family member about your betting activities.",
            ].map((tip, i) => (
              <li key={i} className="flex gap-3">
                <span className="text-gold font-bold shrink-0">{i + 1}.</span>
                <span>{tip}</span>
              </li>
            ))}
          </ol>
        </section>

        {/* Section: Helplines */}
        <section className="max-w-4xl mx-auto border-2 border-gold/30 rounded-2xl p-6 md:p-10 bg-[#0c0c0e] shadow-lg space-y-4 text-center">
          <h2 className="text-xl md:text-2xl font-bold text-gold uppercase tracking-wider">
            Get Help – Support Resources
          </h2>
          <p className="text-gray-300 text-sm md:text-base">
            If you or someone you know needs help with gambling-related issues, these resources are available:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left max-w-2xl mx-auto">
            {[
              {
                name: "iCall – TISS",
                desc: "A psychosocial helpline run by Tata Institute of Social Sciences.",
                contact: "9152987821",
              },
              {
                name: "Vandrevala Foundation",
                desc: "24/7 mental health helpline providing free support.",
                contact: "1860-2662-345",
              },
            ].map((resource, i) => (
              <div key={i} className="bg-black/40 border border-gold/10 p-4 rounded-xl space-y-1">
                <h3 className="text-gold font-bold text-sm">{resource.name}</h3>
                <p className="text-gray-400 text-xs">{resource.desc}</p>
                <p className="text-white text-sm font-semibold">{resource.contact}</p>
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-600 pt-4">
            Last updated: August 2026 | Mahadev Book — Responsible Gaming Policy
          </p>
        </section>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
