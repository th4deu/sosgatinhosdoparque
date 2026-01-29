import Section, { SectionHeader } from '@/components/ui/Section'
import { CheckIcon, LightbulbIcon } from '@/components/ui/Icons'

const requirements = [
  'Ter mais de 18 anos',
  'Trazer RG ou CNH',
  'Poder cuidar bem do gato',
  'Não abandonar o gato',
  'Manter o gato dentro de casa',
  'Colocar tela nas janelas',
]

export default function Requirements() {
  return (
    <Section showPawDecoration>
      <SectionHeader
        title="O que Precisa"
        subtitle="Para adotar, você deve:"
        showPaws
      />

      <div className="max-w-2xl mx-auto">
        <div className="bg-verde/5 rounded-2xl p-8">
          <ul className="space-y-4">
            {requirements.map((req, index) => (
              <li key={index} className="flex items-start gap-3">
                <div className="w-6 h-6 bg-verde rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <CheckIcon className="w-4 h-4 text-white" />
                </div>
                <span className="text-gray-700">{req}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-8 p-6 bg-amarelo/20 rounded-xl border border-amarelo">
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 bg-amarelo rounded-full flex items-center justify-center flex-shrink-0">
              <LightbulbIcon className="w-5 h-5 text-verde-dark" />
            </div>
            <div>
              <h4 className="font-semibold text-verde-dark">Bom saber</h4>
              <p className="text-gray-600 text-sm mt-1">
                Todos os gatos já vão castrados e vacinados. Não paga nada a mais!
              </p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}
