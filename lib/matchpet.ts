export interface MatchPetAnimal {
  _id: string
  name: string
  image: string[]
  description: string
  sex: 'MALE' | 'FEMALE'
  status: string
  views: number
  clicks: number
  contact: Array<{
    contact_type: string
    contact_value: string
  }>
  created_at: string
  last_modified_at: string
}

export interface CatData {
  id: string
  name: string
  slug: string
  photo: string
  photos: string[]
  description: string
  gender: 'Macho' | 'Fêmea'
  whatsapp?: string
  views: number
}

interface MatchPetResponse {
  animals: MatchPetAnimal[]
}

const MATCHPET_DONATOR_ID = process.env.MATCHPET_DONATOR_ID

if (!MATCHPET_DONATOR_ID) {
  console.warn('Warning: MATCHPET_DONATOR_ID environment variable is not set')
}

async function fetchAllCats(): Promise<CatData[]> {
  if (!MATCHPET_DONATOR_ID) {
    throw new Error('MATCHPET_DONATOR_ID environment variable is required')
  }

  const response = await fetch('https://api.matchpet.org/animals/filter?view=true', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-type': 'application/json',
    },
    body: JSON.stringify({
      page: 0,
      filter: [
        { mode: '$eq', comparation_value: MATCHPET_DONATOR_ID, key: 'donator_id' },
        { mode: '$eq', comparation_value: 'PENDING', key: 'status' },
      ],
    }),
    next: { revalidate: 3600 }, // Cache for 1 hour
  })

  if (!response.ok) {
    throw new Error('Failed to fetch cats')
  }

  const data: MatchPetResponse = await response.json()

  return data.animals.map((animal) => ({
    id: animal._id,
    name: animal.name,
    slug: animal._id,
    photo: animal.image[0] || '/images/placeholder-cat.jpg',
    photos: animal.image,
    description: animal.description,
    gender: animal.sex === 'MALE' ? 'Macho' : 'Fêmea',
    whatsapp: animal.contact.find((c) => c.contact_type === 'WHATSAPP')?.contact_value,
    views: animal.views,
  }))
}

export async function fetchCats(): Promise<CatData[]> {
  return fetchAllCats()
}

export async function fetchCatById(id: string): Promise<CatData | null> {
  const cats = await fetchAllCats()
  return cats.find((cat) => cat.id === id) || null
}

export async function fetchOtherCats(excludeId: string, limit = 4): Promise<CatData[]> {
  const cats = await fetchAllCats()
  return cats.filter((cat) => cat.id !== excludeId).slice(0, limit)
}

export async function fetchRandomCats(limit = 6): Promise<CatData[]> {
  const cats = await fetchAllCats()
  // Shuffle array using Fisher-Yates algorithm
  const shuffled = [...cats]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  return shuffled.slice(0, limit)
}
