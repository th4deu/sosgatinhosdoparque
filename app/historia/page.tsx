import { Metadata } from 'next'
import Section, { SectionHeader } from '@/components/ui/Section'
import { FoodIcon, VaccineIcon, ScissorsIcon, HospitalIcon } from '@/components/ui/Icons'
import HistoriaContent from '@/components/historia/HistoriaContent'

export const metadata: Metadata = {
  title: 'Nossa História',
  description: 'Conheça a história do S.O.S. Gatinhos do Parque, voluntariado que há quase 20 anos cuida de gatos abandonados em BH.',
}

export default function HistoriaPage() {
  return <HistoriaContent />
}
