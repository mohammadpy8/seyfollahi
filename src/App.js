import React from 'react';
import Fliters from './components/Fliters';
import MenuBar from './components/MenuBar';

import './App.css';
import ShowContacts from './components/ShowContacts';
import Pagination from './components/Pagination';

function App() {
  return (
    <div>
      <Fliters />
      <MenuBar />
      <ShowContacts />
      <Pagination />
    </div>
  );
}

export default App;
