import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { ContactForm } from '@/components/contact-form'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us | Byneem',
  description: 'Get in touch with Byneem. Let&apos;s discuss your project and how we can help you build, protect, and innovate.',
}

export default function Contact() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-28">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-foreground mb-4 md:mb-6 text-balance">
              <span className="text-muted-foreground">Let&apos;s</span> Talk
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-muted-foreground text-balance">
              Have a project in mind? We&apos;d love to hear about it. Get in touch and let&apos;s start building something amazing together.
            </p>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-28">
          <div className="max-w-2xl mx-auto">
            <div className="mb-8 md:mb-12">
              <h2 className="text-xl md:text-2xl font-semibold text-foreground text-center mb-3 md:mb-4">
                Send us a message
              </h2>
              <p className="text-center text-sm md:text-base text-muted-foreground">
                Fill out the form below and we&apos;ll get back to you as soon as possible.
              </p>
            </div>

            <ContactForm />
          </div>
        </section>

        {/* Alternative Contact Methods */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 md:pb-28">
          <div className="border-t border-border pt-16 md:pt-20">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-xl md:text-2xl font-semibold text-foreground mb-2 md:mb-4">
                Other Ways to Reach Us
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-8 max-w-2xl mx-auto">
              {/* Email */}
              <div className="border border-border rounded-lg p-4 md:p-6 bg-card text-center">
                <h3 className="text-base md:text-lg font-semibold text-foreground mb-2">Email</h3>
                <a
                  href="mailto:hello@byneem.com"
                  className="text-sm md:text-base text-primary hover:text-primary/80 transition-colors break-all"
                >
                  hello@byneem.com
                </a>
              </div>

              {/* Response Time */}
              <div className="border border-border rounded-lg p-4 md:p-6 bg-card text-center">
                <h3 className="text-base md:text-lg font-semibold text-foreground mb-2">Response Time</h3>
                <p className="text-sm md:text-base text-muted-foreground">
                  We typically respond within 24 hours
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
