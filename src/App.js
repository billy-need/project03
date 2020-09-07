import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import Nav from './Nav';
import Home from './Home';
import ToDos from './ToDos';
import Contacts from './Contacts';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/todos" component={ToDos} />
          <Route path="/contacts" component={Contacts} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
