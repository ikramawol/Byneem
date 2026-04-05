import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { CTASection } from '@/components/cta-section'
import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Services | Byneem',
  description: 'Web Development, Mobile App Development, AI Solutions, and Cybersecurity services for startups and tech companies.',
}

interface Service {
  title: string
  description: string
  features: string[]
  comingSoon?: boolean
  image?: string
}

export default function Services() {
  const services: Service[] = [
    {
      title: 'Web Development',
      description:
        'We build fast, scalable, and modern web applications that drive business growth. Whether you need a landing page, SaaS platform, or complex web application, our team of experienced developers has you covered.',
      features: [
        'Full-stack web application development',
        'React, Next.js, and modern JavaScript frameworks',
        'Database design and optimization',
        'API development and integration',
        'Responsive design for all devices',
        'Performance optimization and SEO',
      ],
      image: '/web-dev-illustration.jpg',
    },
    {
      title: 'Mobile App Development',
      description:
        'Create engaging mobile experiences that connect with your users. We develop native iOS and Android apps, as well as cross-platform solutions that work seamlessly across devices.',
      features: [
        'Native iOS development (Swift)',
        'Native Android development (Kotlin)',
        'Cross-platform development (React Native, Flutter)',
        'App store submission and deployment',
        'Push notifications and real-time features',
        'Third-party API integration',
      ],
      image: '/mobile-app-illustration.jpg',
    },
    {
      title: 'AI Solutions',
      description:
        'Harness the power of artificial intelligence to gain competitive advantages. From machine learning models to AI-powered features, we help you integrate intelligent capabilities into your products.',
      features: [
        'Machine learning model development',
        'Natural Language Processing (NLP)',
        'Computer Vision solutions',
        'ChatGPT and LLM integration',
        'Data analysis and insights',
        'Custom AI algorithms',
      ],
      image: '/AI.jpg',
    },
    {
      title: 'Cybersecurity',
      description: 'Protect your digital assets with enterprise-grade security solutions. Coming soon.',
      features: [
        'Security audits and assessments',
        'Penetration testing',
        'Infrastructure security',
        'Data protection and compliance',
        'Incident response',
        'Security consulting',
      ],
      comingSoon: true,
      image: '/cybersecurity.jpg',
    },
  ]

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-14 xl:px-16 py-20 md:py-28">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-semibold text-foreground mb-6 text-balance">
              <span className="text-muted-foreground">Our</span> Services
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
              Comprehensive technical solutions for startups and tech companies. From concept to deployment, we handle every aspect of product development.
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-14 xl:px-16 pb-16 md:pb-28">
          <div className="space-y-12 md:space-y-16">
            {services.map((service, index) => (
              <div
                key={service.title}
                className={`grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center ${
                  index % 2 === 1 ? 'md:grid-cols-2 md:[&>*:first-child]:order-2' : ''
                }`}
              >
                {/* Content */}
                <div className="min-w-0">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 mb-4">
                    <h2 className="text-2xl sm:text-3xl font-semibold text-foreground">{service.title}</h2>
                    {service.comingSoon && (
                      <span className="text-xs font-medium text-muted-foreground bg-secondary px-3 py-1 rounded w-fit">
                        Coming Soon
                      </span>
                    )}
                  </div>
                  <p className="text-sm md:text-base text-muted-foreground mb-6 text-balance leading-relaxed">
                    {service.description}
                  </p>

                  {!service.comingSoon && (
                    <div>
                      <h3 className="text-xs md:text-sm font-semibold text-foreground mb-4">Key Features:</h3>
                      <ul className="space-y-2">
                        {service.features.map((feature) => (
                          <li key={feature} className="flex items-start gap-3">
                            <span className="text-primary mt-1.5 md:mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-primary inline-block"></span>
                            <span className="text-muted-foreground text-xs md:text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                {/* Visual */}
                <div className="w-full min-w-0">
                  <div className="bg-secondary border border-border rounded-lg overflow-hidden h-52 sm:h-64 md:h-80 lg:h-96 w-full flex items-center justify-center">
                    {service.image ? (
                      <Image
                        src={service.image}
                        alt={`${service.title} illustration`}
                        width={500}
                        height={350}
                        className="w-full h-full object-cover animate-slide-up hover:scale-105 transition-smooth"
                        priority={index === 0}
                      />
                    ) : (
                      <div className="text-center">
                        <p className="text-muted-foreground text-xs sm:text-sm">
                          {service.title} Illustration
                        </p>
                      </div>
                    )}
                  </div>
                </div>
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
