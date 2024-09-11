import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Grid, GridItem } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Movies from "./components/MoviesList"; //Home
import Genre from "./components/GenreList";
import GenreMovies from "./components/GenreMovies";
import MovieDetail from "./components/MovieDetail";

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
          <Routes>
            <Route path="/genre" element={<Genre />} />
            <Route path="/genre/:genreId" element={<GenreMovies />} />
            <Route path="/movie/:movieId" element={<MovieDetail />} />
            <Route path="/" element={<Movies />} />
          </Routes>
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
