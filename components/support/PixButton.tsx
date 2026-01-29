'use client'

import { useState } from 'react'
import { ONG_INFO } from '@/lib/constants'
import { HeartIcon, CheckIcon, CopyIcon } from '@/components/ui/Icons'

export default function PixButton() {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(ONG_INFO.pix)
      setCopied(true)
      setTimeout(() => setCopied(false), 3000)
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }

  return (
    <div className="bg-white rounded-2xl p-8 text-center shadow-xl">
      <h3 className="text-2xl font-display font-bold text-verde-dark mb-2">
        Doe via PIX
      </h3>
      <p className="text-gray-600 mb-6">
        Copie a chave abaixo e doe qualquer valor
      </p>

      <div className="bg-verde-dark/5 rounded-xl p-4 mb-4">
        <p className="text-gray-500 text-sm mb-1">Chave PIX (E-mail)</p>
        <p className="text-xl font-bold text-verde-dark break-all">{ONG_INFO.pix}</p>
      </div>

      <button
        onClick={handleCopy}
        className={`w-full py-4 px-6 rounded-xl font-semibold text-lg transition-all duration-300 ${
          copied
            ? 'bg-verde text-white'
            : 'bg-amarelo text-verde-dark hover:bg-amarelo-light'
        }`}
      >
        {copied ? (
          <span className="flex items-center justify-center gap-2">
            <CheckIcon className="w-5 h-5" />
            Copiado!
          </span>
        ) : (
          <span className="flex items-center justify-center gap-2">
            <CopyIcon className="w-5 h-5" />
            Copiar Chave PIX
          </span>
        )}
      </button>

      <p className="text-sm text-gray-500 mt-4">
        Abra o app do seu banco e cole a chave
      </p>
    </div>
  )
}
