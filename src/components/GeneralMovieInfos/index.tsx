import { BsCashCoin } from "react-icons/bs";
import { BiTimeFive } from "react-icons/bi";

import MovieInterface from "../../types/movieType";
import { Content } from "./style";
import HourConversor from "../../hooks/hourConversor";

import noFilmPic from "./../../images/noFilmPic.png";

const imagesURL = import.meta.env.VITE_MOVIE_IMG as string;

const GeneralMovieInfos = (movie: MovieInterface) => {
  const duration = HourConversor(movie.runtime ? movie.runtime : 0);

  return (
    <Content>
      {movie.backdrop_path ? (
        <img src={imagesURL + movie.poster_path} alt={movie.title + "pic"} />
      ) : (
        <img src={noFilmPic} alt={movie.title + "pic"} />
      )}
      <div className="infos">
        <div className="top">
          <div>
            <p className="title">{movie.title}</p>
            <p className="tagline">{movie.tagline}</p>
            <p className="date">{movie.release_date.split("-").join("/")}</p>
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
    </Content>
  );
};

export default GeneralMovieInfos;
