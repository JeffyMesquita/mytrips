import { getServerSideSitemap } from 'next-sitemap'
import { GetServerSideProps } from 'next'
import client from 'graphql/client'
import { GetPlacesQuery } from 'graphql/generate/graphql'
import { GET_PLACES } from 'graphql/queries'

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  // Metodo que retorna um objeto com as urls e os dados
  // const urls = await fetch('http://localhost:3000/api/sitemap')

  const { places } = await client.request<GetPlacesQuery>(GET_PLACES)

  const fields = places.map(({ slug }) => ({
    loc: `https://mytrips-eta.vercel.app/${slug}`,
    lastmod: new Date().toISOString()
  }))

  fields.push(
    {
      loc: 'https://mytrips-eta.vercel.app/', // Absolute url
      lastmod: new Date().toISOString()
    },
    {
      loc: 'https://mytrips-eta.vercel.app/about', // Absolute url
      lastmod: new Date().toISOString()
    }
  )

  return getServerSideSitemap(ctx, fields)
}

// Default export to prevent next.js errors
export default () => {}
