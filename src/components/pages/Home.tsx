import React from 'react';

import Aside from '../organisms/Aside';
import Header from '../organisms/Header';
import Main from '../organisms/Main';

import { Page } from './styles';

function Home() {
  return (
    <Page>
      <Aside />
      <Header />
      <Main />
    </Page>
  );
}

export default Home;
