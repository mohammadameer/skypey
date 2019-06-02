import React from 'react';
import _ from "lodash"
import './App.css';

import Store from "../store"

import Sidebar from '../components/Sidebar';
import Main from '../components/Main';

function App() {

  const { contacts, user, activeUserId } = Store.getState()

  return (


    <div className="App">
      <Sidebar contacts={_.values(contacts)} />
      <Main user={user} activeUserId={activeUserId} />
    </div>
  );
}

export default App;
