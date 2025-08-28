
"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Logo from "./Logo";

export default function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  return (
    <header className="w-full bg-black border-b border-neutral-800 sticky top-0 z-50">
      <nav className="w-full max-w-4xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="hover:opacity-80 transition-opacity">
            <Logo size={32} showText={true} />
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-6">
            {[
              { href: "/", label: "Home" },
              { href: "/blog", label: "Blog" },
              { href: "/tools", label: "Tools" },
              { href: "/contact", label: "Contact" }
            ].map((item) => (
              <Link 
                key={item.href}
                href={item.href} 
                className={`px-3 py-2 text-sm transition-colors ${
                  pathname === item.href || (item.href === '/blog' && pathname?.startsWith('/blog/'))
                    ? 'text-white' 
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-white hover:text-neutral-300 transition-colors p-2"
            aria-label="Toggle menu"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-neutral-800">
            <div className="flex flex-col space-y-1">
              {[
                { href: "/", label: "Home" },
                { href: "/blog", label: "Blog" },
                { href: "/tools", label: "Tools" },
                { href: "/contact", label: "Contact" }
              ].map((item) => (
                <Link 
                  key={item.href}
                  href={item.href} 
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-3 py-3 text-sm transition-colors ${
                    pathname === item.href || (item.href === '/blog' && pathname?.startsWith('/blog/'))
                      ? 'text-white bg-neutral-900' 
                      : 'text-neutral-400 hover:text-white hover:bg-neutral-900'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
