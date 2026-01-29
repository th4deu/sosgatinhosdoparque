import Card, { CardImage, CardContent } from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import { CatData } from '@/lib/matchpet'

interface CatCardProps {
  cat: CatData
}

export default function CatCard({ cat }: CatCardProps) {
  return (
    <Card>
      <CardImage src={cat.photo} alt={`Foto de ${cat.name}`} />
      <CardContent>
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-xl font-display font-bold text-verde-dark">
            {cat.name}
          </h3>
          <span className={`text-xs px-2 py-1 rounded-full ${
            cat.gender === 'Macho' ? 'bg-blue-100 text-blue-600' : 'bg-pink-100 text-pink-600'
          }`}>
            {cat.gender}
          </span>
        </div>

        <p className="text-gray-600 text-sm mb-4 line-clamp-3">{cat.description}</p>

        <Button href={`/adocao/${cat.slug}`} variant="outline" className="w-full">
          Conhecer {cat.name}
        </Button>
      </CardContent>
    </Card>
  )
}
