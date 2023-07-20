import { BiSolidCameraMovie } from "react-icons/bi";
import { AiOutlineSearch } from "react-icons/ai";
import { Content, Search, Title } from "./style";
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
      <Search>
        <input type="text" placeholder="Search a movie title" />
        <AiOutlineSearch />
      </Search>
    </Content>
  );
};

export default Header;
