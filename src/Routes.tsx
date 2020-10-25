import React from 'react';
import { BrowserRouter, Route, Switch,} from 'react-router-dom';
import Titlebar from './components/Titlebar';
import Home from './Pages/Home';
import Search from './Pages/Search';

const Routes = () => {
  return (
    <BrowserRouter>
      <Titlebar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/search" component={Search} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;