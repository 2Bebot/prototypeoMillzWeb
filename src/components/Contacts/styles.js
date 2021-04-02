import styled from 'styled-components';
import theme from '../../theme';

export const Container = styled.div`
  display: flex;
  height: 500px;
  margin: 0;

  @media (max-width: ${theme.mediaQuery.landscape}) {
    flex-direction: column;
    height: 100%;
    width: 100%;
  }
  
  img {
    width: 50%;
   
    @media (max-width: ${theme.mediaQuery.landscape}) {
      height: 100%;
      width: 100%;
      bottom: 0;
      right: 0;
      z-index: -1;
      object-fit: cover;
      margin: auto;
    }
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  width: 50%;
  background-color: ${theme.color.secondary};
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: ${theme.mediaQuery.landscape}) {
    width: 100vw;
    padding: 40px 0px;
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
`;

export const InstagramIcon = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 30px;
  cursor: pointer;
  text-decoration: none;
  margin-bottom: 40px;

    img {
      height: 20px;
      width: 20px;
      margin-right: 8px;

      @media(max-width: ${theme.mediaQuery.landscape}) {
        height: 20px;
        width: 20px;
        margin-right: 8px;
        z-index: 0;
      }
    }
    
    p {
      font-size: 18px;
      color: ${theme.color.white};
      padding-bottom: 2px;
    }
`
