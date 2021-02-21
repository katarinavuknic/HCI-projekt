import React, { useState } from 'react'
import {useStaticQuery, graphql, Link} from 'gatsby'
import Img from 'gatsby-image'
import styles from './style.module.css'

 
const WebShopFlowerBoxesNew = () => {
  const data = useStaticQuery(graphql`
    query {
        allContentfulFlowerBox(filter: {node_locale: {eq: "en-US"}}) {
            nodes {
              flowerName
              internal {
                content
              }
              flowerDescription {
                raw
              }
              flowerPrice
              image  {
                fixed(width: 300) {
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
        <h1 className={styles.title}>Web shop - Cvjetne kutije</h1>
        <li className={styles.list}>
          {data.allContentfulFlowerBox.nodes.map(node => {
            return (
              <Link to={`/cvjetnekutije/${node.flowerName}`}>
                <ul className={styles.category}>
                  <Img fixed={node.image.fixed} />
                  <li className={styles.flower_name}>{node.flowerName}</li>
                  <li className={styles.flower_price}>{node.flowerPrice}</li>
                    
                    {/* <span>{JSON.parse(node.flowerDescription.raw).content[0].content[0].value}</span> */}
                </ul>
              </Link>
            )
          })}
        </li>
      </section>
  )
}
 
export default WebShopFlowerBoxesNew