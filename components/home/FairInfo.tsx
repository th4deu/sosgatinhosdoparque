'use client'

import { useState } from 'react'
import Image from 'next/image'
import Section, { SectionHeader } from '@/components/ui/Section'
import Lightbox from '@/components/ui/Lightbox'
import { ONG_INFO } from '@/lib/constants'
import { InstagramIcon, HeartIcon, CheckIcon } from '@/components/ui/Icons'

const photos = [
  { src: '/images/volunteers-7.jpg', alt: 'Dia de trabalho voluntário' },
  { src: '/images/volunteers-9.jpg', alt: 'Voluntários reunidos' },
  { src: '/images/hero-cat.jpg', alt: 'Gatinho esperando adoção' },
]

export default function FairInfo() {
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
    <Section background="gray" showPawDecoration>
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <SectionHeader
            title="Feira de Adoção"
            subtitle="Adote um gatinho!"
            centered={false}
            showPaws
          />

          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <InstagramIcon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-verde-dark mb-2">Acompanhe pelo Instagram</h4>
                  <p className="text-gray-600 text-sm mb-3">
                    {ONG_INFO.feira.info}
                  </p>
                  <a
                    href={ONG_INFO.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-verde font-semibold hover:underline"
                  >
                    {ONG_INFO.social.instagramHandle}
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-verde-dark/5 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-verde rounded-full flex items-center justify-center flex-shrink-0">
                  <HeartIcon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-verde-dark mb-3">Requisitos para Adoção</h4>
                  <ul className="space-y-2">
                    {ONG_INFO.adocao.requisitos.map((requisito, index) => (
                      <li key={index} className="flex items-start gap-2 text-gray-600 text-sm">
                        <CheckIcon className="w-5 h-5 text-verde flex-shrink-0 mt-0.5" />
                        <span>{requisito}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <button
            onClick={() => openLightbox(0)}
            className="col-span-2 relative aspect-video rounded-xl overflow-hidden shadow-lg cursor-zoom-in group"
          >
            <Image
              src={photos[0].src}
              alt={photos[0].alt}
              fill
              className="object-cover transition-transform group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
          </button>
          <button
            onClick={() => openLightbox(1)}
            className="relative aspect-square rounded-xl overflow-hidden shadow-lg cursor-zoom-in group"
          >
            <Image
              src={photos[1].src}
              alt={photos[1].alt}
              fill
              className="object-cover transition-transform group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
          </button>
          <button
            onClick={() => openLightbox(2)}
            className="relative aspect-square rounded-xl overflow-hidden shadow-lg cursor-zoom-in group"
          >
            <Image
              src={photos[2].src}
              alt={photos[2].alt}
              fill
              className="object-cover transition-transform group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
          </button>
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
