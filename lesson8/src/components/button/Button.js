import React from 'react';
import classes from "./Button.module.css";

const Button = ({title, color, handleShow}) => {
    // const ss = {
    //     name: "Kanykei",
    //     "age": 20
    // }
    // console.log(ss.name, '444')
    // console.log(ss['age'], 555)
    return (
        <button className={`${classes.btn} ${classes[color]}`} onClick={handleShow}>{title}</button>
    );
};

export default Button;