import styled from 'styled-components'
import backgroundImage from '../../assets/header_bg.png'

export const Container = styled.div``

export const Header = styled.header`
  height: 70px;
  padding: 24px;
  background-color: #212343;

  display: flex;
  align-items: center;
`

export const Logo = styled.img``

export const Banner = styled.div`
  height: 80vh;
  padding: 48px;
  background-image: url(${backgroundImage});

  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const InfoBox = styled.div`
  height: 250px;
  width: 500px;

  background-color: rgba(33, 35, 67, 0.7);
  color: #fff;

  @media (max-width: 500px) {
    width: 100%;
  }
`

export const InfoBoxList = styled.ul`
  width: 100%;
  height: 100%;

  padding: 32px;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  li + li {
    margin-top: 12px;
  }
`

export const InfoBoxListItem = styled.li``

export const Form = styled.form`
  width: 400px;
  height: 85vh;
  padding: 16px;

  background-color: #fff;

  border: 12px solid rgba(120, 120, 120, 0.5);
  background-clip: padding-box;

  @media (max-width: 400px) {
    width: 100%;
  }
`

export const FormTitle = styled.h2`
  font-weight: 800;
  color: #999999;

  font-size: 20px;
  margin-bottom: 24px;
`

export const InputBlock = styled.div`
  margin-bottom: 20px;
`

export const Label = styled.label`
  color: #bbbbbb;
  cursor: pointer;
`

export const Span = styled.span`
  font-size: 14px;
`

export const Input = styled.input`
  width: 100%;
  height: 40px;

  padding-left: 8px;
  font-size: 17px;

  border: 1px solid #ccc;
`

export const Info = styled.span`
  color: #bbbbbb;
  font-size: 16px;
`

export const SubmitButton = styled.button`
  width: 100%;
  height: 56px;

  margin-top: 20px;

  font-size: 25px;

  color: #fff;
  background-color: #363a6d;
  border-bottom: 5px solid #4a5097;

  border-top: 0;
  border-right: 0;
  border-left: 0;

  cursor: pointer;

  transition: background-color 400ms;

  &:hover {
    background-color: #323665;
  }
`
