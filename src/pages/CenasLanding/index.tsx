import { FC } from 'react'
import GoBack from '../../components/GoBack'

import { Container, Wrapper, Header, Main, Footer } from './styles'

const CenasLanding: FC = () => {
  return (
    <Container>
      <GoBack />
      <Wrapper>
        <Header />
        <Main />
        <Footer />
      </Wrapper>
    </Container>
  )
}

export default CenasLanding
