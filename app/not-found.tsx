import Button from '@/components/ui/Button'
import Container from '@/components/ui/Container'
import { CatIcon } from '@/components/ui/Icons'

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <Container>
        <div className="text-center max-w-lg mx-auto">
          <div className="w-24 h-24 bg-verde/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <CatIcon className="w-12 h-12 text-verde" />
          </div>
          <h1 className="text-4xl font-display font-bold text-verde-dark mb-4">
            Página não encontrada
          </h1>
          <p className="text-gray-600 mb-8">
            Ops! Parece que este gatinho se perdeu. A página que você está procurando não existe.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/" variant="primary">
              Voltar ao Início
            </Button>
            <Button href="/adocao" variant="outline">
              Ver Gatinhos
            </Button>
          </div>
        </div>
      </Container>
    </div>
  )
}
