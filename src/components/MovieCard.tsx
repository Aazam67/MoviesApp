import { Card, CardBody, Heading, Image } from "@chakra-ui/react";
import { Movie } from "../hooks/useMovies";

interface Props {
  movie: Movie;
}

const MovieCard = ({ movie }: Props) => {
  return (
    <Card>
      <Image src={movie.imageUrl} />
      <CardBody>
        <Heading fontSize="md">{movie.title}</Heading>
      </CardBody>
    </Card>
  );
};
export default MovieCard;
