import { FC } from 'react'
import Project from '../../components/Project'

import { Container, Wrapper, Title, ProjectsContainer } from './styles'

const Home: FC = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Projetos</Title>
        <ProjectsContainer>
          <Project
            to="/dankicode-landing"
            title="DankiCode landing"
            description="Landing page da danki code"
          />
          <Project
            to="/facebook-clone"
            title="Facebook clone"
            description="Página de login do facebook"
          />
          <Project
            to="/cenas-landing"
            title="Cenas landing"
            description="Landing page para imobiliárias"
          />
        </ProjectsContainer>
      </Wrapper>
    </Container>
  )
}

export default Home
