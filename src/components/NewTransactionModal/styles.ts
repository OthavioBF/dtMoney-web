import styled from "styled-components";
import { darken, transparentize } from "polished";

export const Container = styled.form`
  h2 {
    color: ${(props) => props.theme["gray-100"]};
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }

  input {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    border-radius: 0.25rem;
    border: 0;
    background: ${(props) => props.theme["gray-900"]};
    color: ${(props) => props.theme["gray-300"]};

    font-weight: 400;
    font-size: 1rem;

    &::placeholder {
      color: ${(props) => props.theme["gray-500"]};
    }

    & + input {
      margin-top: 1rem;
    }
  }

  button[type="submit"] {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    background: ${(props) => props.theme["green-500"]};
    color: #ffffff;
    border-radius: 0.25rem;
    border: 0;
    font-size: 1rem;
    margin-top: 1.5rem;
    font-weight: 600;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;

export const TransactionTypeContainer = styled.div`
  margin: 1rem 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem;
`;

interface RadioBoxProps {
  isActive: boolean;
  activeColor: "green" | "red";
}

const backgroundColor = {
  green: "#00875F",
  red: "#AB222E",
};

const color = {
  green: "#00B37E",
  red: "#F75A68",
};
export const RadioBox = styled.button<RadioBoxProps>`
  height: 4rem;
  border-radius: 0.25rem;
  border: 0;

  background: ${(props) =>
    props.isActive
      ? backgroundColor[props.activeColor]
      : props.theme["gray-700"]};

  display: flex;
  align-items: center;
  justify-content: center;

  transition: border-color 0.2s;

  &:hover {
    border-color: ${darken(0.1, "#d7d7d7")};
  }

  svg {
    color: ${(props) =>
      props.isActive ? props.theme.white : color[props.activeColor]};
  }

  img {
    width: 20px;
    height: 20px;
  }

  span {
    display: inline-block;
    margin-left: 1rem;
    font-size: 1rem;
    color: ${(props) => props.theme["gray-300"]};
  }
`;
