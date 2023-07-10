import { useEffect, useState } from "react";
import { AxiosError } from "axios";

import MovieInterface from "../../types/movieType";

import { getGenres, getMoviesList } from "../../services/tmdb_services";
import MovieCard from "../../components/MovieCard";
import { Content } from "./style";

const HomePage = () => {
  const [moviesList, setMoviesList] = useState<MovieInterface[]>([]);
  const [genres, setGenres] = useState<{ [id: number]: string }>();
  const requestList = "popular";

  useEffect(() => {
    const loadMovies = async (requestList: string) => {
      try {
        const moviesData = await getMoviesList(requestList, 1);
        const genresData = await getGenres();
        setMoviesList(moviesData);
        setGenres(genresData);
      } catch (err) {
        if (err instanceof AxiosError) alert(err.message);
        else alert("Unexpected error");
      }
    };

    loadMovies(requestList);
  }, [requestList]);

  return (
    <Content>
      {moviesList &&
        genres &&
        moviesList.map((movie, index) => {
          const movieGenres = movie.genre_ids.map((id) => {
            return genres[id];
          });
          return (
            <MovieCard
              title={movie.title}
              vote_average={movie.vote_average}
              poster_path={movie.poster_path}
              genres={movieGenres}
              key={index}
            />
          );
        })}
    </Content>
  );
};

export default HomePage;
