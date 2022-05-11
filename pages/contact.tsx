import type { NextPage } from "next"
import Head from "next/head"
import styles from "../styles/Home.module.css"

const ContactPage: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Contact</title>
        <meta name="description" content="Boilerplate blog code" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Contact Page</h1>
        <br />
        <p>content coming soon</p>
      </main>
    </div>
  )
}

export default ContactPage
