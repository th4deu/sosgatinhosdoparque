import Section, { SectionHeader } from '@/components/ui/Section'
import { CatIcon, HeartIcon, FoodIcon, HomeIcon } from '@/components/ui/Icons'

const stats = [
  {
    number: '300+',
    label: 'Gatos cuidados diariamente',
    Icon: CatIcon,
  },
  {
    number: '20',
    label: 'Anos de trabalho voluntário',
    Icon: HeartIcon,
  },
  {
    number: '1 ton',
    label: 'De ração consumida por mês',
    Icon: FoodIcon,
  },
  {
    number: '100+',
    label: 'Adoções realizadas por ano',
    Icon: HomeIcon,
  },
]

export default function Stats() {
  return (
    <Section background="gray">
      <SectionHeader
        title="Nosso Impacto"
        subtitle="Há quase 20 anos cuidando com amor dos gatinhos abandonados em Belo Horizonte"
      />

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl p-6 text-center shadow-lg"
          >
            <div className="w-14 h-14 bg-verde/10 rounded-full flex items-center justify-center mx-auto mb-3">
              <stat.Icon className="w-7 h-7 text-verde" />
            </div>
            <p className="text-3xl md:text-4xl font-bold text-verde mb-2">
              {stat.number}
            </p>
            <p className="text-gray-600 text-sm">{stat.label}</p>
          </div>
        ))}
      </div>
    </Section>
  )
}
