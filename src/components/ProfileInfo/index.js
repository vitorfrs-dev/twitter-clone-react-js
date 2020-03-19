import React from 'react';
import { useSelector } from 'react-redux';
import { Container, TopBG, Avatar, UserInfo, SocialNumber } from './style';

export default function ProfileInfo({ profileMetrics }) {
  const userInfo = useSelector(state => state.user);

  return (
    <Container>
      <TopBG source="https://images.unsplash.com/photo-1505761671935-60b3a7427bad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80">
        <Avatar
          source={
            userInfo.avatar ||
            `https://api.adorable.io/avatars/127/${userInfo.email}.png`
          }
        />
      </TopBG>
      <UserInfo>
        <h4>{userInfo.name}</h4>
        <span>{userInfo.email}</span>
      </UserInfo>
      <SocialNumber>
        <div>
          <strong>Tweets</strong>
          <span>{profileMetrics.tweets}</span>
        </div>

        <div>
          <strong>Following</strong>
          <span>{profileMetrics.following}</span>
        </div>

        <div>
          <strong>Followers</strong>
          <span>{profileMetrics.followers}</span>
        </div>
      </SocialNumber>
    </Container>
  );
}
