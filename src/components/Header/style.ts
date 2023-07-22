import styled from "styled-components";

interface Props {
  headercolor: boolean;
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
    props.headercolor ? "#fffcf5" : "rgba(0, 0, 0, 0.5)"};
  padding: 0 10%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;

  .github {
    font-size: 30px;
    margin-left: 20px;
  }

  @media (max-width: 500px) {
    align-items: center;
  }
`;

const Title = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  font-weight: 700;
  font-size: 25px;
  color: #ffc107;
  cursor: pointer;

  svg {
    font-size: 45px;
    cursor: pointer;
  }
`;

const Search = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 30vw;
  min-width: 200px;
  max-width: 350px;
  position: sticky;

  button {
    position: relative;
    right: 30px;
    border: none;
    border-left: 1px solid #000;
    background-color: #fff;
    cursor: pointer;

    svg {
      font-size: 25px;
      padding-left: 5px;
    }
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
