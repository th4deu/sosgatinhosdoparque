import { Metadata } from 'next'
import Section, { SectionHeader } from '@/components/ui/Section'
import Button from '@/components/ui/Button'
import { ONG_INFO } from '@/lib/constants'
import { InstagramIcon, EmailIcon, CatIcon, HeartIcon, CheckIcon } from '@/components/ui/Icons'

export const metadata: Metadata = {
  title: 'Contato',
  description: 'Entre em contato com o S.O.S. Gatinhos do Parque. Informações sobre feiras de adoção e redes sociais.',
}

function generateLocalBusinessJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: ONG_INFO.name,
    description: ONG_INFO.description,
    url: 'https://sosgatinhosdoparque.com.br',
    email: ONG_INFO.email,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Belo Horizonte',
      addressRegion: 'MG',
      addressCountry: 'BR',
    },
    sameAs: [ONG_INFO.social.instagram],
  }
}

export default function ContatoPage() {
  const localBusinessJsonLd = generateLocalBusinessJsonLd()

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
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
                    Veja novidades, gatinhos e feiras de adoção
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
                    href={`mailto:${ONG_INFO.email}`}
                    className="text-verde font-semibold hover:underline break-all"
                  >
                    {ONG_INFO.email}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Fair Info */}
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-verde to-verde-dark rounded-2xl p-8 text-white">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <CatIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-display font-bold mb-4 text-center">
                Feira de Adoção
              </h3>

              <p className="text-white/90 text-center mb-6">
                {ONG_INFO.feira.info}
              </p>

              <Button
                href={ONG_INFO.social.instagram}
                variant="secondary"
                className="w-full"
              >
                Seguir no Instagram
              </Button>
            </div>

            {/* Requisitos */}
            <div className="bg-verde-dark/5 rounded-2xl p-6">
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
      </Section>

      {/* CTA */}
      <Section background="verde-dark" showPawDecoration>
        <div className="text-center max-w-2xl mx-auto">
          <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <HeartIcon className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-3xl font-display font-bold text-white mb-4">
            Adote um Gatinho!
          </h2>
          <p className="text-white/90 mb-8">
            Acompanhe nossas feiras de adoção pelo Instagram e venha conhecer os gatinhos!
          </p>
          <Button href="/adocao" variant="secondary" size="lg">
            Ver Gatinhos
          </Button>
        </div>
      </Section>
    </>
  )
}
