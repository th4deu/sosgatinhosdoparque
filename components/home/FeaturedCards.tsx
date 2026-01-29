import Section, { SectionHeader } from '@/components/ui/Section'
import Button from '@/components/ui/Button'
import { HomeIcon, HeartIcon, RibbonIcon, PawPrintIcon } from '@/components/ui/Icons'

const features = [
  {
    Icon: HomeIcon,
    title: 'Adote',
    description: 'Dê um lar para um gatinho. Todos são castrados e vacinados.',
    href: '/adocao',
    buttonText: 'Quero Adotar',
  },
  {
    Icon: HeartIcon,
    title: 'Doe',
    description: 'Ajude com ração, remédios ou PIX. Qualquer valor ajuda!',
    href: '/apoie',
    buttonText: 'Quero Doar',
  },
  {
    Icon: RibbonIcon,
    title: 'Apadrinhe',
    description: 'Ajude um gatinho todo mês. Escolha seu afilhado!',
    href: '/apoie#apadrinhar',
    buttonText: 'Quero Apadrinhar',
  },
]

export default function FeaturedCards() {
  return (
    <Section background="gray" showPawDecoration>
      <SectionHeader
        title="Como Ajudar"
        subtitle="Escolha uma forma de contribuir"
        showPaws
      />

      <div className="grid md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div key={index} className="bg-white rounded-xl p-8 shadow-md relative overflow-hidden group">
            {/* Decorative paw in corner */}
            <PawPrintIcon className="absolute -top-4 -right-4 w-20 h-20 text-verde/5 rotate-[30deg] group-hover:text-verde/10 transition-colors" />

            <div className="w-16 h-16 bg-verde/10 rounded-full flex items-center justify-center mb-6 relative z-10">
              <feature.Icon className="w-8 h-8 text-verde" />
            </div>
            <h3 className="text-xl font-semibold text-verde-dark mb-4 relative z-10">
              {feature.title}
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed relative z-10">{feature.description}</p>
            <Button href={feature.href} variant="outline" className="w-full relative z-10">
              {feature.buttonText}
            </Button>
          </div>
        ))}
      </div>
    </Section>
  )
}
