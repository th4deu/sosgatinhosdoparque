import Section, { SectionHeader } from '@/components/ui/Section'
import Card, { CardContent } from '@/components/ui/Card'
import { FoodIcon, MedicineIcon, HospitalIcon, CleaningIcon } from '@/components/ui/Icons'

const donationOptions = [
  {
    Icon: FoodIcon,
    title: 'Ração',
    description: 'Usamos 1 tonelada por mês!',
    items: ['Ração de gato adulto', 'Ração de filhote', 'Sachê'],
  },
  {
    Icon: MedicineIcon,
    title: 'Remédios',
    description: 'Muitos gatos precisam de tratamento.',
    items: ['Vermífugo', 'Antipulgas', 'Pomadas'],
  },
  {
    Icon: HospitalIcon,
    title: 'Veterinário',
    description: 'Ajude com consultas e cirurgias.',
    items: ['Castração', 'Vacina', 'Exame'],
  },
  {
    Icon: CleaningIcon,
    title: 'Materiais',
    description: 'Itens do dia a dia.',
    items: ['Areia', 'Caixa de transporte', 'Cobertor'],
  },
]

export default function DonationOptions() {
  return (
    <Section background="gray" showPawDecoration>
      <SectionHeader
        title="Doe Materiais"
        subtitle="Além de dinheiro, aceitamos:"
        showPaws
      />

      <div className="grid md:grid-cols-2 gap-6">
        {donationOptions.map((option, index) => (
          <Card key={index}>
            <CardContent>
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-verde/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <option.Icon className="w-7 h-7 text-verde" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-display font-bold text-verde-dark mb-2">
                    {option.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-3">{option.description}</p>
                  <ul className="flex flex-wrap gap-2">
                    {option.items.map((item, i) => (
                      <li
                        key={i}
                        className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-8 text-center text-gray-600">
        <p>
          Fale conosco pelo Instagram:{' '}
          <a
            href="https://instagram.com/sosgatinhosdoparque"
            target="_blank"
            rel="noopener noreferrer"
            className="text-verde font-semibold hover:underline"
          >
            @sosgatinhosdoparque
          </a>
        </p>
      </div>
    </Section>
  )
}
