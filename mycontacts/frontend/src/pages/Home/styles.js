import styled from 'styled-components';

export const Container = styled.header`
  margin-top: 32px;

  .line {
    margin: 16px 0;
    background: #bcbcbc;
    height: 2px;
    opacity: 0.2;
    border-radius: 1px;
  }

  a {
    text-decoration: none;
    font-weight: bold;
    color: ${({ theme }) => theme.colors.primary.main};
    border: 2px solid ${({ theme }) => theme.colors.primary.main};
    border-radius: 4px;
    padding: 12px 14px;
    transition: all 0.2s ease-in;

    &:hover {
      background: ${({ theme }) => theme.colors.primary.main};
      color: #fff;
    }
  }
`;

export const InputSearchContainer = styled.div`
  width: 100%;

  input {
    width: 100%;
    height: 50px;
    border-radius: 25px;
    border: none;
    outline: 0;
    padding: 0 16px;

    &::placeholder {
      color: #bcbcbc;
    }
  }
`;

export const Header = styled.header`
  margin-top: 32px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  strong {
    font-size: 24px;
    color: #222222;
  }
`;

export const ListContainer = styled.div`
  .sort-button {
    background: transparent;
    border: none;
    display: flex;
    align-items: center;

    span {
      color: ${({ theme }) => theme.colors.primary.main};
      font-weight: bold;
      margin-right: 8px;
    }
  }
`;
