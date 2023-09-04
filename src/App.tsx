import './App.css';

import { MainHeader } from './containers/MainHeader';
import { MainPage } from './pages/MainPage';
import React from 'react';

function App() {

  return (
    <div className="spa flex flex-col">
      <MainHeader />
      <hr />
      <MainPage />
    </div>
  );
}

export default App;



