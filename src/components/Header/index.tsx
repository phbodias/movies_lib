import { BiSolidCameraMovie } from "react-icons/bi";
import { AiOutlineGithub } from "react-icons/ai";
import { Content, Title } from "./style";
import { useNavigate } from "react-router-dom";

interface Props {
  colorHeader: boolean;
}

const Header = (props: Props) => {
  const navigate = useNavigate();

  const backToHome = () => navigate("/");

  return (
    <Content headercolor={props.colorHeader}>
      <Title onClick={backToHome}>
        <BiSolidCameraMovie />
        <p>MoviesLib</p>
      </Title>
      {/* <Search>
        <input type="text" placeholder="Search a movie title" />
        <AiOutlineSearch />
      </Search> */}
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
