import { useRouter } from "next/router";
import { Flex, Image, Link } from "@chakra-ui/react";
import { ChevronLeftIcon } from "@chakra-ui/icons";

export function Header() {
  const { pathname } = useRouter();

  return (
    <Flex as="header" w="100%" h="24" align="center" justify="center">
      <Flex w="100%" maxWidth={1280} align="center" px="4">
        {pathname !== "/" && (
          <Link href="/">
            <ChevronLeftIcon fontSize={30} />
          </Link>
        )}
        <Link href="/" mx="auto">
          <Image src="/icons/logo.svg" alt="Logo" w="44" />
        </Link>
      </Flex>
    </Flex>
  );
}
