import { useParams } from "react-router-dom";
import { Content } from "./style";

const MoviePage = () => {
  const { movieId } = useParams();
  return <Content>MoviePage {movieId}</Content>;
};

export default MoviePage;
