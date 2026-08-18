import Link from "next/link";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

const breadcrumbJsonLd = (items: BreadcrumbItem[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.label,
    ...(item.href
      ? { item: `https://mahadevbooks.today${item.href}` }
      : {}),
  })),
});

export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbJsonLd(items)),
        }}
      />
      <nav
        aria-label="Breadcrumb"
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-0"
      >
        <ol className="flex flex-wrap items-center gap-1.5 text-xs text-gray-500">
          {items.map((item, index) => {
            const isLast = index === items.length - 1;
            return (
              <li key={index} className="flex items-center gap-1.5">
                {index > 0 && (
                  <span className="text-gray-700" aria-hidden="true">
                    /
                  </span>
                )}
                {item.href && !isLast ? (
                  <Link
                    href={item.href}
                    className="hover:text-gold transition-colors duration-200"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <span
                    className={isLast ? "text-gold font-semibold" : ""}
                    aria-current={isLast ? "page" : undefined}
                  >
                    {item.label}
                  </span>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
