import React from 'react';

const Input = ({placeholder, handleChange, type='text'}) => {
    return (
        <input type={type} placeholder={placeholder} onChange={handleChange}/>
    );
};

export default Input;