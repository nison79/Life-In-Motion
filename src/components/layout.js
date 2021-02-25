import React from "react"
import { Link } from "gatsby"

import AniLink from "gatsby-plugin-transition-link/AniLink";


import styled from "styled-components"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  if (isRootPath) {
    header = (
      <Heading className="main-heading">
        <AniLink paintDrip to="/" duration={2}>{title}</AniLink>
      </Heading>
    )
  } else {
    header = (
      <AniLink paintDrip color="lightblue" className="header-link-home" to="/">
        {title}
      </AniLink>
    )
  }

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <header className="global-header">{header}</header>
      <main>{children}</main>
      <Footer>
        <FooterText1>
          © {new Date().getFullYear()}, Built by
          {` `}
        </FooterText1>
        <FooterText href="https://www.gatsbyjs.com">George Nikoglou
        </FooterText>
      </Footer>
    </div>
  )
}

export default Layout

const Heading = styled.h1`
  font-size:7rem;
  letter-spacing:-5px;
  line-height:6rem;
  @media(max-width:500px){
    font-size:3rem;
    letter-spacing:0px;
    line-height:2.5rem;
  }
`

const Footer = styled.footer`
  display: grid;
  place-content:center;
  
  
`

const FooterText = styled.a`
  font-size:0.7rem;
`

const FooterText1 = styled.a`
  font-size:0.7rem;
  color:black;
`
