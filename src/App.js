import React, { Component } from 'react';

import './App.css';
import Person1 from './Person/Person'
import Teacher from './Person/Teacher'

class App extends Component {
  state = {
    persons: [
              {name: 'lily', age: 24 },
              {name: 'Rose', age: 12}
          ]
  }
  changeNameHandler = () => {
   //Dont use this this.state.persons[0].name = 'shimna';
   this.setState({
      persons: [
        {name: 'raja', age: 28 },
        {name: 'rani', age: 11}
    ]}
   );
  }

  render() {
    return (
      <div className="App">
        <h1> My react project, </h1>
        <p> One more sentence ... </p>
        <button onClick={this.changeNameHandler}> ChangeName</button>
        <Person1 
        name={this.state.persons[0].name} age={this.state.persons[0].age}>
        </Person1>
        <Person1 
        name={this.state.persons[1].name} age={this.state.persons[1].age}
        click1={this.changeNameHandler}
        > 
        Beautiful!!! 
        </Person1>
       
      </div>
    );
   // return React.createElement('div',{className: 'App'}, React.createElement('h1', null,'This is a react app'));
  }
}

export default App;




