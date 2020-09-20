import React from 'react';
const validate = (props) => {
return(
    <div >
        {
           props.lendata <= 5 ?
             <p>Text too short </p>
       
        : 
        <p> Text too Loooong </p>
        }
    </div>
);
}
export default validate;