import Image from 'next/image'
import Button from '@/components/ui/Button'
import Container from '@/components/ui/Container'
import { ONG_INFO } from '@/lib/constants'
import { PawPrintIcon } from '@/components/ui/Icons'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/banner-1.jpg"
          alt="Gatinhos do parque"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-verde-dark/95 via-verde-dark/80 to-verde-dark/60" />
      </div>

      {/* Decorative paws */}
      <PawPrintIcon className="absolute top-20 right-[10%] w-40 h-40 text-white/5 rotate-[15deg]" />
      <PawPrintIcon className="absolute bottom-32 left-[5%] w-32 h-32 text-white/5 rotate-[-20deg]" />
      <PawPrintIcon className="absolute top-1/2 right-[30%] w-24 h-24 text-white/5 rotate-[45deg]" />

      <Container className="relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center py-12">
          {/* Content */}
          <div className="text-white text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <PawPrintIcon className="w-5 h-5 text-amarelo" />
              <span className="text-white/90 text-sm font-medium">Há 20 anos cuidando com amor</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight mb-6">
              Ajude os Gatinhos
              <span className="block text-amarelo">do Parque</span>
            </h1>

            <p className="text-xl text-white/90 mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed">
              Cuidamos de mais de 300 gatos abandonados em Belo Horizonte.
              Você pode fazer a diferença!
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <Button href="/adocao" variant="secondary" size="lg">
                Quero Adotar
              </Button>
              <Button href="/apoie" variant="outline-light" size="lg">
                Fazer Doação
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center lg:text-left">
                <p className="text-4xl md:text-5xl font-bold text-amarelo">{ONG_INFO.stats.gatosCuidados}+</p>
                <p className="text-white/70 text-sm mt-1">Gatos Cuidados</p>
              </div>
              <div className="text-center lg:text-left">
                <p className="text-4xl md:text-5xl font-bold text-amarelo">{ONG_INFO.stats.anosAtuando}</p>
                <p className="text-white/70 text-sm mt-1">Anos de Amor</p>
              </div>
              <div className="text-center lg:text-left">
                <p className="text-4xl md:text-5xl font-bold text-amarelo">100+</p>
                <p className="text-white/70 text-sm mt-1">Adoções/Ano</p>
              </div>
            </div>
          </div>

          {/* Image Gallery */}
          <div className="hidden lg:block">
            <div className="relative">
              {/* Main circular image */}
              <div className="relative w-80 h-80 mx-auto">
                <div className="absolute inset-0 bg-amarelo/30 rounded-full blur-3xl" />
                <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white/30 shadow-2xl">
                  <Image
                    src="/images/banner-2.jpg"
                    alt="Gatinho do parque"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Floating smaller images */}
              <div className="absolute -top-4 -left-4 w-32 h-32 rounded-2xl overflow-hidden border-4 border-white/30 shadow-xl rotate-[-6deg]">
                <Image
                  src="/images/banner-3.jpg"
                  alt="Gatinho"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="absolute -bottom-4 -right-4 w-36 h-36 rounded-2xl overflow-hidden border-4 border-white/30 shadow-xl rotate-[6deg]">
                <Image
                  src="/images/banner-4.jpg"
                  alt="Gatinho"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Decorative elements */}
              <div className="absolute top-1/2 -right-8 transform -translate-y-1/2">
                <div className="flex flex-col gap-2">
                  <PawPrintIcon className="w-8 h-8 text-amarelo/60 rotate-[20deg]" />
                  <PawPrintIcon className="w-6 h-6 text-amarelo/40 rotate-[-10deg] ml-4" />
                  <PawPrintIcon className="w-7 h-7 text-amarelo/50 rotate-[30deg]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>

      {/* Bottom wave decoration */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
        </svg>
      </div>
    </section>
  )
}
