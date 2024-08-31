import React from 'react';
import classes from './Modal.module.css'
import Button from "../button/Button";


const Modal = ({children, closes, handleChange, handleAdd}) => {
    return (
        <div>
            <div className={classes.modalWrapper}/>
            <div className={classes.modalContent}>
                <Button title={'Закрыть'} handleShow={closes}/>
                <input type="text" placeholder={'Введите текст'} onChange={handleChange}/>
                <Button title={'Добавить'} handleShow={handleAdd}/>
                {children}
            </div>
        </div>
    );
};

export default Modal;