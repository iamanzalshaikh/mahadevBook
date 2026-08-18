import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Blog – Cricket Betting Tips, IPL Guides & Fantasy Cricket | Mahadev Book",
  description:
    "Read the Mahadev Book blog for cricket betting guides, IPL betting tips, UPI payment safety, odds explained, and responsible gaming advice.",
  alternates: {
    canonical: "https://mahadevbooks.today/blog",
  },
  openGraph: {
    title: "Blog – Cricket Betting Tips & IPL Fantasy Guides | Mahadev Book",
    description:
      "Latest cricket betting guides, IPL tips, UPI payment safety, and responsible gaming articles on the Mahadev Book blog.",
    url: "https://mahadevbooks.today/blog",
    type: "website",
  },
};

export default function Blog() {
  const posts = [
    {
      title: "How Live Cricket Betting Odds Work – Complete Guide",
      date: "August 14, 2026",
      excerpt:
        "Learn exactly how live cricket betting odds work — decimal vs fractional formats, why odds move during a match ball by ball, and how to read in-play markets before placing a bet.",
      img: "https://mahadevbooks.today/wp-content/uploads/2025/05/How-to-Use-Mahadev-Book-ID-for-IPL-Betting-–-Step-by-Step-Guide.jpg",
      link: "/blog/how-live-cricket-betting-odds-work",
      badge: "Beginner Guide",
    },
    {
      title: "IPL Betting Terms Explained for Beginners",
      date: "August 14, 2026",
      excerpt:
        "A plain-English glossary of 15 IPL and cricket betting terms — from run line and toss bet to accumulator, cash out, and wagering requirement. Know the language before you bet.",
      img: "https://mahadevbooks.today/wp-content/uploads/2025/05/mahadev-book-id.jpg",
      link: "/blog/ipl-betting-terms-explained",
      badge: "IPL Betting",
    },
    {
      title: "Is UPI Safe for Online Payments? A Complete Safety Guide",
      date: "August 14, 2026",
      excerpt:
        "How UPI encryption works, what scams to watch out for (fake collect requests, QR tricks), a safety checklist, and NPCI security standards — everything you need to transact safely.",
      img: "https://mahadevbooks.today/wp-content/uploads/2026/05/About-us-1024x683.png",
      link: "/blog/upi-payment-safety-guide",
      badge: "UPI & Payments",
    },
    {
      title: "How to Use Mahadev Book ID for IPL Betting – Step-by-Step Guide",
      date: "May 17, 2025",
      excerpt:
        "With the popularity of the Indian Premier League (IPL) soaring every year, cricket betting has taken on a new dimension. Among the many platforms available,",
      img: "https://mahadevbooks.today/wp-content/uploads/2025/05/How-to-Use-Mahadev-Book-ID-for-IPL-Betting-–-Step-by-Step-Guide.jpg",
      link: "/blog/how-to-use-mahadev-book-id-for-ipl-betting-step-by-step-guide",
      badge: null,
    },
    {
      title: "Start Your IPL Fantasy Cricket Journey with Mahadev Book",
      date: "May 7, 2025",
      excerpt:
        "IPL is not just another cricket tournament—it's a festival of cricket celebrated by millions across India. With the rise of digital platforms, fantasy cricket has",
      img: "https://mahadevbooks.today/wp-content/uploads/2025/05/mahadev-book-id.jpg",
      link: "/blog/start-your-ipl-fantasy-cricket-journey-with-mahadev-book",
      badge: null,
    },
  ];

  const guides = [
    { title: "Cricket Betting Guide", href: "/cricket-betting-guide", desc: "How odds, bet types and markets work" },
    { title: "IPL Betting Guide", href: "/ipl-betting-guide", desc: "IPL-specific markets and live betting strategy" },
    { title: "UPI Payment Guide", href: "/upi-payment-guide", desc: "Step-by-step UPI deposit instructions" },
    { title: "Responsible Gaming", href: "/responsible-gaming", desc: "Tools and resources for safe betting" },
  ];

  return (
    <>
      <Header />
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Blog" },
        ]}
      />
      <main className="bg-black text-white py-6 md:py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto space-y-16">

          {/* Section Heading */}
          <div className="text-center">
            <h1 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-gold font-heading tracking-wide uppercase">
              Latest Blog Posts
            </h1>
            <div className="w-24 h-0.5 bg-gold mx-auto mt-4" />
            <p className="text-gray-400 text-sm md:text-base mt-4 max-w-2xl mx-auto">
              Cricket betting guides, IPL tips, UPI payment safety, and responsible gaming — written by the Mahadev Book editorial team.
            </p>
          </div>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {posts.map((post, i) => (
              <article key={i} className="flex flex-col space-y-4 text-left">
                {/* Thumbnail Link */}
                <a
                  href={post.link}
                  className="block rounded-xl overflow-hidden border border-gold/20 hover:border-gold/50 shadow-md hover:shadow-xl transition-all duration-300 relative"
                >
                  <img
                    src={post.img}
                    alt={post.title}
                    className="w-full h-48 object-cover"
                    loading="lazy"
                  />
                  {post.badge && (
                    <span className="absolute top-3 left-3 bg-gold text-black text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-full">
                      {post.badge}
                    </span>
                  )}
                </a>

                {/* Excerpt Details */}
                <div className="space-y-2 flex-1 flex flex-col">
                  <h2 className="text-base md:text-lg font-bold text-white hover:text-gold transition-colors duration-200 leading-snug">
                    <a href={post.link}>{post.title}</a>
                  </h2>

                  {/* Post Date */}
                  <div className="text-xs text-gray-500 font-semibold">
                    {post.date}
                  </div>

                  {/* Description Paragraph */}
                  <p className="text-gray-400 text-sm leading-relaxed flex-1">
                    {post.excerpt}
                  </p>

                  {/* Read More Link */}
                  <div className="pt-2">
                    <a
                      href={post.link}
                      className="text-gold hover:text-gold/70 font-bold text-sm transition-colors duration-200 flex items-center gap-1"
                    >
                      Read More »
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Guides Section */}
          <div className="border-t border-gold/10 pt-12">
            <h2 className="text-xl md:text-2xl font-bold text-gold uppercase tracking-wider text-center mb-8">
              Explore Our Guides
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {guides.map((guide, i) => (
                <a
                  key={i}
                  href={guide.href}
                  className="block bg-[#0c0c0e] border border-gold/15 hover:border-gold/50 rounded-xl p-5 space-y-1.5 transition-all duration-200 hover:shadow-lg"
                >
                  <p className="text-gold font-bold text-sm">{guide.title} →</p>
                  <p className="text-gray-500 text-xs">{guide.desc}</p>
                </a>
              ))}
            </div>
          </div>

          <p className="text-center text-xs text-gray-600 pb-2">
            18+ only. Gambling involves risk. Please bet responsibly.{" "}
            <a href="/responsible-gaming" className="hover:text-gold underline">Responsible Gaming Policy</a>
          </p>
        </div>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
