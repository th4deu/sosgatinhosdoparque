import { ReactNode } from 'react'
import Container from './Container'
import { PawPrintIcon } from './Icons'

interface SectionProps {
  children: ReactNode
  className?: string
  containerClassName?: string
  background?: 'white' | 'gray' | 'verde' | 'verde-dark'
  id?: string
  showPawDecoration?: boolean
}

const backgroundStyles = {
  white: 'bg-white',
  gray: 'bg-gray-50',
  verde: 'bg-verde text-white',
  'verde-dark': 'bg-verde-dark text-white',
}

export default function Section({
  children,
  className = '',
  containerClassName = '',
  background = 'white',
  id,
  showPawDecoration = false,
}: SectionProps) {
  const pawColor = background === 'verde' || background === 'verde-dark' ? 'text-white/10' : 'text-verde/5'

  return (
    <section id={id} className={`py-16 md:py-24 ${backgroundStyles[background]} ${className} relative overflow-hidden`}>
      {showPawDecoration && (
        <>
          <PawPrintIcon className={`absolute top-8 left-8 w-24 h-24 ${pawColor} rotate-[-30deg]`} />
          <PawPrintIcon className={`absolute bottom-12 right-12 w-32 h-32 ${pawColor} rotate-[20deg]`} />
        </>
      )}
      <Container className={`relative z-10 ${containerClassName}`}>{children}</Container>
    </section>
  )
}

interface SectionHeaderProps {
  title: string
  subtitle?: string
  centered?: boolean
  light?: boolean
  showPaws?: boolean
}

export function SectionHeader({ title, subtitle, centered = true, light = false, showPaws = false }: SectionHeaderProps) {
  const textAlign = centered ? 'text-center' : ''
  const titleColor = light ? 'text-white' : 'text-verde-dark'
  const subtitleColor = light ? 'text-white/80' : 'text-gray-600'
  const pawColor = light ? 'text-white/30' : 'text-verde/30'

  return (
    <div className={`mb-12 ${textAlign}`}>
      {showPaws && (
        <div className="flex items-center justify-center gap-3 mb-4">
          <PawPrintIcon className={`w-5 h-5 ${pawColor} rotate-[-20deg]`} />
          <PawPrintIcon className={`w-6 h-6 ${pawColor}`} />
          <PawPrintIcon className={`w-5 h-5 ${pawColor} rotate-[20deg]`} />
        </div>
      )}
      <h2 className={`text-3xl md:text-4xl font-display font-bold ${titleColor}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`text-lg mt-3 max-w-2xl ${centered ? 'mx-auto' : ''} ${subtitleColor}`}>
          {subtitle}
        </p>
      )}
    </div>
  )
}
