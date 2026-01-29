import { groq } from 'next-sanity'

export const allCatsQuery = groq`
  *[_type == "cat" && available == true] | order(_createdAt desc) {
    _id,
    name,
    "slug": slug.current,
    photo,
    description,
    age,
    gender,
    castrated,
    featured
  }
`

export const featuredCatsQuery = groq`
  *[_type == "cat" && available == true && featured == true] | order(_createdAt desc)[0...6] {
    _id,
    name,
    "slug": slug.current,
    photo,
    description,
    age,
    gender,
    castrated
  }
`

export const catBySlugQuery = groq`
  *[_type == "cat" && slug.current == $slug][0] {
    _id,
    name,
    "slug": slug.current,
    photo,
    description,
    age,
    gender,
    castrated,
    available
  }
`

export const catSlugsQuery = groq`
  *[_type == "cat" && available == true].slug.current
`
