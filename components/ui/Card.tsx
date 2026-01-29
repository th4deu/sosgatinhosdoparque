import { ReactNode } from 'react'
import Image from 'next/image'

interface CardProps {
  children: ReactNode
  className?: string
  hover?: boolean
}

export default function Card({ children, className = '', hover = true }: CardProps) {
  const hoverStyles = hover ? 'hover:shadow-xl hover:-translate-y-1' : ''

  return (
    <div
      className={`bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 ${hoverStyles} ${className}`}
    >
      {children}
    </div>
  )
}

interface CardImageProps {
  src: string
  alt: string
  className?: string
  priority?: boolean
}

export function CardImage({ src, alt, className = '', priority = false }: CardImageProps) {
  return (
    <div className={`relative aspect-square overflow-hidden ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        className="object-cover"
        priority={priority}
      />
    </div>
  )
}

interface CardContentProps {
  children: ReactNode
  className?: string
}

export function CardContent({ children, className = '' }: CardContentProps) {
  return <div className={`p-6 ${className}`}>{children}</div>
}
