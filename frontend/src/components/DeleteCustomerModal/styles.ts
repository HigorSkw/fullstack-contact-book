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
  width: 33rem;
  height: 15rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  flex-direction: column;

  background-color: var(--blue-dark);
  color: var(--white);
  border-radius: 15px;
  padding: 77px 55px 33px 55px;

  div {
    display: flex;
    gap: 10px;
    width: 85%;
  }
`;
