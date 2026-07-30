import Link from "next/link";

export default function Footer() {
  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About us", href: "/about-us" },
    { name: "Login", href: "/login" },
    { name: "Register", href: "/register" },
    { name: "Online Cricket ID", href: "/online-cricket-id" },
    { name: "Mahadev book online", href: "/mahadev-book-online" },
    { name: "Privacy Policy", href: "/privacy-policy" },
    { name: "Blog", href: "/blog" },
  ];

  const socialLinks = [
    {
      name: "Facebook",
      href: "https://www.facebook.com/mahadevbookss/",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6c.9 0 1.76.07 1.76.07v2.13h-1.09c-1.05 0-1.67.65-1.67 1.3V12h2.4l-.4 3h-2v6.8c4.56-.93 8-4.96 8-9.8z" />
        </svg>
      ),
    },
    {
      name: "Pinterest",
      href: "https://www.pinterest.com/mahadevbooksid/",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 2C6.48 2 2 6.48 2 12c0 4.23 2.64 7.85 6.4 9.3-.1-.78-.18-1.99.03-2.85.2-.84 1.25-5.3 1.25-5.3s-.32-.64-.32-1.58c0-1.48.86-2.59 1.93-2.59.91 0 1.35.68 1.35 1.5 0 .91-.58 2.28-.88 3.55-.25 1.06.53 1.92 1.58 1.92 1.9 0 3.36-2 3.36-4.9 0-2.56-1.84-4.35-4.47-4.35-3.05 0-4.84 2.29-4.84 4.65 0 .92.35 1.91.8 2.45.09.1.1.18.07.29-.08.33-.25 1.01-.28 1.15-.04.18-.14.22-.33.13-1.25-.58-2.03-2.4-2.03-3.87 0-3.15 2.29-6.04 6.6-6.04 3.46 0 6.16 2.47 6.16 5.77 0 3.44-2.17 6.2-5.18 6.2-1.01 0-1.97-.53-2.3-1.15l-.62 2.38c-.22.87-.83 1.96-1.24 2.62C9.48 21.62 10.7 22 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2z" />
        </svg>
      ),
    },
    {
      name: "YouTube",
      href: "https://www.youtube.com/@mahadevbooksid",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.11C19.518 3.545 12 3.545 12 3.545s-7.518 0-9.388.508a3.003 3.003 0 0 0-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 0 0 2.11 2.11c1.87.508 9.388.508 9.388.508s7.518 0 9.388-.508a3.003 3.003 0 0 0 2.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </svg>
      ),
    },
    {
      name: "X (Twitter)",
      href: "https://x.com/mahadevbookidd",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/mahadevbookss/",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
        </svg>
      ),
    },
  ];

  return (
    <footer className="bg-navy-dark text-white border-t border-navy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Section 1: About & Location */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold border-l-4 border-gold pl-3 text-white uppercase tracking-wider">
              Mahadev Book
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Welcome to Mahadev Book, the best online id provider in India. Excite yourself with our
              special online betting features for cricket, football and casino games among others.
              Download The Mahadev Betting App Now!
            </p>
            <div className="pt-4 space-y-3">
              <h4 className="text-lg font-semibold text-white">Our Locations</h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                United States<br />
                Australia<br />
                Canada<br />
                Europe
              </p>
            </div>
          </div>

          {/* Section 2: Quick Links */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold border-l-4 border-gold pl-3 text-white uppercase tracking-wider">
              Quick Links
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-gold transition-colors duration-200 text-sm flex items-center gap-1.5"
                  >
                    <span className="text-gold">»</span> {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Section 3: Social & Branding */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold border-l-4 border-gold pl-3 text-white uppercase tracking-wider">
              Social Media
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Stay connected with us on our social platforms for instant updates, betting tips, and bonus promotions.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-navy hover:bg-gold hover:text-navy text-gold p-3 rounded-full transition-all duration-300 shadow-md hover:scale-110"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-navy/60 my-10" />

        {/* Below Footer: Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between text-center sm:text-left text-sm text-gray-400 gap-4">
          <p>Copyright © 2026 Official Mahadev Book | All Rights Reserved</p>
          <div className="flex gap-6 text-xs">
            <Link href="/privacy-policy" className="hover:text-gold transition-colors">
              Privacy Policy
            </Link>
            <Link href="/about-us" className="hover:text-gold transition-colors">
              About Us
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
