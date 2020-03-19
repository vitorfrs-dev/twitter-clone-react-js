import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { Container, Form } from './styles';
import { PrimaryButton, SecondaryButton } from '../../components/Button/style';

import api from '../../services/api';

export default function SignUp({ history }) {
  const [loading, setLoading] = useState(false);

  const [inputs, setInputs] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleInputChange = e => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setLoading(true);
    try {
      await api.post('/users', inputs);
      setInputs({
        ...inputs,
        name: '',
        email: '',
        password: '',
      });

      toast.success('Cadastro realizado!');
    } catch (err) {
      toast.error('Erro ao tentar efetuar o cadastro');
    }
    setLoading(false);
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <div>
          <input
            placeholder="name"
            name="name"
            onChange={handleInputChange}
            value={inputs.name}
          />
          <input
            placeholder="email"
            name="email"
            onChange={handleInputChange}
            value={inputs.email}
          />
          <input
            placeholder="password"
            name="password"
            type="password"
            onChange={handleInputChange}
            value={inputs.password}
          />
          <PrimaryButton type="submit" display="block" margin="10px 0">
            {loading ? 'Carregando...' : 'Enviar'}
          </PrimaryButton>

          <SecondaryButton
            display="block"
            onClick={() => history.push('signin')}
          >
            Entrar
          </SecondaryButton>
        </div>
      </Form>
    </Container>
  );
}
