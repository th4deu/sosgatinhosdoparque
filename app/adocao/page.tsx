import { Metadata } from 'next'
import Image from 'next/image'
import Section, { SectionHeader } from '@/components/ui/Section'
import AdoptionProcess from '@/components/adoption/AdoptionProcess'
import Requirements from '@/components/adoption/Requirements'
import CatCard from '@/components/adoption/CatCard'
import Button from '@/components/ui/Button'
import { ONG_INFO } from '@/lib/constants'
import { fetchCats } from '@/lib/matchpet'

export const metadata: Metadata = {
  title: 'Adoção de Gatos',
  description: 'Adote um gatinho do Parque Municipal de BH. Conheça nossos felinos disponíveis para adoção e saiba como funciona o processo.',
}

export default async function AdocaoPage() {
  const cats = await fetchCats()

  return (
    <>
      {/* Hero Section */}
      <Section background="verde-dark" className="py-16" showPawDecoration>
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
            Adote um Gatinho
          </h1>
          <p className="text-white/90 text-lg max-w-2xl mx-auto">
            Todos os gatos são castrados e vacinados.
          </p>
        </div>
      </Section>

      <AdoptionProcess />

      {/* Cats Grid */}
      <Section showPawDecoration>
        <SectionHeader
          title="Gatinhos Disponíveis"
          subtitle={`${cats.length} gatinhos esperando por um lar`}
          showPaws
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cats.map((cat) => (
            <CatCard key={cat.id} cat={cat} />
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Visite nossa feira de adoção!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contato" variant="primary">
              Sobre a Feira
            </Button>
            <Button
              href={ONG_INFO.social.instagram}
              variant="outline"
              external
            >
              Ver no Instagram
            </Button>
          </div>
        </div>

        {/* MatchPet Partnership */}
        <div className="mt-16 p-8 bg-gray-50 rounded-2xl">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="flex-shrink-0">
              <Image
                src="/images/matchpet-logo.svg"
                alt="MatchPet"
                width={180}
                height={60}
                className="h-12 w-auto"
              />
            </div>
            <div className="text-center md:text-left">
              <h3 className="text-lg font-semibold text-verde-dark mb-2">
                Parceria MatchPet
              </h3>
              <p className="text-gray-600 text-sm">
                Esta galeria de gatinhos para adoção é possível graças à nossa parceria com o MatchPet,
                uma plataforma que conecta animais a novos lares. Visite o site deles para conhecer
                mais animais disponíveis para adoção em todo o Brasil.
              </p>
            </div>
            <div className="flex-shrink-0">
              <Button href="https://matchpet.org" variant="outline" external>
                Visitar MatchPet
              </Button>
            </div>
          </div>
        </div>
      </Section>

      <Requirements />
    </>
  )
}
