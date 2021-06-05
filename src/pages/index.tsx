import Head from "next/head";
import { Divider, Flex, Heading } from "@chakra-ui/react";
import { ContinentSwiper } from "../components/Home/ContinentSwiper";
import { Header } from "../components/Header";
import { Hero } from "../components/Home/Hero";
import { TravelTypes } from "../components/Home/TravelTypes";
import { GetStaticProps } from "next";
import { api } from "../services/api";

interface HomeProps {
  continents: Continent[];
}

interface Continent {
  id: string;
  title: string;
  subtitle: string;
  backgroundUrl: string;
}

export default function Home({ continents }: HomeProps) {
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
        <ContinentSwiper continents={continents} />
      </Flex>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await api.get("/continents");
  const continents = response.data;

  return {
    props: { continents },
    revalidate: 60 * 60 * 24,
  };
};

//TODO:
//* Add divider
