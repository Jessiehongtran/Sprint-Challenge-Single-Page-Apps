import React from 'react';
import TabNav from './components/TabNav.js';
import Header from './components/Header.js';
import AppRouter from './components/AppRouter.js';
import CharacterList from './components/CharacterList.js';
import LocationList from './components/LocationList.js';
import EpisodeList from './components/EpisodeList.js';


export default function App() {
  return <main>
    <Header />
    <TabNav />
    <AppRouter />
    {/* <CharacterList />
    <LocationList /> */}
    <EpisodeList />
    


  </main>
}