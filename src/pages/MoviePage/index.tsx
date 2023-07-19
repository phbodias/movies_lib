import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { BsCashCoin } from "react-icons/bs";
import { BiTimeFive } from "react-icons/bi";

import { getMovieById } from "../../services/tmdb_services";
import MovieInterface from "../../types/movieType";
import HourConversor from "../../hooks/hourConversor";
import { Content, GeneralInfos } from "./style";

const imagesURL = import.meta.env.VITE_MOVIE_IMG as string;

const MoviePage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState<MovieInterface>();
  const [duration, setDuration] = useState<string>("0");

  useEffect(() => {
    const loadMovie = async (movieId: string) => {
      try {
        const movie = await getMovieById(movieId);
        setMovie(movie);
        setDuration(HourConversor(movie.runtime ? movie.runtime : 0));
        console.log(movie);
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
          <GeneralInfos>
            <img src={imagesURL + movie.poster_path} alt="" />
            <div className="infos">
              <div className="top">
                <div>
                  <p className="title">{movie.title}</p>
                  <p className="tagline">{movie.tagline}</p>
                  <p className="date">
                    {movie.release_date.split("-").join("/")}
                  </p>
                </div>
                <p className="average">{movie.vote_average.toFixed(2)}</p>
              </div>
              <p className="overview">{movie.overview}</p>
              <div className="genres">
                {movie.genres?.map((genre) => {
                  return <p key={genre.id}>{genre.name}</p>;
                })}
              </div>
              <div className="floor">
                <div className="duration">
                  <BiTimeFive />
                  {duration}
                </div>
                {movie.budget && (
                  <div className="budget">
                    <BsCashCoin />
                    {new Intl.NumberFormat("pt-BR", {
                      style: "currency",
                      currency: "USD",
                    }).format(movie.budget)}
                  </div>
                )}
              </div>
            </div>
          </GeneralInfos>
        </Content>
      ) : (
        ""
      )}
    </>
  );
};

export default MoviePage;
