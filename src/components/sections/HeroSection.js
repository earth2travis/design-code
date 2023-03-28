import React from "react"
import styled from "styled-components"
import PurchaseButton from "../buttons/PurchaseButton"
import { themes } from "../styles/ColorStyles"
import { H1, MediumText } from "../styles/TextStyles"
import { Link } from "gatsby"
import MockupAnimation from "../animations/MockupAnimation"

function HeroSection() {
  return (
    <Wrapper>
      <ContentWrapper>
        <TextWrapper>
          <Title>
            Getting <br />
            freaky with React apps
          </Title>
          <Description>
            Making sites your Momma loves. Crafting design and code. Building
            shit that solves problems.
          </Description>
          <Link to="/page-2">
            <PurchaseButton
              title="Start learning"
              subtitle="120+ hours of video"
            />
          </Link>
        </TextWrapper>
        <MockupAnimation />
      </ContentWrapper>
    </Wrapper>
  )
}

export default HeroSection

const Wrapper = styled.div`
  background: linear-gradient(180deg, #4316db 0%, #9076e7 100%);
  overflow: hidden;
`
const ContentWrapper = styled.div`
  max-width: 1234px;
  padding: 200px 30px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 360px auto;
`

const TextWrapper = styled.div`
  max-width: 360px;
  display: grid;
  gap: 30px;
`

const Title = styled(H1)`
  color: ${themes.dark.text1};
`
const Description = styled(MediumText)``
