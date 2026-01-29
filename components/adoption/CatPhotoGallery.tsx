'use client'

import { useState } from 'react'
import Image from 'next/image'
import Lightbox from '@/components/ui/Lightbox'

interface CatPhotoGalleryProps {
  photos: string[]
  catName: string
}

export default function CatPhotoGallery({ photos, catName }: CatPhotoGalleryProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)

  const openLightbox = (index: number) => {
    setCurrentIndex(index)
    setLightboxOpen(true)
  }

  const goToPrev = () => {
    setCurrentIndex((current) => (current - 1 + photos.length) % photos.length)
  }

  const goToNext = () => {
    setCurrentIndex((current) => (current + 1) % photos.length)
  }

  return (
    <div className="space-y-4">
      {/* Main Photo */}
      <button
        onClick={() => openLightbox(0)}
        className="relative aspect-square w-full rounded-2xl overflow-hidden shadow-lg cursor-pointer group"
        aria-label={`Ver foto de ${catName}`}
      >
        <Image
          src={photos[0]}
          alt={`Foto de ${catName}`}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          priority
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
          <span className="opacity-0 group-hover:opacity-100 text-white bg-black/50 px-4 py-2 rounded-lg text-sm transition-opacity">
            Clique para ampliar
          </span>
        </div>
      </button>

      {/* Thumbnail Grid */}
      {photos.length > 1 && (
        <div className="grid grid-cols-4 gap-2">
          {photos.map((photo, index) => (
            <button
              key={index}
              onClick={() => openLightbox(index)}
              className={`relative aspect-square rounded-lg overflow-hidden cursor-pointer group ${
                index === 0 ? 'ring-2 ring-verde ring-offset-2' : ''
              }`}
              aria-label={`Ver foto ${index + 1} de ${catName}`}
            >
              <Image
                src={photo}
                alt={`Foto ${index + 1} de ${catName}`}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
            </button>
          ))}
        </div>
      )}

      {/* Photo count badge */}
      {photos.length > 1 && (
        <p className="text-center text-sm text-gray-500">
          {photos.length} fotos disponíveis
        </p>
      )}

      {/* Lightbox */}
      <Lightbox
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        imageSrc={photos[currentIndex]}
        imageAlt={`${catName} - Foto ${currentIndex + 1} de ${photos.length}`}
        onPrev={photos.length > 1 ? goToPrev : undefined}
        onNext={photos.length > 1 ? goToNext : undefined}
        hasPrev={photos.length > 1}
        hasNext={photos.length > 1}
      />
    </div>
  )
}
