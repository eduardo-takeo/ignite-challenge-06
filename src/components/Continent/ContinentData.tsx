import { Flex, Text, useBreakpointValue } from "@chakra-ui/react";

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
        <Text>Hello</Text>
      </Flex>
    </Flex>
  );
}

//TODO:
//* Receive data from API
