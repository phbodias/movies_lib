import styled from "styled-components";

const Content = styled.div`
  border-radius: 10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  font-size: 17px;

  img {
    width: 300px;
    border-radius: 10px;
  }

  .infos {
    width: calc(100% - 310px);
    max-width: 750px;
    min-width: 300px;

    .top {
      display: flex;
      align-items: center;
      gap: 25px;

      .title {
        font-size: 35px;
        font-weight: 700;
      }

      .tagline {
        font-style: italic;
        font-weight: 300;
      }

      .date {
        margin-bottom: 10px;
      }

      .average {
        border: solid 2px #21d07a;
        border-radius: 100px;
        background-color: #363636;
        width: 50x;
        height: 55px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 20px;
        padding: 8px;
      }
    }

    .overview {
      font-size: 20px;
      margin-bottom: 10px;
    }

    .genres {
      display: flex;
      flex-wrap: wrap;
      gap: 7px;
      margin-top: 50px;

      p {
        background-color: #ffc107;
        padding: 3px;
        border-radius: 3px;
        font-size: 16px;
      }
    }

    .floor {
      display: flex;
      gap: 25px;
      align-items: center;
      margin-top: 40px;
      font-weight: 300;
      flex-wrap: wrap;

      svg {
        font-size: 25px;
      }

      div {
        display: flex;
        align-items: center;
        gap: 5px;
      }
    }
  }

  @media(max-width: 770px){
    justify-content: center;
    gap: 15px;
  }
`;

export { Content };
