import styled from "styled-components";

const Content = styled.div`
  padding: 40px 10%;
  transition: all ease 0.7s;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 25px;

  .title{
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

export { Content, Movies };
