'use client'

import { useState } from 'react'
import Image from 'next/image'
import Section, { SectionHeader } from '@/components/ui/Section'
import Lightbox from '@/components/ui/Lightbox'
import { ONG_INFO } from '@/lib/constants'

const gallery = [
  {
    src: '/images/park-1.jpg',
    alt: 'Parque Municipal de BH',
    caption: 'O Parque Municipal, lar dos nossos gatinhos',
  },
  {
    src: '/images/hero-cat.jpg',
    alt: 'Gatinho do parque',
    caption: 'Um dos nossos gatinhos cuidados',
  },
  {
    src: '/images/park-cat.jpg',
    alt: 'Gatinho esperando adoção',
    caption: 'Gatinhos aguardando um lar',
  },
  {
    src: '/images/cat-3.jpg',
    alt: 'Gatinho sendo cuidado',
    caption: 'Cuidados diários com amor',
  },
]

export default function OngGallery() {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState(0)

  const openLightbox = (index: number) => {
    setLightboxIndex(index)
    setLightboxOpen(true)
  }

  const goToPrev = () => {
    setLightboxIndex((current) => (current - 1 + gallery.length) % gallery.length)
  }

  const goToNext = () => {
    setLightboxIndex((current) => (current + 1) % gallery.length)
  }

  return (
    <Section background="gray" showPawDecoration>
      <SectionHeader
        title="Nosso Trabalho"
        subtitle="Veja o dia a dia dos gatinhos"
        showPaws
      />

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {gallery.map((item, index) => (
          <button
            key={index}
            onClick={() => openLightbox(index)}
            className={`relative group overflow-hidden rounded-xl cursor-zoom-in ${
              index === 0 ? 'md:col-span-2 md:row-span-2' : ''
            }`}
          >
            <div className={`relative ${index === 0 ? 'aspect-square' : 'aspect-video md:aspect-square'}`}>
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                </svg>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/70 to-transparent">
              <p className="text-white text-sm">{item.caption}</p>
            </div>
          </button>
        ))}
      </div>

      <div className="mt-8 text-center">
        <p className="text-gray-600 mb-2">
          Siga-nos no Instagram
        </p>
        <a
          href={ONG_INFO.social.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="text-verde font-semibold hover:underline text-lg"
        >
          {ONG_INFO.social.instagramHandle}
        </a>
      </div>

      <Lightbox
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        imageSrc={gallery[lightboxIndex].src}
        imageAlt={gallery[lightboxIndex].caption}
        onPrev={goToPrev}
        onNext={goToNext}
        hasPrev={true}
        hasNext={true}
      />
    </Section>
  )
}
