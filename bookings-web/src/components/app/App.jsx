import React from 'react';
import {BrowserRouter, Route , Switch} from 'react-router-dom'
import Getaways from '../../containers/Getaways';
import Details from '../../containers/Details';
import LoginPage from '../../containers/LoginPage';

export default function App() {
  return (
    <div>
        <BrowserRouter>
          <Switch>
          <Route
              path="/login"
              exact
              render={(routerProps) => <LoginPage {...routerProps}/>}
              />
              <Route
                path="/"
                exact
                render={(routerProps) => <Getaways {...routerProps}/>}
                />
              
              <Route
              path="/places/:id"
              exact
              render={(routerProps) => <Details {...routerProps}/>}
              />
          </Switch>
        </BrowserRouter>
    </div>

  )
}
