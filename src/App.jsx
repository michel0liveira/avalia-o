import { BrowserRouter, Route, Switch } from "react-router-dom";
import React from 'react';


import { CreateRegister } from '../src/pages/CreateRegister';
import { Home } from '../src/pages/Home';
import { Register } from '../src/pages/Register';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/page/register" exect component={CreateRegister} />
        <Route path="/register"   component={Register} />
      </Switch>
    </BrowserRouter>
  )
}
export default App;
