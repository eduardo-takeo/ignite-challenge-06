import { Box, Heading, Image, Text, VStack } from "@chakra-ui/react";

interface SwiperItemProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt?: string;
}

export function SwiperItem({ title, description, imageSrc, imageAlt = title }) {
  return (
    <Box>
      <Image
        src={imageSrc}
        alt={imageAlt}
        w="100%"
        minHeight={350}
        maxHeight={500}
        filter="brightness(0.5)"
      />
      <VStack
        color="gray.50"
        position="absolute"
        top="50%"
        left="50%"
        transform="translate(-50%, -50%)"
        textAlign="center"
      >
        <Heading fontSize={[24, 32, 48]}>{title}</Heading>
        <Text fontSize={[14, 18, 24]}>{description}</Text>
      </VStack>
    </Box>
  );
}
