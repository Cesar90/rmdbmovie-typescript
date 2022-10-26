import React from 'react';
import { 
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import Header from './elements/Header'
import Home from './Home'
import NotFound from './NotFound'
import Movie from './Movie'

import { GlobalStyle } from './styles/GlobalStyle';

const App = () => (
  <>
    <Router>
    <Header />
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route exact path="/:moviedId"
          render={props => <Movie {...props} />
        }>
        </Route>
        <Route component={NotFound} />
      </Switch>
    </Router>
      
    <GlobalStyle />
  </>
)

export default App;
