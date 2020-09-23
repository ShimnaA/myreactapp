import React, {Component} from 'react';
import Person from './Person/Person'

class Persons extends Component {
    //static getDerivedStateFromProps(props, state){
      //  console.log("persons.js getDerivedStateFromProps");   
        //return null;   
    //}
    shouldComponentUpdate(nextProps, nextState){
        console.log("persons.js shouldComponentUpdate"); 
        if (nextProps.persons !== this.props.persons){
            return true;
        }else{
            return false;
        }
        
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log("persons.js getSnapshotBeforeUpdate"); 
        return {message: 'snapshot'};
    }
    componentDidUpdate(prevProps, prevState, snapshot){
        console.log("persons.js componentDidUpdate"); 
        console.log(snapshot); 
    }
    componentWillUnmount(){
        console.log("persons.js componentwill unmount")
    }

    render(){
        console.log("persons.js rendering");
        return this.props.persons.map((person, index) => {
            return  (
            <Person 
             key={person.id}
             name={person.name}
             age={person.age}
             change={(event) => this.props.changed(event, person.id)}
             click1={() => this.props.clicked(index)}/>
            );
         });
    }
    
}
export default Persons;


    