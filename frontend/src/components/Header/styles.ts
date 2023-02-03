import styled from "styled-components";

export const Container = styled.div`
  height: 80px;
  text-align: center;
  background: var(--blue-medium);

  display: flex;
  width: 100vw;
  align-items: center;
  justify-content: center;

  .Header {
    display: flex;
    width: 95%;
    align-items: center;
    justify-content: space-between;

    .Div-title {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 10px;
      color: white;

      span > img {
        width: 30px;
      }
    }
  }

  .div-header-btn {
    display: flex;
    align-items: center;

    width: 100px;
    height: 30px;
  }

  .header-btn {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: 100%;

    font-size: 15px;
    border: none;
    border-radius: 8px;
    color: #fff;

    line-height: 1.2;

    text-transform: uppercase;

    background: -webkit-linear-gradient(
      to left,
      var(--purple),
      var(--blue-medium)
    );
    background: -o-linear-gradient(to left, var(--purple), var(--blue-medium));
    background: -moz-linear-gradient(
      to left,
      var(--purple),
      var(--blue-medium)
    );
    background: linear-gradient(to left, var(--purple), var(--blue-medium));
  }

  .header-btn:hover {
    opacity: 0.8;
    transition: 0s;
  }
`;
