import styled from "styled-components";

interface SelectedProps {
  selected: boolean;
}

const Content = styled.div`
  padding: 20px 10%;
  transition: all ease 0.7s;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const RequestOptions = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  cursor: pointer;
  width: fit-content;
  max-width: 80vw;
  flex-wrap: wrap;

  @media (max-width: 600px) {
    justify-content: center;
  }
`;

const RequestOption = styled.div<SelectedProps>`
  background-color: ${(props) => (props.selected ? "#218838" : "#000")};
  width: 120px;
  height: 30px;
  font-size: 15px;
  box-shadow: ${(props) => (props.selected ? "0 3px 5px #218838" : "none")};
  display: flex;
  align-items: center;
  padding: 15px;
  border: 1px solid #343a40;
  transition: all ease 0.7s;
`;

const Movies = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 15px;

  @media (max-width: 790px) {
    justify-content: center;
  }
`;

const Pages = styled.div`
  height: 45px;
  margin: 30px 0;
  background-color: rgba(0, 0, 0, 0.4);
  font-size: 25px;
  display: flex;
  justify-content: center;
  align-items: center;

  .pages {
    display: flex;
    gap: 20px;
    text-decoration: none;
    cursor: pointer;
    list-style: none;

    .active {
      color: #13b7dc;
    }

    :hover {
      color: #13b7dc;
    }
  }
`;

export { Content, RequestOptions, RequestOption, Movies, Pages };
