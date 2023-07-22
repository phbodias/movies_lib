import styled from "styled-components";

const Content = styled.div`
  padding: 40px 10%;
  transition: all ease 0.7s;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 25px;

  .title {
    font-size: 25px;
  }
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
  margin: 40px 0;
  font-size: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  text-decoration: none;
  cursor: pointer;
  height: 50px;

  .active {
    color: #13b7dc;
  }

  :hover {
    color: #13b7dc;
  }

  .pages {
    background-color: rgba(255, 255, 255, 0.6);
    padding: 5px 15px;
    display: flex;
    justify-content: center;
    max-width: 70%;
    overflow-x: visible;
    border-radius: 15px;
  }
`;

export { Content, Movies, Pages };
