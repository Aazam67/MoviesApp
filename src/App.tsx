import { Grid, GridItem } from "@chakra-ui/react";
import "./App.css";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"header""main""footer"`,
        lg: `"header""main""footer"`,
      }}
      gridTemplateRows={"50px 1fr 30px"}
      gridTemplateColumns={"1fr"}
      h="200px"
      gap="1"
      color="blackAlpha.700gold"
      fontWeight="bold"
    >
      <GridItem bg="orange.300" area={"header"}>
        Nav
      </GridItem>
      <GridItem bg="green.300" area={"main"}>
        Main
      </GridItem>
      <GridItem bg="blue.300" area={"footer"}>
        Footer
      </GridItem>
    </Grid>
  );
}

export default App;
