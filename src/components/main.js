import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LandingPage from './landingpage';
import SignUp from './signup';
import ViewAll from './viewall';
import Login from './login';
import UserPage from './userpage';


const Main = () => (
  <Switch>
    <Route exact path="/" component={LandingPage} />
    <Route path="/signup" component={SignUp} />
    <Route path="/viewall" component={ViewAll} />
    <Route path="/login" component={Login} />
    <Route path="/userpage" component={UserPage} />
  </Switch>
)

export default Main;
