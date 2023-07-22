import { BiSolidCameraMovie } from "react-icons/bi";
import { AiOutlineGithub, AiOutlineSearch } from "react-icons/ai";
import { Content, Search, Title } from "./style";
import { useNavigate } from "react-router-dom";
import { useState, KeyboardEvent } from "react";

interface Props {
  colorHeader: boolean;
}

const Header = (props: Props) => {
  const navigate = useNavigate();

  const backToHome = () => navigate("/");

  const [movieTitle, setMovieTitle] = useState<string>("");

  const searchMovie = () => {
    if (movieTitle.length < 2) return;

    navigate(`/search/${movieTitle}/1`);
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Enter") searchMovie();
  };

  return (
    <Content headercolor={props.colorHeader}>
      <Title onClick={backToHome}>
        <BiSolidCameraMovie />
        <p>MoviesLib</p>
      </Title>
      <Search>
        <input
          type="text"
          placeholder="Search a movie title"
          onChange={(e) => setMovieTitle(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button onClick={searchMovie}>
          <AiOutlineSearch />
        </button>
      </Search>
      <a
        href="https://github.com/phbodias/movies_lib"
        target="_blank"
        className="github">
        <AiOutlineGithub />
      </a>
    </Content>
  );
};

export default Header;
