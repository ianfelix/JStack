import styled from 'styled-components';

export const Input = styled.input`
  width: 100%;
  background: #fff;
  border: 2px solid #fff;
  height: 52px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.04);
  padding: 0 16px;
  border-radius: 4px;
  font-size: 16px;
  outline: none;
  transition: border-color 0.2s;

  &:focus {
    border-color: ${({ theme }) => theme.colors.primary.main};
  }
`;
