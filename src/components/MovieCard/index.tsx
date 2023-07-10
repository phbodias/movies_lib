import { Content, Infos } from "./style";

const imagesURL = import.meta.env.VITE_MOVIE_IMG as string;

interface Props {
  title: string;
  vote_average: number;
  poster_path: string;
  genres: string[];
}

const MovieCard = (props: Props) => {
  return (
    <Content>
      <div className="box">
        <img src={imagesURL + props.poster_path} alt={props.title + "poster"} />
        <Infos>
          <div className="title_average">
            <p>{props.title}</p>
            <p>{props.vote_average}</p>
          </div>
          <div className="genres">{props.genres.join().replace(",", ", ")}</div>
        </Infos>
      </div>
    </Content>
  );
};

export default MovieCard;
