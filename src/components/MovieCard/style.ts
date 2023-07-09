import styled from "styled-components";

const Content = styled.div`
  width: 200px;

  img {
    width: 200px;
  }
`;

const Infos = styled.div`
  background-color: #000000;
  margin-top: -10px;
  padding: 15px;
  height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  .title_average {
    display: flex;
    align-items: center;
    justify-content: space-between;

    :nth-child(1){
        width: 60%;
        font-weight: 700;
    }

    :nth-child(2) {
        border: solid 1px #FFFF00;
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
`;

export { Content, Infos };
