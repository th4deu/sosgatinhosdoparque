import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import Section from '@/components/ui/Section'
import Button from '@/components/ui/Button'
import { PawPrintIcon, HeartIcon } from '@/components/ui/Icons'
import { fetchCatById, fetchOtherCats, fetchCats, CatData } from '@/lib/matchpet'
import CatPhotoGallery from '@/components/adoption/CatPhotoGallery'

function generateBreadcrumbJsonLd(cat: CatData) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Início',
        item: 'https://sosgatinhosdoparque.com.br',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Adoção',
        item: 'https://sosgatinhosdoparque.com.br/adocao',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: cat.name,
        item: `https://sosgatinhosdoparque.com.br/adocao/${cat.slug}`,
      },
    ],
  }
}

function generateProductJsonLd(cat: CatData) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: cat.name,
    description: cat.description,
    image: cat.photos,
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'BRL',
      availability: 'https://schema.org/InStock',
      seller: {
        '@type': 'Organization',
        name: 'S.O.S. Gatinhos do Parque',
      },
    },
  }
}

export async function generateStaticParams() {
  const cats = await fetchCats()
  return cats.map((cat) => ({
    slug: cat.id,
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const cat = await fetchCatById(slug)

  if (!cat) {
    return {
      title: 'Gato não encontrado',
    }
  }

  return {
    title: `${cat.name} - Adoção`,
    description: cat.description,
    openGraph: {
      title: `${cat.name} - Adote um gatinho`,
      description: cat.description,
      images: [cat.photo],
    },
  }
}

export default async function CatDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const cat = await fetchCatById(slug)

  if (!cat) {
    notFound()
  }

  const otherCats = await fetchOtherCats(cat.id, 4)

  const whatsappLink = cat.whatsapp
    ? `https://wa.me/55${cat.whatsapp}?text=Olá! Gostaria de saber mais sobre o(a) ${cat.name} para adoção.`
    : null

  const breadcrumbJsonLd = generateBreadcrumbJsonLd(cat)
  const productJsonLd = generateProductJsonLd(cat)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />
      {/* Hero Header */}
      <div className="bg-gradient-to-b from-verde-dark to-verde py-8">
        <div className="container mx-auto px-4">
          <Link href="/adocao" className="text-white/80 hover:text-white flex items-center gap-2 mb-4 transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Voltar para adoção
          </Link>
          <div className="flex items-center gap-4">
            <PawPrintIcon className="w-10 h-10 text-amarelo" />
            <div>
              <h1 className="text-4xl md:text-5xl font-display font-bold text-white">
                {cat.name}
              </h1>
              <p className="text-white/80 mt-1">Disponível para adoção</p>
            </div>
          </div>
        </div>
      </div>

      <Section background="white">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Photo Gallery */}
          <CatPhotoGallery photos={cat.photos} catName={cat.name} />

          {/* Info */}
          <div>
            {/* Tags */}
            <div className="flex flex-wrap gap-3 mb-6">
              <span className={`px-4 py-2 rounded-full text-sm font-medium ${
                cat.gender === 'Macho' ? 'bg-blue-100 text-blue-700' : 'bg-pink-100 text-pink-700'
              }`}>
                {cat.gender === 'Macho' ? '♂ Macho' : '♀ Fêmea'}
              </span>
            </div>

            {/* Description */}
            <div className="mb-8">
              <h2 className="text-xl font-semibold text-verde-dark mb-3 flex items-center gap-2">
                <HeartIcon className="w-5 h-5 text-rosa" />
                Sobre {cat.name}
              </h2>
              <div className="bg-gray-50 rounded-xl p-6">
                <p className="text-gray-700 whitespace-pre-line leading-relaxed">{cat.description}</p>
              </div>
            </div>

            {/* Adoption CTA */}
            <div className="bg-gradient-to-r from-amarelo/30 to-amarelo/10 p-6 rounded-xl border border-amarelo/30">
              <h3 className="text-xl font-semibold text-verde-dark mb-2 flex items-center gap-2">
                <PawPrintIcon className="w-5 h-5 text-verde" />
                Quer adotar {cat.name}?
              </h3>
              <p className="text-gray-600 mb-4">
                Acompanhe nossas feiras de adoção pelo Instagram para saber as datas e locais.
                Você também pode entrar em contato pelo WhatsApp para mais informações.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                {whatsappLink && (
                  <Button href={whatsappLink} variant="primary" external>
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    Falar no WhatsApp
                  </Button>
                )}
                <Button href="/contato" variant="outline">
                  Informações da Feira
                </Button>
              </div>
            </div>

            {/* Share section */}
            <div className="mt-6 pt-6 border-t border-gray-200">
              <p className="text-sm text-gray-500 mb-3">Ajude {cat.name} a encontrar um lar:</p>
              <div className="flex gap-3">
                <a
                  href={`https://wa.me/?text=Olha que gatinho lindo para adoção: ${cat.name}! https://sosgatinhosdoparque.com.br/adocao/${cat.id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-green-500 text-white rounded-full hover:bg-green-600 transition-colors"
                  aria-label="Compartilhar no WhatsApp"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                </a>
                <a
                  href={`https://www.facebook.com/sharer/sharer.php?u=https://sosgatinhosdoparque.com.br/adocao/${cat.id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
                  aria-label="Compartilhar no Facebook"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a
                  href={`https://twitter.com/intent/tweet?text=Olha que gatinho lindo para adoção: ${cat.name}!&url=https://sosgatinhosdoparque.com.br/adocao/${cat.id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-black text-white rounded-full hover:bg-gray-800 transition-colors"
                  aria-label="Compartilhar no X (Twitter)"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Other cats */}
      {otherCats.length > 0 && (
        <Section background="gray" showPawDecoration>
          <h2 className="text-2xl font-display font-bold text-verde-dark text-center mb-2">
            Outros Gatinhos para Adoção
          </h2>
          <p className="text-gray-600 text-center mb-8">
            Conheça outros gatinhos que também estão esperando um lar
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {otherCats.map((otherCat) => (
              <Link
                key={otherCat.id}
                href={`/adocao/${otherCat.slug}`}
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all hover:-translate-y-1"
              >
                <div className="relative aspect-square">
                  <Image
                    src={otherCat.photo}
                    alt={`Foto de ${otherCat.name}`}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-2 right-2">
                    <span className={`text-xs px-2 py-1 rounded-full font-medium ${
                      otherCat.gender === 'Macho' ? 'bg-blue-100 text-blue-700' : 'bg-pink-100 text-pink-700'
                    }`}>
                      {otherCat.gender === 'Macho' ? '♂' : '♀'}
                    </span>
                  </div>
                </div>
                <div className="p-3 text-center">
                  <p className="font-semibold text-verde-dark">{otherCat.name}</p>
                  <p className="text-xs text-verde mt-1">Ver perfil</p>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button href="/adocao" variant="outline">
              Ver todos os gatinhos
            </Button>
          </div>
        </Section>
      )}
    </>
  )
}
