import styled from 'styled-components';

export const Container = styled.div`
  height: 120px;
  margin-bottom: 4px;
  padding: 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.palette.secondary};
  border-radius: ${({ theme }) => theme.borderRadius};
  color: #fff;
  overflow: hidden;
`;

export const Empty = styled.div`
  height: 120px;
  margin-bottom: 4px;
`;
