import React from 'react'
import styled from 'styled-components'
import blackLogo from '../assets/img/blacklogo.png'

export const Footer = () => {
  return (
    <StyledFooter>
      <div className="container center">
        <a href=""><p>Meet the Team</p></a>
        <img src={blackLogo} />
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
  align-items: bottom;
  justify-content: center;
  height: 300px;
  border-top: 1px solid #e6e6e6;
  background: lightgray;
  .container {
    width: 100%;
    height: 80%;
    display: flex;
    align-items: center;
    flex-flow: column;
    img {
      width: 150px;
      height: auto;
      margin-top: 20px;
    }
    a {
      margin-top: 20px;
      i {
      font-size: 3rem;
      }
    }
    p{
      margin-top: 20px;
    } 
  }
`
