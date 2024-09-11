import { Card, CardBody, Heading, Image, Link } from "@chakra-ui/react";
import { Movie } from "../hooks/useMovies";

interface Props {
  movie: Movie;
  id: string;
}

const MovieCard = ({ movie, id }: Props) => {
  return (
    <Card>
      <Link href={`/movie/${id}`}>
        <Image src={movie.imageUrl} />
        <CardBody>
          <Heading fontSize="sm">{movie.title}</Heading>
        </CardBody>
      </Link>
    </Card>
  );
};
export default MovieCard;
