import React, {Component} from 'react';
import  './Person.css';

class Person extends Component{
   
    render(){
        console.log("person.js rendering");
        return(
    
            <div className="Person">
                    <p onClick={this.props.click1}>I am a {this.props.name} and {this.props.age} years old </p>
                    <p>{this.props.children} </p>
                    <input type="text" onChange={this.props.change} value={this.props.name} />
            </div>
        );

    }
    
}
export default Person;