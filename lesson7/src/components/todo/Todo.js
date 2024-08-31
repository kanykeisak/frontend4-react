import React, {useState} from 'react';
import classes from './Todo.module.scss'
import Button from '../button/Button'
import Input from "../input/Input";
import todoList from "../todoList/TodoList";

const Todo = ({todo, handleDone, handleDelete, setCurrentEdit, isEdit, handleEdit}) => {

    const [inputValue, setInputValue] = useState(todo.title)

    const handleChange = (event) => {
        setInputValue(event.target.value)
    }

    const handleSave = () => {
        handleEdit({
            ...todo,
            title: inputValue
        })
        setCurrentEdit(null)
    }

    const handleCancel = () => {
        setCurrentEdit(null)
    }


    return (
        <>
            <li className={`${classes.item} ${todo.completed && classes.done}`}>
                <div className={classes.info}>
                    <p>id: {todo.id}</p>
                    <p>title: {todo.title}</p>
                </div>
                <div className={classes.btns}>
                    <Button title={'Edit'} color={'green'} handleShow={()=>setCurrentEdit(todo.id)}/>
                    <Button title={'Done'} color={'blue'} handleShow={()=>handleDone(todo.id, todo.completed)}/>
                    <Button title={'Delete'} color={'red'} handleShow={()=>handleDelete(todo.id)}/>
                </div>
            </li>
                {
                    isEdit && <div className={classes.edit}>
                        <input type="text" onChange={handleChange} value={inputValue}/>
                        <Button title={'Save'} color={'green'} handleShow={handleSave}/>
                        <Button title={'Cancel'} color={'red'} handleShow={handleCancel}/>
                    </div>
                }
        </>
    );
};

export default Todo;