import { GetStaticProps } from 'next'
import client from 'graphql/client'
import { GET_PLACES, GET_PLACES_BY_SLUG } from 'graphql/queries'
import { useRouter } from 'next/router'
import { GetPlacesBySlugQuery, GetPlacesQuery } from 'graphql/generate/graphql'
import PlacesTemplate, { PlaceTemplateProps } from 'templates/Places'

export default function Place({ place }: PlaceTemplateProps) {
  const router = useRouter()

  // retorna um loading, qualquer coisa que venha estar sendo criada
  if (router.isFallback) {
    return null
  }

  return <PlacesTemplate place={place} />
}

// Gerando as urls da página, mas não está gerando os dados ainda
export async function getStaticPaths() {
  const { places } = await client.request<GetPlacesQuery>(GET_PLACES, {
    first: 3
  })

  const paths = places.map(({ slug }) => ({
    params: { slug }
  }))

  return { paths, fallback: true }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { place } = await client.request<GetPlacesBySlugQuery>(
    GET_PLACES_BY_SLUG,
    {
      slug: `${params?.slug}`
    }
  )

  if (!place) {
    return { notFound: true }
  }

  return {
    revalidate: 5,
    props: {
      place
    }
  }
}
