'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/contact', label: 'Contact' },
] as const

export function Header() {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const isActive = (path: string) => pathname === path

  return (
    <header className="border-b border-border bg-background sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-14 xl:px-16">
        <nav className="flex items-center justify-between min-h-[4.25rem] sm:min-h-[4.75rem] py-3 sm:py-4 gap-4">
          <Link
            href="/"
            className="shrink-0 animate-slide-in font-semibold text-xl sm:text-2xl text-foreground hover:text-muted-foreground transition-smooth"
            onClick={() => setIsMenuOpen(false)}
          >
            Byneem
          </Link>

          <div className="hidden md:flex items-center gap-7 lg:gap-9">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`text-base lg:text-lg transition-colors whitespace-nowrap ${
                  isActive(href)
                    ? 'text-foreground font-semibold'
                    : 'text-muted-foreground hover:text-foreground font-medium'
                }`}
              >
                {label}
              </Link>
            ))}
          </div>

          <button
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 -mr-2 text-foreground hover:text-muted-foreground transition-colors shrink-0"
            aria-expanded={isMenuOpen}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </nav>

        {isMenuOpen && (
          <div className="md:hidden border-t border-border pb-4 space-y-1 animate-slide-down">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setIsMenuOpen(false)}
                className={`block px-2 py-3 rounded-md text-base transition-colors ${
                  isActive(href)
                    ? 'text-foreground font-semibold bg-secondary'
                    : 'text-muted-foreground hover:text-foreground hover:bg-secondary/80 font-medium'
                }`}
              >
                {label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </header>
  )
}
