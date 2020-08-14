import React from 'react';

import Aside from '../../organisms/Aside';
import Header from '../../organisms/Header';
import Main from '../../organisms/Main';

import { Page } from './styles';
import FilterProvider from '../../../context/FilterContext';

function Home() {
  return (
    <FilterProvider>
      <Page>
        <Aside />
        <Header />
        <Main />
      </Page>
    </FilterProvider>
  );
}

export default Home;
