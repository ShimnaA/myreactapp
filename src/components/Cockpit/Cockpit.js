import React, { useEffect , useRef, useContext} from 'react';

import  './Cockpit.css';
import AuthContext from '../../context/auth-context'
const Cockpit  = props  => {
    const togglebtnref = useRef(null);
    const authcontext =  useContext(AuthContext);
    console.log(authcontext.authenticated);
    
    useEffect(()=>{
        console.log('Cockpit useEffect')
       /* const timer = setTimeout(() => {
          alert('Saved to server');
        }, 1000);*/
        togglebtnref.current.click();
        return () => {
          //clearTimeout(timer);
          console.log("cockpit.js cleanup work");
        }
      },[]
    );
  
    const assignedClasses = [];
    let btnClass = '';
    if (props.showPersons) {
        btnClass = 'red';
    }

    if ( props.persons.length <= 2 ) {
      assignedClasses.push( 'red' ); // classes = ['red']
    }
    if ( props.persons.length <= 1 ) {
      assignedClasses.push( 'bold' ); // classes = ['red', 'bold']
    }
    console.log("cockpit rendering")
    return (
        <div className="Cockpit">
            <h1>{props.title}</h1>
            <p className={assignedClasses.join( ' ' )}>This is really working!</p>
            <button
                ref={togglebtnref}
                className={btnClass}
                onClick={props.clicked}>Toggle Persons</button>
                
                    <button onClick={authcontext.login}>Login </button>
                  
        </div>
    );
};

//export default React.memo(Cockpit);
export default Cockpit;