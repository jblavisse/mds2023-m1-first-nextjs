import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <nav>
        <Link href="/blog/3">L'article numéro 3</Link>
      </nav>
    </div>
  )
}
