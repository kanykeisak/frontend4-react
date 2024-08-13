import React from 'react';
import classes from './Modal.module.css'
import Button from "../button/Button";


const Modal = ({children, closes, handleChange}) => {
    return (
        <div>
            <div className={classes.modalWrapper}/>
            <div className={classes.modalContent}>
                <Button title={'Закрыть'} handleShow={closes}/>
                <input type="text" placeholder={'Введите текст'} onChange={handleChange}/>
                {children}
            </div>
        </div>
    );
};

export default Modal;