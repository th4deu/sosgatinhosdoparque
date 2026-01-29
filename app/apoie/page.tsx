import { Metadata } from 'next'
import Section, { SectionHeader } from '@/components/ui/Section'
import PixButton from '@/components/support/PixButton'
import Button from '@/components/ui/Button'
import { ONG_INFO } from '@/lib/constants'
import { FoodIcon, MedicineIcon, HeartIcon, PawPrintIcon, RibbonIcon } from '@/components/ui/Icons'

export const metadata: Metadata = {
  title: 'Apoie',
  description: 'Ajude o S.O.S. Gatinhos do Parque. Doe via PIX ou materiais.',
}

const needs = [
  { Icon: FoodIcon, name: 'Ração', color: 'bg-verde/20 text-verde' },
  { Icon: MedicineIcon, name: 'Remédios', color: 'bg-roxo/20 text-roxo' },
  { Icon: HeartIcon, name: 'Veterinário', color: 'bg-amarelo/30 text-amarelo-dark' },
]

export default function ApoiePage() {
  return (
    <>
      {/* Hero com PIX */}
      <Section background="verde-dark" showPawDecoration>
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <PawPrintIcon className="w-16 h-16 text-amarelo mx-auto mb-4" />
            <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
              Ajude os Gatinhos
            </h1>
            <p className="text-white/90 text-xl">
              Qualquer valor faz diferença!
            </p>
          </div>

          {/* PIX Box */}
          <PixButton />
        </div>
      </Section>

      {/* O que precisamos */}
      <Section showPawDecoration>
        <SectionHeader
          title="Do que precisamos"
          subtitle="Gastamos muito todo mês"
          showPaws
        />

        <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto mb-8">
          {needs.map((need, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-lg text-center">
              <div className={`w-16 h-16 ${need.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                <need.Icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-display font-bold text-verde-dark">
                {need.name}
              </h3>
            </div>
          ))}
        </div>

        <div className="bg-gray-50 rounded-2xl p-6 max-w-xl mx-auto text-center">
          <p className="text-gray-600 mb-4">
            Quer doar ração ou remédios?
          </p>
          <Button href={ONG_INFO.social.instagram} variant="outline">
            Fale conosco no Instagram
          </Button>
        </div>
      </Section>

      {/* Apadrinhar */}
      <Section background="gray" showPawDecoration>
        <div className="max-w-2xl mx-auto text-center">
          <div className="w-20 h-20 bg-amarelo/30 rounded-full flex items-center justify-center mx-auto mb-6">
            <RibbonIcon className="w-10 h-10 text-amarelo-dark" />
          </div>
          <h2 className="text-3xl font-display font-bold text-verde-dark mb-4">
            Apadrinhe um Gatinho
          </h2>
          <p className="text-gray-600 mb-6">
            Escolha um gato e ajude todo mês.
            Você recebe fotos e notícias dele!
          </p>
          <Button href={ONG_INFO.social.instagram} variant="primary">
            Quero Apadrinhar
          </Button>
        </div>
      </Section>

      {/* Obrigado */}
      <Section background="verde-dark" showPawDecoration>
        <div className="text-center max-w-2xl mx-auto">
          <HeartIcon className="w-16 h-16 text-amarelo mx-auto mb-6" />
          <h2 className="text-3xl font-display font-bold text-white mb-4">
            Obrigado!
          </h2>
          <p className="text-white/90 text-lg">
            Há 20 anos cuidamos dos gatinhos graças a pessoas como você!
          </p>
        </div>
      </Section>
    </>
  )
}
