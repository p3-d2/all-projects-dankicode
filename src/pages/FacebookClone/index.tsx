import { FC, FormEvent } from 'react'
import GoBack from '../../components/GoBack'

import {
  Container,
  Header,
  HeaderWrapper,
  Logo,
  FormHeader,
  InputBlock,
  Label,
  InputHeader,
  SubmitButtonHeader,
  Main,
  MainWrapper,
  MapSection,
  Description,
  SubTitle,
  MapImg,
  FormSection,
  Title,
  Form,
  InputLine,
  Input,
  Legend,
  Select,
  Option,
  RadiosWrapper,
  RadioInputDiv,
  RadioInput,
  SubmitButton,
  Footer,
  FooterLineOne,
  A,
  FooterLine
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
        <HeaderWrapper>
          <Logo>Facebook</Logo>
          <FormHeader onSubmit={handleSubmitForm}>
            <InputBlock>
              <Label htmlFor="emailOrTelephone">Email ou Telefone:</Label>
              <InputHeader id="emailOrTelephone" type="email" required />
            </InputBlock>
            <InputBlock>
              <Label htmlFor="password">Senha:</Label>
              <InputHeader id="password" type="password" required />
            </InputBlock>
            <InputBlock>
              <Label className="invisible">invisible</Label>
              <SubmitButtonHeader type="submit">Entrar</SubmitButtonHeader>
            </InputBlock>
          </FormHeader>
        </HeaderWrapper>
      </Header>

      <Main>
        <MainWrapper>
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
            <Form onSubmit={handleSubmitForm}>
              <InputLine>
                <Input type="text" placeholder="Nome" required />
                <Input type="text" placeholder="Sobrenome" required />
              </InputLine>
              <Input type="email" placeholder="Email" required />
              <Input type="password" placeholder="Senha" required />
              <Legend>Data de Nascimento</Legend>
              <Select>
                {Array(31)
                  .fill(0)
                  .map((_, index) => (
                    <Option key={index + 1} value={`${index + 1}`}>
                      {index + 1}
                    </Option>
                  ))}
              </Select>
              <Select>
                <Option value="janeiro">Janeiro</Option>
                <Option value="fevereiro">Fevereiro</Option>
                <Option value="março">Março</Option>
                <Option value="abril">Abril</Option>
                <Option value="maio">Maio</Option>
                <Option value="junho">Junho</Option>
                <Option value="julho">Julho</Option>
                <Option value="agosto">Agosto</Option>
                <Option value="setembro">Setembro</Option>
                <Option value="outubro">Outubro</Option>
                <Option value="novembro">Novembro</Option>
                <Option value="dezembro">Dezembro</Option>
              </Select>
              <Select>
                {Array(21)
                  .fill(0)
                  .map((_, index) => {
                    const expression = index < 10 ? `200${index}` : `20${index}`
                    return (
                      <Option key={expression} value={expression}>
                        {expression}
                      </Option>
                    )
                  })}
              </Select>
              <Legend>Gênero</Legend>
              <RadiosWrapper>
                <RadioInputDiv>
                  <RadioInput
                    name="sexo"
                    type="radio"
                    value="masculino"
                    required
                  />
                  <Label>Masculino</Label>
                </RadioInputDiv>
                <RadioInputDiv>
                  <RadioInput
                    name="sexo"
                    type="radio"
                    value="feminino"
                    required
                  />
                  <Label>Feminino</Label>
                </RadioInputDiv>
                <RadioInputDiv>
                  <RadioInput
                    name="sexo"
                    type="radio"
                    value="personalizado"
                    required
                  />
                  <Label>Personalizado</Label>
                </RadioInputDiv>
              </RadiosWrapper>
              <SubmitButton type="submit">Cadastrar-se</SubmitButton>
            </Form>
          </FormSection>
        </MainWrapper>
      </Main>

      <Footer>
        <FooterLineOne>
          <A href="https://github.com/pedro-frontend">Português (Brasil)</A>
          <A href="https://github.com/pedro-frontend">Português (Brasil)</A>
          <A href="https://github.com/pedro-frontend">Português (Brasil)</A>
          <A href="https://github.com/pedro-frontend">Português (Brasil)</A>
          <A href="https://github.com/pedro-frontend">Português (Brasil)</A>
        </FooterLineOne>
        <FooterLine>
          <A href="https://github.com/pedro-frontend">Cadastre-se</A>
          <A href="https://github.com/pedro-frontend">Entrar</A>
          <A href="https://github.com/pedro-frontend">Messenger</A>
        </FooterLine>
      </Footer>
    </Container>
  )
}

export default FacebookClone
