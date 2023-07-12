import styled from "styled-components";

interface Props {
  headerColor: boolean;
}

const Content = styled.div<Props>`
  width: 100%;
  height: fit-content;
  min-height: 80px;
  position: sticky;
  top: 0;
  z-index: 1;
  transition: all ease 0.7s;
  background-color: ${(props) =>
    props.headerColor ? "#fffcf5" : "transparent"};
  padding: 0 10%;
  display: flex;
  align-items: center;
  gap: 10px;

  @media (max-width: 500px) {
    flex-direction: column;
    align-items: center;
    padding: 10px 0;
  }
`;

const Title = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  font-weight: 700;
  font-size: 25px;
  color: #ffc107;
  min-width: 200px;
  max-width: 350px;

  svg {
    font-size: 45px;
    cursor: pointer;
  }
`;

const Search = styled.div<Props>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 30vw;
  min-width: 200px;
  max-width: 350px;
  position: sticky;

  svg {
    font-size: 25px;
    position: relative;
    right: 30px;
    border-left: 1px solid #000;
    padding-left: 5px;
  }

  input {
    width: 100%;
    height: 35px;
    border: solid 1px #000;
    border-radius: 5px;
    padding: 0 10px;
    cursor: text;
  }

  input:focus {
    box-shadow: 0 0 0 0;
    outline: 0;
  }

  * {
    color: #000;
  }
`;

export { Content, Title, Search };
