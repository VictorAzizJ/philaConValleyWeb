import Link from "next/link";
import { siteConfig } from "@/lib/config/site";

export function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-surface-base/95 backdrop-blur supports-[backdrop-filter]:bg-surface-base/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex gap-6 md:gap-10">
          <Link href="/" className="flex items-center space-x-2">
            <span className="font-bold text-xl">{siteConfig.name}</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link
              href="/about"
              className="flex items-center text-sm font-medium transition-colors hover:text-brand-primary"
            >
              About
            </Link>
            <Link
              href="/projects"
              className="flex items-center text-sm font-medium transition-colors hover:text-brand-primary"
            >
              Projects
            </Link>
            <Link
              href="/partners/request"
              className="flex items-center text-sm font-medium transition-colors hover:text-brand-primary"
            >
              Partner Request
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
