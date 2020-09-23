import React, { useEffect } from 'react';

import  './Cockpit.css';

const Cockpit  = props  => {
    useEffect(()=>{
        console.log('Cockpit useEffect')
        const timer = setTimeout(() => {
          alert('Saved to server');
        }, 1000);
        return () => {
          clearTimeout(timer);
          console.log("cockpit.js cleanup work");
        }
      },[props.persons]
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
                className={btnClass}
                onClick={props.clicked}>Toggle Persons</button>
        </div>
    );
};

//export default React.memo(Cockpit);
export default Cockpit;