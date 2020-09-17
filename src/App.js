import React, { Component } from 'react';

import './App.css';
import './Person/Person.css'
import Person1 from './Person/Person'
import Teacher from './Person/Teacher'

class App extends Component {
  state = {
    persons: [
              {name: 'lily', age: 24 },
              {name: 'Rose', age: 12}
          ]
  }
  changeNameHandler = (newname) => {
   //Dont use this this.state.persons[0].name = 'shimna';
   this.setState({
      persons: [
        {name: newname, age: 28 },
        {name: 'rani', age: 11}
    ]}
   );
  }

  changingNameHandler = (event) => {
    //Dont use this this.state.persons[0].name = 'shimna';
    this.setState({
       persons: [
         {name: "raja", age: 28 },
         {name: event.target.value, age: 11}
     ]}
    );
   }

  render() {
    const btnstyle={
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    return (
      <div className="App">
        <h1> My react project, </h1>
        <p> One more sentence ... </p>
        <button 
        style={btnstyle}
        onClick={() => this.changeNameHandler('hello')}> ChangeName</button>
        <Person1 
        name={this.state.persons[0].name} age={this.state.persons[0].age}>
        </Person1>
        <Person1 
        name={this.state.persons[1].name} age={this.state.persons[1].age}
        click1={this.changeNameHandler.bind(this,'Shimna')}
        change={this.changingNameHandler} 
        > 
        Beautiful!!! 
        </Person1>
       
      </div>
    );
   // return React.createElement('div',{className: 'App'}, React.createElement('h1', null,'This is a react app'));
  }
}

export default App;




