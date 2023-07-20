import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import {
  getGenres,
  getMovieById,
  getMovieCast,
  getRecommendations,
} from "../../services/tmdb_services";
import MovieInterface from "../../types/movieType";
import { Content } from "./style";
import ActorInterace from "../../types/actorType";
import GeneralMovieInfos from "../../components/GeneralMovieInfos";
import MovieCast from "../../components/MovieCast";
import Recommendations from "../../components/Recommendations";
import scrollToTop from "../../hooks/scrollToTop";

const MoviePage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState<MovieInterface>();
  const [cast, setCast] = useState<ActorInterace[]>([]);
  const [recommendations, setRecommendations] = useState<MovieInterface[]>([]);
  const [genres, setGenres] = useState<{ [id: number]: string }>();

  useEffect(() => {
    scrollToTop();
    const loadMovie = async (movieId: string) => {
      try {
        const movie = await getMovieById(movieId);
        const movieCast = await getMovieCast(movieId);
        const recommendations = await getRecommendations(movieId);
        const genresData = await getGenres();
        setMovie(movie);
        setCast(movieCast);
        setRecommendations(recommendations);
        setGenres(genresData);
      } catch (error) {
        alert("error");
      }
    };

    movieId && loadMovie(movieId);
  }, [movieId]);

  return (
    <>
      {movie ? (
        <Content>
          <GeneralMovieInfos {...movie} />
          <MovieCast {...cast} />
          <Recommendations recommendations={recommendations} genres={genres} />
        </Content>
      ) : (
        ""
      )}
    </>
  );
};

export default MoviePage;
