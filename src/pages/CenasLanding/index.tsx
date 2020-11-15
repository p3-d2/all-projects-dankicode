import { FC } from 'react'
import GoBack from '../../components/GoBack'

import {
  Container,
  Wrapper,
  Header,
  HeaderWrapper,
  Logo,
  Main,
  Footer
} from './styles'

import logo1 from '../../assets/cenaslanding/logo1.webp'
import logo2 from '../../assets/cenaslanding/logo2.webp'

const CenasLanding: FC = () => {
  return (
    <Container>
      <GoBack />
      <Wrapper>
        <Header>
          <HeaderWrapper>
            <Logo src={logo1} alt="cenas landing" />
            <Logo src={logo2} alt="cenas landing" />
          </HeaderWrapper>
        </Header>
        <Main />
        <Footer />
      </Wrapper>
    </Container>
  )
}

export default CenasLanding
