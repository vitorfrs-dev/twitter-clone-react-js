import styled from 'styled-components';

export const Button = styled.button`
  border: none;
  font-weight: 700;
  padding: 8px 15px;
  box-sizing: border-box;
  border-radius: 30px;
  cursor: pointer;
  display: ${props => props.display};
  width: ${props => (props.display === 'block' ? '100%' : 'auto')};
  margin: ${props => props.margin};

  &:disabled {
    cursor: not-allowed;
  }

  &:hover {
    opacity: 0.8;
  }

  &:focus {
    outline: none;
  }
`;

Button.defaultProps = {
  display: 'inline-block',
  width: 'auto',
};

export const PrimaryButton = styled(Button)`
  border: 1px solid deepskyblue;
  background-color: deepskyblue;
  color: #fff;
`;

export const SecondaryButton = styled(Button)`
  border: 1px solid deepskyblue;
  background-color: transparent;
  color: deepskyblue;
`;
