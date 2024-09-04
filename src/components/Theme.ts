import { extendTheme, ThemeConfig } from "@chakra-ui/react";

const Config: ThemeConfig = {
  initialColorMode: "dark",
};
const theme = extendTheme({ Config });
export default theme;
