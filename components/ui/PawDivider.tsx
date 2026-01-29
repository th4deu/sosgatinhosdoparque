import { PawPrintIcon } from './Icons'

interface PawDividerProps {
  className?: string
  color?: 'verde' | 'amarelo' | 'gray'
}

const colorStyles = {
  verde: 'text-verde/30',
  amarelo: 'text-amarelo',
  gray: 'text-gray-300',
}

export default function PawDivider({ className = '', color = 'verde' }: PawDividerProps) {
  return (
    <div className={`flex items-center justify-center gap-4 py-4 ${className}`}>
      <div className={`h-px flex-1 max-w-24 ${color === 'amarelo' ? 'bg-amarelo/50' : color === 'verde' ? 'bg-verde/20' : 'bg-gray-200'}`} />
      <PawPrintIcon className={`w-5 h-5 ${colorStyles[color]} rotate-[-20deg]`} />
      <PawPrintIcon className={`w-6 h-6 ${colorStyles[color]}`} />
      <PawPrintIcon className={`w-5 h-5 ${colorStyles[color]} rotate-[20deg]`} />
      <div className={`h-px flex-1 max-w-24 ${color === 'amarelo' ? 'bg-amarelo/50' : color === 'verde' ? 'bg-verde/20' : 'bg-gray-200'}`} />
    </div>
  )
}

export function PawTrail({ className = '', count = 5 }: { className?: string; count?: number }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {Array.from({ length: count }).map((_, i) => (
        <PawPrintIcon
          key={i}
          className={`w-4 h-4 text-verde/20 ${i % 2 === 0 ? 'rotate-[-15deg]' : 'rotate-[15deg]'}`}
        />
      ))}
    </div>
  )
}
