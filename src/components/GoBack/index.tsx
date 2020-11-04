import { FC } from 'react'
import { FiArrowLeft } from 'react-icons/fi'
import { useHistory } from 'react-router-dom'

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
      <Title>Voltar para todos os projetos</Title>
    </Container>
  )
}

export default GoBack
