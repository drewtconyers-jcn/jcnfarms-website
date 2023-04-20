import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavbarComponent from './NavbarComponent';
import Overview from './Overview';
import Agriculture from './Agriculture';
import Technology from './Technology';
import Produce from './Produce';
import Sustainability from './Sustainability';

function App() {
  return (
    <Router>
      <div>
        <NavbarComponent />
        <Switch>
          <Route exact path="/" component={Overview} />
          <Route path="/agriculture" component={Agriculture} />
          <Route path="/technology" component={Technology} />
          <Route path="/produce" component={Produce} />
          <Route path="/sustainability" component={Sustainability} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
