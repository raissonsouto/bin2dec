import React from 'react';
import './App.css';
import Main from './components/Main.js'

function App() {
  return (
    <div className="App">
      <header className='title'>bin<span style={{color: '#08f'}}>2</span>dec</header>
      <Main />
      <div className='help-a' style={{color: '#08f'}}>See the process</div>
    </div>
  );
}

export default App;
