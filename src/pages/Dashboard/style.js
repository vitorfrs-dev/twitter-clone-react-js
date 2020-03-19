import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 auto;
  padding-top: 20px;
  width: 100%;
  max-width: 1300px;
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  grid-gap: 12px;

  main {
    box-sizing: border-box;
  }
`;

export const Feed = styled.div`
  background-color: #fff;
  border-radius: 4px;
  width: 100%;
  overflow: hidden;
`;

export const FeedBody = styled.div`
  background-color: #fff;
  width: 100%;
`;
export const Header = styled.form`
  box-sizing: border-box;
  padding: 15px;
  background: #e7f3fe;
  display: flex;
  input {
    flex: 1;
    padding: 10px;
    border-radius: 4px;
    box-sizing: border-box;
    border: 0;
  }
`;

export const SmallAvatar = styled.div`
  border: 1px solid #fff;
  background: blue;
  width: 40px;
  height: 40px;
  margin-right: 10px;
  border-radius: 50%;
  background-image: ${props => `url(${props.source})`};
  background-position: center;
  background-size: cover;
`;
