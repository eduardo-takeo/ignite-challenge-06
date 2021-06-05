import { Flex, HStack, Text, useBreakpointValue } from "@chakra-ui/react";
import { Info } from "./Info";

interface ContinentDataProps {
  description: string;
}

export function ContinentData({ description }: ContinentDataProps) {
  const isWidescreen = useBreakpointValue({
    base: false,
    md: true,
  });

  return (
    <Flex
      spacing="28"
      maxWidth={1280}
      mx="auto"
      py="24"
      px="8"
      direction={isWidescreen ? "row" : "column"}
      justify="space-between"
    >
      <Text fontSize="24" flex="1">
        {description}
      </Text>
      <Flex flex="1" align="center" justify="center">
        <HStack spacing="8">
          <Info number={50} label="países" />
          <Info number={60} label="línguas" />
          <Info
            number={27}
            label="cidades 100+"
            tooltip="Número de cidades nesse continente dentre as 100 cidades mais visitadas no mundo"
          />
        </HStack>
      </Flex>
    </Flex>
  );
}

//TODO:
//* Receive data from API
