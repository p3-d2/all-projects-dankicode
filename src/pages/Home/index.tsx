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
            to="/one"
            title="Landing Page"
            description="A primeira landing page feita no curso"
          />
        </ProjectsContainer>
      </Wrapper>
    </Container>
  )
}

export default Home
