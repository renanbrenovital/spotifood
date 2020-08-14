import React from 'react';

import Aside from '../../components/organisms/Aside';
import Header from '../../components/organisms/Header';
import Main from '../../components/organisms/Main';

import { Page } from './styles';
import FilterProvider from '../../context/FilterContext';

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
