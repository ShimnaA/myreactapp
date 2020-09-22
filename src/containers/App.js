import React, { Component } from 'react';
import './App.css';

import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit'


class App extends Component {
  constructor(props) {
    super(props);
    console.log('[App.js] constructor');
  }

  state = {
    persons: [
      {id:'p1', name: 'Max', age: 28 },
      {id:'p2', name: 'Manu', age: 29 },
      {id:'p3', name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other value',
    showPersons: false
  }

  static getDerivedStateFromProps(props, state){

    console.log("App.js GetderivedStaateFrom props")
    return props;
  }

  componentDidMount(){
    console.log("App.js componentDidMount");
  }

  shouldComponentUpdate(){
    console.log("App.js shouldComponentUpdate");
    return true;
  }
  componentDidUpdate(){
    console.log("App.js componentDidUpdate");
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
    
    console.log("App.js render")
    let persons = null;

    if ( this.state.showPersons ) {
      persons = (
        <div>
          <Persons persons={this.state.persons} 
          changed={this.personChangeHandler} 
          clicked={this.deletePersonHandler}/>
        </div>
      );
     // style.backgroundColor = 'red';
    }
   
    return (
      <div className="App">

        <Cockpit persons={this.state.persons}
        showPersons={this.state.showPersons}
        clicked={this.togglePersonsHandler}/>

        {persons}
      </div>
    );
    
  }
}

export default App;

