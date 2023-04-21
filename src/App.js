import React from 'react';
import { Route, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

import Login from './components/Login';
import Meals from './components/Meals';
import Drinks from './components/Drinks';
import Profile from './components/Profile';
import DrinksInProcess from './components/DrinksInProcess';
import DrinksId from './components/DrinksId';
import MealsId from './components/MealsId';
import MealsInProcess from './components/MealsInProcess';
import DoneRecipes from './components/DoneRecipes';
import FavoriteRecipes from './components/FavoriteRecipes';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/done-recipes" component={ DoneRecipes } />
          <Route path="/favorite-recipes" component={ FavoriteRecipes } />
          <Route path="/drinks:id-da-receita/in-progress" component={ DrinksInProcess } />
          <Route path="/meals:id-da-receita/in-progress" component={ MealsInProcess } />
          <Route path="/drinks:id-da-receita" component={ DrinksId } />
          <Route path="/meals:id-da-receita" component={ MealsId } />
          <Route path="/profile" component={ Profile } />
          <Route path="/drinks" component={ Drinks } />
          <Route path="/meals" component={ Meals } />
          <Route exact path="/" component={ Login } />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
