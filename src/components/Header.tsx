import { Box, Flex, Image, Link } from "@chakra-ui/react";
import { ChevronLeftIcon } from "@chakra-ui/icons";

export function Header() {
  return (
    <Flex as="header" w="100%" h="24" align="center" justify="center">
      <Flex
        w="100%"
        maxWidth={1280}
        align="center"
        justify="space-between"
        px="4"
      >
        <Link href="/">
          <ChevronLeftIcon fontSize={30} />
        </Link>
        <Image src="/logo.svg" alt="Logo" w="44" />
        {/* TODO: See a better way to style */}
        <Box />
      </Flex>
    </Flex>
  );
}
