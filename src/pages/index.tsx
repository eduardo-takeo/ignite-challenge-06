import Head from "next/head";
import { Divider, Flex, Heading } from "@chakra-ui/react";
import { ContinentSwiper } from "../components/Home/ContinentSwiper";
import { Header } from "../components/Header";
import { Hero } from "../components/Home/Hero";
import { TravelTypes } from "../components/Home/TravelTypes";

export default function Home() {
  return (
    <>
      <Head>
        <title>worldtrip | Home</title>
      </Head>

      <Flex as="main" direction="column">
        <Header />
        <Hero />
        <TravelTypes />
        <Divider />
        <Heading
          mx="auto"
          textAlign="center"
          my="16"
          fontSize={["20", "28", "36"]}
        >
          Vamos nessa? <br />
          Então escolha seu continente
        </Heading>
        <ContinentSwiper />
      </Flex>
    </>
  );
}

//TODO:
//* Add divider
