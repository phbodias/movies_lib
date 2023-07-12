import { BiSolidCameraMovie } from "react-icons/bi";
import { AiOutlineSearch } from "react-icons/ai";
import { Content, Search, Title } from "./style";

interface Props {
  colorHeader: boolean;
}

const Header = (props: Props) => {
  return (
    <Content headercolor={props.colorHeader}>
      <Title>
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
