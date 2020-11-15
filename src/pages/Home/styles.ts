import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;

  overflow-x: hidden;
`

export const Wrapper = styled.main`
  height: 80%;
  width: 65%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  @media (max-width: 550px) {
    height: 100%;
    width: 100%;
  }
`

export const Title = styled.h1`
  font-size: 36px;
  font-weight: 800;

  margin-bottom: 48px;

  @media (max-width: 550px) {
    margin: 48px 0;
  }
`

export const ProjectsContainer = styled.div`
  width: 100%;
  height: 100%;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-rows: 90px;
  grid-gap: 24px;
  justify-content: center;

  @media (max-width: 750px) {
    grid-template-columns: 90%;
  }

  @media (max-width: 550px) {
    grid-template-columns: 90%;
  }
`
