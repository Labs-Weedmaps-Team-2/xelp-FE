import React from 'react'
import styled from 'styled-components'
import blackLogo from '../assets/img/blacklogo.png'

export const Footer = () => {
  return (
    <StyledFooter>
      <div className="container center">
        <div className="links">
          <a
            href="https://github.com/Labs-Weedmaps-Team-2/xelp-FE/blob/master/README.md#team"
            target="_blank"
            rel="noopener noreferrer"
          >
            Meet the Team
          </a>
          <a href="mailto:weedmaps.t2@gmail.com?subject=nightlyfe">Contact</a>
          <a href="www.third.com">Third</a>
          <a href="www.fourth.com">Fourth</a>
        </div>
        <img src={blackLogo} alt="black logo"/>
        {/* <a href="https://github.com/Labs-Weedmaps-Team-2">
          <i class="fab fa-github-square"></i>
        </a> */}
        <p>©2019 <span>Nightlyfe</span></p>
      </div>
    </StyledFooter>
  )
}

const StyledFooter = styled.footer`
  display: flex;
  align-items: end;
  justify-content: flex-end;
  height: 275px;
  border-top: 1px solid #e6e6e6;
  background: lightgray;
  .container {
    width: 100%;
    height: 80%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-flow: row-reverse;
    .links {
      display: flex;
      flex-flow: column;
      align-items: center;    
      a {
        font-family: 'Roboto', sans-serif;
        font-size: 1.5rem;
        margin-bottom: 10px;
      }
    }
    img {
      width: 150px;
      height: auto;
    }
    p {
      font-size: 1.5rem;
      margin-top: 5px;
    }
  }
`
