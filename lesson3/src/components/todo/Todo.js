import React from 'react';
import classes from './Todo.module.scss'
import Button from '../button/Button'

const Todo = ({todo, handleDone, handleDelete}) => {
    return (
        <li className={`${classes.item} ${todo.completed && classes.done}`}>
            <div className={classes.info}>
                <p>id: {todo.id}</p>
                <p>title: {todo.title}</p>
            </div>
            <div className={classes.btns}>
                <Button title={'Edit'} color={'green'}/>
                <Button title={'Done'} color={'blue'} handleShow={()=>handleDone(todo.id)}/>
                <Button title={'Delete'} color={'red'} handleShow={()=>handleDelete(todo.id)}/>

            </div>
        </li>
    );
};

export default Todo;