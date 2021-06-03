import { Divider, Flex, Heading } from "@chakra-ui/react";
import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { TravelTypes } from "../components/TravelTypes";

export default function Home() {
  return (
    <Flex as="main" direction="column">
      <Header />
      <Hero />
      <TravelTypes />
      <Divider />
      <Heading mx="auto" textAlign="center" my="16">
        Vamos nessa? <br />
        Então escolha seu continente
      </Heading>
    </Flex>
  );
}

//TODO:
// - Add divider
