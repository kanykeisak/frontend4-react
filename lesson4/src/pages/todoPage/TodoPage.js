import React, {useEffect, useState} from 'react';
import Button from "../../components/button/Button";
import Modal from "../../components/modal/Modal";
import TodoList from "../../components/todoList/TodoList";
import classes from "./TodoPage.module.css";

const TodoPage = () => {

    const [show, setShow] = useState(false)
    const [inputValue, setInputValue] = useState('')
    const [todoList, setTodoList] = useState([]);

    // [
    //     {
    //         id: 1,
    //         title: 'coding',
    //         completed: false
    //     },
    //     {
    //         id: 2,
    //         title: 'eat',
    //         completed: false
    //     },
    //     {
    //         id: 3005,
    //         title: 'sleep',
    //         completed: false
    //     }
    // ]

    useEffect(() => {
        const myLocalStorage = JSON.parse(localStorage.getItem('tasks'))
        if (myLocalStorage ===null ) {
            return localStorage.setItem('tasks', JSON.stringify(todoList))
        }
        if (myLocalStorage !== 0){
            setTodoList(myLocalStorage)
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(todoList))
    }, [todoList]);

    useEffect(() => {
        console.log('useEffect')
    },[show])

    const handleShow = () => {
        setShow(!show)
    }

    const handleChange = (event) => {
        setInputValue(event.target.value)
    }

    const handleAdd = () => {
        setTodoList(prev=> [... prev, {
            id: todoList.length === 0 ? 1: todoList[todoList.length - 1].id + 1,
            title: inputValue,
            completed:false
        }])
    }

    const handleDone = (id) => {
        todoList.map(todo=> {
            if(id===todo.id) {
                return todo.completed = !todo.completed
            }
        })
        setTodoList([...todoList])
    }

    const handleDelete = (id) => {
        setTodoList(todoList.filter(todo=> todo.id !== id))
    }

    // const task = () =>  localStorage.setItem('todoList', JSON.stringify({
    //     id: 1,
    //     title: 'coding',
    //     completed: false
    // }))
    // console.log(JSON.parse(localStorage.getItem('todoList')))
    // useEffect(() => {
    //     task()
    // }, [])


    return (
        <div className={classes.wrapper}>
            <Button title={'Открыть'} handleShow={handleShow}/>
            {
                show && <Modal closes={handleShow} handleChange={handleChange} handleAdd={handleAdd}>
                    <h1>Title</h1>
                </Modal>
            }
            {/*<List list={list}/>*/}
            <TodoList lists={todoList} handleDone={handleDone} handleDelete={handleDelete}/>
        </div>
    );
};

export default TodoPage;