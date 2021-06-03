import { Flex, Heading, Image } from "@chakra-ui/react";

interface TypeProps {
  title: string;
  imageSrc: string;
  imageAlt?: string;
}

export function Type({ title, imageSrc, imageAlt = title }: TypeProps) {
  return (
    <Flex direction="column" align="center" justify="space-between" h="32">
      <Image src={imageSrc} alt={imageAlt} h="20" />
      <Heading fontSize="24">{title}</Heading>
    </Flex>
  );
}
