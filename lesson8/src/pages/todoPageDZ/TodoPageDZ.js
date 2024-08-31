import React, {useEffect, useState} from 'react';
import Button from "../../components/button/Button";
import Modal from "../../components/modal/Modal";
import TodoList from "../../components/todoList/TodoList";
import classes from "./TodoPageDZ.module.css";
import axios from "axios";
import {compile} from "sass";
import {useDebounce} from "../../components/hook/debounce";

const BASE_URL = 'http://localhost:5003/todo/'

export const getData = async (API) => {
    const response = await fetch(`${BASE_URL}${API}`)
    const data = await response.json()
    return data
}

const TodoPageDZ = () => {

    const [show, setShow] = useState(false)
    const [inputValue, setInputValue] = useState('')
    const [todoList, setTodoList] = useState([]);
    const [loading, setLoading] = useState(true)
    const debounced = useDebounce(inputValue, 5000)

    const getTodos = async() => {
        setLoading(true)
        try{
            const response = await axios(`${BASE_URL}`)
            return response.data
        }catch(e){
            alert(e.message)
        } finally {
            setLoading(false)
        }
    }

    const handleDelete = async (id) => {
        const response = await axios.delete(`${BASE_URL}${id}`)
        if (response.status === 200) {
            getTodos().then(data => setTodoList(data))
        }
    }

    const handleDone = async (id, status) => {
        const response = await axios.patch(`${BASE_URL}${id}`, {
            completed: !status
        })
        if (response.status === 200) {
            getTodos().then(data => setTodoList(data))
        }
    }

    const handleEdit = async (todoEdit) => {
        const response = await axios.patch(`${BASE_URL}${todoEdit.id}`, {
            title: todoEdit.title
        })
        if (response.status === 200) {
            getTodos().then(data => setTodoList(data))
        }
    }

    const handleAdd = async () => {
        const response = await axios.post(`${BASE_URL}`, {
            id: todoList.length === 0 ? "1" : String(Number(todoList[todoList.length - 1].id) + 1),
            title: inputValue,
            completed: false
        })

        if (response.status === 201) {
            getTodos().then(data => setTodoList(data))
        }
    }

    useEffect(() => {
        getTodos().then(data => setTodoList(data))
    },[])

    const handleShow = () => {
        setShow(!show)
    }

    const handleChange = (event) => {
        setInputValue(event.target.value)
    }




    return (
        <div className={classes.wrapper}>

            <Button title={'Открыть'} handleShow={handleShow}/>
            {
                show && <Modal
                    closes={handleShow}
                    handleChange={handleChange}
                    handleAdd={handleAdd}>
                    <h1>Title</h1>
                </Modal>
            }
            <TodoList
                lists={todoList}
                handleDone={handleDone}
                handleDelete={handleDelete}
                handleEdit={handleEdit}
            />
        </div>
    );
};

export default TodoPageDZ;
