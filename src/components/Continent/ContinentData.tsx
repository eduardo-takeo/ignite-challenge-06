import { Flex, HStack, Text, useBreakpointValue } from "@chakra-ui/react";
import { Info } from "./Info";

interface ContinentDataProps {
  description: string;
  countries: number;
  languages: number;
  cities: number;
}

export function ContinentData({
  description,
  countries,
  languages,
  cities,
}: ContinentDataProps) {
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
      <Text fontSize={["18", "24"]} flex="1" mb={isWidescreen ? "" : "8"}>
        {description}
      </Text>
      <Flex flex="1" align="center" justify="center">
        <HStack spacing="8">
          <Info number={countries} label="países" />
          <Info number={languages} label="línguas" />
          <Info
            number={cities}
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
