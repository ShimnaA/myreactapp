import propTypes from 'prop-types';

import React, {Component} from 'react';
import  './Person.css';
import AuthContext from '../../../context/auth-context'

class Person extends Component{
    constructor(props){
        super(props);
        this.inputElementRef = React.createRef();
    }
    static contextType = AuthContext;
   componentDidMount(){
       this.inputElementRef.current.focus();
       console.log(this.context.authenticated);
   }

    render(){
        console.log("person.js rendering");
        
      
        return(
            <React.Fragment>
            
                     {this.context.authenticated ? <p>Authenticated</p> : <p>Please Login</p>}
                
            
                    
                    <p  onClick={this.props.click1}>I am a {this.props.name} and {this.props.age} years old </p>,
                    <p >{this.props.children} </p>,
                    <input 
                    type="text" 
                    ref={this.inputElementRef} 
                    onChange={this.props.change} 
                    value={this.props.name} />
                   
            </React.Fragment>
          
        );

    }
    
}
Person.propTypes = {
	click1: propTypes.func,
	name: propTypes.string,
    age: propTypes.number,
    change: propTypes.func
}
export default Person;