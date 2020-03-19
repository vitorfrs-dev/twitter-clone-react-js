import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { Container, Feed, Header, SmallAvatar, FeedBody } from './style';
import ProfileInfo from '../../components/ProfileInfo';
import Tweet from './components/Tweet';
import WhoToFollow from './components/WhotToFollow';

import { signOut } from '../../store/modules/auth/actions';

import { PrimaryButton } from '../../components/Button/style';

import api from '../../services/api';

export default function Dashboard() {
  const [tweets, setTweets] = useState([]);
  const [newTweet, setNewTweet] = useState('');
  const [usersToFollow, setUsersToFollow] = useState([]);
  const [profileMetrics, setProfileMetrics] = useState({
    followers: 0,
    following: 0,
    tweets: 0,
  });

  const dispatch = useDispatch();

  const userInfo = useSelector(state => state.user);

  async function getTweets() {
    const response = await api.get('/tweet');
    setTweets(response.data);
  }

  async function getUsersToFollow() {
    const response = await api.get('/usersToFollow');
    setUsersToFollow(response.data);
  }

  async function getProfileMetrics() {
    const response = await api.get('/profileMetrics');
    setProfileMetrics({ ...profileMetrics, ...response.data });
  }

  useEffect(() => {
    getTweets();
    getUsersToFollow();
    getProfileMetrics();
  }, []);

  const handleInputChange = e => {
    setNewTweet(e.target.value);
  };

  const handleNewFollowing = id => {
    setProfileMetrics({
      ...profileMetrics,
      following: profileMetrics.following + 1,
    });
    setUsersToFollow(usersToFollow.filter(user => user._id !== id));
    getTweets();
  };

  const submitTweet = async e => {
    e.preventDefault();
    try {
      await api.post('/tweet', {
        text: newTweet,
      });

      setNewTweet('');
      setProfileMetrics({
        ...profileMetrics,
        tweets: profileMetrics.tweets + 1,
      });
      toast.success('Tweet criado');
      getTweets();
    } catch (err) {
      toast.error('Erro ao tentar criar um tweet');
    }
  };

  return (
    <Container>
      <aside>
        <ProfileInfo
          name={userInfo.name}
          email={userInfo.email}
          profileMetrics={profileMetrics}
        />
      </aside>

      <main>
        <Feed>
          <Header onSubmit={submitTweet}>
            <SmallAvatar
              source={
                userInfo.avatar ||
                `https://api.adorable.io/avatars/127/${userInfo.email}.png`
              }
            />
            <input
              placeholder="What is happening?"
              value={newTweet}
              onChange={handleInputChange}
            />
          </Header>

          <FeedBody>
            {tweets.map(item => (
              <Tweet
                key={item._id}
                text={item.text}
                name={item.createdBy.name}
                avatarUrl={
                  item.createdBy.avatarUrl ||
                  `https://api.adorable.io/avatars/140/${item.createdBy.email}.png`
                }
              />
            ))}
          </FeedBody>
        </Feed>
      </main>

      <aside>
        <WhoToFollow list={usersToFollow} onNewFollowing={handleNewFollowing} />
        <br />
        <PrimaryButton display="block" onClick={() => dispatch(signOut())}>
          Sair
        </PrimaryButton>
      </aside>
    </Container>
  );
}
