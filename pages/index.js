import Head from 'next/head'
import Image from 'next/image'
import Button from '../src/Components/Button'
import IconButtonWithText from '../src/Components/IconButtonWithText'
import styles from '../styles/Home.module.css'
import PlayIcon from '../public/play.svg';
import { CardBody1, Card, Body2 } from '../src/Components/Card'
import CardContainer from '../src/Components/CardContainer'
import Navbar from '../src/Components/Navbar'
import MidSection from '../src/Components/MidSection'
import Carousel from '../src/Components/Carousel'
import BottomSection from '../src/Components/BottomSection'

export default function Home() {
  return (
    <>
      {/* <Button size="large" color="white" text="Get Started Now" /> */}
      {/* <IconButtonWithText text={"THis is them"} Icon={PlayIcon} /> */}
      {/* <CardContainer /> */}
      <Navbar />
      <MidSection />
      {/* <Carousel /> */}
      <BottomSection />
    </>
  )
}
