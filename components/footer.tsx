'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Mail, MapPin, Phone } from 'lucide-react'
import { FaInstagram, FaLinkedin, FaXTwitter } from 'react-icons/fa6'

const footerNavLinks = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/contact', label: 'Contact' },
] as const

const socialLinks = [
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com/company/byneem',
    icon: FaLinkedin,
  },
  {
    name: 'Instagram',
    href: 'https://instagram.com/byneem',
    icon: FaInstagram,
  },
  {
    name: 'X',
    href: 'https://x.com/byneem',
    icon: FaXTwitter,
  },
] as const

export function Footer() {
  const pathname = usePathname()
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-background">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-14 xl:px-16 py-12 sm:py-16 md:py-20">
        <div className="flex flex-col lg:flex-row lg:items-stretch gap-10 lg:gap-0">
          {/* Left — brand (~1/3) */}
          <div className="w-full lg:w-1/3 lg:max-w-md shrink-0 text-left space-y-3 lg:pr-10 xl:pr-14">
            <Link
              href="/"
              className="inline-block font-semibold text-xl sm:text-2xl text-foreground hover:text-muted-foreground transition-smooth"
            >
              Byneem
            </Link>
            <p className="text-xs sm:text-sm font-medium tracking-wide">
              <span className="text-muted-foreground">Build.</span>{' '}
              <span className="text-foreground">Protect.</span>{' '}
              <span className="text-muted-foreground">Innovate.</span>
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              From concept to deployment, we&apos;ve got you covered.
            </p>
          </div>

          {/* Divider: horizontal on small screens, vertical on lg+ */}
          <div
            className="lg:hidden h-px w-full shrink-0 bg-border"
            aria-hidden
          />
          <div
            className="hidden lg:block w-px shrink-0 bg-border"
            aria-hidden
          />

          {/* Right — three columns (~2/3) */}
          <div className="w-full lg:flex-1 min-w-0 lg:pl-10 xl:pl-14">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-8 lg:gap-10 justify-items-start">
              <nav aria-label="Footer">
                <ul className="space-y-3">
                  {footerNavLinks.map(({ href, label }) => (
                    <li key={href}>
                      <Link
                        href={href}
                        className={`text-sm transition-colors ${
                          pathname === href
                            ? 'text-foreground font-medium'
                            : 'text-muted-foreground hover:text-foreground'
                        }`}
                      >
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>

              <div>
                <h3 className="text-foreground font-semibold text-sm mb-4">
                  Social media
                </h3>
                <ul className="space-y-3">
                  {socialLinks.map(({ name, href, icon: Icon }) => (
                    <li key={name}>
                      <a
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
                      >
                        <Icon className="w-4 h-4 shrink-0" aria-hidden />
                        <span>{name}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-foreground font-semibold text-sm mb-4">
                  Get in touch
                </h3>
                <ul className="space-y-4 text-sm text-muted-foreground">
                  <li className="flex gap-3">
                    <Mail className="w-4 h-4 shrink-0 mt-0.5 text-foreground/80" aria-hidden />
                    <div className="space-y-1">
                      <a
                        href="mailto:hello@byneem.com"
                        className="block hover:text-foreground transition-colors"
                      >
                        hello@byneem.com
                      </a>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <MapPin className="w-4 h-4 shrink-0 mt-0.5 text-foreground/80" aria-hidden />
                    <span className="leading-snug">
                      Working with teams globally — remote-first.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <Phone className="w-4 h-4 shrink-0 mt-0.5 text-foreground/80" aria-hidden />
                    <span className="leading-snug">
                      Prefer email? We respond within 1–2 business days.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-12 sm:mt-16 pt-10">
          <p className="text-muted-foreground text-xs sm:text-sm text-center">
            © {currentYear} Byneem. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
