import { FC } from 'react'
import { useHistory } from 'react-router-dom'
import { FiArrowLeft } from '../../styles/icons'

import { Container, Button, Title } from './styles'

const GoBack: FC = () => {
  const { goBack } = useHistory()

  function backHome(): void {
    goBack()
  }

  return (
    <Container>
      <Button onClick={backHome}>
        <FiArrowLeft size={26} color="#fff" />
      </Button>
      <Title>Todos os projetos</Title>
    </Container>
  )
}

export default GoBack
