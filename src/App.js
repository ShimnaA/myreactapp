import { render } from '@testing-library/react';
import React, { Component } from 'react';
import './App.css';
import Validateinput from './Person/Validation';
import CharComp from './Person/Charcomponent';
import Blog from './Person/Blog'


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

    const posts = [
      {id: 1, title: 'Hello World', content: 'Welcome to learning React!'},
      {id: 2, title: 'Installation', content: 'You can install React from npm.'}
    ];
     const chardatass = this.state.usrInput.split('').map((aa, index) => {
        return <CharComp 
            chardata1={aa} 
            key={index}
            delhandle={() => this.deletecharHandler(index)}
            />;
    });
    
    return(

      <div className='App'>
        
      <input type="text"
       onChange={this.txtchangedHandler} 
       value={this.state.usrInput} />
       <div>The input is {this.state.usrInput}</div>
       <Validateinput lendata={this.state.usrInput.length} />
      
       {chardatass}
       <Blog posts={posts} />
       </div>

    );
  }
}

export default App;
