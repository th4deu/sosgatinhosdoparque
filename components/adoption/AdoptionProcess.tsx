import Section, { SectionHeader } from '@/components/ui/Section'
import { PawIcon, ChatIcon, DocumentIcon, HomeIcon } from '@/components/ui/Icons'

const steps = [
  {
    number: '1',
    title: 'Visite a Feira',
    description: 'Domingos, 12h-16h, no Parque Municipal.',
    Icon: PawIcon,
  },
  {
    number: '2',
    title: 'Conheça os Gatos',
    description: 'Nossos voluntários ajudam você a escolher.',
    Icon: ChatIcon,
  },
  {
    number: '3',
    title: 'Preencha o Formulário',
    description: 'Adoção responsável é importante.',
    Icon: DocumentIcon,
  },
  {
    number: '4',
    title: 'Leve Para Casa',
    description: 'Todos saem castrados e vacinados!',
    Icon: HomeIcon,
  },
]

export default function AdoptionProcess() {
  return (
    <Section background="gray" showPawDecoration>
      <SectionHeader
        title="Como Adotar"
        subtitle="É simples e rápido"
        showPaws
      />

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {steps.map((step, index) => (
          <div key={index} className="relative">
            <div className="bg-white rounded-2xl p-6 text-center shadow-lg h-full">
              <div className="w-16 h-16 bg-verde rounded-full flex items-center justify-center mx-auto mb-4">
                <step.Icon className="w-8 h-8 text-white" />
              </div>
              <div className="absolute -top-3 -right-3 w-8 h-8 bg-amarelo rounded-full flex items-center justify-center font-bold text-verde-dark">
                {step.number}
              </div>
              <h3 className="text-lg font-display font-semibold text-verde-dark mb-2">
                {step.title}
              </h3>
              <p className="text-gray-600 text-sm">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}
