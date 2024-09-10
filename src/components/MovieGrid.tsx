import useMovies from "../hooks/useMovies";
import { Text } from "@chakra-ui/react";

const MovieGrid = () => {
  const { movies, error } = useMovies();

  return (
    <>
      {error && <Text>{error}</Text>}
      <ul>
        {Object.keys(movies).map((key) => (
          <li key={key}>{movies[key].title}</li>
        ))}
      </ul>
    </>
  );
};
export default MovieGrid;
