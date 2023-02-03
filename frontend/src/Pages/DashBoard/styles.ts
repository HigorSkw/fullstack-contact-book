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
  width: 95%;
  display: flex;
`;

export const ButtonsBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;

  svg {
    font-size: 12pt;

    cursor: pointer;

    transition: 0.8s;

    :hover {
      color: var(--light-green);

      transition: 0.8s;
    }
  }
`;
