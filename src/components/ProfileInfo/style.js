import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 250px;
  background-color: #fff;
  border-radius: 4px;
  overflow: hidden;
`;

export const TopBG = styled.div`
  width: 100%;
  height: 110px;
  background-color: #333;
  position: relative;
  background-image: ${props => `url(${props.source})`};
  background-position: center;
  background-size: cover;
`;

export const Avatar = styled.div`
  border: 4px solid #fff;
  background: #333;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  position: absolute;
  bottom: -50px;
  left: 10px;
  background-image: ${props => `url(${props.source})`};
  background-position: center;
  background-size: cover;
`;

export const UserInfo = styled.div`
  margin-left: 110px;
  padding: 10px 0px;

  h4 {
    font-size: 20px;
  }

  span {
    color: #555;
    font-size: 14px;
  }
`;

export const SocialNumber = styled.div`
  display: flex;
  justify-content: space-around;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    strong {
      color: #777;
      margin-bottom: 5px;
      font-size: 14px;
    }

    span {
      color: #888;
      font-size: 14px;
    }
  }
`;
