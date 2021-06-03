import { Flex } from "@chakra-ui/react";
import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { TravelTypes } from "../components/TravelTypes";

export default function Home() {
  return (
    <Flex as="main" direction="column">
      <Header />
      <Hero />
      <TravelTypes />
    </Flex>
  );
}
