import Image from 'next/image'
import Link from 'next/link'
import styles from "./ProductCard.module.css"


export default function ProductCard({product}) {
  return (
   <>
    <div className={styles.card}>
          <div className={styles.image}>
            <Image src={product.node.featuredImage.url} alt={product.node.featuredImage.alttext} fill={true} />
          </div>
        <div className={styles.content}>
          <small>
            <Link href={`products/${product.node.handle}/?productid=${product.node.id}`} className={styles.action}>{product.node.title}</Link>
          </small>
          <small>{product.node.priceRange.minVariantPrice.amount}</small>
        </div> 
      </div>
   </>
  )
}
