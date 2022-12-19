import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import styles from "./ProductCard.module.css"


export default function ProductCard({product}) {
  return (
   <>
   <div className={styles.card} role="listitem" key={product.id}>
        <div className={styles.image}>
          <Image src={product.image} alt={product.imageAlt} fill={true} />
        </div>
      <div className={styles.content}>
        <small>
          <Link href={`/${product.handle}`} className={styles.action}>{product.title}</Link>
        </small>
        <small>{product.price}</small>
      </div> 
      <button className={styles.cartbtn}>Add to Cart</button> 
    </div>
   </>
  )
}
