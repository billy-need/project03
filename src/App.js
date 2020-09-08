import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import Nav from './Nav';
import Home from './Home';
import Tasks from './Tasks';
import Contacts from './Contacts';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/tasks" component={Tasks} />
          <Route path="/contacts" component={Contacts} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
