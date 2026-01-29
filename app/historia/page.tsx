import { Metadata } from 'next'
import Image from 'next/image'
import Section, { SectionHeader } from '@/components/ui/Section'
import { FoodIcon, VaccineIcon, ScissorsIcon, HospitalIcon, TreeIcon, HeartIcon } from '@/components/ui/Icons'

const galleryMain = [
  { src: '/images/banner-1.jpg', alt: 'Voluntários cuidando dos gatinhos' },
  { src: '/images/banner-2.jpg', alt: 'Feira de adoção' },
  { src: '/images/banner-3.jpg', alt: 'Gatinhos do parque' },
  { src: '/images/banner-4.jpg', alt: 'Nosso trabalho' },
]

const galleryVolunteers = [
  { src: '/images/volunteers-2.jpg', alt: 'Equipe de voluntários' },
  { src: '/images/volunteers-3.jpg', alt: 'Cuidando dos gatinhos' },
  { src: '/images/volunteers-4.jpg', alt: 'Alimentação diária' },
  { src: '/images/volunteers-5.jpg', alt: 'Voluntários em ação' },
  { src: '/images/volunteers-6.jpg', alt: 'Carinho e cuidado' },
  { src: '/images/volunteers-7.jpg', alt: 'Feira de adoção' },
  { src: '/images/volunteers-8.jpg', alt: 'Nossos heróis' },
  { src: '/images/volunteers-9.jpg', alt: 'Trabalho voluntário' },
]

export const metadata: Metadata = {
  title: 'Nossa História',
  description: 'Conheça a história do S.O.S. Gatinhos do Parque, voluntariado que há quase 20 anos cuida dos gatos do Parque Municipal de BH.',
}

const timeline = [
  {
    year: '2005',
    title: 'O Começo',
    description: 'Começamos a cuidar dos gatos do parque.',
  },
  {
    year: '2010',
    title: 'Crescemos',
    description: 'Mais voluntários e mais gatos castrados.',
  },
  {
    year: '2015',
    title: 'Feiras',
    description: 'Começamos as feiras de adoção.',
  },
  {
    year: '2020',
    title: 'Oficial',
    description: 'Viramos uma organização oficial.',
  },
  {
    year: '2024',
    title: 'Hoje',
    description: 'Cuidamos de 300 gatos!',
  },
]

const workItems = [
  { Icon: FoodIcon, title: 'Comida', desc: '1 tonelada de ração por mês' },
  { Icon: VaccineIcon, title: 'Vacina', desc: 'Todos vacinados' },
  { Icon: ScissorsIcon, title: 'Castração', desc: 'Todos castrados' },
  { Icon: HospitalIcon, title: 'Veterinário', desc: 'Cuidamos da saúde' },
]

export default function HistoriaPage() {
  return (
    <>
      {/* Hero Section with Image */}
      <div className="relative h-[50vh] min-h-[400px]">
        <Image
          src="/images/banner-1.jpg"
          alt="S.O.S. Gatinhos do Parque"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-verde-dark/90 via-verde-dark/50 to-transparent" />
        <div className="absolute inset-0 flex items-end">
          <div className="container mx-auto px-4 pb-12">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
              Nossa História
            </h1>
            <p className="text-white/90 text-lg max-w-2xl">
              Há 20 anos cuidando dos gatinhos do Parque Municipal de Belo Horizonte
            </p>
          </div>
        </div>
      </div>

      {/* About */}
      <Section showPawDecoration>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <SectionHeader
              title="Quem Somos"
              subtitle="Voluntários que amam gatos"
              centered={false}
              showPaws
            />

            <div className="space-y-4 text-gray-600">
              <p>
                Somos voluntários que cuidam dos gatos do Parque Municipal de BH há 20 anos.
              </p>
              <p>
                Damos comida, vacina, castração e ajudamos a encontrar casas para os gatinhos.
                Hoje cuidamos de 300 gatos!
              </p>
            </div>
          </div>

          <div className="relative aspect-video rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="/images/park-cat.jpg"
              alt="Gatinho no Parque Municipal"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </Section>

      {/* Main Photo Gallery */}
      <Section background="gray" showPawDecoration>
        <SectionHeader
          title="Nosso Trabalho em Fotos"
          subtitle="Veja como cuidamos dos gatinhos todos os dias"
          showPaws
        />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {galleryMain.map((item, index) => (
            <div key={index} className="relative aspect-square rounded-xl overflow-hidden shadow-lg group">
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform">
                <p className="text-white text-sm font-medium">{item.alt}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Timeline */}
      <Section>
        <SectionHeader
          title="Nossa Trajetória"
          subtitle="Como tudo começou"
          showPaws
        />

        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-verde/30 md:left-1/2 md:-translate-x-1/2" />

            {/* Timeline Items */}
            {timeline.map((item, index) => (
              <div
                key={index}
                className={`relative flex items-start gap-6 mb-8 md:mb-12 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Year Badge */}
                <div className="absolute left-8 md:left-1/2 md:-translate-x-1/2 w-16 h-16 bg-verde rounded-full flex items-center justify-center z-10">
                  <span className="text-white font-bold text-sm">{item.year}</span>
                </div>

                {/* Content */}
                <div className={`ml-28 md:ml-0 md:w-[45%] ${index % 2 === 0 ? '' : 'md:text-right'}`}>
                  <div className="bg-white rounded-xl p-6 shadow-lg">
                    <h3 className="text-xl font-display font-bold text-verde-dark mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Our Work */}
      <Section background="white" showPawDecoration>
        <SectionHeader
          title="O Que Fazemos"
          subtitle="Todo dia cuidamos dos gatos"
          showPaws
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {workItems.map((item, index) => (
            <div key={index} className="bg-gray-50 rounded-2xl p-6 shadow-lg text-center hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-verde/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <item.Icon className="w-8 h-8 text-verde" />
              </div>
              <h3 className="text-xl font-display font-semibold text-verde-dark mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Volunteers Gallery */}
      <Section background="gray" showPawDecoration>
        <SectionHeader
          title="Nossa Equipe de Voluntários"
          subtitle="Pessoas dedicadas que fazem a diferença"
          showPaws
        />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {galleryVolunteers.map((item, index) => (
            <div key={index} className="relative aspect-square rounded-xl overflow-hidden shadow-lg group">
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-verde-dark/80 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-3">
                <p className="text-white text-sm font-medium">{item.alt}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Parque Municipal Section */}
      <Section>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-video rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="/images/park-1.jpg"
              alt="Parque Municipal de Belo Horizonte"
              fill
              className="object-cover"
            />
          </div>

          <div>
            <div className="bg-gradient-to-br from-verde to-verde-dark rounded-2xl p-8 text-white">
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <TreeIcon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-display font-bold text-center mb-4">
                Parque Municipal
              </h3>
              <p className="text-white/90 text-center mb-4">
                O maior parque de Belo Horizonte, localizado no coração da cidade.
                É aqui que nossos gatinhos vivem e recebem todo o cuidado e carinho.
              </p>
              <div className="grid grid-cols-2 gap-4 mt-6">
                <div className="text-center">
                  <p className="text-3xl font-bold text-amarelo">300+</p>
                  <p className="text-white/80 text-sm">Gatos cuidados</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-amarelo">20</p>
                  <p className="text-white/80 text-sm">Anos de história</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Adoption Story */}
      <Section background="gray" showPawDecoration>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <SectionHeader
              title="Histórias de Sucesso"
              subtitle="Cada adoção é uma vitória"
              centered={false}
              showPaws
            />
            <p className="text-gray-600 mb-6">
              Ao longo dos anos, centenas de gatinhos encontraram lares amorosos através do nosso trabalho.
              Cada história de adoção nos motiva a continuar cuidando desses animais tão especiais.
            </p>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <p className="text-gray-600 italic mb-4">
                &ldquo;Adotei minha gatinha Luna na feira do parque e ela mudou minha vida.
                Obrigada por todo o trabalho que vocês fazem!&rdquo;
              </p>
              <p className="text-verde-dark font-semibold">- Maria, adotante</p>
            </div>
          </div>

          <div className="relative aspect-square rounded-2xl overflow-hidden shadow-xl order-1 lg:order-2">
            <Image
              src="/images/adoption-story.jpg"
              alt="História de adoção"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </Section>

      {/* Testimonial */}
      <Section background="verde-dark" showPawDecoration>
        <div className="max-w-3xl mx-auto text-center">
          <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <HeartIcon className="w-10 h-10 text-white" />
          </div>
          <blockquote className="text-xl md:text-2xl text-white font-display italic mb-6">
            &ldquo;Cada gatinho que encontra um lar faz tudo valer a pena.&rdquo;
          </blockquote>
          <p className="text-amarelo font-semibold">Equipe S.O.S. Gatinhos do Parque</p>
        </div>
      </Section>
    </>
  )
}
