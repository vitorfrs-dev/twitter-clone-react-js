import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
  display: flex;
  border-bottom: 1px solid #eee;
`;

export const Avatar = styled.div`
  border: 4px solid #fff;
  background: #333;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background-image: ${props => `url(${props.source})`};
  background-position: center;
  background-size: cover;
`;

export const Text = styled.div`
  width: 100%;
  box-sizing: border-box;
  line-height: 1.4;
  font-size: 16px;
  color: #444;
`;

export const Body = styled.div`
  flex: 1;
  padding: 5px;
  margin-left: 10px;
  box-sizing: border-box;
  h5 {
    margin-bottom: 10px;
    font-size: 16px;
    color: #333;
  }
`;

export const Actions = styled.div`
  display: flex;
  align-items: center;
  padding-top: 12px;

  div {
    margin-right: 30px;
    display: flex;
    align-items: center;
    span {
      margin-left: 5px;
      font-size: 14px;
    }
  }
`;
