import Hero from '@/components/home/Hero'
import FeaturedCards from '@/components/home/FeaturedCards'
import SocialProof from '@/components/home/SocialProof'
import CatGallery from '@/components/home/CatGallery'
import FairInfo from '@/components/home/FairInfo'
import CallToAction from '@/components/home/CallToAction'
import { fetchRandomCats, CatData } from '@/lib/matchpet'

export const revalidate = 3600 // Revalidate every hour

export default async function Home() {
  let cats: CatData[] = []
  let hasError = false

  try {
    cats = await fetchRandomCats(6)
  } catch {
    hasError = true
  }

  return (
    <>
      <Hero />
      <FeaturedCards />
      <CatGallery cats={cats} hasError={hasError} />
      <SocialProof />
      <FairInfo />
      <CallToAction />
    </>
  )
}
