import styled from 'styled-components';

export const Container = styled.div`
  height: 60px;
  width: 100%;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  padding: 0 20px;
  img {
    height: 20px;
    width: auto;
    transition: all 0.3s;

    &:hover {
      height: 40px;
    }
  }
`;
