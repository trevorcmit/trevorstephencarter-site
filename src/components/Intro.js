import React from 'react'
import styled from '@emotion/styled'
import { useSiteMetadata } from '../hooks/use-site-metadata'

const Wrapper = styled.div`
  max-width: ${props => props.theme.sizes.maxWidth};
  width: 100%;
  margin: 3rem auto 0;
  padding: 0 1.5rem;
  text-transform: ${props => (props.capitalize ? 'capitalize' : 'none')};
`

// text-align: left;
const Title = styled.h2`
  line-height: 1.25;
  text-align: right;
  font-size: 2em;
  @media screen and (min-width: ${props => props.theme.responsive.small}) {
    font-size: 2.5em;
  }
  @media screen and (min-width: ${props => props.theme.responsive.medium}) {
    max-width: 80%;
  }
`

const Intro = props => {
  const { introImageURL } = useSiteMetadata()

  return (
    <>
      {props.context.humanPageNumber===1 && (
        <Wrapper {...props}>
          <Title>{props.text}</Title>
          {/* <Image src={introImageURL} /> */}
        </Wrapper>
      )}
    </>
  )
}

export default Intro