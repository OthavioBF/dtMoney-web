import styled from "styled-components";

export const Container = styled.header`
  background: ${(props) => props.theme["gray-900"]};
`;

export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto;

  padding: 2rem 1rem 12rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    font-weight: bold;
    color: #fff;
    background: ${(props) => props.theme["green-500"]};
    border: 0;
    padding: 0 2rem;
    border-radius: 0.25rem;
    height: 3rem;

    transition: filter 0.2s;

    :hover {
      filter: brightness(0.7);
    }
  }
`;
