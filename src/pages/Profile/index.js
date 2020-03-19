import React from 'react';

import { Container, BaseContainer, UserInfo, Avatar } from './styles';

import ProfileHeader from './components/ProfileHeader';

export default function Profile() {
  return (
    <Container>
      <ProfileHeader />
      <BaseContainer>
        <UserInfo>
          <Avatar />

          <h4>Vitor Ferreira</h4>
          <strong>@vitorfrs</strong>
        </UserInfo>
      </BaseContainer>
    </Container>
  );
}
