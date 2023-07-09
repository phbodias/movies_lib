import styled from "styled-components";

import background from "./../../images/background.jpg";

const Content = styled.div`
  background-image: url(${background});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 25px;
  padding: 30px;
`;

export { Content };
