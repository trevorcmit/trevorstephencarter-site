import React from 'react'
import { graphql } from 'gatsby'
import Intro from '../components/Intro'
import PostList from '../components/PostList'
import SEO from '../components/SEO'
import Pagination from '../components/Pagination'
import Container from '../components/Container'
import { useSiteMetadata } from '../hooks/use-site-metadata'
import { startCase } from 'lodash'
import MDX from 'gatsby-theme-amsterdam/src/components/MDX'


const Title = styled.h1`
  font-weight: ${props => props.theme.fonts.boldWeight};
  line-height: 1.25;
  max-width: ${props => props.theme.sizes.maxWidthCentered};
  margin: 0 auto 1rem;
  font-size: 2rem;
  @media screen and (min-width: ${props => props.theme.responsive.small}) {
    font-size: 2.5rem;
  }
`

const PostsPage = ({ data, pageContext }) => {
    const { intro } = useSiteMetadata()
    const posts = data.allPost.edges
    const { landing } = useSiteMetadata()

    let ogImage
    try           { ogImage = posts[0].node.cover.childImageSharp.ogimg.src }
    catch (error) { ogImage = null }

    // const { introImageURL } = useSiteMetadata()
    // const { intro } = "Text from posts js"

    return (
      <>
          <SEO image={ ogImage } title={ startCase(pageContext.basePath) } />
          <Container fullWidth noPadding>
              {/* {intro && <Intro text={intro} context={pageContext} /> && <Image src={introImageURL} />} */}
              {intro && <Intro text={intro} context={pageContext} />}
              {posts.length > 0 && <PostList posts={posts} context={pageContext} />}
          </Container>
          <Pagination context={ pageContext } />
      </>
    )
}

export default PostsPage

export const postsQuery = graphql`
  query($skip: Int!, $limit: Int!) {
    allPost(sort: { fields: [date], order: DESC }, skip: $skip, limit: $limit) {
      edges {
        node {
          slug
          excerpt
          title
          tags
          date(formatString: "MMMM DD, YYYY")
          cover {
            childImageSharp {
              gatsbyImageData(
                width: 1000
                placeholder: BLURRED
                aspectRatio: 1.66
              )
              ogimg: resize(width: 1000) {
                src
              }
            }
          }
        }
      }
    }
  }
`
