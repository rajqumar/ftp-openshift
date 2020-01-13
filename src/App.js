import React from 'react';
import logo from './logo.svg';
import './App.css';
import Landing from './containers/Landing'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="https://media.giphy.com/media/836HiJc7pgzy8iNXCn/giphy.gif" alt="logo" style={{marginBottom: '30px'}}/>
        {/* <img src="https://media.giphy.com/media/xTiTnnLkYTDWSOWSHK/giphy.gif" /> */}
        <p>Testing Redhat OpenShift</p>
        <Landing />
      </header>
    </div>
  );
}

export default App;
