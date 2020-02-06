import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Props from '../src/Components/Props/Props';
import Users from '../src/Components/users/users';
import Movies from '../src/Components/movies/movies';


function Routes() {
  return (
    <Switch>
      <Route path="/props" component={Props}/>
      <Route path="/users" component={Users}/>
      <Route path="/movies" component={Movies}/>
    </Switch>
  )

}

export default Routes;

