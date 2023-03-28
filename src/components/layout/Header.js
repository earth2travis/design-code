import React, { useState } from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import MenuButton from "../buttons/MenuButton"
import { menuData } from "../../data/menuData"
import MenuTooltip from "../tooltips/MenuTooltip"
import SearchTooltip from "../tooltips/SearchTooltip"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  function handleClick(event, type) {
    // This if statement is sus
    if (type === "search") {
      setIsOpen(true)
    } else {
      setIsOpen(!isOpen)
    }
    event.preventDefault()
    console.log(event)
  }

  return (
    <Wrapper>
      <Link to="/">
        <img src="/images/logos/logo.svg" alt="logo" />
      </Link>
      <MenuWrapper count={menuData.length}>
        {menuData.map((item, index) =>
          item.link === "/account" || "/search" ? (
            <MenuButton
              item={item}
              key={index}
              onClick={event => handleClick(event)}
            />
          ) : (
            <MenuButton item={item} key={index} />
          )
        )}
      </MenuWrapper>
      <SearchTooltip isOpen={isOpen} />
      <MenuTooltip isOpen={isOpen} />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: absolute;
  top: 60px;
  display: grid;
  grid-template-columns: 44px auto;
  width: 100%;
  justify-content: space-between;
  padding: 0 30px;
  align-items: center;
`

const MenuWrapper = styled.div`
  display: grid;
  gap: 30px;
  grid-template-columns: repeat(${props => props.count}, auto);
`
