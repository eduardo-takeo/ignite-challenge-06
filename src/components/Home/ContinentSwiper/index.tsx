import { Box } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper/core";
import { SwiperItem } from "./SwiperItem";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";

// Install Swiper modules
SwiperCore.use([Navigation, Pagination, Autoplay]);

export function ContinentSwiper() {
  return (
    <Box maxWidth={1280} width="100%" mx="auto" mb="16">
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
      >
        <SwiperSlide>
          <SwiperItem
            title="África"
            description="O berço da civilização humana"
            imageSrc="/africa.jpg"
            imageAlt="Africa"
          />
        </SwiperSlide>

        <SwiperSlide>
          <SwiperItem
            title="América"
            description="Música, sabores e belas paisagens naturais"
            imageSrc="/america.jpg"
            imageAlt="America"
          />
        </SwiperSlide>

        <SwiperSlide>
          <SwiperItem
            title="Ásia"
            description="O maior continente"
            imageSrc="/asia.jpg"
            imageAlt="Asia"
          />
        </SwiperSlide>

        <SwiperSlide>
          <SwiperItem
            title="Europa"
            description="O continente mais antigo"
            imageSrc="/europe.jpg"
            imageAlt="Europe"
          />
        </SwiperSlide>

        <SwiperSlide>
          <SwiperItem
            title="Oceania"
            description="Natureza exuberante e diversidade cultural"
            imageSrc="/oceania.jpg"
            imageAlt="Oceania"
          />
        </SwiperSlide>
      </Swiper>
    </Box>
  );
}

//TODO:
//* Change arrows and bullets color to yellow
