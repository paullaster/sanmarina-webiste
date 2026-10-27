import Link from "next/link";
import type { BreadcrumbItem } from "@/lib/seo";

export function Breadcrumbs({ items }: { items: readonly BreadcrumbItem[] }) {
  return (
    <nav
      aria-label="Breadcrumb"
      className="safe-px border-border border-b bg-white/70"
    >
      <ol className="text-muted mx-auto flex max-w-6xl flex-wrap items-center gap-1 py-3 text-xs sm:text-sm">
        <li>
          <Link
            href="/"
            className="hover:text-accent underline-offset-2 hover:underline"
          >
            Home
          </Link>
        </li>
        {items.map((item, index) => {
          const last = index === items.length - 1;
          return (
            <li key={item.path} className="flex items-center gap-1">
              <span aria-hidden="true" className="text-border-strong">
                /
              </span>
              {last ? (
                <span className="text-ink font-medium" aria-current="page">
                  {item.name}
                </span>
              ) : (
                <Link
                  href={item.path}
                  className="hover:text-accent underline-offset-2 hover:underline"
                >
                  {item.name}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
