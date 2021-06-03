import {
  Box,
  Heading,
  Image,
  Text,
  useBreakpointValue,
  VStack,
} from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper/core";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";

// Install Swiper modules
SwiperCore.use([Navigation, Pagination]);

export function ContinentSwiper() {
  const isWidescreen = useBreakpointValue({
    base: false,
    md: true,
  });

  return (
    <Box maxWidth={1280} width="100%" mx="auto" mb="16">
      <Swiper
        navigation={true}
        pagination={true}
        className="mySwiper"
        slidesPerView={1}
      >
        <SwiperSlide>
          <Box position="relative">
            <Image src="/europe.png" alt="Europe" w="100%" minHeight={350} />
            <VStack
              color="gray.50"
              position="absolute"
              top="50%"
              left="50%"
              transform="translate(-50%, -50%)"
            >
              <Heading fontSize={isWidescreen ? 48 : 24}>Europa</Heading>
              <Text fontSize={isWidescreen ? 24 : 14}>
                O continente mais antigo
              </Text>
            </VStack>
          </Box>
        </SwiperSlide>
        {/* <SwiperSlide>Slide 2</SwiperSlide> */}
      </Swiper>
    </Box>
  );
}

//TODO:
//* Change arrows and bullets color to yellow
//* Componentize each SwiperSlide
//* Position text centrally
//* Add new items and fix pagination
//* Adjust responsiveness
