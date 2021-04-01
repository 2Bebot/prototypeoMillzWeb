import styled from 'styled-components';
import theme from '../../theme';

export const Container = styled.div`
  background-color: ${theme.color.secondary};
  display: flex;
  height: 200px;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  p {
    font-size: 16px;
    color: ${theme.color.white};
    font-weight: 600;
    
    &:first-child {
      margin-bottom: 20px;
    }
  }

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 30px;
    cursor: pointer;
    text-decoration: none;
    margin-bottom: 40px;

    img {
      height: 20px;
      margin-right: 8px;
    }

    p {
      margin-bottom: 2px;
    }
  }
`;
