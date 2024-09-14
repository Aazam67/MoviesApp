import {
  Card,
  CardHeader,
  CardBody,
  StackDivider,
  Stack,
  Box,
} from "@chakra-ui/react";
import MovieGrid from "./movies/MovieGrid";
import { Select } from "@chakra-ui/react";
import useGenre from "../hooks/useGenre";
import useMovies, { FetchMovies } from "../hooks/useMovies";
import { useEffect, useState } from "react";

const Home = () => {
  //fetch all genres
  const { genres } = useGenre({});
  //fetch all movies
  const { movies, error, isLoading } = useMovies({});
  //define state for filtered movies
  const [filteredMovies, setFilteredMovies] = useState({});
  //state for selected genre dropdown
  const [genre, setGenre] = useState("");
  //state for selected sort dropdown
  const [sort, setSort] = useState("title.asc");

  //sort and filte movies function
  const sortFilterMovies = (
    movies: FetchMovies,
    sortBy = "title",
    order = "asc"
  ) => {
    // Define sorting function based on the sortBy parameter
    const sortFunction = (a, b) => {
      let comparison = 0;

      switch (sortBy) {
        case "title":
          comparison = movies[a].title.localeCompare(movies[b].title);
          break;
        case "score":
          comparison = movies[a].score - movies[b].score; // Descending by default
          break;
        case "releaseYear":
          comparison = movies[a].releaseYear - movies[b].releaseYear; // Descending by default
          break;
        default:
          break;
      }

      return order === "asc" ? comparison : -comparison;
    }; // Sort and Filter movies based on the sortFunction and genre value
    return Object.keys(movies)
      .filter((movieId) =>
        genre === "" ? true : movies[movieId].genres.some((g) => g === genre)
      )
      .sort(sortFunction)
      .reduce((acc, key) => {
        acc[key] = movies[key];
        return acc;
      }, {});
  };

  //trigged when genre,sort,movies states changed
  useEffect(() => {
    const filtered = sortFilterMovies(
      movies,
      sort.split(".")[0],
      sort.split(".")[1]
    );
    setFilteredMovies(filtered);
  }, [genre, sort, movies]);

  return (
    <Stack
      divider={<StackDivider />}
      spacing="4">
      <Box display="flex">
        <Select
          placeholder="All Genres"
          onChange={(e) => setGenre(e.target.value)}
          width="40%">
          {Object.keys(genres).map((genre, index) => (
            <option
              key={index}
              value={genre}>
              {genre}
            </option>
          ))}
        </Select>
        <Select
          width="40%"
          onChange={(e) => setSort(e.target.value)}
          defaultValue="title.asc">
          <option value="title.asc">Title Ascending</option>
          <option value="title.desc">Title Descending</option>
          <option value="score.asc">Score Ascending</option>
          <option value="score.desc">Score Descending</option>
          <option value="releaseYear.asc">Release Year Ascending</option>
          <option value="releaseYear.desc">Release Year Descending</option>
        </Select>
      </Box>
      <Box p={5}>
        <Card>
          <CardHeader
            as="h1"
            fontSize={40}
            mb={2}></CardHeader>
          <CardBody>
            <MovieGrid
              movies={filteredMovies}
              error={error}
              isLoading={isLoading}
            />
          </CardBody>
        </Card>
      </Box>
    </Stack>
  );
};
export default Home;
