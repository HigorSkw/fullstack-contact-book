import styled from "styled-components";

export const ContainerHomePage = styled.div`
  width: 100vw;
  height: 100vw;

  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  overflow: hidden;
  align-items: center;
`;

export const ContainerUser = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-evenly;
  height: 7rem;
  background: var(--purple);
  flex-direction: column;
  border: 1px solid black;
  box-shadow: 3px 5px 14px 0px black;

  h2 {
    text-transform: capitalize;
  }

  span {
    display: flex;
    gap: 0.5rem;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
  }
`;

export const ButtonsBox = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1.5rem;
  align-items: center;
  justify-content: center;

  svg {
    font-size: 1.2rem;

    cursor: pointer;

    transition: 0.8s;

    :hover {
      color: var(--blue-dark);
      transition: 0.8s;
    }
  }
`;

export const SectionMain = styled.main`
  display: flex;
  width: 90%;
  align-items: flex-start;
  flex-wrap: wrap;
  justify-content: center;
`;

export const SectionContacts = styled.section`
  width: 50%;

  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 0.5rem;

  overflow: hidden;

  .title-customers {
    display: block;
    font-size: 30px;
    color: azure;

    line-height: 1.2;
    text-align: center;
  }

  .container-contatos {
    width: 100%;
    min-height: 100vh;

    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: center;

    padding: 15px;
  }

  .wrap-contatos {
    width: 35rem;

    display: flex;
    overflow: hidden;
    flex-direction: column;
    align-items: center;

    background-color: var(--gray);
    border-radius: 15px;
    padding: 90px 55px;
    box-shadow: 6px 9px 10px black;
    gap: 1rem;
  }
`;
