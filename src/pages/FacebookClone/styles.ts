import styled from 'styled-components'

export const Container = styled.div``

export const Header = styled.header`
  height: 80px;
  padding: 0 64px;

  background: linear-gradient(to bottom, #3b5998, #3b5998);
  color: #fff;

  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Logo = styled.h1`
  font-size: 32px;
  font-weight: 800;
`

export const FormHeader = styled.form`
  display: flex;
  align-items: center;
`

export const InputBlock = styled.div`
  display: flex;
  flex-direction: column;

  margin: 0 8px;
`

export const Label = styled.label`
  font-size: 14px;
  margin-bottom: 4px;

  &.invisible {
    opacity: 0;
  }
`

export const Input = styled.input`
  height: 28px;
  width: 156px;

  font-size: 16px;

  padding: 5px;
  border: 1px solid rgba(0, 0, 0, 0.6);
`

export const SubmitButtonHeader = styled.button`
  height: 28px;
  padding: 3px 5px;

  background-color: #3a6cd6;
  color: #fff;

  border: 1px solid rgba(0, 0, 0, 0.3);

  font-size: 15px;

  cursor: pointer;

  transition: 300ms background-color;

  &:hover {
    background-color: #1f4ba6;
  }
`

export const Main = styled.main`
  display: flex;
  align-items: flex-start;

  padding: 24px 64px 0;

  background: linear-gradient(to bottom, #fff, #d3d8e8);
`

export const MapSection = styled.section`
  width: 100%;
  height: 100%;

  margin-right: 16px;
`

export const Description = styled.h4``

export const MapImg = styled.img`
  margin: 12px 0;
  width: 600px;
`

export const FormSection = styled.section`
  width: 100%;
  height: 100%;
`

export const Title = styled.h2`
  font-size: 34px;
  font-weight: 800;
`

export const SubTitle = styled.h3`
  font-size: 24px;
  margin-top: -8px;
`

export const Form = styled.form``
