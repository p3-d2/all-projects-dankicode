import styled from 'styled-components'

export const Container = styled.div`
  height: 60px;
  background-color: #2c974b;

  display: flex;
  align-items: center;
`

export const Button = styled.button`
  width: 45px;
  height: 45px;

  margin: 0 20px;

  border-radius: 10px;
  background-color: #4a5097;

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;

  transition: background-color 400ms;

  &:hover {
    background-color: #363a6d;
  }
`

export const Title = styled.h1`
  color: #fff;
`
