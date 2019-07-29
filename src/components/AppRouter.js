import React from 'react'
import { Switch, Route } from 'react-router-dom';
import CharacterList from './CharacterList'
import WelcomePage from './WelcomePage';
import LocationList from './LocationList';
import EpisodeList from './EpisodeList'

export default function AppRouter() {
  return <div className="page-view ui bottom attached segment active tab">
    <Switch>
      <Route exact path='/characters' component={CharacterList} />
      <Route exact path='/locations' component={LocationList} />
      <Route exact path='/' component={WelcomePage} />
      <Route exact path="/episodes" component={EpisodeList} />
    </Switch>
  </div>

}
