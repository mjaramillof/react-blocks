import React from 'react';
import './App.css';
import Header from './Components/Header';
import Navigation from './Components/Navigation';
import Main from './Components/Main';
import SubContents from './Components/SubContents';
import Advertisement from './Components/Advertisement';

function App() {
  return (
    <div className="App">
      <Header />
      <div className='container'>
          <Navigation />
          <Main>
            <div className='subcontainer1'>
              <SubContents />
              <SubContents />
              <SubContents />
            </div>
            <div className='subcontainer2'>
              <Advertisement />
            </div>
          </Main>
      </div>
    </div>
  );
}

export default App;

