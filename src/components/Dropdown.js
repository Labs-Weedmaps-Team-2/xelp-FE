import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

export const Dropdown = ({ items, handleClick }) => {
  const renderItems = items => {
    return items.map((item, index) => (
      <li key={index} value={item.title || item.text}>
        {item.title || item.text}
      </li>
    ))
  }
  return <List onClick={handleClick}>{renderItems(items)}</List>
}

Dropdown.propTypes = {
  items: PropTypes.array,
}

const List = styled.ul`
  position: absolute;
  top: 38px;
  width: 350px;
  left: 0px;
  border-top: 1px solid gray;
  li {
    font-size: 1.4rem;
    font-weight: thin;
    letter-spacing: 1.5px;
    line-height: 2rem;
    padding: 15px;
    border-bottom: 1px solid powerblue;
    background-color: white;
    color: dodgerblue;
    cursor: pointer;
    transition: all 300ms ease;
    &:hover {
      color: orangered;
      background-color: #e8f4fb;
    }
  }
`
