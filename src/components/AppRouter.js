import React from 'react'
import { Switch, Route } from 'react-router-dom';
import CharacterList from './CharacterList'
import WelcomePage from './WelcomePage';
import LocationList from './LocationList';
import EpisodeList from './EpisodeList'

export default function AppRouter() {
  return <div className="page-view ui bottom attached segment active tab">
    <Switch>
      <Route path='/characters' component={CharacterList} />
      <Route path='/locations' component={LocationList} />
      <Route component={WelcomePage} />
      <Route path="/episodes" component={EpisodeList} />
    </Switch>
  </div>

}
