import styled from 'styled-components';
import { MdClose } from 'react-icons/md';

export const Container = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 10;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Card = styled.div`
  position: relative;
  background: #fff;
  border-radius: 8px;
  width: 600px;
  transition: 400ms;

  padding: 20px;

  input {
    width: 300px;
    padding: 10px;
    border: 1px solid #000;
    border-radius: 5px;
    margin-bottom: 15px;
  }

  textarea {
    width: 550px;
    border: 1px solid #000;
    border-radius: 5px;
    padding: 10px;
    height: 150px;
    margin-bottom: 15px;

    @media (max-width: 900px) {
      width: 300px;
    }
  }

  @media (max-width: 900px) {
    width: 400px;
  }

  form > div {
    display: flex;
    justify-content: center;
  }

  form > div > button {
    width: 120px;
    height: 40px;
    background: #0b3d91;
    color: #fff;
    border-radius: 4px;
    border: 0;
    transition: filter 0.2s;

    &:hover {
      filter: brightness(90%);
    }
  }
`;

export const Icon = styled(MdClose)`
  position: absolute;
  height: 30px;
  width: 30px;
  color: #000000;
  top: 5px;
  right: 5px;
  cursor: pointer;
`;
