'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Section, { SectionHeader } from '@/components/ui/Section'
import Button from '@/components/ui/Button'
import Lightbox from '@/components/ui/Lightbox'
import { CatData } from '@/lib/matchpet'

interface CatGalleryProps {
  cats: CatData[]
}

export default function CatGallery({ cats }: CatGalleryProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState(0)

  const openLightbox = (index: number) => {
    setLightboxIndex(index)
    setLightboxOpen(true)
  }

  const goToPrev = () => {
    setLightboxIndex((current) => (current - 1 + cats.length) % cats.length)
  }

  const goToNext = () => {
    setLightboxIndex((current) => (current + 1) % cats.length)
  }

  return (
    <Section>
      <SectionHeader
        title="Nossos Gatinhos"
        subtitle="Clique na foto para ver maior"
        showPaws
      />

      {/* Gallery Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-10">
        {cats.map((cat, index) => (
          <div key={cat.id} className="bg-white rounded-xl shadow-md overflow-hidden">
            <button
              onClick={() => openLightbox(index)}
              className="relative aspect-square w-full cursor-pointer group"
              aria-label={`Ver foto de ${cat.name}`}
            >
              <Image
                src={cat.photo}
                alt={`Foto de ${cat.name}`}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                <span className="opacity-0 group-hover:opacity-100 text-white bg-black/50 px-4 py-2 rounded-lg text-sm">
                  Clique para ampliar
                </span>
              </div>
            </button>
            <div className="p-4">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold text-verde-dark">{cat.name}</h3>
                <span className={`text-sm px-3 py-1 rounded-full font-medium ${
                  cat.gender === 'Macho'
                    ? 'bg-blue-100 text-blue-700'
                    : 'bg-pink-100 text-pink-700'
                }`}>
                  {cat.gender}
                </span>
              </div>
              <Link
                href={`/adocao/${cat.slug}`}
                className="text-verde text-sm hover:underline mt-2 inline-block"
              >
                Ver perfil
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="text-center bg-gray-50 rounded-xl p-8">
        <p className="text-lg text-gray-700 mb-6">
          Visite nossa feira aos domingos no Parque Municipal!
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button href="/adocao" variant="primary">
            Ver Todos
          </Button>
          <Button href="/contato" variant="outline">
            Sobre a Feira
          </Button>
        </div>
      </div>

      {/* Lightbox */}
      <Lightbox
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        imageSrc={cats[lightboxIndex]?.photo || ''}
        imageAlt={`${cats[lightboxIndex]?.name || ''} - ${cats[lightboxIndex]?.gender || ''}`}
        onPrev={goToPrev}
        onNext={goToNext}
        hasPrev={true}
        hasNext={true}
      />
    </Section>
  )
}
