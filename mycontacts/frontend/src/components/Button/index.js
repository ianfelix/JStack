import styled from 'styled-components';

export const Button = styled.button`
  cursor: pointer;
  background: ${({ theme }) => theme.colors.primary.main};
  border: none;
  color: #fff;
  height: 52px;
  border-radius: 4px;
  font-size: 16px;
  font-weight: bold;
  width: 100%;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.04);
  transition: background-color 0.2s ease-in;

  &:hover {
    background: ${({ theme }) => theme.colors.primary.light};
  }

  &:active {
    background: ${({ theme }) => theme.colors.primary.dark};
  }

  &[disabled] {
    background: #ccc;
    cursor: default;
  }
`;
