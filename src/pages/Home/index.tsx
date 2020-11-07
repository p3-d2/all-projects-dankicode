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
            title="DankiCode Landing"
            description="A primeira landing page feita no curso"
          />
          <Project
            to="/facebook-clone"
            title="Facebook clone"
            description="Página de login do facebook"
          />
        </ProjectsContainer>
      </Wrapper>
    </Container>
  )
}

export default Home
