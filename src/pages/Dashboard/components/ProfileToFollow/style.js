import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  padding: 10px 0;
  box-sizing: border-box;
  border-bottom: 1px solid #eee;
`;

export const Avatar = styled.div`
  width: 45px;
  height: 45px;
  border-radius: 50%;
  background-color: #444;
  background-image: ${props => `url(${props.source})`};
  background-position: center;
  background-size: cover;
`;

export const UserInfo = styled.div`
  margin-left: 10px;
  display: flex;
  flex-direction: column;
  strong {
    font-size: 12px;
    margin-bottom: 2px;
  }

  button {
    border-radius: 12px;
    background: transparent;
    border: 1px solid deepskyblue;
    color: deepskyblue;
    padding: 4px 5px;
    width: 80px;
    font-weight: 700;
  }
`;
