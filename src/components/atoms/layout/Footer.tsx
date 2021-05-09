import styled from 'styled-components'

export const Footer = () => {
  return (
    <SFooter>&copy; 2021 test Inc.</SFooter>
  )
}

const SFooter = styled.footer`
  position: fixed;
  bottom: 0;
  width: 100%;
  color: #fff;
  background-color: #11999e;
  text-align: center;
  padding: 8px 0;
`
