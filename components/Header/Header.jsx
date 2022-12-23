import Link from "next/link";
import styles from "./Header.module.css"
export default function Header() {
  return (
    <>
    <header className={styles.header}>
     <nav>
      <Link href="/" className={styles.logo}>Wuden</Link>
      
     </nav>
    </header>
   

    </>
  )
}
