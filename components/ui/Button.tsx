import Link from 'next/link'
import { ReactNode } from 'react'

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'outline-light'
type ButtonSize = 'sm' | 'md' | 'lg'

interface ButtonProps {
  children: ReactNode
  variant?: ButtonVariant
  size?: ButtonSize
  href?: string
  onClick?: () => void
  className?: string
  type?: 'button' | 'submit'
  disabled?: boolean
  external?: boolean
}

const variantStyles: Record<ButtonVariant, string> = {
  primary: 'bg-verde hover:bg-verde-light text-white',
  secondary: 'bg-amarelo hover:bg-amarelo-light text-verde-dark',
  outline: 'border-2 border-verde text-verde hover:bg-verde hover:text-white',
  'outline-light': 'border-2 border-white text-white hover:bg-white hover:text-verde-dark',
}

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'py-2 px-4 text-sm',
  md: 'py-3 px-6 text-base',
  lg: 'py-4 px-8 text-lg',
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  className = '',
  type = 'button',
  disabled = false,
  external = false,
}: ButtonProps) {
  const baseStyles = 'font-semibold rounded-lg transition-colors duration-200 inline-flex items-center justify-center'
  const styles = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`

  if (href) {
    if (external) {
      return (
        <a href={href} className={styles} target="_blank" rel="noopener noreferrer">
          {children}
        </a>
      )
    }
    return (
      <Link href={href} className={styles}>
        {children}
      </Link>
    )
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={styles}
    >
      {children}
    </button>
  )
}
