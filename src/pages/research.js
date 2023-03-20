import React from 'react'
import Container from 'gatsby-theme-amsterdam/src/components/Container'
import MDX from 'gatsby-theme-amsterdam/src/components/MDX'
import SEO from 'gatsby-theme-amsterdam/src/components/SEO'
import styled from '@emotion/styled'


const Title = styled.h2`
  font-weight: ${props => props.theme.fonts.boldWeight};
  line-height: 1.25;
  max-width: ${props => props.theme.sizes.maxWidthCentered};
  margin: 0 auto 1rem;
  font-size: 2rem;
  @media screen and (min-width: ${props => props.theme.responsive.small}) {
    font-size: 2.5rem;
  }
`

const Content = styled.div`
  margin: 0 auto;
  max-width: ${props => props.theme.sizes.maxWidthCentered};
  p {
    line-height: 1.5;
    margin: 0 0 1.75rem;
  }
  a {
    transition: 0.3s color;
    color: ${props => props.theme.colors.secondary};
    text-decoration: underline;
    &:hover {
      color: ${props => props.theme.colors.highlight};
    }
    @media (hover: none) {
      color: ${props => props.theme.colors.secondary} !important;
    }
  }
  code {
    font-family: ${props => props.theme.fonts.monospace};
    font-size: 0.9rem;
    padding: 0.25rem;
    background: ${props => props.theme.colors.code};
    color: ${props => props.theme.colors.text};
    border-radius: 0.3em;
  }
`

{/* <p>
            My research interests lie in the cross-section between fields. With a background in both Computer Science 
            and Literature, I find ways that the two areas can inform each other. Here are a few projects I am currently
            investigating:
        </p> */}
        {/* <li>Explainable-AI approaches to analyzing media such as book covers</li>
                <li>Using computer vision to analyze aesthetic features in film</li>
                <li>Defining quantative and ethical measures for AI authorship of fiction</li> */}

const ResearchPage = ({ data }) => {
  return (
    <Container>
      <SEO title="Research" description="Trevor Stephen Carter Research" />
      <Title>Research</Title>
    </Container>
  )
}

export default ResearchPage

// import React from 'react'
// import { graphql } from 'gatsby'
// import styled from '@emotion/styled'
// import Container from 'gatsby-theme-amsterdam/src/components/Container'
// import MDX from 'gatsby-theme-amsterdam/src/components/MDX'
// import SEO from 'gatsby-theme-amsterdam/src/components/SEO'


// const Title = styled.h1`
//   font-weight: ${props => props.theme.fonts.boldWeight};
//   line-height: 1.25;
//   max-width: ${props => props.theme.sizes.maxWidthCentered};
//   margin: 0 auto 1rem;
//   font-size: 2rem;
//   @media screen and (min-width: ${props => props.theme.responsive.small}) {
//     font-size: 2.5rem;
//   }
// `

// const PageTemplate = ({ data }) => {
//   let ogImage

//   try {
//     ogImage = data.page.cover.childImageSharp.ogimg.src
//   } catch (error) {
//     ogImage = null
//   }

//   return (
//     <>
//       <SEO
//         title={data.page.title}
//         description={data.page.description}
//         image={ogImage}
//       />
//       <Container>
//         <Title>{data.page.title}</Title>
//         {/* <MDX content={data.page.body} /> */}
//       </Container>
//     </>
//   )
// }

// export default PageTemplate

// export const pageQuery = graphql`
//   query($slug: String!) {
//     page(slug: { eq: $slug }) {
//       body
//       title
//       description
//       slug
//       cover {
//         childImageSharp {
//           ogimg: resize(width: 1000) {
//             src
//           }
//         }
//       }
//     }
//   }
// `
