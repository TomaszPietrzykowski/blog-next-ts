import React from "react"
import Image from "next/image"
import styles from "../../styles/Hero.module.css"

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.image}>
        <Image
          src="/images/site/author.jpeg"
          alt="portrait of the blog author"
          width={300}
          height={300}
        />
      </div>
      <h1>Hero section</h1>
      <p>litwo ojczyzno moja ty jestes jak zdrowie, ile cie trzeba cenic..</p>
    </section>
  )
}

export default Hero
