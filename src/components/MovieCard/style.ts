import styled from "styled-components";

const Content = styled.div`
  width: 200px;
  overflow-wrap: break-word;

  img {
    width: 200px;
    cursor: pointer;
  }

  .box {
    box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.5);
    transition: transform ease 0.5s, box-shadow ease 0.5s;
    border-radius: 10px;
    overflow: hidden;
  }

  .box:hover {
    transform: translateY(-10px);
    box-shadow: 25px 10px 25px 2px rgba(0, 0, 0, 0.25);
  }
`;

const Infos = styled.div`
  background-color: #000000;
  margin-top: -10px;
  padding: 15px;
  height: 150px;
  display: flex;
  flex-direction: column;

  .title_average {
    display: flex;
    justify-content: space-between;

    :nth-child(1) {
      width: 60%;
      font-weight: 700;
      cursor: pointer;
    }

    :nth-child(2) {
      border: solid 1px #ffff00;
      border-radius: 100px;
      background-color: #363636;
      width: 32px;
      height: 32px;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 15px;
    }
  }

  .genres {
    font-size: 12px;
  }
`;

export { Content, Infos };
