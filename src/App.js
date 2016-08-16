import React, { Component } from 'react';


import SingleContainer from './components/SingleContainer';

import Modal from './components/Modal';
import modalData from './data/modal-data';
import './App.css';
import './styles/Amine.css';
import './styles/state.css';

let App = React.createClass({

  render: function() {
    return (
      <div className="wrapper">
        
        <div className="App">
          <div className="App-header">
            
            <h2>Welcome to React</h2>
          </div>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
        </div>

        <SingleContainer />
        <Modal headline={modalData.headline} body={modalData.copy} closeToggle={modalData.closeToggle} />        
      </div>
    );
  }
})

export default App;
