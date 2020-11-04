import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled(Link)`
  width: 100%;
  height: 100%;
  padding: 12px;

  display: flex;
  flex-direction: column;
  justify-content: center;

  border-radius: 12px;
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.2);

  transition: box-shadow 400ms;

  &:hover {
    box-shadow: 0 0 14px rgba(0, 0, 0, 0.4);
  }
`

export const Title = styled.h2`
  font-size: 24px;
  font-weight: 800;

  margin-bottom: 4px;
`

export const Description = styled.h3`
  font-size: 15px;
`
