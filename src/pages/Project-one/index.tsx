import { FC, FormEvent } from 'react'

import GoBack from '../../components/GoBack'

import {
  Container,
  Header,
  Logo,
  LogoImg,
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
  SubmitButton,
  Section,
  SectionContent,
  SectionText,
  SectionTitle,
  ArrowDownIconDiv,
  ArrowDownIcon,
  CardList,
  CardListItem,
  CardListItemHtmlIcon,
  CardListItemContent,
  CardListItemCssIcon,
  CardListItemJsIcon,
  Footer,
  FooterTitle,
  FooterSubTitle,
  HearthIcon,
  Strong
} from './styles'

import logo from '../../assets/logo.png'

const ProjectOne: FC = () => {
  function handleFormSubmit(event: FormEvent) {
    event.preventDefault()

    alert('Parabéns você perdeu 10 segundos de vida')
  }

  return (
    <Container>
      <GoBack />
      <Header>
        <Logo
          href="https://cursos.dankicode.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LogoImg src={logo} alt="Danki Code" />
        </Logo>
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
      <Section>
        <SectionContent>
          <SectionTitle>Lorem ipsum</SectionTitle>
          <SectionText>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
            ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
            consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate
            velit esse molestie consequat, vel illum dolore eu feugiat nulla
            facilisis at vero eros et accumsan et iusto odio dignissim qui
            blandit praesent luptatum zzril delenit augue duis dolore te feugait
            nulla facilisi.
          </SectionText>
        </SectionContent>
        <ArrowDownIconDiv>
          <ArrowDownIcon size={32} color="#fff" />
        </ArrowDownIconDiv>
      </Section>

      <Section className="white">
        <SectionTitle>Aprenda com que está no mercado</SectionTitle>

        <CardList>
          <CardListItem>
            <CardListItemHtmlIcon size={84} color="#472663" />
            <CardListItemContent>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore
            </CardListItemContent>
          </CardListItem>
          <CardListItem>
            <CardListItemCssIcon size={84} color="#472663" />
            <CardListItemContent>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore
            </CardListItemContent>
          </CardListItem>
          <CardListItem>
            <CardListItemJsIcon size={84} color="#472663" />
            <CardListItemContent>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore
            </CardListItemContent>
          </CardListItem>
        </CardList>
      </Section>

      <Footer>
        <FooterTitle>Todos os direitos reservados</FooterTitle>
        <FooterSubTitle>
          Feito com <HearthIcon size={20} color="rgb(255, 0, 0)" /> por
          <Strong
            href="https://github.com/pedro-frontend"
            target="_blank"
            rel="noopener noreferrer"
          >
            Pedro Henrique
          </Strong>
        </FooterSubTitle>
      </Footer>
    </Container>
  )
}

export default ProjectOne
