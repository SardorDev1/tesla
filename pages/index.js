import Accessories from "@/companents/Accessories"
import Header from "@/companents/Header"
import Model3 from "@/companents/Model3"
import ModelS from "@/companents/ModelS"
import ModelX from "@/companents/ModelX"

import Navbar from "@/companents/Navbar"
import SolarPanels from "@/companents/SolarPanels"
import SolarRoof from "@/companents/SolarRoof"
import Head from "next/head"
export default function Home() {

  return (
    <>


      <Head>

        <title>Tesla Company</title>
        <meta name="viewport" content="width=divice-width , initial-scale=1.0"  ></meta>

      </Head>
      <Navbar />
      <Header />

      <Model3 />

      <ModelS />
      <ModelX />
      <SolarRoof />
      <SolarPanels />
      <Accessories />
    </>
  )
}
