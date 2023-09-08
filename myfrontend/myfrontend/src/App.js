import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import MediaBox from './components/MediaBox';
import WhiteBox from './components/WhiteBox';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <NavBar />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <MediaBox />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <WhiteBox />
        </div>
      </div>
    </div>
  );
}

export default App;
