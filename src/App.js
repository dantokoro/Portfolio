import React, { useState } from 'react';
import { Route, Switch } from "react-router-dom";
import Header from './components/Header';
import Home from './components/Home';
import Info from './components/Info';

function App() {
  return (
    <>
      <Header />
      <Route path="/">
        <Home />
      </Route>
      <Info />
      {/* <Switch>
        <Route path="/">
          <Home />
        </Route>
      </Switch> */}
      
    </>
  );
}

export default App;