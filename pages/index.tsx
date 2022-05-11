import type { NextPage } from "next"
import Head from "next/head"
import { Fragment } from "react"
import Image from "next/image"
import Hero from "../components/home/Hero"
import styles from "../styles/Home.module.css"

const HomePage: NextPage = () => {
  return (
    <Fragment>
      <Hero />
    </Fragment>
  )
}

export default HomePage
