import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';

// components
import Main from './components/Main';
import CountryDetail from './components/CountryDetail';


function App(props) {

  return (
    <div className="App">
      <header className="App-header">
        <h1>Where in the world?</h1>
      </header>
      <Switch>
        <Route path="/country/:alpha3code">
          <CountryDetail />
        </Route>
        <Route path="/">
          <Main />
        </Route>
      </Switch>
    </div>
  );
}

export default withRouter(App);
