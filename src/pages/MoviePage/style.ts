import styled from "styled-components";

const Content = styled.div`
  width: 100vw;
  padding: 20px 10%;
  margin: 50px 0;
  background: rgba(0, 0, 0, 0.35);
`;

const GeneralInfos = styled.div`
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
    width: calc(100% - 300px);
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
`;

const Cast = styled.div`
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
  }

  .actors {
    display: flex;
    width: 100%;
    overflow: scroll;
    gap: 25px;
    font-size: 15px;
  }

  .card {
    background-color: #ffffff;
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

export { Content, GeneralInfos, Cast };
