import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export const metadata: Metadata = {
  title: "Blog – Cricket Betting Tips, IPL Guides & Fantasy Cricket | Mahadev Book",
  description:
    "Read the Mahadev Book blog for the latest cricket betting tips, IPL fantasy cricket strategies, step-by-step betting guides, and expert sports insights.",
  alternates: {
    canonical: "https://mahadevbooks.today/blog",
  },
  openGraph: {
    title: "Blog – Cricket Betting Tips & IPL Fantasy Guides | Mahadev Book",
    description:
      "Latest cricket betting tips, IPL guides, and fantasy cricket strategies on the Mahadev Book blog.",
    url: "https://mahadevbooks.today/blog",
    type: "website",
  },
};

export default function Blog() {
  const posts = [
    {
      title: "How to Use Mahadev Book ID for IPL Betting – Step-by-Step Guide",
      date: "May 17, 2025",
      excerpt:
        "With the popularity of the Indian Premier League (IPL) soaring every year, cricket betting has taken on a new dimension. Among the many platforms available,",
      img: "https://mahadevbooks.today/wp-content/uploads/2025/05/How-to-Use-Mahadev-Book-ID-for-IPL-Betting-–-Step-by-Step-Guide.jpg",
      link: "/blog/how-to-use-mahadev-book-id-for-ipl-betting-step-by-step-guide",
    },
    {
      title: "Start Your IPL Fantasy Cricket Journey with Mahadev Book",
      date: "May 7, 2025",
      excerpt:
        "IPL is not just another cricket tournament—it’s a festival of cricket celebrated by millions across India. With the rise of digital platforms, fantasy cricket has",
      img: "https://mahadevbooks.today/wp-content/uploads/2025/05/mahadev-book-id.jpg",
      link: "/blog/start-your-ipl-fantasy-cricket-journey-with-mahadev-book",
    },
  ];

  return (
    <>
      <Header />
      <main className="bg-black text-white py-12 md:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto space-y-12">
          
          {/* Section Heading */}
          <div className="text-center">
            <h1 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-gold font-heading tracking-wide uppercase">
              Latest Blog Posts
            </h1>
            <div className="w-24 h-0.5 bg-gold mx-auto mt-4" />
          </div>

          {/* Grid Layout: 2 columns matching the screenshot */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {posts.map((post, i) => (
              <article key={i} className="flex flex-col space-y-4 text-left">
                {/* Thumbnail Link */}
                <a
                  href={post.link}
                  className="block rounded-xl overflow-hidden border border-gold/20 hover:border-gold/50 shadow-md hover:shadow-xl transition-all duration-300"
                >
                  <img
                    src={post.img}
                    alt={post.title}
                    className="w-full h-48 sm:h-64 md:h-72 object-cover"
                  />
                </a>

                {/* Excerpt Details */}
                <div className="space-y-2">
                  <h3 className="text-xl md:text-2xl font-bold text-white hover:text-gold transition-colors duration-200 leading-tight">
                    <a href={post.link}>{post.title}</a>
                  </h3>
                  
                  {/* Post Date */}
                  <div className="text-xs md:text-sm text-gray-500 font-semibold">
                    {post.date}
                  </div>

                  {/* Description Paragraph */}
                  <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                    {post.excerpt}
                  </p>

                  {/* Read More Link in Green */}
                  <div className="pt-2">
                    <a
                      href={post.link}
                      className="text-[#10b981] hover:text-[#059669] font-bold text-sm md:text-base transition-colors duration-200 flex items-center gap-1"
                    >
                      Read More »
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>

        </div>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
