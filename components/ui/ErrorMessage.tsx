import Button from '@/components/ui/Button'
import { CatIcon } from '@/components/ui/Icons'

interface ErrorMessageProps {
  title?: string
  message?: string
  showRetry?: boolean
  onRetry?: () => void
}

export default function ErrorMessage({
  title = 'Ops! Algo deu errado',
  message = 'Não foi possível carregar os gatinhos. Por favor, tente novamente mais tarde.',
  showRetry = true,
  onRetry,
}: ErrorMessageProps) {
  return (
    <div className="text-center py-12 px-4">
      <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
        <CatIcon className="w-10 h-10 text-gray-400" />
      </div>
      <h3 className="text-xl font-display font-semibold text-gray-700 mb-2">
        {title}
      </h3>
      <p className="text-gray-500 mb-6 max-w-md mx-auto">
        {message}
      </p>
      {showRetry && (
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          {onRetry ? (
            <button
              onClick={onRetry}
              className="px-6 py-2 bg-verde text-white rounded-full hover:bg-verde-dark transition-colors"
            >
              Tentar novamente
            </button>
          ) : (
            <Button href="/adocao" variant="primary">
              Tentar novamente
            </Button>
          )}
          <Button href="/contato" variant="outline">
            Visite nossa feira
          </Button>
        </div>
      )}
    </div>
  )
}
