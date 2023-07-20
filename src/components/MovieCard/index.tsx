import { Content, Infos } from "./style";

import noImageFilm from "./../../images/noFilmPic.png";
import { useNavigate } from "react-router-dom";

const imagesURL = import.meta.env.VITE_MOVIE_IMG as string;

interface Props {
  id: number;
  title: string;
  vote_average: number;
  poster_path: string;
  genres: string[];
}

const MovieCard = (props: Props) => {
  const navigate = useNavigate();

  const rediretcToMoviePage = (id: number) => navigate(`/movie/${id}`);

  return (
    <Content>
      <div className="box">
        {props.poster_path && (
          <img
            src={imagesURL + props.poster_path}
            alt={props.title + "poster"}
            onClick={() => rediretcToMoviePage(props.id)}
          />
        )}
        {!props.poster_path && (
          <img src={noImageFilm} alt={props.title + "poster"} />
        )}
        <Infos>
          <div className="title_average">
            <p onClick={() => rediretcToMoviePage(props.id)}>{props.title}</p>
            {props.vote_average && <p>{props.vote_average.toFixed(1)}</p>}
          </div>
          <div className="genres">{props.genres.join().replace(",", ", ")}</div>
        </Infos>
      </div>
    </Content>
  );
};

export default MovieCard;
