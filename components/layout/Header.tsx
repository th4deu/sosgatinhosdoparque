'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { NAV_LINKS, ONG_INFO } from '@/lib/constants'
import Container from '@/components/ui/Container'
import Button from '@/components/ui/Button'
import { PawPrintIcon, HomeIcon, HeartIcon, CatIcon, InstagramIcon } from '@/components/ui/Icons'

const menuIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  '/': HomeIcon,
  '/adocao': CatIcon,
  '/apoie': HeartIcon,
  '/historia': PawPrintIcon,
  '/contato': PawPrintIcon,
}

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMenuOpen])

  return (
    <>
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <Container>
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/images/logo.png"
                alt="S.O.S. Gatinhos do Parque"
                width={48}
                height={48}
                className="rounded-full"
              />
              <div className="hidden sm:block">
                <span className="font-display font-bold text-verde-dark text-lg">
                  {ONG_INFO.shortName}
                </span>
                <span className="block text-xs text-gray-500">do Parque</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-gray-700 hover:text-verde font-medium transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <Button href="/apoie" variant="primary" size="sm">
                Doe Agora
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden w-12 h-12 flex items-center justify-center rounded-full bg-verde-dark text-white"
              aria-label="Menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </Container>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-300 ${
          isMenuOpen ? 'visible' : 'invisible'
        }`}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-verde-dark/90 backdrop-blur-sm transition-opacity duration-300 ${
            isMenuOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => setIsMenuOpen(false)}
        />

        {/* Menu Content */}
        <div
          className={`absolute inset-x-4 top-24 bottom-4 bg-white rounded-3xl shadow-2xl transition-all duration-300 ${
            isMenuOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
        >
          {/* Paw decoration */}
          <div className="absolute top-4 right-6 opacity-10">
            <PawPrintIcon className="w-24 h-24 text-verde rotate-[20deg]" />
          </div>

          <nav className="px-6 py-6 relative z-10 h-full overflow-y-auto">
            {/* Navigation Links */}
            <div className="space-y-2">
              {NAV_LINKS.map((link, index) => {
                const Icon = menuIcons[link.href] || PawPrintIcon
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="flex items-center gap-4 p-4 rounded-2xl hover:bg-verde/5 transition-colors group"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <div className="w-12 h-12 bg-verde/10 rounded-xl flex items-center justify-center group-hover:bg-verde group-hover:text-white transition-colors">
                      <Icon className="w-6 h-6 text-verde group-hover:text-white" />
                    </div>
                    <span className="text-xl font-display font-semibold text-verde-dark">
                      {link.label}
                    </span>
                  </Link>
                )
              })}
            </div>

            {/* CTA Button */}
            <div className="mt-6 px-4">
              <Button
                href="/apoie"
                variant="primary"
                size="lg"
                className="w-full text-center justify-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Doe Agora
              </Button>
            </div>

            {/* Social & Info */}
            <div className="mt-8 pt-6 border-t border-gray-100">
              <div className="flex items-center justify-center gap-4">
                <a
                  href={ONG_INFO.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full font-medium"
                >
                  <InstagramIcon className="w-5 h-5" />
                  <span>Siga-nos</span>
                </a>
              </div>

              <p className="text-center text-gray-500 text-sm mt-4">
                {ONG_INFO.social.instagramHandle}
              </p>
            </div>

            {/* Footer paws */}
            <div className="flex justify-center gap-2 mt-6 opacity-20">
              <PawPrintIcon className="w-6 h-6 text-verde rotate-[-15deg]" />
              <PawPrintIcon className="w-8 h-8 text-verde" />
              <PawPrintIcon className="w-6 h-6 text-verde rotate-[15deg]" />
            </div>
          </nav>
        </div>
      </div>
    </>
  )
}
