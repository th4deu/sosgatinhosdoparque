import { Metadata } from 'next'
import { ONG_INFO } from './constants'

export const siteMetadata: Metadata = {
  title: {
    default: `${ONG_INFO.name} - Adoção de Gatos em BH`,
    template: `%s | ${ONG_INFO.name}`,
  },
  description: ONG_INFO.description,
  keywords: [
    'adoção de gatos',
    'gatos para adoção',
    'ONG de gatos',
    'gatos Belo Horizonte',
    'adotar gato BH',
    'SOS Gatinhos',
    'resgate de gatos',
    'feira de adoção',
    'apadrinhar gato',
    'castração de gatos',
  ],
  authors: [{ name: ONG_INFO.name }],
  creator: ONG_INFO.name,
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    siteName: ONG_INFO.name,
    title: `${ONG_INFO.name} - Adoção de Gatos em BH`,
    description: ONG_INFO.description,
  },
  twitter: {
    card: 'summary_large_image',
    title: ONG_INFO.name,
    description: ONG_INFO.description,
  },
  robots: {
    index: true,
    follow: true,
  },
  metadataBase: new URL('https://sosgatinhosdoparque.com.br'),
}

export function generateJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'NonprofitOrganization',
    name: ONG_INFO.name,
    description: ONG_INFO.description,
    url: 'https://sosgatinhosdoparque.com.br',
    logo: 'https://sosgatinhosdoparque.com.br/images/logo.png',
    address: {
      '@type': 'PostalAddress',
      addressLocality: ONG_INFO.location.city,
      addressRegion: ONG_INFO.location.state,
      addressCountry: 'BR',
    },
    sameAs: [ONG_INFO.social.instagram],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Adoção e Doações',
      email: ONG_INFO.email,
    },
  }
}
