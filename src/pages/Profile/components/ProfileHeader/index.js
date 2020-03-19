import React from 'react';

import { Container, Footer, MetricsBar } from './styles';

export default function ProfileHeader() {
  return (
    <Container>
      <Footer>
        <MetricsBar>
          <div>
            <strong>Tweets</strong>
            <span>1000</span>
          </div>

          <div>
            <strong>Following</strong>
            <span>100</span>
          </div>

          <div>
            <strong>Followers</strong>
            <span>100</span>
          </div>

          <div>
            <strong>Moments</strong>
            <span>100</span>
          </div>
        </MetricsBar>
      </Footer>
    </Container>
  );
}
