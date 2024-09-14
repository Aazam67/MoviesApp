import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Grid, GridItem } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./components/Home"; //Home
import Genre from "./components/genres/GenreList";
import GenreMovies from "./components/genres/GenreMovies";
import MovieDetail from "./components/movies/MovieDetail";
import PeopleList from "./components/peoples/PeopleList";
import PeopleDetail from "./components/peoples/PeopleDetail";
import About from "./components/About";
import TopMovies from "./components/movies/TopMovies";

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
          {/* Route Definitions to assign Components */}
          <Routes>
            {/* Load Genre List */}
            <Route path="/genre" element={<Genre />} />
            {/* Load People by Role {actor, director} */}
            <Route path="/people/:role_code" element={<PeopleList />} />
            {/* Show People info by ID */}
            <Route path="/people/detail/:peopleId" element={<PeopleDetail />} />
            {/* show genre movies by genre ID */}
            <Route path="/genre/:genreId" element={<GenreMovies />} />
            {/* show movie detail include reviews and submit review by movie ID */}
            <Route path="/movie/:movieId" element={<MovieDetail />} />
            {/* show top 10 movie by score */}
            <Route path="/topmovies" element={<TopMovies />} />
            {/* show about page */}
            <Route path="/about" element={<About />} />
            {/* show home with genre lists and sorting */}
            <Route path="/" element={<Home />} />
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
