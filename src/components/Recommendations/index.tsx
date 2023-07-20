import MovieInterface from "../../types/movieType";
import MovieCard from "../MovieCard";
import { Content } from "./style";

interface Props {
  recommendations: MovieInterface[];
  genres: { [id: number]: string } | undefined;
}

const Recommendations = ({ recommendations, genres }: Props) => {
  return (
    <Content>
      {recommendations.length > 0 && <p className="title">Recommendations:</p>}
      {genres &&
        recommendations?.map((movie, index) => {
          const movieGenres = movie.genre_ids?.map((id) => {
            return genres[id];
          });
          return (
            <MovieCard
              id={movie.id}
              title={movie.title}
              vote_average={movie.vote_average}
              poster_path={movie.poster_path}
              genres={movieGenres ? movieGenres : []}
              key={index}
            />
          );
        })}
    </Content>
  );
};

export default Recommendations;
