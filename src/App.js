import React, { Component } from 'react';
import './App.css';

import Person from './Person/Person';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary'




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
             return <ErrorBoundary  key={per.id}>
             <Person 
              name={per.name}
              age={per.age}
              change={(event) => this.personChangeHandler(event, per.id)}
              click1={() => this.deletePersonHandler(index)}/></ErrorBoundary>
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
        <button style={style}
          onClick={this.togglePersonsHandler}>
          Toggle Persons </button>
        {persons}
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;

