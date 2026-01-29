import Image from 'next/image'
import Link from 'next/link'
import Section, { SectionHeader } from '@/components/ui/Section'
import Button from '@/components/ui/Button'
import { CatData } from '@/lib/matchpet'
import ErrorMessage from '@/components/ui/ErrorMessage'

interface CatGalleryProps {
  cats: CatData[]
  hasError?: boolean
}

export default function CatGallery({ cats, hasError = false }: CatGalleryProps) {
  if (hasError || cats.length === 0) {
    return (
      <Section>
        <SectionHeader
          title="Nossos Gatinhos"
          showPaws
        />
        {hasError ? (
          <ErrorMessage
            title="Não foi possível carregar"
            message="Houve um problema ao buscar os gatinhos. Visite nossa feira para conhecê-los pessoalmente!"
          />
        ) : (
          <ErrorMessage
            title="Nenhum gatinho no momento"
            message="Todos os gatinhos foram adotados! Visite nossa feira para conhecer novos amiguinhos."
            showRetry={false}
          />
        )}
      </Section>
    )
  }

  return (
    <Section>
      <SectionHeader
        title="Nossos Gatinhos"
        subtitle="Clique na foto para ver maior"
        showPaws
      />

      {/* Gallery Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-10">
        {cats.map((cat) => (
          <Link
            key={cat.id}
            href={`/adocao/${cat.slug}`}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all hover:-translate-y-1 group"
          >
            <div className="relative aspect-square w-full">
              <Image
                src={cat.photo}
                alt={`Foto de ${cat.name}`}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                <span className="opacity-0 group-hover:opacity-100 text-white bg-verde/80 px-4 py-2 rounded-lg text-sm font-medium">
                  Conhecer {cat.name}
                </span>
              </div>
            </div>
            <div className="p-4">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold text-verde-dark">{cat.name}</h3>
                <span className={`text-sm px-3 py-1 rounded-full font-medium ${
                  cat.gender === 'Macho'
                    ? 'bg-blue-100 text-blue-700'
                    : 'bg-pink-100 text-pink-700'
                }`}>
                  {cat.gender === 'Macho' ? '♂ Macho' : '♀ Fêmea'}
                </span>
              </div>
              <span className="text-verde text-sm mt-2 inline-block group-hover:underline">
                Ver perfil
              </span>
            </div>
          </Link>
        ))}
      </div>

      {/* CTA */}
      <div className="text-center bg-gray-50 rounded-xl p-8">
        <p className="text-lg text-gray-700 mb-6">
          Visite nossa feira aos domingos no Parque Municipal!
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button href="/adocao" variant="primary">
            Ver Todos
          </Button>
          <Button href="/contato" variant="outline">
            Sobre a Feira
          </Button>
        </div>
      </div>

    </Section>
  )
}
