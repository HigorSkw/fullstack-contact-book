import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;

  position: fixed;
  inset: 0;

  background-color: #00000095;
`;

export const SectionContainer = styled.section`
  width: 300px;
  height: 15rem;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 3rem;

  font-size: 0.9rem;

  background-color: var(--blue-dark);
  color: var(--white);
  border-radius: 15px;

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    width: 70%;
  }
`;
