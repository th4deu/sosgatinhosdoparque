'use client'

import { useState } from 'react'
import Image from 'next/image'
import Section, { SectionHeader } from '@/components/ui/Section'
import Lightbox from '@/components/ui/Lightbox'
import { PawPrintIcon } from '@/components/ui/Icons'

const photos = [
  { src: '/images/banner-1.jpg', alt: 'Gatinhos do parque' },
  { src: '/images/banner-2.jpg', alt: 'Voluntários alimentando' },
  { src: '/images/banner-3.jpg', alt: 'Feira de adoção' },
  { src: '/images/banner-4.jpg', alt: 'Gatinho sendo cuidado' },
  { src: '/images/volunteers-2.jpg', alt: 'Equipe de voluntários' },
  { src: '/images/volunteers-3.jpg', alt: 'Cuidando dos gatos' },
]

const testimonials = [
  {
    name: 'Maria Silva',
    text: 'Adotei a Luna e ela trouxe muita alegria para nossa família!',
    cat: 'Luna',
  },
  {
    name: 'João Santos',
    text: 'O trabalho dos voluntários é incrível. Parabéns a todos!',
    cat: 'Tom',
  },
  {
    name: 'Ana Costa',
    text: 'Apadrinho o Simba há 1 ano. Amo receber as fotos dele!',
    cat: 'Simba',
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
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12">
        {photos.map((photo, index) => (
          <button
            key={index}
            onClick={() => openLightbox(index)}
            className="relative aspect-square rounded-xl overflow-hidden shadow-lg group cursor-zoom-in"
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
        <h3 className="text-xl font-display font-bold text-verde-dark text-center mb-6">
          O que dizem sobre nós
        </h3>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-md relative">
              <PawPrintIcon className="absolute -top-3 -right-3 w-10 h-10 text-verde/10" />
              <p className="text-gray-600 mb-4 italic">&ldquo;{testimonial.text}&rdquo;</p>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-verde/20 rounded-full flex items-center justify-center">
                  <span className="text-verde font-bold text-sm">{testimonial.name[0]}</span>
                </div>
                <div>
                  <p className="font-semibold text-verde-dark text-sm">{testimonial.name}</p>
                  <p className="text-gray-500 text-xs">Adotou {testimonial.cat}</p>
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
