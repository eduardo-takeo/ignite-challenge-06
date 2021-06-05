import {
  Box,
  Flex,
  Heading,
  Image,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";

export function Hero() {
  const isWidescreen = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <Box
      as="section"
      backgroundImage="url(/background.png)"
      backgroundSize="cover"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      h="96"
    >
      <Flex
        maxWidth={1280}
        mx="auto"
        align="center"
        justify="space-between"
        alignSelf="center"
        p={isWidescreen ? "16" : "8"}
        h="100%"
      >
        <Flex direction="column" w="lg" color="gray.50">
          <Heading fontSize={isWidescreen ? "32" : "24"}>
            5 Continentes, <br /> infinitas possibilidades
          </Heading>
          <Text fontSize={isWidescreen ? "20" : "16"} mt="8">
            Chegou a hora de tirar do papel a viagem que você sempre sonhou.
          </Text>
        </Flex>
        {isWidescreen && (
          <Image
            src="/airplane.png"
            alt="Airplane"
            position="relative"
            bottom="-16"
          />
        )}
      </Flex>
    </Box>
  );
}
