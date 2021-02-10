import React from 'react'
import {useStaticQuery, graphql, Link} from 'gatsby'
import Img from 'gatsby-image'
import styles from './style.module.css'
 
const BlogContainers = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost {
        nodes {
          summary {
            internal {
              content
            }
          }
          body {
            raw
          }
          title
          slug
          updatedAt
          coverImage {
            fixed(width: 400) {
              src
              srcSet
              srcSetWebp
              srcWebp
              width
              height
              base64
              aspectRatio
            }
          }
        }
      }
    }`)
 
    return (
      <section className={styles.container}>
        <h2 className={styles.h2}>Dobrodošli na naš blog!</h2>
        <li className={styles.list}>
          {data.allContentfulBlogPost.nodes.map(node => {
            return (
              <Link to={`/posts/${node.slug}`}>
                <ul>
                  <Img fixed={node.coverImage.fixed} />
                  <h3>{node.title}</h3>
                  <span>{node.summary.internal.content}</span>
                </ul>
              </Link>
            )
          })}
        </li>
      </section>
  )
}
 
export default BlogContainers