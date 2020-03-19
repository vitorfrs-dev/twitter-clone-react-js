import React from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import ProfileTofollow from '../ProfileToFollow';

import api from '../../../../services/api';

import { Container, Header, Content } from './styles';

export default function WhoToFollow({ list, onNewFollowing }) {
  const handleFollow = async id => {
    try {
      await api.post(`/users/follow/${id}`);
      onNewFollowing(id);
      toast.success('Sucesso');
    } catch (err) {
      toast.error('Erro');
    }
  };

  return (
    <Container>
      <Header>
        <h4>Who to follow</h4>
      </Header>
      <Content>
        {list.map(item => (
          <ProfileTofollow
            key={item._id}
            name={item.name}
            avatarUrl={
              item.avatarUrl ||
              `https://api.adorable.io/avatars/127/${item.email}.png`
            }
            onFollowClick={() => handleFollow(item._id)}
          />
        ))}
      </Content>
    </Container>
  );
}

WhoToFollow.propTypes = {
  list: PropTypes.array.isRequired,
  onNewFollowing: PropTypes.func,
};
