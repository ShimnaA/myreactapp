
//import Validateinput from './Person/Validation';
//import CharComp from './Person/Charcomponent';
//import Blog from './Person/Blog'

import React, { Component } from 'react';
import './App.css';
import styled from 'styled-components';
import Person from './Person/Person';

const StyledButton = styled.button`
  background-color: ${props => props.all ? 'red' : 'green'};
  color: white;
  font: inherit;
  border: 1px solid blue;
  padding: 8px;
  cursor: pointer;
  &:hover: {
    background-color: lightgreen;
    color: black;
  }

  `;

class App extends Component {
  state = {
    persons: [
      {id:'p1', name: 'Max', age: 28 },
      {id:'p2', name: 'Manu', age: 29 },
      {id:'p3', name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other value',
    showPersons: false
  }

  switchNameHandler = ( newName ) => {
    // console.log('Was clicked!');
    // DON'T DO THIS: this.state.persons[0].name = 'Maximilian';
    this.setState( {
      persons: [
        { name: newName, age: 28 },
        { name: 'Manu', age: 29 },
        { name: 'Stephanie', age: 27 }
      ]
    } )
  }

  nameChangedHandler = ( event ) => {
    this.setState( {
      persons: [
        { name: 'Max', age: 28 },
        { name: event.target.value, age: 29 },
        { name: 'Stephanie', age: 26 }
      ]
    } )
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState( { showPersons: !doesShow } );
  }

  personChangeHandler = (event, perid) => {
    const personIndex = this.state.persons.findIndex(per => {
      return per.id === perid;
    });
    const person = {...this.state.persons[personIndex]};
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({persons: persons});

  }
  deletePersonHandler = (index) => {
      const pers = [...this.state.persons];
      pers.splice(index,1);
      this.setState({persons: pers});
  }

  render () {
    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };
    

    let persons = null;

    if ( this.state.showPersons ) {
      persons = (
        <div>
          {this.state.persons.map((per, index) => {
             return <Person key={per.id}
              name={per.name}
              age={per.age}
              change={(event) => this.personChangeHandler(event, per.id)}
              click1={() => this.deletePersonHandler(index)}/>
          })}  
        </div>
      );
      style.backgroundColor = 'red';
    }

    //let classes = ['red', 'bold'].join(' ');  //returns a string separted by space "red bold"
    const classes = [];
    if (this.state.persons.length <=2 ){
      classes.push('red')  //classes=['red]
    }
    if (this.state.persons.length <=1 ){
      classes.push('bold')  //classes=[red,'bold]
    }
    
    

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p className={classes.join(' ')}>This is really working!</p>
        <StyledButton all={this.state.showPersons }
          onClick={this.togglePersonsHandler}>
          Toggle Persons </StyledButton>
        {persons}
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;

