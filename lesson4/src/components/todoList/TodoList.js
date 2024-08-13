import React from 'react';
import Todo from "../todo/Todo";
import classes from "./TodoList.module.scss"

const TodoList = ({lists, handleDone, handleDelete}) => {
    return (
        <ul className={classes.list}>
            {
                lists.map(item=> <Todo key={item.id} todo={item} handleDone={handleDone} handleDelete={handleDelete}/>)
            }
        </ul>
    );
};

export default TodoList;