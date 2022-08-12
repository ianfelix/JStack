import styled from 'styled-components';

export const Container = styled.header`
  margin-top: 74px;
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 201px;
  }
`;

export const InputSearchContainer = styled.div`
  margin-top: 48px;
  width: 100%;

  input {
    width: 100%;
    height: 50px;
    border-radius: 25px;
    border: none;
    outline: 0;
    padding: 0 16px;

    &::placeholder {
      color: #BCBCBC;
    }
  }
`;
