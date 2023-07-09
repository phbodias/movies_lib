import { useEffect, useState } from "react";
import { AxiosError } from "axios";

import MovieInterface from "../../types/movieType";

import { getMoviesList } from "../../services/tmdb_services";
import MovieCard from "../../components/MovieCard";
import { Content } from "./style";

const HomePage = () => {
  const [moviesList, setMoviesList] = useState<MovieInterface[]>([]);
  const [requestList, setRequestList] = useState<string>("popular");

  useEffect(() => {
    const loadMovies = async (requestList: string) => {
      try {
        const data = await getMoviesList(requestList, 1);
        setMoviesList(data);
        console.log(data);
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
        moviesList.map((movie) => {
          return <MovieCard {...movie} />;
        })}
    </Content>
  );
};

export default HomePage;
