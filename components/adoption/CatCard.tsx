import Link from 'next/link'
import Card, { CardImage, CardContent } from '@/components/ui/Card'
import { CatData } from '@/lib/matchpet'

interface CatCardProps {
  cat: CatData
}

export default function CatCard({ cat }: CatCardProps) {
  return (
    <Link href={`/adocao/${cat.slug}`} className="block group">
      <Card>
        <div className="overflow-hidden">
          <CardImage
            src={cat.photo}
            alt={`Foto de ${cat.name}`}
            className="group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <CardContent>
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-xl font-display font-bold text-verde-dark group-hover:text-verde transition-colors">
              {cat.name}
            </h3>
            <span className={`text-xs px-2 py-1 rounded-full font-medium ${
              cat.gender === 'Macho' ? 'bg-blue-100 text-blue-600' : 'bg-pink-100 text-pink-600'
            }`}>
              {cat.gender === 'Macho' ? '♂ Macho' : '♀ Fêmea'}
            </span>
          </div>

          <p className="text-gray-600 text-sm mb-4 line-clamp-3">{cat.description}</p>

          <span className="inline-block w-full text-center py-2 px-4 border-2 border-verde text-verde rounded-full font-medium group-hover:bg-verde group-hover:text-white transition-colors">
            Conhecer {cat.name}
          </span>
        </CardContent>
      </Card>
    </Link>
  )
}
