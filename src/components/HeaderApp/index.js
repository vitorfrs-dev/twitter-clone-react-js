import React from 'react';

import { Container } from './style';
import logo from '../../assets/Twiiter_logo.png';

const HeaderApp = () => {
  return (
    <Container>
      <img src={logo} />
    </Container>
  );
};

export default HeaderApp;
