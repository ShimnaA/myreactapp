import React, { Component } from 'react';

import './App.css';
import './Person/Person.css'
import Person1 from './Person/Person'


class App extends Component {
  state = {
    persons: [
              {name: 'lily', age: 24 },
              {name: 'Rose', age: 12}
          ],
    showPersons: false
  }
  changeNameHandler = (newname) => {
   
   this.setState({
      persons: [
        {name: newname, age: 28 },
        {name: 'rani', age: 11}
    ]}
   );
  }

  changingNameHandler = (event) => {
    
    this.setState({
       persons: [
         {name: "raja", age: 28 },
         {name: event.target.value, age: 11}
     ]}
    );
   }

   toggleNameHandler = () => {
      const currShowPersons = this.state.showPersons;
      this.setState({
        showPersons: !currShowPersons}
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
    let persons = null;
    if (this.state.showPersons){
      persons = ( <div>
        {this.state.persons.map(person => {
        return <Person1 name={person.name} age={person.age} />

      })}
      </div>);
    }

    return (
      <div className="App">
        <h1> My react project, </h1>
        <p> One more sentence ... </p>
        <button 
        style={btnstyle}
        onClick={this.toggleNameHandler}> ToggleName</button>
        {persons}
      </div>
    );
   // return React.createElement('div',{className: 'App'}, React.createElement('h1', null,'This is a react app'));
  }
}

export default App;