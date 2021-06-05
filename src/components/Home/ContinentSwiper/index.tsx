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

interface ContinentSwiperProps {
  continents: Continent[];
}

interface Continent {
  id: string;
  title: string;
  subtitle: string;
  backgroundUrl: string;
}

export function ContinentSwiper({ continents }: ContinentSwiperProps) {
  return (
    <Box maxWidth={1280} width="100%" mx="auto" mb="16">
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
      >
        {continents?.map(({ id, title, subtitle, backgroundUrl }) => (
          <SwiperSlide key={id}>
            <SwiperItem
              id={id}
              title={title}
              description={subtitle}
              imageSrc={backgroundUrl}
              imageAlt={title}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
}

//TODO:
//* Change arrows and bullets color to yellow
