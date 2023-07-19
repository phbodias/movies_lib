import { useParams } from "react-router-dom";
import { Content } from "./style";
import { getMovieById } from "../../services/tmdb_services";
import { useEffect, useState } from "react";
import MovieInterface from "../../types/movieType";

const imagesURL = import.meta.env.VITE_MOVIE_IMG as string;

const MoviePage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState<MovieInterface>();

  useEffect(() => {
    const loadMovie = async (movieId: string) => {
      try {
        const movie = await getMovieById(movieId);
        setMovie(movie);
        console.log(movie)
      } catch (error) {
        alert("error");
      }
    };

    movieId && loadMovie(movieId);
  }, [movieId]);

  return (
    <Content>
      {movie && <img src={imagesURL + movie.backdrop_path} alt="" />}
      <p>{movie?.genre_ids}</p>
    </Content>
  );
};

export default MoviePage;
