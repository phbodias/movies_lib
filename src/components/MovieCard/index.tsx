import MovieInterface from "../../types/movieType";
import { Content, Infos } from "./style";

const imagesURL = import.meta.env.VITE_MOVIE_IMG as string;

const MovieCard = (props: MovieInterface) => {
  return (
    <Content>
      <img src={imagesURL + props.poster_path} alt="" />
      <Infos>
        <div className="title_average">
          <p>{props.title}</p>
          <p>{props.vote_average}</p>
        </div>
        <p>{props.genre_ids}</p>
      </Infos>
    </Content>
  );
};

export default MovieCard;
