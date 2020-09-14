import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import Nav from './components/Nav';
import Home from './components/Home';
import Tasks from './components/Tasks';
import Contacts from './components/Contacts';
import ContactList from './components/ContactList';

function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/components/tasks" component={Tasks} />
          <Route path="/components/contacts" component={Contacts} />
          <Route path="/components/contactlist" component={ContactList} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
