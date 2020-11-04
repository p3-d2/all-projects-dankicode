import { FC, FormEvent } from 'react'

import {
  Container,
  Header,
  Logo,
  Banner,
  InfoBox,
  Form,
  InfoBoxList,
  InfoBoxListItem,
  FormTitle,
  InputBlock,
  Label,
  Span,
  Input,
  Info,
  SubmitButton
} from './styles'

import logo from '../../assets/logo.png'

const ProjectOne: FC = () => {
  function handleFormSubmit(event: FormEvent) {
    event.preventDefault()

    alert('Parabéns você perderu 10 segundos de vida')
  }

  return (
    <Container>
      <Header>
        <Logo src={logo} alt="Danki Code" />
      </Header>
      <Banner>
        <InfoBox>
          <InfoBoxList>
            <InfoBoxListItem>1° item da lista</InfoBoxListItem>
            <InfoBoxListItem>2° item da lista</InfoBoxListItem>
            <InfoBoxListItem>3° item da lista</InfoBoxListItem>
            <InfoBoxListItem>4° item da lista</InfoBoxListItem>
          </InfoBoxList>
        </InfoBox>
        <Form onSubmit={handleFormSubmit}>
          <FormTitle>
            Preencha o formulário e inicie a sua caminhada para virar um
            webmaster!
          </FormTitle>

          <InputBlock>
            <Label htmlFor="name">
              Nome<Span>*</Span>
            </Label>
            <Input id="name" type="text" required />
          </InputBlock>
          <InputBlock>
            <Label htmlFor="email">
              E-mail<Span>*</Span>
            </Label>
            <Input id="email" type="email" required />
          </InputBlock>
          <InputBlock>
            <Label htmlFor="telefone">
              Telefone<Span>*</Span>
            </Label>
            <Input id="telefone" type="text" required />
          </InputBlock>
          <Info>* Campos obrigatórios</Info>
          <SubmitButton type="submit">Enviar</SubmitButton>
        </Form>
      </Banner>
    </Container>
  )
}

export default ProjectOne
