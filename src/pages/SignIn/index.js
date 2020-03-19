import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Form } from './styles';
import { PrimaryButton, SecondaryButton } from '../../components/Button/style';

import { signInRequest } from '../../store/modules/auth/actions';

export default function SignIn({ history }) {
  const [inputs, setInputs] = useState({
    email: '',
    password: '',
  });

  const dispatch = useDispatch();

  const isLoading = useSelector(state => state.auth.loading);

  const handleInputChange = e => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    dispatch(signInRequest(inputs.email, inputs.password));
  };

  return (
    <Container>
      <Form>
        <div>
          <input
            placeholder="email"
            name="email"
            onChange={handleInputChange}
          />
          <input
            placeholder="password"
            name="password"
            type="password"
            onChange={handleInputChange}
          />
          <PrimaryButton
            type="button"
            display="block"
            margin="10px 0"
            onClick={handleSubmit}
          >
            {isLoading ? 'Carregando' : 'Entrar'}
          </PrimaryButton>
          <SecondaryButton
            type="button"
            display="block"
            onClick={() => history.push('SignUp')}
          >
            Cadastrar-se
          </SecondaryButton>
        </div>
      </Form>
    </Container>
  );
}
