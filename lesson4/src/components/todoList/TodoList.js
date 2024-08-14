import React, {useState} from 'react';
import Todo from "../todo/Todo";
import classes from "./TodoList.module.scss"

const TodoList = ({lists, handleDone, handleDelete, handleEdit}) => {

    const [currentEdit, setCurrentEdit]=useState('')
    console.log(currentEdit)

    return (
        <ul className={classes.list}>
            {
                lists.map(item=>
                    <Todo
                        key={item.id}
                        todo={item}
                        handleDone={handleDone}
                        handleDelete={handleDelete}
                        handleEdit={handleEdit}
                        setCurrentEdit={setCurrentEdit}
                        isEdit={currentEdit === item.id}
                    />)
            }
        </ul>
    );
};

export default TodoList;