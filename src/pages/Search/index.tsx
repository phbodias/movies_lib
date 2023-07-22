import { useParams } from "react-router-dom";
import { searchMovieByTitle } from "../../services/tmdb_services";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AxiosError } from "axios";
import MovieInterface from "../../types/movieType";
import MovieCard from "../../components/MovieCard";
import { Content, Movies } from "./style";
import scrollToTop from "../../hooks/scrollToTop";

const SearchPage = () => {
  const { movieTitle } = useParams();

  const [movies, setMovies] = useState<MovieInterface[]>([]);

  const notify = (message: string) => toast(message);

  useEffect(() => {
    scrollToTop();

    const searchMovie = async (movieTitle: string) => {
      try {
        const movies = await searchMovieByTitle(movieTitle);
        setMovies(movies.results);
      } catch (err) {
        if (err instanceof AxiosError) notify(err.message);
        else notify("Unexpected error");
      }
    };

    movieTitle && searchMovie(movieTitle);
  }, [movieTitle]);

  return (
    <Content>
      {movies.length > 0 ? (
        <>
          <p className="title">Search results for "{movieTitle}"</p>
          <Movies>
            {movies.map((movie, index) => {
              return (
                <MovieCard
                  id={movie.id}
                  title={movie.title}
                  vote_average={movie.vote_average}
                  poster_path={movie.poster_path}
                  genres={[]}
                  key={index}
                />
              );
            })}
          </Movies>
        </>
      ) : (
        <p className="title">No movie found for search "{movieTitle}"</p>
      )}
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        draggable
        theme="dark"
      />
    </Content>
  );
};

export default SearchPage;
