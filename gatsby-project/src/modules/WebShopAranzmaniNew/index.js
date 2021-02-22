import React, { useState } from 'react'
import {useStaticQuery, graphql, Link} from 'gatsby'
import Img from 'gatsby-image'
import styles from './style.module.css'

 
const WebShopAranzmaniNew = () => {
  const data = useStaticQuery(graphql`
    query {
        allContentfulAranzmani(filter: {node_locale: {eq: "en-US"}}) {
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
                fixed(width: 280) {
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
        <h1 className={styles.title}>Web shop - Aranžmani</h1>
        <li className={styles.list}>
          {data.allContentfulAranzmani.nodes.map(node => {
            return (
              <Link to={`/aranzmani/${node.flowerName}`}>
                <ul className={styles.category}>
                <span className={styles.imageStyle}><Img fixed={node.image.fixed} /></span>
                  <div className={styles.productInfo}>
                    <li className={styles.flower_name}>{node.flowerName}</li>
                    <li className={styles.flower_price}>{node.flowerPrice}</li>
                  </div>
                    {/* <span>{JSON.parse(node.flowerDescription.raw).content[0].content[0].value}</span> */}
                </ul>
              </Link>
            )
          })}
        </li>
      </section>
  )
}
 
export default WebShopAranzmaniNew