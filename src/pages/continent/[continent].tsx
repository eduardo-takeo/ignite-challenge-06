import Head from "next/head";
import { useRouter } from "next/router";
import { Box, Heading, useBreakpointValue, Wrap } from "@chakra-ui/react";
import { Header } from "../../components/Header";
import { Hero } from "../../components/Continent/Hero";
import { ContinentData } from "../../components/Continent/ContinentData";
import { Card } from "../../components/Continent/Card";
import { GetStaticPaths, GetStaticProps } from "next";
import { api } from "../../services/api";

interface ContinentProps {
  continent: Continent;
}

interface Continent {
  id: string;
  title: string;
  backgroundUrl: string;
  description: string;
  countries: number;
  cities: number;
  languages: number;
  mostVisitedCities: mostVisitedCity[];
}

interface mostVisitedCity {
  id: string;
  name: string;
  originCountry: string;
  thumbnail: string;
  flagIcon: string;
}

export default function Continent({ continent }: ContinentProps) {
  const {
    id,
    title,
    backgroundUrl,
    description,
    countries,
    cities,
    languages,
    mostVisitedCities,
  } = continent;
  const router = useRouter();
  const isWidescreen = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <>
      <Head>
        <title>worldtrip | {title}</title>
      </Head>

      <Header />
      <Box>
        <Hero title={title} imageUrl={backgroundUrl} />

        <ContinentData
          description={description}
          countries={countries}
          languages={languages}
          cities={cities}
        />

        <Box as="section" maxWidth={1280} mx="auto" px="8">
          <Heading mb="8">Cidades 100+</Heading>
          <Wrap
            spacing={isWidescreen ? "16" : "8"}
            justify={isWidescreen ? "flex-start" : "center"}
          >
            {mostVisitedCities?.map(
              ({ id, name, originCountry, thumbnail, flagIcon }) => (
                <Card
                  key={id}
                  city={name}
                  country={originCountry}
                  imageUrl={thumbnail}
                  iconUrl={flagIcon}
                />
              )
            )}
          </Wrap>
        </Box>
      </Box>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [
      { params: { continent: "1" } },
      { params: { continent: "2" } },
      { params: { continent: "3" } },
      { params: { continent: "4" } },
      { params: { continent: "5" } },
    ],
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const continentId = params.continent;
  const response = await api.get(`/continents/${continentId}`);

  const continent = response.data;

  return {
    props: { continent },
    revalidate: 60 * 60 * 24,
  };
};

//TODO:
//* Consume data from API
