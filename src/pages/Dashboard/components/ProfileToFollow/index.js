import React from 'react';
import PropTypes from 'prop-types';

import { Container, Avatar, UserInfo } from './style';

export default function ProfileToFollow({ name, onFollowClick, avatarUrl }) {
  return (
    <Container>
      <Avatar source={avatarUrl} />
      <UserInfo>
        <strong>{name}</strong>
        <button type="button" onClick={onFollowClick}>
          Follow
        </button>
      </UserInfo>
    </Container>
  );
}

ProfileToFollow.propTypes = {
  name: PropTypes.string.isRequired,
  onFollowClick: PropTypes.func.isRequired,
  avatarUrl: PropTypes.string.isRequired,
};
