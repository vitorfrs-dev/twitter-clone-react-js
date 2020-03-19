import React from 'react';
import PropTypes from 'prop-types';

import { FaRegHeart, FaRegComment } from 'react-icons/fa';
import { Container, Avatar, Text, Body, Actions } from './style';

function Tweet({ text, name, avatarUrl }) {
  return (
    <Container>
      <Avatar source={avatarUrl} />
      <Body>
        <h5>{name}</h5>

        <Text>{text}</Text>
        <Actions>
          <div>
            <FaRegHeart size={14} color="#555" />
            <span>100</span>
          </div>

          <div>
            <FaRegComment size={14} color="#555" />
            <span>0</span>
          </div>

          <div>
            <FaRegComment size={14} color="#555" />
            <span>0</span>
          </div>
        </Actions>
      </Body>
    </Container>
  );
}

Tweet.propTypes = {
  text: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  avatarUrl: PropTypes.string.isRequired,
};

export default Tweet;
