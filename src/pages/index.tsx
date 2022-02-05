import LinkWrapper from 'components/LinkWrapper'
import { InfoOutline } from '@styled-icons/evaicons-outline'

import dynamic from 'next/dynamic'

const Map = dynamic(() => import('components/Map'), { ssr: false })

export default function Home() {
  return (
    <>
      <LinkWrapper href="/about">
        <InfoOutline size={32} aria-label="About" />
      </LinkWrapper>
      <Map
        places={[
          {
            id: '1',
            name: 'Bebedouro',
            slug: 'bebedouro',
            location: {
              latitude: -20.9374971,
              longitude: -48.4960269
            }
          },
          {
            id: '2',
            name: 'Colina',
            slug: 'colina',
            location: {
              latitude: -20.714115,
              longitude: -48.5433157
            }
          }
        ]}
      />
    </>
  )
}
