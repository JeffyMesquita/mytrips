import { CloseOutline } from '@styled-icons/evaicons-outline'
import LinkWrapper from 'components/LinkWrapper'

import * as S from './styles'

const AboutTemplate = () => {
  return (
    <S.Content>
      <LinkWrapper href="/about">
        <CloseOutline size={32} aria-label="Close" />
      </LinkWrapper>

      <S.Heading>My Trips</S.Heading>

      <S.Body>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
          quas iusto nihil commodi fugiat unde tempora et voluptate dignissimos
          nisi, minima quaerat est alias dolorum porro itaque dicta laborum
          optio!
        </p>
      </S.Body>
    </S.Content>
  )
}

export default AboutTemplate
