import styled from 'styled-components';

import Button from '../../components/Button';

export const Container = styled.div`
  width: 80%;
  max-width: 980px;
  margin: 0 auto;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Calendar = styled.div`
  padding: 24px 12px;
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
`;

export const NewEvent = styled(Button)`
  width: 200px;
  padding: 12px;
  background: #f180c1;
  font-size: 20px;
  font-weight: bold;
  color: #fff;
`;
