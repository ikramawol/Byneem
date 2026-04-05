import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { HeroSection } from '@/components/hero-section'
import { ServiceCard } from '@/components/service-card'
import { CTASection } from '@/components/cta-section'

type HomeService = {
  title: string
  description: string
  comingSoon?: boolean
}

export default function Home() {
  const services: HomeService[] = [
    {
      title: 'Web Development',
      description: 'Modern, scalable web applications built with the latest technologies. From startups to enterprise solutions.',
    },
    {
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile apps that users love. iOS, Android, and everything in between.',
    },
    {
      title: 'AI Solutions',
      description: 'Leverage the power of AI to transform your business. Custom machine learning models and intelligent features.',
    },
    {
      title: 'Cybersecurity',
      description: 'Protect your digital assets with enterprise-grade security. Coming soon.',
      comingSoon: true,
    },
  ]

  return (
    <>
      <Header />
      <main>
        <HeroSection />

        {/* Services Section */}
        <section className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-14 xl:px-16 py-16 md:py-28">
          <div className="mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-foreground text-center mb-3 md:mb-4 text-balance">
              <span className="text-muted-foreground">What</span> We Offer
            </h2>
            <p className="text-center text-sm md:text-base text-muted-foreground max-w-2xl mx-auto">
              We provide end-to-end technical solutions to help your startup grow and scale.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {services.map((service, index) => (
              <div key={service.title} style={{ animationDelay: `${index * 0.1}s` }}>
                <ServiceCard
                  title={service.title}
                  description={service.description}
                  comingSoon={service.comingSoon}
                />
              </div>
            ))}
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </>
  )
}
