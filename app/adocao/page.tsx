import { Metadata } from 'next'
import Image from 'next/image'
import Section, { SectionHeader } from '@/components/ui/Section'
import AdoptionProcess from '@/components/adoption/AdoptionProcess'
import Requirements from '@/components/adoption/Requirements'
import CatFilter from '@/components/adoption/CatFilter'
import Button from '@/components/ui/Button'
import { ONG_INFO } from '@/lib/constants'
import { fetchCats, CatData } from '@/lib/matchpet'
import { HeartIcon, PawPrintIcon } from '@/components/ui/Icons'

export const metadata: Metadata = {
  title: 'Adoção de Gatos',
  description: 'Adote um gatinho em Belo Horizonte. Conheça nossos felinos disponíveis para adoção e saiba como funciona o processo.',
}

export default async function AdocaoPage() {
  let cats: CatData[] = []
  let hasError = false

  try {
    cats = await fetchCats()
  } catch {
    hasError = true
  }

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

      {/* Adoption Importance Section */}
      <Section background="gray">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-rosa/20 rounded-full flex items-center justify-center">
                <HeartIcon className="w-6 h-6 text-rosa" />
              </div>
              <h2 className="text-2xl font-display font-bold text-verde-dark">
                Adotar é um Ato de Amor
              </h2>
            </div>

            <div className="space-y-4 text-gray-700">
              <p>
                Adotar um gatinho é uma decisão que transforma vidas — tanto a do animal quanto a sua.
                Cada gato que encontra um lar é uma história de amor que começa.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mt-6">
                <div className="bg-verde/5 rounded-xl p-5">
                  <h3 className="font-semibold text-verde-dark mb-2 flex items-center gap-2">
                    <PawPrintIcon className="w-5 h-5 text-verde" />
                    Responsabilidade
                  </h3>
                  <p className="text-sm">
                    Adotar significa assumir o compromisso de cuidar desse ser por toda a vida dele —
                    que pode chegar a 20 anos. É uma jornada de amor, paciência e dedicação.
                  </p>
                </div>

                <div className="bg-amarelo/20 rounded-xl p-5">
                  <h3 className="font-semibold text-verde-dark mb-2 flex items-center gap-2">
                    <HeartIcon className="w-5 h-5 text-rosa" />
                    Compromisso
                  </h3>
                  <p className="text-sm">
                    Alimentação de qualidade, cuidados veterinários, ambiente seguro e muito carinho
                    são essenciais. Antes de adotar, certifique-se de que pode oferecer tudo isso.
                  </p>
                </div>
              </div>

              <p className="text-sm text-gray-600 italic mt-4 bg-gray-50 p-4 rounded-lg">
                &ldquo;Quando você adota, não está apenas salvando uma vida — está ganhando um companheiro
                que vai te amar incondicionalmente.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Cats Grid */}
      <Section showPawDecoration>
        <SectionHeader
          title="Gatinhos Disponíveis"
          subtitle="Encontre seu novo companheiro"
          showPaws
        />

        <CatFilter cats={cats} hasError={hasError} />

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
