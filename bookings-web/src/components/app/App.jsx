import React from 'react';
import {BrowserRouter as Router, Route , Switch} from 'react-router-dom'
import Getaways from '../../containers/Getaways';
import Details from '../../containers/Details'


export default function App() {
  return (
    <div>
      <Router>
        <Switch>
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
      </Router>
    </div>

  )
}
