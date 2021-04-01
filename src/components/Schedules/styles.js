import styled from 'styled-components';
import SchedulesPizza from '../../assets/images/schedules_pizza.jpg'
import theme from '../../theme';

export const Container = styled.div`
  background: url(${SchedulesPizza});
  height: 500px;
  width: 100vw;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  @media(max-width: ${theme.mediaQuery.portrait}) {
    background: ${theme.color.secondary};
  }

  div:first-child {
    position: absolute;
    background: ${theme.color.black};
    opacity: 0.6;
    height: 100%;
    width: 100%;
    top: 0;
    right: 0;
    z-index: 1;

    @media(max-width: ${theme.mediaQuery.portrait}) {
      display: none;
    }
  }

  div {
    display: flex;
    flex-direction: column;
    z-index: 1000000;
    align-items: center;
    justify-content: center;

    h2 {
      font-size: 32px;
      color: ${theme.color.white};
      opacity: 0.9;
      padding-bottom: 40px;
      text-align: center;
    }

    p {
      font-size: 18px;
      color: ${theme.color.white};
      padding-bottom: 40px;
      font-weight: bold;
      text-align: center;
    }

    span {
      font-size: 20px;
      color: ${theme.color.white};
      padding-bottom: 10px;
      font-weight: bold;
      text-align: center;
    }
  }
`;
