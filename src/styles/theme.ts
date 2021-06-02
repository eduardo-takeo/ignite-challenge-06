import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  fonts: {
    heading: "Poppins",
    body: "Poppins",
  },
  colors: {
    gray: {
      50: "#F5F8FA",
      100: "DADADA",
      400: "#999999",
      800: "#47585B",
    },
    yellow: {
      800: "#FFBA08",
    },
  },
});
