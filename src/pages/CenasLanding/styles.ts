import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  height: 100%;
`

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;

  display: grid;
  grid-template:
    'header header header' 100px
    '...    main   ...' 100%
    '...    footer ...' 80px
    / 1fr 1100px 1fr;
`

export const Header = styled.header`
  grid-area: header;
  background-color: #dcdcdc;

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
`

export const Logo = styled.img`
  height: 45px;
`

export const Main = styled.main`
  grid-area: main;
  background-color: blue;
`

export const Footer = styled.footer`
  grid-area: footer;
  background-color: yellow;
`
