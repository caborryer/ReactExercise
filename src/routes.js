import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import Props from '../src/Components/Props/Props'


function Routes() {
  return (
    <Switch>
      <Route path="/props" component={Props}/>
    </Switch>
  )

}

export default Routes;

