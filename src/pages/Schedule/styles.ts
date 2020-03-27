import styled from 'styled-components';
import { containedButton } from '../../styles/commons';

import Button from '../../components/Button';

export const Container = styled.div`
  width: 80%;
  max-width: 980px;
  margin: 0 auto;
`;

export const Days = styled.div`
  margin-bottom: 24px;
  padding-bottom: 24px;
  border-bottom: 4px solid #565656;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-gap: 4px;
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const DayNumber = styled.div`
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.palette.secondary};
  font-size: 25px;
  font-weight: bold;
  color: #fff;
`;

export const DayName = styled.div`
  margin-top: 16px;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Calendar = styled.div`
  padding: 24px 12px;
  background: #fff;
  box-shadow: ${({ theme }) => theme.boxShadow};
  border-radius: ${({ theme }) => theme.borderRadius};
`;

export const NewEvent = styled(Button)`
  ${containedButton};
  width: 200px;
`;
