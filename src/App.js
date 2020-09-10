import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import Nav from './components/Nav';
import Home from './components/Home';
import Tasks from './components/Tasks_old2';
import Contacts from './components/Contacts';

function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/components/tasks" component={Tasks} />
          <Route path="/components/contacts" component={Contacts} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
