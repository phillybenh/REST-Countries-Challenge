import React from "react";
import { Route, Switch, withRouter } from "react-router-dom";

// styles
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon as faMoonSolid } from "@fortawesome/free-solid-svg-icons";
import { faMoon as faMoonReg } from "@fortawesome/free-regular-svg-icons";
// import { faMoon as faMoonOutline } from "@fortawesome/free-regular-svg-icons";

// components
import Main from "./components/Main";
import CountryDetail from "./components/CountryDetail";

// hooks
import { useDarkMode } from "./hooks/useDarkMode";

function App(props) {
  const [dark, setDark] = useDarkMode("dark", false);

  const toggler = (e) => {
    e.preventDefault();
    setDark(!dark);
  };
  console.log(dark);
  return (
    <div className="App">
      <header className="App-header">
        <h1>Where in the world?</h1>
        <button onClick={toggler}>
          {!dark ? (
            <FontAwesomeIcon icon={faMoonReg} />
          ) : (
            <FontAwesomeIcon icon={faMoonSolid} />
          )}
          Dark Mode
        </button>
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
