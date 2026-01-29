import { Metadata } from 'next'
import Section, { SectionHeader } from '@/components/ui/Section'
import Button from '@/components/ui/Button'
import { ONG_INFO } from '@/lib/constants'
import { InstagramIcon, EmailIcon, CatIcon, CalendarIcon, LocationIcon, HeartIcon, MapIcon } from '@/components/ui/Icons'

export const metadata: Metadata = {
  title: 'Contato',
  description: 'Entre em contato com o S.O.S. Gatinhos do Parque. Informações sobre localização, feiras de adoção e redes sociais.',
}

function generateLocalBusinessJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: ONG_INFO.name,
    description: ONG_INFO.description,
    url: 'https://sosgatinhosdoparque.com.br',
    email: ONG_INFO.pix,
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Av. Afonso Pena, 1377 - Centro',
      addressLocality: 'Belo Horizonte',
      addressRegion: 'MG',
      addressCountry: 'BR',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: -19.9245,
      longitude: -43.9352,
    },
    sameAs: [ONG_INFO.social.instagram],
  }
}

function generateEventJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Event',
    name: 'Feira de Adoção de Gatinhos',
    description: 'Feira de adoção de gatos do S.O.S. Gatinhos do Parque. Todos os gatos são castrados e vacinados.',
    eventSchedule: {
      '@type': 'Schedule',
      byDay: 'https://schema.org/Sunday',
      startTime: '12:00',
      endTime: '16:00',
    },
    location: {
      '@type': 'Place',
      name: ONG_INFO.feira.location,
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Av. Afonso Pena, 1377 - Centro',
        addressLocality: 'Belo Horizonte',
        addressRegion: 'MG',
        addressCountry: 'BR',
      },
    },
    organizer: {
      '@type': 'Organization',
      name: ONG_INFO.name,
      url: 'https://sosgatinhosdoparque.com.br',
    },
    isAccessibleForFree: true,
  }
}

export default function ContatoPage() {
  const localBusinessJsonLd = generateLocalBusinessJsonLd()
  const eventJsonLd = generateEventJsonLd()

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(eventJsonLd) }}
      />
      {/* Hero Section */}
      <Section background="verde-dark" className="py-16" showPawDecoration>
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
            Contato
          </h1>
          <p className="text-white/90 text-lg max-w-2xl mx-auto">
            Fale conosco!
          </p>
        </div>
      </Section>

      {/* Contact Info */}
      <Section showPawDecoration>
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Cards */}
          <div className="space-y-6">
            <SectionHeader
              title="Fale Conosco"
              centered={false}
              showPaws
            />

            {/* Instagram */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <InstagramIcon className="w-7 h-7 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-display font-semibold text-verde-dark mb-1">
                    Instagram
                  </h3>
                  <p className="text-gray-600 text-sm mb-3">
                    Veja novidades e gatinhos
                  </p>
                  <a
                    href={ONG_INFO.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-verde font-semibold hover:underline"
                  >
                    {ONG_INFO.social.instagramHandle}
                  </a>
                </div>
              </div>
            </div>

            {/* Email */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-verde rounded-xl flex items-center justify-center flex-shrink-0">
                  <EmailIcon className="w-7 h-7 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-display font-semibold text-verde-dark mb-1">
                    E-mail
                  </h3>
                  <p className="text-gray-600 text-sm mb-3">
                    Para parcerias e doações
                  </p>
                  <a
                    href={`mailto:${ONG_INFO.pix}`}
                    className="text-verde font-semibold hover:underline break-all"
                  >
                    {ONG_INFO.pix}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Fair Info */}
          <div>
            <div className="bg-gradient-to-br from-verde to-verde-dark rounded-2xl p-8 text-white">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <CatIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-display font-bold mb-6 text-center">
                Feira de Adoção
              </h3>

              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                    <CalendarIcon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-white/70 text-sm">Quando</p>
                    <p className="font-semibold">{ONG_INFO.feira.day}, {ONG_INFO.feira.time}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                    <LocationIcon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-white/70 text-sm">Onde</p>
                    <p className="font-semibold">{ONG_INFO.feira.location}</p>
                  </div>
                </div>
              </div>

              <Button
                href="https://maps.google.com/?q=Parque+Municipal+Américo+Renné+Giannetti+Belo+Horizonte"
                variant="secondary"
                className="w-full"
              >
                Ver no Mapa
              </Button>
            </div>
          </div>
        </div>
      </Section>

      {/* Location */}
      <Section background="gray" showPawDecoration>
        <SectionHeader
          title="Onde Estamos"
          subtitle="Parque Municipal de BH"
          showPaws
        />

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
            {/* Map Placeholder */}
            <div className="aspect-video bg-gray-200 flex items-center justify-center">
              <div className="text-center p-8">
                <div className="w-20 h-20 bg-verde/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapIcon className="w-10 h-10 text-verde" />
                </div>
                <p className="text-gray-600 mb-4">
                  {ONG_INFO.location.address}
                </p>
                <Button
                  href="https://maps.google.com/?q=Parque+Municipal+Américo+Renné+Giannetti+Belo+Horizonte"
                  variant="primary"
                >
                  Abrir no Google Maps
                </Button>
              </div>
            </div>

            {/* Info */}
            <div className="p-6 border-t">
              <div className="grid sm:grid-cols-3 gap-4 text-center">
                <div>
                  <p className="text-gray-500 text-sm">Parque</p>
                  <p className="font-semibold text-verde-dark">{ONG_INFO.location.name}</p>
                </div>
                <div>
                  <p className="text-gray-500 text-sm">Cidade</p>
                  <p className="font-semibold text-verde-dark">{ONG_INFO.location.city}, {ONG_INFO.location.state}</p>
                </div>
                <div>
                  <p className="text-gray-500 text-sm">Feira</p>
                  <p className="font-semibold text-verde-dark">{ONG_INFO.feira.day}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section background="verde-dark" showPawDecoration>
        <div className="text-center max-w-2xl mx-auto">
          <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <HeartIcon className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-3xl font-display font-bold text-white mb-4">
            Visite-nos!
          </h2>
          <p className="text-white/90 mb-8">
            Domingos no Parque Municipal. Venha conhecer os gatinhos!
          </p>
          <Button href="/adocao" variant="secondary" size="lg">
            Ver Gatinhos
          </Button>
        </div>
      </Section>
    </>
  )
}
