import Link from 'next/link'

export function HeroSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-14 xl:px-16 py-16 sm:py-24 md:py-32">
      <div className="text-center max-w-3xl mx-auto">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground mb-4 md:mb-6 text-balance leading-tight animate-fade-in">
          <span className="text-muted-foreground">Build.</span> Protect.{' '}
          <span className="text-muted-foreground">Innovate.</span>
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-6 md:mb-8 text-balance leading-relaxed animate-slide-up" style={{ animationDelay: '0.1s' }}>
          We help startups and tech companies build world-class web and mobile products. From concept to deployment, we&apos;ve got you covered.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 animate-slide-up" style={{ animationDelay: '0.2s' }}>
          <Link
            href="/services"
            className="w-full sm:w-auto px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 hover:scale-105 transition-smooth text-center"
          >
            Explore Services
          </Link>
          <Link
            href="/contact"
            className="w-full sm:w-auto px-6 py-3 border border-border rounded-lg font-medium text-foreground hover:bg-secondary hover:scale-105 transition-smooth text-center"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </section>
  )
}
