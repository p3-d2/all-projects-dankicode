import { FC } from 'react'

import { Container, Title, Description } from './styles'

interface Props {
  to: string
  title: string
  description: string
}

const Project: FC<Props> = ({ to, title, description }) => {
  return (
    <Container to={to}>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </Container>
  )
}

export default Project
