import { FC, FormEvent } from 'react'
import GoBack from '../../components/GoBack'

import {
  Container,
  Header,
  Logo,
  FormHeader,
  InputBlock,
  Label,
  Input,
  SubmitButtonHeader,
  Main,
  MapSection,
  Description,
  SubTitle,
  MapImg,
  FormSection,
  Title,
  Form
} from './styles'

import mapImg from '../../assets/facebookClone/mapImg.png'

const FacebookClone: FC = () => {
  function handleSubmitForm(event: FormEvent) {
    event.preventDefault()
  }

  return (
    <Container>
      <GoBack />
      <Header>
        <Logo>Facebook</Logo>
        <FormHeader onSubmit={handleSubmitForm}>
          <InputBlock>
            <Label htmlFor="emailOrTelephone">Email ou Telefone:</Label>
            <Input id="emailOrTelephone" type="email" required />
          </InputBlock>
          <InputBlock>
            <Label htmlFor="password">Senha:</Label>
            <Input id="password" type="password" required />
          </InputBlock>
          <InputBlock>
            <Label className="invisible">invisible</Label>
            <SubmitButtonHeader type="submit">Entrar</SubmitButtonHeader>
          </InputBlock>
        </FormHeader>
      </Header>

      <Main>
        <MapSection>
          <Description>
            O Facebook ajuda você a se conectar e compartilhar com as pessoas
            que fazem parte da sua vida.
          </Description>
          <MapImg src={mapImg} alt="map" />
        </MapSection>
        <FormSection>
          <Title>Abra sua conta</Title>
          <SubTitle>É rápido e fácil</SubTitle>
          <Form></Form>
        </FormSection>
      </Main>
    </Container>
  )
}

export default FacebookClone
