import React from 'react';
import { Container } from './styles';

import Header from '@components/common/Header';
import Carousel from '@components/Carousel';

function HomePage() {
  return (
    <>
      <Header />
      <Container>
        <Carousel />
      </Container>
    </>
  );
}

export default HomePage;
