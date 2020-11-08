import styled from 'styled-components'

export const Container = styled.div``

export const Header = styled.header`
  padding: 12px 0;

  background: linear-gradient(to bottom, #3b5998, #3b5998);
  color: #fff;

  display: flex;
  align-items: center;
  justify-content: center;
`

export const HeaderWrapper = styled.div`
  width: 100%;
  max-width: 1100px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 750px) {
    flex-direction: column;
  }
`

export const Logo = styled.h1`
  font-size: 32px;
  font-weight: 800;

  @media (max-width: 750px) {
    margin-bottom: 12px;
  }
`

export const FormHeader = styled.form`
  display: flex;
  align-items: center;

  @media (max-width: 750px) {
    flex-direction: column;
  }
`

export const InputBlock = styled.div`
  display: flex;
  flex-direction: column;

  margin: 0 8px;

  @media (max-width: 750px) {
    align-items: center;

    margin: 8px 0;
  }
`

export const Label = styled.label`
  font-size: 14px;
  margin-bottom: 4px;

  &.invisible {
    opacity: 0;
  }
`

export const InputHeader = styled.input`
  height: 28px;
  width: 156px;

  font-size: 16px;

  padding: 5px;
  border: 1px solid rgba(0, 0, 0, 0.6);

  @media (max-width: 750px) {
    width: 256px;
  }
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

  @media (max-width: 750px) {
    padding: 4px 16px;
    margin-top: -12px;
  }
`

export const Main = styled.main`
  background: linear-gradient(to bottom, #fff, #d3d8e8);

  display: flex;
  align-items: center;
  justify-content: center;
`

export const MainWrapper = styled.div`
  width: 100%;
  max-width: 1100px;

  margin: 24px 0 0;

  display: flex;
  align-items: flex-start;

  @media (max-width: 750px) {
    padding: 24px 12px 0;
  }
`

export const MapSection = styled.section`
  width: 100%;
  height: 100%;

  margin-right: 16px;

  @media (max-width: 1030px) {
    display: none;
  }
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
  margin: -8px 0 20px;
`

export const Form = styled.form`
  select + select {
    margin-left: 8px;
  }
`

export const InputLine = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 8px;
`

export const Input = styled.input`
  width: 100%;
  height: 40px;

  padding: 0 8px;
  margin: 4px 0;

  border-radius: 4px;

  border: 1px solid rgba(0, 0, 0, 0.2);
`

export const Legend = styled.legend`
  color: #90949c;

  margin: 24px 0 10px;
`

export const Select = styled.select`
  height: 40px;

  font-size: 16px;

  border-radius: 4px;
  border: 1px solid rgba(0, 0, 0, 0.2);
`

export const Option = styled.option``

export const RadiosWrapper = styled.div`
  display: flex;
  align-items: center;

  div + div {
    margin-left: 12px;
  }
`

export const RadioInputDiv = styled.div`
  display: flex;
  align-items: center;

  label {
    font-size: 16px;
  }
`

export const RadioInput = styled.input`
  transform: scale(1.2) translateY(-2px);
  margin-right: 6px;
`

export const SubmitButton = styled.button`
  background: linear-gradient(#67ae55, #578843);
  background-color: #69a74e;
  color: #fff;

  border: 1px solid rgba(0, 0, 0, 0.08);
  border-radius: 5px;

  padding: 10px;
  margin: 20px 0 40px;

  font-size: 18px;

  cursor: pointer;

  transition: 300ms background-color;

  &:hover {
    background-color: #67ae55;
    background: linear-gradient(#81d66c, #75b85b);
  }
`

export const Footer = styled.div`
  padding: 0 64px;

  @media (max-width: 550px) {
    padding: 0 12px;
  }
`

export const FooterLineOne = styled.div`
  border-bottom: 1px solid #ccc;
  padding: 8px 0;

  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 8px;

  @media (max-width: 1050px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 550px) {
    grid-template-columns: repeat(2, 1fr);
  }
`

export const A = styled.a`
  pointer-events: none;
  color: #385898;
  font-size: 14px;
`

export const FooterLine = styled.div`
  margin: 8px 0;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 8px;

  @media (max-width: 550px) {
    grid-template-columns: repeat(1, 1fr);
  }
`
