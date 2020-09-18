import React, { Component } from 'react';

import './App.css';
import './Person/Person.css'
import Person1 from './Person/Person'


class App extends Component {
  state = {
    persons: [
              {id: 'p1', name: 'lily', age: 24 },
              {id: 'p2', name: 'Rose', age: 12}
          ],
    showPersons: false
  }
  deleteNameHandler = (nameIndex) => {

    //const persons = this.state.persons;
    //const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(nameIndex, 1);
    this.setState({persons: persons});
  }

 
   changeTextHandler = ( event, id ) => {
      const personIndex =  this.state.persons.findIndex(p => {
        return p.id === id;
      });
      const person =  { ...this.state.persons[personIndex] };
      person.name = event.target.value;

      const persons =  [ ...this.state.persons ];
      persons[personIndex] =  person;
      this.setState( {persons: persons} );
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
        {this.state.persons.map((person, index) => {
          return <Person1 
                  click1={this.deleteNameHandler.bind(this, index)}
                  change={(event) => this.changeTextHandler(event, person.id)}
                  name={person.name} 
                  age={person.age}
                  key={person.id} 
                  />
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
  }
}

export default App;