import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
`

export const Wrapper = styled.main`
  width: max(60%, 400px);
  height: max(75%, 400px);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`

export const Title = styled.h1`
  font-size: 36px;
  font-weight: 800;

  margin-bottom: 48px;
`

export const ProjectsContainer = styled.div`
  width: 100%;
  height: 100%;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-rows: 90px;
  grid-gap: 24px;
`
