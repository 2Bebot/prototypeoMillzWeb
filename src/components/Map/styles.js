import styled from 'styled-components';
import theme from '../../theme';

export const Container = styled.div`
  width: 100vw;
  height: 400px;
  background-size: cover;

    @media (max-width: ${theme.mediaQuery.landscape}) {
      display: none;
    }

  img:first-child {
    width: 100%;
    height: 100%;
  }
`;

export const ResponsiveContainer = styled.div`
  width: 100vw;
  height: 400px;
  background-size: cover;

    @media (min-width: ${theme.mediaQuery.landscape}) {
      display: none;
    }

  img:first-child {
    width: 100%;
    height: 100%;
  }
`;
