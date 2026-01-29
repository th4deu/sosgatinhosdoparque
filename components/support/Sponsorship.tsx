import Section, { SectionHeader } from '@/components/ui/Section'
import Button from '@/components/ui/Button'
import { ONG_INFO } from '@/lib/constants'
import { HeartIcon, RibbonIcon } from '@/components/ui/Icons'

const benefits = [
  'Receba fotos do seu afilhado',
  'Ajude com comida e veterinário',
  'Cuide de gatos que não podem ser adotados',
  'Faça parte da família',
]

export default function Sponsorship() {
  return (
    <Section id="apadrinhar" showPawDecoration>
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <SectionHeader
            title="Apadrinhe"
            subtitle="Cuide de um gatinho mesmo sem levar para casa"
            centered={false}
            showPaws
          />

          <p className="text-gray-600 mb-6">
            Alguns gatos precisam de cuidados especiais.
            Você ajuda todo mês e acompanha como ele está.
          </p>

          <ul className="space-y-3 mb-8">
            {benefits.map((benefit, index) => (
              <li key={index} className="flex items-center gap-3">
                <div className="w-6 h-6 bg-amarelo rounded-full flex items-center justify-center">
                  <HeartIcon className="w-3 h-3 text-verde-dark" />
                </div>
                <span className="text-gray-700">{benefit}</span>
              </li>
            ))}
          </ul>

          <Button
            href={ONG_INFO.social.instagram}
            variant="primary"
          >
            Quero Apadrinhar
          </Button>
        </div>

        <div className="bg-gradient-to-br from-verde to-verde-dark rounded-2xl p-8 text-white text-center">
          <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <RibbonIcon className="w-12 h-12 text-white" />
          </div>
          <h3 className="text-2xl font-display font-bold mb-4">
            Seja Padrinho
          </h3>
          <p className="text-white/90 mb-6">
            Qualquer valor por mês ajuda!
          </p>
          <div className="bg-white/10 rounded-xl p-4">
            <p className="text-white/80 text-sm">Fale conosco</p>
            <p className="text-amarelo font-semibold">{ONG_INFO.social.instagramHandle}</p>
          </div>
        </div>
      </div>
    </Section>
  )
}
