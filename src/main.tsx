import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";

import theme from "./components/Theme.ts";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";

// Global styles to remove padding and margin from #root div

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />

      <App />
    </ChakraProvider>
  </StrictMode>
);
