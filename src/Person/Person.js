import React from 'react';
import  './Person.css';

const person = (props) => {
    const rnd = Math.random();
    if (rnd>0.7) {
        throw new Error("Something went wrong");
    }
    return(
    
    <div className="Person">
            <p onClick={props.click1}>I am a {props.name} and {props.age} years old </p>
            <p>{props.children} </p>
            <input type="text" onChange={props.change} value={props.name} />

    </div>
    )
};
export default person;