import { NextSeo } from 'next-seo'

import LinkWrapper from 'components/LinkWrapper'
import { InfoOutline } from '@styled-icons/evaicons-outline'

import dynamic from 'next/dynamic'
import { MapProps } from 'components/Map'

const Map = dynamic(() => import('components/Map'), { ssr: false })

export default function HomeTemplate({ places }: MapProps) {
  return (
    <>
      <NextSeo
        title="My Trips"
        description="A simple project to show a map the places I went and show more informations and photos when clicked"
        canonical="https://my-trips.jeffymesquita.com.br/"
        openGraph={{
          url: 'https://my-trips.jeffymesquita.com.br/',
          title: 'My Trips',
          description:
            'A simple project to show a map the places I went and show more informations and photos when clicked',
          images: [
            {
              url: 'https://my-trips.jeffymesquita.com.br/img/icon-512.png',
              width: 1280,
              height: 720,
              alt: 'My Trips'
            }
          ],
          site_name: 'My Trips'
        }}
      />
      <LinkWrapper href="/about">
        <InfoOutline size={32} aria-label="About" />
      </LinkWrapper>
      <Map places={places} />
    </>
  )
}
