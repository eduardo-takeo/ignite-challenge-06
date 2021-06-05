import { Box, Heading, HStack, Image, Text } from "@chakra-ui/react";

interface CardProps {
  city: string;
  country: string;
  imageUrl: string;
  iconUrl: string;
}

export function Card({ city, country, imageUrl, iconUrl }: CardProps) {
  return (
    <Box
      w="64"
      h="64"
      borderRadius={8}
      border="solid"
      borderWidth={1}
      borderColor="yellow.800"
    >
      <Image
        src={imageUrl}
        alt="image"
        w="100%"
        maxHeight="44"
        borderTopLeftRadius={8}
        borderTopRightRadius={8}
      />
      <HStack justify="space-between" align="center" p="4">
        <Box>
          <Heading fontSize="22">{city}</Heading>
          <Text fontSize="14">{country}</Text>
        </Box>
        <Image src={iconUrl} alt="flag" w="4" />
      </HStack>
    </Box>
  );
}

//TODO:
//* Receive correct icons and images
