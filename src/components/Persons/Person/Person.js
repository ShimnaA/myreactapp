import propTypes from 'prop-types';

import React, {Component} from 'react';
import  './Person.css';
import Aux from  '../../../hoc/Auxiliary';

class Person extends Component{
    
   
    render(){
        console.log("person.js rendering");
        return(
    
            //<div className="Person">
            //<Aux>
            <React.Fragment>
                    <p  onClick={this.props.click1}>I am a {this.props.name} and {this.props.age} years old </p>,
                    <p >{this.props.children} </p>,
                    <input type="text" onChange={this.props.change} value={this.props.name} />
            </React.Fragment>
            //</Aux>
           // </div>
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