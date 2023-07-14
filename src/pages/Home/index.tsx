import { useEffect, useState } from "react";
import { AxiosError } from "axios";
import ReactPaginate from "react-paginate";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import MovieInterface from "../../types/movieType";
import { getGenres, getMoviesList } from "../../services/tmdb_services";
import MovieCard from "../../components/MovieCard";
import { Content, Movies, Pages, RequestOption, RequestOptions } from "./style";

const HomePage = () => {
  const [moviesList, setMoviesList] = useState<MovieInterface[]>([]);
  const [page, setPage] = useState<number>(1);
  const [total_pages, setTotal_pages] = useState<number>(1);
  const [genres, setGenres] = useState<{ [id: number]: string }>();
  const [requestList, setRequestList] = useState<number>(0);

  const requestOptions = ["Popular", "Upcoming", "Now playing", "Top rated"];

  useEffect(() => {
    scrollToTop();
    const loadMovies = async (requestList: number, page: number) => {
      try {
        const moviesData = await getMoviesList(requestList, page);
        const genresData = await getGenres();
        setMoviesList(moviesData.results);
        setTotal_pages(moviesData.total_pages);
        setGenres(genresData);
      } catch (err) {
        if (err instanceof AxiosError) notifyAxiosError(err.message);
        else notifyError();
      }
    };

    console.log(page);
    loadMovies(requestList, page);
  }, [requestList, page]);

  const setList = (index: number) => {
    setRequestList(index);
  };

  const notifyAxiosError = (message: string) => toast(message);
  const notifyError = () => toast("Unexpected error");

  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <Content>
      <RequestOptions>
        {requestOptions.map((option, index) => {
          return (
            <RequestOption
              key={index}
              onClick={() => setList(index)}
              selected={requestList === index}>
              {option}
            </RequestOption>
          );
        })}
      </RequestOptions>
      {total_pages > 1 && (
        <Pages>
          <ReactPaginate
            previousLabel={"←"}
            nextLabel={"→"}
            pageCount={total_pages}
            pageRangeDisplayed={1}
            className="pages"
            activeClassName="active"
            onClick={scrollToTop}
            onPageChange={(selectedItem) =>
              setPage(selectedItem.selected + 1)
            }></ReactPaginate>
        </Pages>
      )}
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
