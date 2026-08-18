import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function NotFound() {
  const links = [
    { label: "Home", href: "/" },
    { label: "Cricket Betting Guide", href: "/cricket-betting-guide" },
    { label: "IPL Betting Guide", href: "/ipl-betting-guide" },
    { label: "Online Cricket ID", href: "/online-cricket-id" },
    { label: "Blog", href: "/blog" },
    { label: "FAQs", href: "/faqs" },
    { label: "Responsible Gaming", href: "/responsible-gaming" },
  ];

  return (
    <>
      <Header />
      <main className="bg-black text-white min-h-[70vh] flex items-center justify-center px-4 py-16">
        <div className="max-w-2xl mx-auto text-center space-y-8">
          {/* 404 number */}
          <div className="space-y-2">
            <p className="text-[120px] md:text-[160px] font-extrabold text-gold/20 leading-none select-none">
              404
            </p>
            <h1 className="text-2xl md:text-4xl font-extrabold text-gold -mt-6">
              Page Not Found
            </h1>
            <p className="text-gray-400 text-sm md:text-base max-w-md mx-auto">
              The page you&apos;re looking for doesn&apos;t exist or has been moved. Use the links below to find what you need.
            </p>
          </div>

          {/* Quick links */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-left max-w-lg mx-auto">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="flex items-center gap-2 bg-[#0c0c0e] border border-gold/15 hover:border-gold/50 rounded-xl px-4 py-3 text-sm text-gray-300 hover:text-gold transition-all duration-200"
              >
                <span className="text-gold">→</span>
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="pt-4 space-y-3">
            <p className="text-gray-500 text-sm">
              Need help? Our support team is available 24/7.
            </p>
            <a
              href="https://wa.me/+919864360936"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-transparent hover:bg-gold text-gold hover:text-black border-2 border-gold px-8 py-3 rounded-full text-sm font-bold uppercase tracking-wider transition-all duration-200"
            >
              Chat With Support
            </a>
          </div>

          <p className="text-xs text-gray-700">
            18+ only. Please bet responsibly.{" "}
            <Link href="/responsible-gaming" className="hover:text-gold underline">
              Responsible Gaming
            </Link>
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
