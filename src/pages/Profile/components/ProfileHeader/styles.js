import styled from 'styled-components';

export const Container = styled.div`
  background-color: deepskyblue;
  height: 300px;
  width: 100%;
  position: relative;
`;

export const Footer = styled.div`
  height: 70px;
  background-color: #fff;
  width: 100%;
  position: absolute;
  bottom: 0;
`;

export const MetricsBar = styled.div`
  display: flex;
  align-items: center;
  height: 100%;

  div {
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: center;
    align-items: center;
    padding: 0 20px;
    color: #777;

    strong {
      font-weight: 700;
      font-size: 14px;
    }

    span {
      font-size: 22px;
      font-weight: 700;
    }
  }
`;
