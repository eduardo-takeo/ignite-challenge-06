import { Flex, Wrap } from "@chakra-ui/react";
import { Type } from "./Type";

export function TravelTypes() {
  return (
    <Flex as="section" align="center" justify="center" h="96">
      <Wrap align="center" justify="space-evenly" w="100%" maxWidth={1280}>
        <Type
          title="vida noturna"
          imageSrc="/icons/nightlife.svg"
          imageAlt="Vida noturna"
        />
        <Type title="praia" imageSrc="/icons/beach.svg" imageAlt="Praia" />
        <Type title="moderno" imageSrc="/icons/modern.svg" imageAlt="Moderno" />
        <Type
          title="clássico"
          imageSrc="/icons/classic.svg"
          imageAlt="Clássico"
        />
        <Type
          title="e mais..."
          imageSrc="/icons/globe.svg"
          imageAlt="E mais..."
        />
      </Wrap>
    </Flex>
  );
}
