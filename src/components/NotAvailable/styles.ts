import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  height: 120px;
  margin-bottom: 4px;
  padding: 8px;
  justify-content: center;
  align-items: center;
  border-radius: ${({ theme }) => theme.borderRadius};
  background-color: #ededed;
  text-align: center;
  text-transform: uppercase;
  font-size: 14px;
  color: #a6a6a6;
`;
