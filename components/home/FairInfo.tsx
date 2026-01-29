import Image from 'next/image'
import Section, { SectionHeader } from '@/components/ui/Section'
import { ONG_INFO } from '@/lib/constants'
import { CalendarIcon, LocationIcon, HeartIcon } from '@/components/ui/Icons'

export default function FairInfo() {
  return (
    <Section background="gray" showPawDecoration>
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <SectionHeader
            title="Feira de Adoção"
            subtitle="Venha conhecer os gatinhos!"
            centered={false}
            showPaws
          />

          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-verde rounded-full flex items-center justify-center flex-shrink-0">
                <CalendarIcon className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="font-semibold text-verde-dark">Quando</h4>
                <p className="text-gray-600">{ONG_INFO.feira.day}, {ONG_INFO.feira.time}</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-verde rounded-full flex items-center justify-center flex-shrink-0">
                <LocationIcon className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="font-semibold text-verde-dark">Onde</h4>
                <p className="text-gray-600">{ONG_INFO.feira.location}</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-verde rounded-full flex items-center justify-center flex-shrink-0">
                <HeartIcon className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="font-semibold text-verde-dark">O que fazer</h4>
                <p className="text-gray-600">
                  Conheça os gatos e leve um para casa!
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div className="col-span-2 relative aspect-video rounded-xl overflow-hidden shadow-lg">
            <Image
              src="/images/volunteers-2.jpg"
              alt="Feira de adoção"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative aspect-square rounded-xl overflow-hidden shadow-lg">
            <Image
              src="/images/volunteers-3.jpg"
              alt="Voluntários"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative aspect-square rounded-xl overflow-hidden shadow-lg">
            <Image
              src="/images/banner-4.jpg"
              alt="Gatinho sendo cuidado"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </Section>
  )
}
