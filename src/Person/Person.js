import React from 'react';
import styled from 'styled-components';


const Styleddiv = styled.div`
    width: 60%;
    margin: 16px;
    border: 1px solid #eee;
    box-shadow: 0 2px 3px #ccc;
    padding: 16px;
    text-align: center;`;



const person = (props) => {
return(
   // <div className="Person">
   <Styleddiv>
        <p onClick={props.click1}>I am a {props.name} and {props.age} years old </p>
        <p>{props.children} </p>
        <input type="text" onChange={props.change} value={props.name} />

    </Styleddiv>
);
}
export default person;