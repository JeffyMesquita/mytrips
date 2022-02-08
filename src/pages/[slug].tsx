import client from 'graphql/client'
import { GET_PAGES, GET_PAGE_BY_SLUG } from 'graphql/queries'
import { GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import PageTemplate, { PageTemplateProps } from 'templates/Pages'

export default function Page({ heading, body }: PageTemplateProps) {
  const router = useRouter()

  // retorna um loading, qualquer coisa que venha estar sendo criada
  if (router.isFallback) {
    return null
  }

  return <PageTemplate heading={heading} body={body} />
}

// Gerando as urls da página, mas não está gerando os dados ainda
export async function getStaticPaths() {
  const { pages } = await client.request(GET_PAGES, { first: 3 })

  const paths = pages.map(({ slug }) => ({
    params: { slug }
  }))

  return { paths, fallback: true }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { page } = await client.request(GET_PAGE_BY_SLUG, {
    slug: `${params?.slug}`
  })

  if (!page) {
    return { notFound: true }
  }

  return {
    props: {
      heading: page.heading,
      body: page.body.html
    }
  }
}

// getStaticPaths => serve para gerar as urls em build time para as paginas /about /trip/bebedouro
// getStaticProps => serve para buscar os dados da página (props) - build time - estático
// getServerSideProps => serve para buscar os dados da página (props) - runtime - toda requisição (bundle fica no server)
// getInitialProps => serve para buscar os dados da página (props) - runtime - toda requisição (bundle fica no client)
