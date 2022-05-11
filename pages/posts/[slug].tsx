import type { NextPage } from "next"
import Head from "next/head"
import styles from "../../styles/Home.module.css"

const PostDetailPage: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Post title</title>
        <meta name="description" content="Boilerplate blog code" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Post Details</h1>
        <br />
        <p>post id</p>
      </main>
    </div>
  )
}

export default PostDetailPage
