import React from 'react';
import TabNav from './components/TabNav.js';
import Header from './components/Header.js';
import AppRouter from './components/AppRouter.js';
import EpisodeList from './components/EpisodeList.js';


export default function App() {
  return <main>
    <Header />
    <TabNav />
    <AppRouter />
    {/* <EpisodeList /> */}
    


  </main>
}

const styleLink = document.createElement("link");
styleLink.rel = "stylesheet";
styleLink.href = "https://cdn.jsdelivr.net/npm/semantic-ui/dist/semantic.min.css";
document.head.appendChild(styleLink);
