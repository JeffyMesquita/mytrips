import { render, screen } from '@testing-library/react'

import Map from '.'

describe('<Map />', () => {
  it('should render without any marker', () => {
    render(<Map />)

    expect(
      screen.getByRole('link', {
        name: /a js library for interactive maps/i
      })
    )
  })

  it('should render with crashing in correct place', () => {
    const place = {
      id: '1',
      name: 'Bebedouro',
      slug: 'bebedouro',
      location: {
        latitude: -23.5,
        longitude: -46.5
      }
    }

    const placeTwo = {
      id: '2',
      name: 'Colina',
      slug: 'colina',
      location: {
        latitude: -7.5,
        longitude: -34.5
      }
    }

    render(<Map places={[place, placeTwo]} />)

    expect(screen.getByTitle(/Bebedouro/i)).toBeInTheDocument()
    expect(screen.getByTitle(/Colina/i)).toBeInTheDocument()
  })
})
