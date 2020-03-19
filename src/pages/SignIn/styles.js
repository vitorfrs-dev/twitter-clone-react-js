import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Form = styled.form`
  width: 100%;
  max-width: 400px;
  background: #fff;
  padding: 20px;
  box-sizing: border-box;
  border-radius: 10px;
  height: 400px;
  display: flex;
  align-items: center;

  input {
    width: 100%;
    padding: 10px;
    box-sizing: border-box;
    border: 1px solid #ddd;
    margin-bottom: 20px;
    border-radius: 4px;
  }
`;
