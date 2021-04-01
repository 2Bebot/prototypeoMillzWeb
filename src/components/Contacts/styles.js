import styled from 'styled-components';
import theme from '../../theme';

export const Container = styled.div`
  display: flex;
  height: 500px;
  margin: 0;

  @media (max-width: ${theme.mediaQuery.landscape}) {
    flex-direction: column;
    height: auto;
  }
  
  img {
    flex: 0.5;
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  flex: 0.5;
  background-color: ${theme.color.secondary};
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: ${theme.mediaQuery.landscape}) {
    padding: 40px 20px;
  }

  h2 {
    font-size: 32px;
    color: ${theme.color.white};
    opacity: 0.5;
    padding-bottom: 40px;
  }

  div {
    padding-bottom: 30px;

    p {
      font-size: 18px;
      color: ${theme.color.white};
      text-align: center;
      padding-bottom: 4px;
    }
  }

  p {
    font-size: 18px;
    color: ${theme.color.white};
    padding-bottom: 20px;
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
      padding-bottom: 2px;
    }
  }
`;
