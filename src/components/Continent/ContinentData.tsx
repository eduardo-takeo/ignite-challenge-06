import { InfoIcon } from "@chakra-ui/icons";
import {
  Box,
  Flex,
  Heading,
  HStack,
  Text,
  Tooltip,
  useBreakpointValue,
} from "@chakra-ui/react";

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
          <Box textAlign="center">
            <Heading fontSize="48" color="yellow.800">
              50
            </Heading>
            <Heading fontSize="24">países</Heading>
          </Box>
          <Box textAlign="center">
            <Heading fontSize="48" color="yellow.800">
              60
            </Heading>
            <Heading fontSize="24">línguas</Heading>
          </Box>
          <Box textAlign="center">
            <Heading fontSize="48" color="yellow.800">
              27
            </Heading>
            <Heading fontSize="24">
              cidades 100+
              <Tooltip label="Número de cidades nesse continente dentre as 100 cidades mais visitadas no mundo">
                <InfoIcon w={4} ml="2" color="gray.400" />
              </Tooltip>
            </Heading>
          </Box>
        </HStack>
      </Flex>
    </Flex>
  );
}

//TODO:
//* Receive data from API
