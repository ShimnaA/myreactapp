import React, { Component } from 'react';

import './App.css';
import Person1 from './Person/Person'
import Teacher from './Person/Teacher'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1> My react project, </h1>
        <p> One more sentence ... </p>
        <Person1 name="lily" age="14"></Person1>
        <Person1 name="liies" age="16"> This is my place </Person1>
        
        <Teacher />
       
      </div>
    );
   // return React.createElement('div',{className: 'App'}, React.createElement('h1', null,'This is a react app'));
  }
}

export default App;




