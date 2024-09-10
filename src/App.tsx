import { Grid, GridItem } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Movies from "./components/MoviesList";

function App() {
  return (
    <>
      <Grid
        templateAreas={{
          base: `"header""main""footer"`,
        }}
        templateRows="auto 1fr auto"
        minHeight="100vh"
      >
        {/* Header */}
        <GridItem area="header" p={4}>
          <NavBar />
        </GridItem>

        {/* Content */}
        <GridItem area="main" p={4}>
          <Movies />
        </GridItem>

        {/* Footer */}
        <GridItem area="footer" p={4}>
          <Footer />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
