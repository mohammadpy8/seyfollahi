import React from 'react';
//Context
import PhotoContextProvider from './context/PhotoContextProvider';
//Components
import EmojyPhoto from './components/EmojyPhoto';

import './App.css';

function App() {
  return (
    <div className="App">
      <PhotoContextProvider>
        <EmojyPhoto />
      </PhotoContextProvider>
    </div>
  );
}

export default App;