import { useEffect, useState } from "react";
import { AxiosError } from "axios";

import MovieInterface from "../../types/movieType";

import { getGenres, getMoviesList } from "../../services/tmdb_services";
import MovieCard from "../../components/MovieCard";
import { Content, Movies, RequestOption, RequestOptions } from "./style";

const HomePage = () => {
  const [moviesList, setMoviesList] = useState<MovieInterface[]>([]);
  const [genres, setGenres] = useState<{ [id: number]: string }>();
  const [requestList, setRequestList] = useState<number>(0);

  const requestOptions = ["Popular", "Upcoming", "Now playing", "Top rated"];

  useEffect(() => {
    const loadMovies = async (requestList: number) => {
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
      <RequestOptions>
        {requestOptions.map((option, index) => {
          return (
            <RequestOption
              key={index}
              onClick={() => setRequestList(index)}
              selected={requestList === index}>
              {option}
            </RequestOption>
          );
        })}
      </RequestOptions>
      <Movies>
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
      </Movies>
    </Content>
  );
};

export default HomePage;
