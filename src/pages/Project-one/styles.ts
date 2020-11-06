import styled, { css } from 'styled-components'
import backgroundImage from '../../assets/header_bg.png'
import {
  FiArrowDown,
  SiHtml5,
  SiCss3,
  SiJavascript,
  FiHeart
} from '../../styles/icons'

export const Container = styled.div``

export const Header = styled.header`
  height: 70px;
  padding: 24px;
  background-color: #212343;

  display: flex;
  align-items: center;

  @media (max-width: 900px) {
    justify-content: center;
  }
`

export const Logo = styled.a``

export const LogoImg = styled.img``

export const Banner = styled.div`
  height: max(80vh, 510px);
  padding: 48px;
  background-image: url(${backgroundImage});

  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 900px) {
    height: calc(
      max(85vh, 535px) + 250px + 20px + 48px
    ); /* Form height + InfoBox height + InfoBox margin-bottom + Banner padding */
    flex-direction: column;
    justify-content: center;
  }
`

export const InfoBox = styled.div`
  height: 250px;
  width: min(500px, 40%);
  min-width: 400px;

  background-color: rgba(33, 35, 67, 0.7);
  color: #fff;

  @media (max-width: 900px) {
    margin-bottom: 20px;
  }

  @media (max-width: 400px) {
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
  height: max(85vh, 535px);
  padding: 16px;

  background-color: #fff;

  border: 12px solid rgba(120, 120, 120, 0.5);
  background-clip: padding-box;

  z-index: 5;

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

export const Section = styled.section`
  position: relative;

  width: 100%;
  padding: 32px;

  background-color: #dddddd;
  color: #212343;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  &.white {
    background-color: #fff;
  }
`

export const SectionContent = styled.div`
  width: 100%;
  max-width: 900px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`

export const SectionTitle = styled.h3`
  font-size: 28px;
  font-weight: 800;

  margin: 30px 0;
`

export const SectionText = styled.p`
  margin: 0 0 40px;
  text-align: justify;
`

export const ArrowDownIconDiv = styled.div`
  position: absolute;
  left: 50%;
  bottom: -25px;
  transform: translateX(-50%);

  z-index: 10;

  width: 50px;
  height: 50px;

  border-radius: 50%;

  background-color: #212343;

  display: flex;
  align-items: center;
  justify-content: center;
`

export const ArrowDownIcon = styled(FiArrowDown)``

export const CardList = styled.ul`
  width: 100%;

  margin: 40px 0 0;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 24px;

  @media (max-width: 750px) {
    grid-template-columns: 1fr;
  }
`

export const CardListItem = styled.li`
  width: 100%;
  min-height: 260px;

  padding: 20px;

  text-align: justify;
  font-size: 12px;

  border-radius: 20px;

  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);

  cursor: pointer;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`

const iconCSS = css`
  width: 84px;
  margin-bottom: 16px;
`

export const CardListItemHtmlIcon = styled(SiHtml5)`
  ${iconCSS}
`

export const CardListItemContent = styled.p``

export const CardListItemCssIcon = styled(SiCss3)`
  ${iconCSS}
`

export const CardListItemJsIcon = styled(SiJavascript)`
  ${iconCSS}
`

export const Footer = styled.footer`
  margin-top: 100px;

  padding: 14px;

  border-top: 2px solid #dddddd;

  display: flex;
  flex-direction: column;
  align-items: center;
`

export const FooterTitle = styled.h4``

export const FooterSubTitle = styled.h6``

export const HearthIcon = styled(FiHeart)`
  @keyframes heart {
    to {
      transform: translateY(5px);
    }
    from {
      transform: translateY(0px);
    }
  }

  animation: 300ms ease-in infinite alternate heart;
`

export const Strong = styled.a`
  font-weight: 800;

  margin: 0 8px;
  cursor: pointer;
`
