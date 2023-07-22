import { useNavigate, useParams } from "react-router-dom";
import { searchMovieByTitle } from "../../services/tmdb_services";
import { ChangeEvent, useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AxiosError } from "axios";
import Pagination from "@mui/material/Pagination";
import MovieInterface from "../../types/movieType";
import MovieCard from "../../components/MovieCard";
import { Content, Movies, Pages } from "./style";
import scrollToTop from "../../hooks/scrollToTop";

const SearchPage = () => {
  const { movieTitle, page } = useParams();
  const navigate = useNavigate();

  const [movies, setMovies] = useState<MovieInterface[]>([]);
  const [totalPages, setTotalPages] = useState<number>(0);

  const notify = (message: string) => toast(message);

  const handlePage = (e: ChangeEvent<unknown>, page: number) => {
    e.preventDefault();
    movieTitle && navigate(`/search/${movieTitle}/${page}`);
  };

  useEffect(() => {
    scrollToTop();

    const searchMovie = async (movieTitle: string) => {
      try {
        const movies = await searchMovieByTitle(movieTitle, Number(page));
        setMovies(movies.results);
        setTotalPages(movies.total_pages);
      } catch (err) {
        if (err instanceof AxiosError) notify(err.message);
        else notify("Unexpected error");
      }
    };

    movieTitle && searchMovie(movieTitle);
  }, [movieTitle, page]);

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
      {totalPages > 1 && page && (
        <Pages>
          <Pagination
            count={totalPages}
            page={Number(page)}
            onChange={(event, page) => handlePage(event, page)}
            variant="outlined"
            shape="rounded"
            color="primary"
            siblingCount={1}
            className="pages"
          />
        </Pages>
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
