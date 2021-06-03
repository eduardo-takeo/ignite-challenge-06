import { Flex, Heading, Image, useBreakpointValue } from "@chakra-ui/react";

interface TypeProps {
  title: string;
  imageSrc: string;
  imageAlt?: string;
}

export function Type({ title, imageSrc, imageAlt = title }: TypeProps) {
  const isWidescreen = useBreakpointValue({
    base: false,
    md: true,
  });

  if (isWidescreen) {
    return (
      <Flex direction="column" align="center" justify="space-between" h="32">
        <Image src={imageSrc} alt={imageAlt} h="20" />
        <Heading fontSize="24">{title}</Heading>
      </Flex>
    );
  }

  return (
    <Flex align="center" p="8">
      <Image src="/ellipse.svg" alt={imageAlt} h="4" mr="4" />
      <Heading fontSize="18">{title}</Heading>
    </Flex>
  );
}
