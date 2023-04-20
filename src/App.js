import React from 'react';
import { Route, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

import Login from './components/Login';
import Recipes from './components/Recipes';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/meals" component={ Recipes } />
          <Route exact path="/" component={ Login } />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
