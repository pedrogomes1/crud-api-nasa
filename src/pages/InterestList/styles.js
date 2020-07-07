import styled from 'styled-components';

export const Container = styled.div`
  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #a8a8b3;
    transition: 0.2s;

    &:hover {
      color: #666;
    }

    svg {
      margin-right: 4px;
    }
  }
`;

export const Table = styled.table`
  width: 100%;
  margin-top: 40px;

  border-collapse: separate;
  border-spacing: 0 5px;
  border-radius: 10px;

  color: #fff8;
  background: #222830;

  thead {
    text-align: left;
  }
  td,
  th {
    padding: 15px;
  }

  th {
    color: #f5f5fc;
    font-size: 18px;
  }

  td {
    border-top: 1px solid #6666;

    div {
      display: flex;
    }

    button {
      background: none;
      border: 0;

      svg {
        margin: 0px 3px;
      }
    }
  }
`;
