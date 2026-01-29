import Section from '@/components/ui/Section'
import Button from '@/components/ui/Button'
import { ONG_INFO } from '@/lib/constants'
import { PawPrintIcon } from '@/components/ui/Icons'

export default function CallToAction() {
  return (
    <Section background="verde-dark" showPawDecoration>
      <div className="text-center max-w-3xl mx-auto">
        <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
          <PawPrintIcon className="w-10 h-10 text-white" />
        </div>
        <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
          Ajude os Gatinhos
        </h2>
        <p className="text-white/90 text-lg mb-8">
          Qualquer valor ajuda a cuidar de 300 gatos!
        </p>

        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8">
          <p className="text-white/80 mb-2">PIX</p>
          <p className="text-2xl font-bold text-amarelo break-all">{ONG_INFO.pix}</p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button href="/apoie" variant="secondary" size="lg">
            Doar
          </Button>
          <Button
            href={ONG_INFO.social.instagram}
            variant="outline"
            size="lg"
            className="border-white text-white hover:bg-white hover:text-verde-dark"
          >
            Instagram
          </Button>
        </div>
      </div>
    </Section>
  )
}
