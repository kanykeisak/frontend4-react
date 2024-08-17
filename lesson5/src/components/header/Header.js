import React from 'react';
import Title from "../title/Title";
import classes from "./Header.module.css";

const Header = () => {
    return(
        <div>
            <Title title={'Header'}/>
            <button className={classes.btn}>aqua</button>
        </div>
    )
}

export default Header;