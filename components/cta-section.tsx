import Link from 'next/link'

export function CTASection() {
  return (
    <section className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-14 xl:px-16 py-16 md:py-28">
      <div className="border border-border rounded-lg bg-card p-6 sm:p-8 md:p-12 text-center animate-slide-up hover:border-muted-foreground transition-smooth">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-foreground mb-3 md:mb-4 text-balance">
          Ready to build something great?
        </h2>
        <p className="text-base sm:text-lg text-muted-foreground mb-6 md:mb-8 max-w-2xl mx-auto text-balance">
          Let&apos;s talk about your project. Our team is ready to help you build, protect, and innovate.
        </p>
        <Link
          href="/contact"
          className="inline-block w-full sm:w-auto px-6 sm:px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 hover:scale-105 transition-smooth text-center"
        >
          Start a Conversation
        </Link>
      </div>
    </section>
  )
}
