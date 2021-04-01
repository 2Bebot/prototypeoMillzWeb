import styled from 'styled-components';
import theme from '../../theme';


export const Container = styled.div`
  background-color: ${theme.color.secondary};
  height: 70px;
  width: 100%;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  position: fixed;
  z-index: 10000000000;

  div {
    padding: 0 120px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;

    @media(max-width: ${theme.mediaQuery.landscape}) {
      padding: 0 20px;
    }

    a {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 30px;
    cursor: pointer;
    text-decoration: none;
    opacity: 0.5;

      img {
        height: 20px;
        margin-right: 8px;
      }
    }
  }

  h2 {
    font-size: 32;
    color: ${theme.color.primary};
  }

  h4 {
    font-size: 18;
    color: ${theme.color.white};
    font-weight: 400;
    opacity: 0.4;
    cursor: pointer;

    @media(max-width: ${theme.mediaQuery.landscape}) {
      display: none;
    }
  }
  
`;
