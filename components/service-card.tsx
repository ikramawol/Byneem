import Image from 'next/image'
import Link from 'next/link'

interface ServiceCardProps {
  title: string
  description: string
  comingSoon?: boolean
  image?: string
}

export function ServiceCard({ title, description, comingSoon, image }: ServiceCardProps) {
  const inner = (
    <div className="border border-border rounded-lg overflow-hidden bg-card hover:border-muted-foreground hover:scale-[1.02] transition-smooth group h-full flex flex-col animate-slide-up">
      {image && (
        <div className="relative h-40 sm:h-44 w-full shrink-0 bg-secondary">
          <Image
            src={image}
            alt={`${title} preview`}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
      )}
      <div className="p-4 sm:p-6 flex flex-col flex-1">
        <h3 className="text-base sm:text-lg font-semibold text-foreground mb-2">{title}</h3>
        <p className="text-muted-foreground text-sm mb-4 flex-grow">{description}</p>
        {comingSoon ? (
          <div className="inline-block">
            <span className="text-xs font-medium text-muted-foreground bg-secondary px-3 py-1 rounded">
              Coming Soon
            </span>
          </div>
        ) : (
          <div className="inline-block">
            <span className="text-xs font-medium text-foreground opacity-0 group-hover:opacity-100 transition-opacity">
              Learn More →
            </span>
          </div>
        )}
      </div>
    </div>
  )

  if (comingSoon) {
    return inner
  }

  return <Link href="/services">{inner}</Link>
}
