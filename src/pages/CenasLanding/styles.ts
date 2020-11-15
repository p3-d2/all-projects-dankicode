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
  background-color: red;
`

export const Main = styled.main`
  grid-area: main;
  background-color: blue;
`

export const Footer = styled.footer`
  grid-area: footer;
  background-color: yellow;
`
