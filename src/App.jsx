import { BrowserRouter, Route, Switch } from "react-router-dom";
import React from 'react';


import { Register } from '../src/pages/Register';
import { Home } from '../src/pages/Home';
import { Copi } from '../src/pages/Copi';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/register" exect component={Register} />
        <Route path="/copi"   component={Copi} />
      </Switch>
    </BrowserRouter>
  )
}
export default App;
