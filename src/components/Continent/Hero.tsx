import { Flex, Text, useBreakpointValue } from "@chakra-ui/react";

interface HeroProps {
  title: string;
  imageUrl: string;
}

export function Hero({ title, imageUrl }: HeroProps) {
  const isWidescreen = useBreakpointValue({
    base: false,
    md: true,
  });

  return (
    <Flex
      as="section"
      backgroundImage={`url(${imageUrl})`}
      backgroundRepeat="no-repeat"
      backgroundPosition="center"
      backgroundSize="cover"
      h={["300", "300", "500"]}
      align={isWidescreen ? "flex-end" : "center"}
      justify={isWidescreen ? "flex-start" : "center"}
    >
      <Text color="gray.50" fontSize="48" fontWeight="semibold" mx="24" my="12">
        {title}
      </Text>
    </Flex>
  );
}
