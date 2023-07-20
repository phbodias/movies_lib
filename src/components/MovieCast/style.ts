import styled from "styled-components";

const Content = styled.div`
  margin-top: 30px;
  border-radius: 10px;
  background-color: #ffffff;
  color: #000;
  padding: 35px;

  img {
    width: 120px;
    height: 200px;
    object-fit: cover;
    border-radius: 10px;
  }

  .title {
    font-size: 30px;
    display: block;
    margin-bottom: 10px;
    font-weight: 600;
  }

  .actors {
    display: flex;
    width: 100%;
    overflow: scroll;
    gap: 25px;
    font-size: 15px;
  }

  .card {
    border: solid 1px #e3e3e3;
    border-radius: 10px;
    padding: 10px;
  }

  .name {
    :nth-child(1) {
      font-size: 15px;
      font-weight: 600;
    }

    font-size: 13px;
  }
`;

export { Content };
