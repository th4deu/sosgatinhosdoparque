'use client'

import { useState } from 'react'
import Image from 'next/image'
import Section, { SectionHeader } from '@/components/ui/Section'
import Lightbox from '@/components/ui/Lightbox'
import { PawPrintIcon } from '@/components/ui/Icons'

const photos = [
  { src: '/images/banner-1.jpg', alt: 'Gatinhos do parque' },
  { src: '/images/volunteers-10.jpg', alt: 'Equipe com camisetas da ONG' },
  { src: '/images/banner-3.jpg', alt: 'Feira de adoção' },
  { src: '/images/volunteers-5.jpg', alt: 'Alimentando os gatinhos' },
  { src: '/images/volunteers-4.jpg', alt: 'Equipe completa reunida' },
  { src: '/images/banner-2.jpg', alt: 'Voluntários alimentando' },
  { src: '/images/volunteers-8.jpg', alt: 'Resgate de gatinhos' },
  { src: '/images/volunteers-6.jpg', alt: 'Equipe no trabalho' },
  { src: '/images/volunteers-9.jpg', alt: 'Voluntários reunidos' },
]

const testimonials = [
  {
    name: 'Fernanda M.',
    text: 'Adotei o Pipoca em 2023 e ele transformou minha casa. É muito carinhoso e se adaptou super rápido. O trabalho do SOS é incrível!',
    cat: 'Pipoca',
    type: 'adoção',
  },
  {
    name: 'Carlos R.',
    text: 'Conheci o projeto na feira do Parque e não resisti à Mel. Ela já era adulta, mas se tornou a rainha da casa. Adotar um gato adulto foi a melhor decisão!',
    cat: 'Mel',
    type: 'adoção',
  },
  {
    name: 'Patricia L.',
    text: 'Apadrinho a Frajola há 2 anos. Recebo fotos e atualizações, e sei que ela está bem cuidada. É uma forma linda de ajudar quando não se pode adotar.',
    cat: 'Frajola',
    type: 'apadrinhamento',
  },
]

export default function SocialProof() {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState(0)

  const openLightbox = (index: number) => {
    setLightboxIndex(index)
    setLightboxOpen(true)
  }

  const goToPrev = () => {
    setLightboxIndex((current) => (current - 1 + photos.length) % photos.length)
  }

  const goToNext = () => {
    setLightboxIndex((current) => (current + 1) % photos.length)
  }

  return (
    <Section showPawDecoration>
      <SectionHeader
        title="Nosso Trabalho"
        subtitle="Veja como cuidamos dos gatinhos"
        showPaws
      />

      {/* Photo Grid */}
      <div className="grid grid-cols-3 gap-3 md:gap-4 mb-12">
        {photos.map((photo, index) => (
          <button
            key={index}
            onClick={() => openLightbox(index)}
            className={`relative rounded-xl overflow-hidden shadow-lg group cursor-zoom-in ${
              index === 0 ? 'col-span-2 row-span-2 aspect-square' : 'aspect-square'
            }`}
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              className="object-cover transition-transform group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center">
              <span className="opacity-0 group-hover:opacity-100 text-white text-sm bg-black/50 px-3 py-1 rounded-full">
                Ver foto
              </span>
            </div>
          </button>
        ))}
      </div>

      {/* Testimonials */}
      <div className="bg-gray-50 rounded-2xl p-8">
        <h3 className="text-xl font-display font-bold text-verde-dark text-center mb-2">
          Histórias de Sucesso
        </h3>
        <p className="text-gray-600 text-center mb-6">
          Depoimentos de quem já faz parte dessa história
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-md relative">
              <PawPrintIcon className="absolute -top-3 -right-3 w-10 h-10 text-verde/10" />
              <span className={`inline-block text-xs px-2 py-1 rounded-full mb-3 ${
                testimonial.type === 'adoção'
                  ? 'bg-verde/10 text-verde'
                  : 'bg-amarelo/30 text-amber-700'
              }`}>
                {testimonial.type === 'adoção' ? 'Adoção' : 'Apadrinhamento'}
              </span>
              <p className="text-gray-600 mb-4 italic text-sm">&ldquo;{testimonial.text}&rdquo;</p>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-verde/20 rounded-full flex items-center justify-center">
                  <span className="text-verde font-bold text-sm">{testimonial.name[0]}</span>
                </div>
                <div>
                  <p className="font-semibold text-verde-dark text-sm">{testimonial.name}</p>
                  <p className="text-gray-500 text-xs">
                    {testimonial.type === 'adoção' ? `Adotou ${testimonial.cat}` : `Padrinho(a) de ${testimonial.cat}`}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Lightbox
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        imageSrc={photos[lightboxIndex].src}
        imageAlt={photos[lightboxIndex].alt}
        onPrev={goToPrev}
        onNext={goToNext}
        hasPrev={true}
        hasNext={true}
      />
    </Section>
  )
}
