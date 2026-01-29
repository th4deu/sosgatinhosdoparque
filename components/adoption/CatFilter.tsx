'use client'

import { useState, useMemo } from 'react'
import CatCard from '@/components/adoption/CatCard'
import ErrorMessage from '@/components/ui/ErrorMessage'
import { CatData } from '@/lib/matchpet'

interface CatFilterProps {
  cats: CatData[]
  hasError?: boolean
}

type GenderFilter = 'all' | 'Macho' | 'Fêmea'

export default function CatFilter({ cats, hasError = false }: CatFilterProps) {
  const [searchTerm, setSearchTerm] = useState('')
  const [genderFilter, setGenderFilter] = useState<GenderFilter>('all')

  const filteredCats = useMemo(() => {
    return cats.filter((cat) => {
      const matchesSearch = cat.name.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesGender = genderFilter === 'all' || cat.gender === genderFilter
      return matchesSearch && matchesGender
    })
  }, [cats, searchTerm, genderFilter])

  if (hasError) {
    return <ErrorMessage />
  }

  if (cats.length === 0) {
    return (
      <ErrorMessage
        title="Nenhum gatinho disponível"
        message="Todos os gatinhos foram adotados! Visite nossa feira para conhecer novos amiguinhos."
        showRetry={false}
      />
    )
  }

  return (
    <>
      {/* Filter Controls */}
      <div className="mb-8 p-4 bg-gray-50 rounded-xl">
        <div className="flex flex-col sm:flex-row gap-4">
          {/* Search */}
          <div className="flex-1">
            <label htmlFor="search" className="sr-only">
              Buscar por nome
            </label>
            <div className="relative">
              <svg
                className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              <input
                id="search"
                type="text"
                placeholder="Buscar por nome..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-verde focus:border-transparent"
              />
            </div>
          </div>

          {/* Gender Filter */}
          <div className="flex gap-2">
            <button
              onClick={() => setGenderFilter('all')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                genderFilter === 'all'
                  ? 'bg-verde text-white'
                  : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              Todos
            </button>
            <button
              onClick={() => setGenderFilter('Macho')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                genderFilter === 'Macho'
                  ? 'bg-blue-500 text-white'
                  : 'bg-white text-gray-600 hover:bg-blue-50 border border-gray-200'
              }`}
            >
              ♂ Machos
            </button>
            <button
              onClick={() => setGenderFilter('Fêmea')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                genderFilter === 'Fêmea'
                  ? 'bg-pink-500 text-white'
                  : 'bg-white text-gray-600 hover:bg-pink-50 border border-gray-200'
              }`}
            >
              ♀ Fêmeas
            </button>
          </div>
        </div>
      </div>

      {/* Results count */}
      <p className="text-gray-600 text-sm mb-4">
        {filteredCats.length === cats.length
          ? `${cats.length} gatinhos disponíveis`
          : `${filteredCats.length} de ${cats.length} gatinhos`}
      </p>

      {/* Cats Grid */}
      {filteredCats.length > 0 ? (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCats.map((cat) => (
            <CatCard key={cat.id} cat={cat} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-gray-500">
            Nenhum gatinho encontrado com os filtros selecionados.
          </p>
          <button
            onClick={() => {
              setSearchTerm('')
              setGenderFilter('all')
            }}
            className="mt-4 text-verde hover:underline"
          >
            Limpar filtros
          </button>
        </div>
      )}
    </>
  )
}
