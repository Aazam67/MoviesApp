import { Grid, GridItem, Text } from "@chakra-ui/react";
import useGenre from "../hooks/useGenre";

const GenreList = () => {
  const { genres, error } = useGenre();

  return (
    <>
      {error && <Text>{error}</Text>}
      <Grid>
        {Object.keys(genres).map((genre) => (
          <GridItem key={genre}>{genre}</GridItem>
        ))}
      </Grid>
    </>
  );
};
export default GenreList;
