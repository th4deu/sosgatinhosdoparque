import Hero from '@/components/home/Hero'
import FeaturedCards from '@/components/home/FeaturedCards'
import SocialProof from '@/components/home/SocialProof'
import CatGallery from '@/components/home/CatGallery'
import FairInfo from '@/components/home/FairInfo'
import CallToAction from '@/components/home/CallToAction'
import { fetchRandomCats } from '@/lib/matchpet'

export const revalidate = 3600 // Revalidate every hour

export default async function Home() {
  const cats = await fetchRandomCats(6)

  return (
    <>
      <Hero />
      <FeaturedCards />
      <CatGallery cats={cats} />
      <SocialProof />
      <FairInfo />
      <CallToAction />
    </>
  )
}
