import loading from "./../../images/loadingGif.gif";
import { Content } from "./style";

const Loading = () => {
  return (
    <Content>
      <img src={loading} alt="loadingGif" />
    </Content>
  );
};

export default Loading;
