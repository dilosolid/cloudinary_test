import React, { Component } from 'react';
import Image from './Image';
import './App.css';

class App extends Component {
  render() {    
    return (
      <div className="App">
        <Image username    ='luxuryp'
               imagename   ='work-24_1_tu4ujr'
               innerWidth  ={ window.innerWidth } 
               innerHeight ={ window.innerHeight } 
               xPosition   = 'center'
               yPosition   = 'center'
               />
      </div>
    );
  }
}
export default App;
