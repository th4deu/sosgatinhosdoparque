'use client'

import { useState } from 'react'
import Image from 'next/image'
import Section, { SectionHeader } from '@/components/ui/Section'
import Lightbox from '@/components/ui/Lightbox'
import { FoodIcon, VaccineIcon, ScissorsIcon, HospitalIcon, HeartIcon, CatIcon, PawPrintIcon } from '@/components/ui/Icons'

const allPhotos = [
  { src: '/images/banner-1.jpg', alt: 'S.O.S. Gatinhos do Parque' },
  { src: '/images/banner-2.jpg', alt: 'Início do trabalho voluntário' },
  { src: '/images/banner-3.jpg', alt: 'Superando desafios' },
  { src: '/images/volunteers-4.jpg', alt: 'Equipe completa da ONG reunida' },
  { src: '/images/adoption-story.jpg', alt: 'História de adoção' },
  { src: '/images/volunteers-10.jpg', alt: 'Equipe com camisetas da ONG' },
  { src: '/images/volunteers-2.jpg', alt: 'Feira de adoção' },
  { src: '/images/volunteers-9.jpg', alt: 'Voluntários reunidos' },
  { src: '/images/volunteers-5.jpg', alt: 'Alimentando os gatinhos' },
  { src: '/images/volunteers-6.jpg', alt: 'Equipe no parque' },
  { src: '/images/volunteers-3.jpg', alt: 'Cuidando dos gatinhos' },
  { src: '/images/volunteers-8.jpg', alt: 'Resgate de gatinhos' },
  { src: '/images/volunteers-7.jpg', alt: 'Dia de trabalho voluntário' },
]

const galleryVolunteers = [
  { src: '/images/volunteers-10.jpg', alt: 'Equipe com camisetas da ONG' },
  { src: '/images/volunteers-2.jpg', alt: 'Feira de adoção' },
  { src: '/images/volunteers-9.jpg', alt: 'Voluntários reunidos' },
  { src: '/images/volunteers-5.jpg', alt: 'Alimentando os gatinhos' },
  { src: '/images/volunteers-6.jpg', alt: 'Equipe no parque' },
  { src: '/images/volunteers-3.jpg', alt: 'Cuidando dos gatinhos' },
  { src: '/images/volunteers-8.jpg', alt: 'Resgate de gatinhos' },
  { src: '/images/volunteers-7.jpg', alt: 'Dia de trabalho voluntário' },
]

const workItems = [
  { Icon: FoodIcon, title: 'Alimentação', desc: '1 tonelada de ração por mês', color: 'bg-orange-100 text-orange-600' },
  { Icon: VaccineIcon, title: 'Vacinação', desc: 'Todos os gatinhos vacinados', color: 'bg-blue-100 text-blue-600' },
  { Icon: ScissorsIcon, title: 'Castração', desc: 'Controle populacional', color: 'bg-purple-100 text-purple-600' },
  { Icon: HospitalIcon, title: 'Saúde', desc: 'Atendimento veterinário', color: 'bg-pink-100 text-pink-600' },
]

export default function HistoriaContent() {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState(0)

  const openLightbox = (src: string) => {
    const index = allPhotos.findIndex(p => p.src === src)
    if (index !== -1) {
      setLightboxIndex(index)
      setLightboxOpen(true)
    }
  }

  const goToPrev = () => {
    setLightboxIndex((current) => (current - 1 + allPhotos.length) % allPhotos.length)
  }

  const goToNext = () => {
    setLightboxIndex((current) => (current + 1) % allPhotos.length)
  }

  return (
    <>
      {/* Hero Section */}
      <div className="relative h-[60vh] min-h-[500px]">
        <button
          onClick={() => openLightbox('/images/banner-1.jpg')}
          className="absolute inset-0 w-full h-full cursor-zoom-in"
        >
          <Image
            src="/images/banner-1.jpg"
            alt="S.O.S. Gatinhos do Parque"
            fill
            className="object-cover"
            priority
          />
        </button>
        <div className="absolute inset-0 bg-gradient-to-t from-verde-dark via-verde-dark/60 to-verde-dark/30 pointer-events-none" />
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="text-center px-4">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-5 py-2 mb-6">
              <PawPrintIcon className="w-5 h-5 text-amarelo" />
              <span className="text-white/90 text-sm font-medium">Uma história de amor e dedicação</span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-6">
              Nossa História
            </h1>
            <p className="text-white/80 text-xl max-w-2xl mx-auto">
              Há 20 anos transformando vidas de gatos abandonados em Belo Horizonte
            </p>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce pointer-events-none">
          <div className="w-8 h-12 border-2 border-white/50 rounded-full flex justify-center pt-2">
            <div className="w-1.5 h-3 bg-white/70 rounded-full" />
          </div>
        </div>
      </div>

      {/* Opening Statement */}
      <Section className="py-20">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-2xl md:text-3xl text-gray-700 leading-relaxed font-light">
            Somos uma <span className="text-verde font-semibold">ONG comprometida</span> com o bem-estar de gatos abandonados em Belo Horizonte.
            Nossa atuação vai da alimentação, disponibilização de água potável, manutenção de casinhas até
            tratamentos clínicos e <span className="text-verde font-semibold">feiras de adoção</span>.
          </p>
        </div>
      </Section>

      {/* Chapter 1: The Beginning */}
      <Section background="gray" className="py-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="text-6xl font-display font-bold text-verde/20">01</span>
                <div className="h-px flex-1 bg-verde/20" />
              </div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-verde-dark mb-6">
                Como Tudo Começou
              </h2>
              <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
                <p>
                  O abandono de gatos em parques públicos não é nenhuma novidade. <strong className="text-verde-dark">Há cerca de 20 anos</strong>,
                  algumas mulheres se reuniram para comprar ração e fazer a alimentação desses habitantes peludos.
                </p>
                <p>
                  Com o tempo, a ação do grupo se expandiu, mais pessoas se juntaram, possibilitando uma cobertura
                  maior e auxílio em casos especiais. Nos últimos anos, para ampliar ainda mais essa ação,
                  começaram as rifas e pedidos de doações.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-amarelo/30 rounded-full blur-2xl" />
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-verde/20 rounded-full blur-2xl" />
              <button
                onClick={() => openLightbox('/images/banner-2.jpg')}
                className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden shadow-2xl cursor-zoom-in group"
              >
                <Image
                  src="/images/banner-2.jpg"
                  alt="Início do trabalho voluntário"
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
              </button>
            </div>
          </div>
        </div>
      </Section>

      {/* Quote Section */}
      <Section background="verde-dark" className="py-16">
        <div className="max-w-4xl mx-auto text-center">
          <PawPrintIcon className="w-12 h-12 text-amarelo mx-auto mb-6 opacity-50" />
          <blockquote className="text-2xl md:text-3xl text-white font-display italic leading-relaxed">
            &ldquo;Cada vida compensa. Toda vida é uma recompensa.&rdquo;
          </blockquote>
        </div>
      </Section>

      {/* Chapter 2: Challenges */}
      <Section className="py-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 relative">
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-rosa/30 rounded-full blur-2xl" />
              <button
                onClick={() => openLightbox('/images/banner-3.jpg')}
                className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden shadow-2xl cursor-zoom-in group"
              >
                <Image
                  src="/images/banner-3.jpg"
                  alt="Superando desafios"
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
              </button>
            </div>
            <div className="order-1 lg:order-2">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-6xl font-display font-bold text-verde/20">02</span>
                <div className="h-px flex-1 bg-verde/20" />
              </div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-verde-dark mb-6">
                Desafios e Superação
              </h2>
              <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
                <p>
                  O trajeto do SOS Gatinhos foi, até hoje, <strong className="text-verde-dark">cheio de percalços</strong>,
                  mas lutamos sempre para transpô-los.
                </p>
                <p>
                  Muitos gatinhos já sofreram ataques e houve até mortes violentas causadas por humanos em 2018.
                  Mas nós <strong className="text-verde-dark">persistimos e ampliamos</strong> nosso trabalho.
                </p>
                <div className="bg-amarelo/20 rounded-xl p-5 border-l-4 border-amarelo mt-6">
                  <p className="text-verde-dark font-medium italic">
                    Nossos passos são de formiga, pequeninos, mas persistentes e engajados, que, feitos por todo
                    um mutirão, fazem toda a diferença.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Timeline Mini Section */}
      <Section background="gray" className="py-16">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-0">
            {[
              { year: '~2005', label: 'Início' },
              { year: '2018', label: 'Desafios' },
              { year: '2022', label: 'ONG Oficial' },
              { year: '2024', label: 'Hoje' },
            ].map((item, index) => (
              <div key={index} className="flex items-center">
                <div className="text-center px-6">
                  <div className="w-16 h-16 bg-verde rounded-full flex items-center justify-center mx-auto mb-2 shadow-lg">
                    <span className="text-white font-bold text-sm">{item.year}</span>
                  </div>
                  <span className="text-gray-600 text-sm font-medium">{item.label}</span>
                </div>
                {index < 3 && (
                  <div className="hidden md:block w-16 h-0.5 bg-verde/30" />
                )}
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Chapter 3: Becoming Official */}
      <Section className="py-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="text-6xl font-display font-bold text-verde/20">03</span>
                <div className="h-px flex-1 bg-verde/20" />
              </div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-verde-dark mb-6">
                Nos Tornamos ONG
              </h2>
              <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
                <p>
                  Em <strong className="text-verde-dark">2022</strong>, nos tornamos uma ONG com a intenção de angariar
                  mais visibilidade e auxílio para esse trabalho tão necessário.
                </p>
                <p>
                  A oficialização nos permitiu expandir nosso alcance, fortalecer parcerias importantes e
                  dar mais credibilidade ao nosso trabalho de resgate e cuidado.
                </p>
              </div>

              {/* Stats inline */}
              <div className="grid grid-cols-3 gap-4 mt-8">
                <div className="bg-verde/5 rounded-xl p-4 text-center">
                  <CatIcon className="w-8 h-8 text-verde mx-auto mb-2" />
                  <p className="text-2xl font-bold text-verde">300+</p>
                  <p className="text-xs text-gray-500">Gatos cuidados</p>
                </div>
                <div className="bg-verde/5 rounded-xl p-4 text-center">
                  <HeartIcon className="w-8 h-8 text-verde mx-auto mb-2" />
                  <p className="text-2xl font-bold text-verde">20</p>
                  <p className="text-xs text-gray-500">Anos de amor</p>
                </div>
                <div className="bg-verde/5 rounded-xl p-4 text-center">
                  <FoodIcon className="w-8 h-8 text-verde mx-auto mb-2" />
                  <p className="text-2xl font-bold text-verde">1 ton</p>
                  <p className="text-xs text-gray-500">Ração/mês</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-verde/20 rounded-full blur-2xl" />
              <button
                onClick={() => openLightbox('/images/volunteers-4.jpg')}
                className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden shadow-2xl cursor-zoom-in group"
              >
                <Image
                  src="/images/volunteers-4.jpg"
                  alt="Equipe completa da ONG reunida"
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
              </button>
            </div>
          </div>
        </div>
      </Section>

      {/* Chapter 4: Our Mission */}
      <Section background="white" className="py-20 border-y border-gray-100">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="h-px w-16 bg-verde/20" />
              <span className="text-6xl font-display font-bold text-verde/20">04</span>
              <div className="h-px w-16 bg-verde/20" />
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-verde-dark mb-6">
              Nossa Missão
            </h2>
          </div>

          <div className="bg-gradient-to-br from-verde/5 to-amarelo/10 rounded-3xl p-8 md:p-12">
            <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
              <p>
                Ressaltamos que nosso <strong className="text-verde-dark">objetivo final não é a permanência dos gatos na rua</strong>.
                Acreditamos que o ideal seria que cada um deles ganhasse uma casa com muito conforto,
                seguros de tempestades, doenças e ataques.
              </p>
              <p>
                Mas o número de felinos é muito alto, passa de 300, e os abandonos são incessantes.
                <strong className="text-verde-dark"> Trabalhamos com o possível.</strong>
              </p>
              <div className="flex items-start gap-4 bg-white rounded-xl p-6 shadow-sm mt-8">
                <div className="w-12 h-12 bg-verde/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <ScissorsIcon className="w-6 h-6 text-verde" />
                </div>
                <div>
                  <h4 className="font-semibold text-verde-dark mb-2">Castração é fundamental</h4>
                  <p className="text-gray-600 text-base">
                    Só seria possível acabar com essa triste realidade com uma grande política pública de
                    conscientização e de castração. Com o auxílio da CCZZ, praticamente todos os gatos
                    sob nossos cuidados são castrados.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* What We Do */}
      <Section background="gray" className="py-20">
        <SectionHeader
          title="O Que Fazemos Diariamente"
          subtitle="Nosso trabalho nunca para"
          showPaws
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {workItems.map((item, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-lg text-center hover:shadow-xl transition-all hover:-translate-y-1">
              <div className={`w-16 h-16 ${item.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                <item.Icon className="w-8 h-8" />
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
      <Section className="py-20">
        <SectionHeader
          title="Nossa Equipe de Voluntários"
          subtitle="Pessoas dedicadas que fazem a diferença todos os dias"
          showPaws
        />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {galleryVolunteers.map((item, index) => (
            <button
              key={index}
              onClick={() => openLightbox(item.src)}
              className="relative aspect-square rounded-xl overflow-hidden shadow-lg group cursor-zoom-in"
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-verde-dark/80 via-transparent to-transparent" />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
              <div className="absolute bottom-0 left-0 right-0 p-3">
                <p className="text-white text-sm font-medium">{item.alt}</p>
              </div>
            </button>
          ))}
        </div>
      </Section>

      {/* Closing Statement */}
      <Section background="verde-dark" className="py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-8">
            <HeartIcon className="w-10 h-10 text-amarelo" />
          </div>
          <p className="text-xl md:text-2xl text-white/90 leading-relaxed mb-8">
            Cada ação pequena que foi tomada no passado, desde as primeiras ações há 20 anos,
            foi o que pavimentou o nosso caminho até aqui, e sabemos que, com mais auxílio,
            ainda há muito o que conquistar e avançar.
          </p>
          <blockquote className="text-3xl md:text-4xl text-white font-display italic">
            &ldquo;Cada gatinho que encontra um lar faz tudo valer a pena.&rdquo;
          </blockquote>
          <p className="text-amarelo font-semibold mt-6">Equipe S.O.S. Gatinhos do Parque</p>
        </div>
      </Section>

      {/* Adoption Story */}
      <Section className="py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div>
            <SectionHeader
              title="Histórias de Sucesso"
              subtitle="Cada adoção é uma vitória"
              centered={false}
              showPaws
            />
            <p className="text-gray-600 text-lg mb-6">
              Ao longo dos anos, centenas de gatinhos encontraram lares amorosos através do nosso trabalho.
              Cada história de adoção nos motiva a continuar cuidando desses animais tão especiais.
            </p>
            <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-verde">
              <p className="text-gray-600 italic mb-4 text-lg">
                &ldquo;Adotei minha gatinha Luna na feira e ela mudou minha vida.
                Obrigada por todo o trabalho que vocês fazem!&rdquo;
              </p>
              <p className="text-verde-dark font-semibold">- Maria, adotante</p>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-rosa/30 rounded-full blur-2xl" />
            <button
              onClick={() => openLightbox('/images/adoption-story.jpg')}
              className="relative aspect-square w-full rounded-2xl overflow-hidden shadow-2xl cursor-zoom-in group"
            >
              <Image
                src="/images/adoption-story.jpg"
                alt="História de adoção"
                fill
                className="object-cover transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
            </button>
          </div>
        </div>
      </Section>

      {/* Lightbox */}
      <Lightbox
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        imageSrc={allPhotos[lightboxIndex].src}
        imageAlt={allPhotos[lightboxIndex].alt}
        onPrev={goToPrev}
        onNext={goToNext}
        hasPrev={true}
        hasNext={true}
      />
    </>
  )
}
