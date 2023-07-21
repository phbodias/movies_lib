import { ChangeEvent, useEffect, useState } from "react";
import { AxiosError } from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Pagination from "@mui/material/Pagination";

import useQuery from "../../hooks/useQuery";
import MovieInterface from "../../types/movieType";
import { getGenres, getMoviesList } from "../../services/tmdb_services";
import MovieCard from "../../components/MovieCard";
import { Content, Movies, Pages, RequestOption, RequestOptions } from "./style";
import scrollToTop from "../../hooks/scrollToTop";
import Loading from "../../components/Loading";

const HomePage = () => {
  const query = useQuery();
  const requestlist = query.get("requestlist") || "popular";
  const actualPage = Number(query.get("page")) || 1;
  const navigate = useNavigate();

  const [moviesList, setMoviesList] = useState<MovieInterface[]>([]);
  const [genres, setGenres] = useState<{ [id: number]: string }>();
  const [total_pages, setTotal_pages] = useState<number>(1);

  const requestOptions = ["popular", "upcoming", "now_playing", "top_rated"];

  const notifyAxiosError = (message: string) => toast(message);
  const notifyError = () => toast("Unexpected error");

  const setList = (list: string) => {
    navigate(`/?requestlist=${list}&page=1`);
  };

  const handlePage = (e: ChangeEvent<unknown>, page: number) => {
    e.preventDefault();
    navigate(`/?requestlist=${requestlist}&page=${page}`);
  };

  useEffect(() => {
    scrollToTop();

    const loadMovies = async (request: string, page: number) => {
      try {
        const moviesData = await getMoviesList(request, page);
        const genresData = await getGenres();
        setMoviesList(moviesData.results);
        setGenres(genresData);
        setTotal_pages(moviesData.total_pages);
      } catch (err) {
        if (err instanceof AxiosError) notifyAxiosError(err.message);
        else notifyError();
        navigate(`/?requestlist=${requestlist}&page=1`);
      }
    };

    loadMovies(requestlist, actualPage);
  }, [requestlist, actualPage, navigate]);

  return (
    <Content>
      <RequestOptions>
        {requestOptions.map((option, index) => {
          return (
            <RequestOption
              key={index}
              onClick={() => setList(option)}
              selected={requestlist === option}>
              {option.replace("_", " ").toUpperCase()}
            </RequestOption>
          );
        })}
      </RequestOptions>
      {moviesList.length > 0 ? (
        <Movies>
          {moviesList &&
            genres &&
            moviesList.map((movie, index) => {
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
        </Movies>
      ) : (
        <Loading />
      )}
      {total_pages > 1 && (
        <Pages>
          <Pagination
            count={total_pages}
            page={actualPage}
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
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </Content>
  );
};

export default HomePage;
