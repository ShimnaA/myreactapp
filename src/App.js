import { render } from '@testing-library/react';
import React, { Component } from 'react';
import './App.css';
import Validateinput from './Person/Validation';
import CharComp from './Person/Charcomponent';


class App extends Component {
  state={
    usrInput: ''
  }
 
  txtchangedHandler = (event) => {
    this.setState({
      usrInput: event.target.value
    })
  }

  deletecharHandler = (index) => {
    const textdata = this.state.usrInput.split('');
    textdata.splice(index, 1);
    const updatedtext = textdata.join('');
    this.setState({usrInput: updatedtext });

  }

  render() {
     const chardatass = this.state.usrInput.split('').map((aa, index) => {
        return <CharComp 
            chardata1={aa} 
            key={index}
            delhandle={() => this.deletecharHandler(index)}
            />;
    });
    
    return(

      <div className='App'>
        <ol>
          <li>Create an input field (in App component) with a change listener which outputs the length of the entered text below it (e.g. in a paragraph).</li>
          <li>Create a new component (=> ValidationComponent) which receives the text length as a prop</li>
          <li>Inside the ValidationComponent, either output "Text too short" or "Text long enough" depending on the text length (e.g. take 5 as a minimum length)</li>
          <li>Create another component (=> CharComponent) and style it as an inline box (=> display: inline-block, padding: 16px, text-align: center, margin: 16px, border: 1px solid black).</li>
          <li>Render a list of CharComponents where each CharComponent receives a different letter of the entered text (in the initial input field) as a prop.</li>
          <li>When you click a CharComponent, it should be removed from the entered text.</li>
        </ol>
      <input type="text"
       onChange={this.txtchangedHandler} 
       value={this.state.usrInput} />
       <div>The input is {this.state.usrInput}</div>
       <Validateinput lendata={this.state.usrInput.length} />
      
       {chardatass}
       </div>

    );
  }
}

export default App;
