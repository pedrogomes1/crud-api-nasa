import styled from 'styled-components';

export const Title = styled.h1`
  font-size: 20px;
  color: #fff8;
  margin: 40px 0px 0px 0px;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  h1 {
    color: #fff;
  }

  button {
    display: flex;
    align-items: center;

    border: 0;
    border-radius: 5px;

    padding: 10px;

    background: #0b3d91;
    color: #fff;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(90%);
    }

    svg {
      margin-right: 5px;
    }
  }
`;

export const Form = styled.form`
  max-width: 700px;
  margin-top: 50px;

  display: flex;
  align-items: center;

  div {
    display: flex;
    align-items: center;
    border: 0;
    width: 500px;
    height: 60px;
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
    background: #fff;

    svg {
      margin: 0 10px;
    }
  }
  input {
    border: none;
    flex: 1;
  }

  button {
    width: 120px;
    height: 60px;

    background: #0b3d91;

    border: 0;
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;

    color: #fff;
    font-weight: bold;
    transition: filter 0.2s;

    &:hover {
      filter: brightness(90%);
    }
  }

  span {
    color: #666;
    font-style: italic;
    font-size: 14px;
    margin-left: 10px;
  }
`;

export const ListCards = styled.div`
  display: grid;
  grid-gap: 15px;
  grid-template-columns: 1fr 1fr 1fr;

  transition: 400ms;

  @media (max-width: 1000px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 700px) {
    display: grid;
    grid-template-columns: 1fr;
  }
`;

export const Cards = styled.ul`
  position: relative;
  flex-direction: row;
  width: 270px;

  border-radius: 8px;

  padding: 20px;

  list-style: none;
  background: #fff;

  margin-top: 10px;

  transition: all 0.4s ease;

  &:hover {
    transform: translate3D(0, -1px, 0) scale(1.03);

    span {
      color: white;
    }
  }

  figure {
    margin-top: 10px;
    text-align: center;

    img {
      width: 200px;
      height: 200px;
    }

    figcaption {
      font-style: italic;
      font-size: smaller;
      margin-bottom: 10px;
    }
  }

  p {
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  li {
    margin-top: 10px;
  }

  h3 {
    text-align: center;
  }
`;
export const ContainerButton = styled.div`
  display: flex;
  justify-content: center;

  margin-top: 15px;

  button {
    display: flex;
    align-items: center;

    border: 0;
    border-radius: 5px;

    padding: 10px;

    background: #0b3d91;
    color: #fff;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(90%);
    }
  }
`;

export const Screen = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 10;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  svg {
    width: 65px;
    height: 65px;
  }
  h1 {
    margin-top: 32px;
    font-weight: bold;
    font-size: 36px;
    color: #f0f0f5;
  }
`;
