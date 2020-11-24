import React from 'react';

import './Input.css';

const input = props => (

    <input 
        className='Input' 
        onChange={props.changed} 
        value={props.value}
        placeholder={props.placeholder}
     />
);

export default input;