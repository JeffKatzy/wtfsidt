import React from 'react';
import { Route } from 'react-router';
import App from './App';
import Signin from './components/Signin';
import NewUser from './components/NewUser';
import Movies from './components/Movies';
import Index from './components/Index'

export default (
  <Route path="/" component={App} >
    <Route path="signin" component={Signin} />
    <Route path="newuser" component={NewUser} />
    <Route path="index" component={Index} />
    <Route path="movies" component={Movies} />
  </Route>
)
