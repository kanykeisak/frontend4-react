import React from 'react';
import Title from "../title/Title";
import classes from "./Footer.module.css";

export const Footer = () => {
    return (
        <>
            <div>
                <Title title={'Footer'}/>
                <button className={classes.btn}>pink</button>
            </div>
            <div>
                <Title title={'Footer2'}/>
            </div>
        </>
    )
}

