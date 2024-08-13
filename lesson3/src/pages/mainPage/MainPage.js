import React, {useState} from 'react';
import Header from "../../components/header/Header";
import {Footer} from "../../components/footer/Footer";
import Button from "../../components/button/Button";
import User from "../../components/user/User";
import Course from "../../components/course/Course";
import Month from "../../components/month/Month";
import Input from "../../components/input/Input";
import Example from "../../components/example/Example";
import Modal from "../../components/modal/Modal";
import Count from "../../components/count/Count";
import {logDOM} from "@testing-library/react";
import List from "../../components/list/List";
import TodoList from "../../components/todoList/TodoList";
import classes from "./MainPage.module.css"

const MainPage = () => {
    const [todoList, setTodoList] = useState([
        {
            id: 1,
            title: 'coding',
            completed: false
        },
        {
            id: 2,
            title: 'eat',
            completed: false
        },
        {
            id: 3005,
            title: 'sleep',
            completed: false
        }
    ]);


    const [show, setShow] = useState(false)
    const handleShow = () => {
        setShow(!show)
    }

    const [inputValue, setInputValue] = useState('')

    const handleChange = (event) => {
        setInputValue(event.target.value)
    }

    const handleAdd = () => {
        setTodoList(prev=> [... prev, {
            id: todoList[todoList.length-1].id + 1,
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


    return (
        <div className={classes.wrapper}>
            {/*<Input type={'password'} placeholder={'Введите текст'} handleChange={handleChange}/>*/}
            {/*<Input placeholder={'Введите текст'} handleChange={handleChange}/>*/}
            {/*<Header/>*/}
            {/*<h1>Hello</h1>*/}
            {/*<Footer/>*/}
            {/*<Button title={'Close'} name={'Kanykei'}/>*/}
            {/*<Button title={'Open'} color={'red'}/>*/}
            {/*<Button title={'Save'} color={'blue'}/>*/}
            {/*<Button title={'Delete'} color={'yellow'}/>*/}
            {/*<Button title={'Done'}/>*/}
            {/*<button className='btn'>red</button>*/}
            {/*<User name={'Kanykei'} age={'20'}/>*/}
            {/*<Course title={'JS'} language={'english'}/>*/}
            {/*<Month date={'1'}/>*/}
            {/*<Input placeholder={'Введите тест'}/>*/}
            {/*<Example title={'Название'}>*/}
            {/*    <p style={{color: 'red', fontSize: 25}}>name: Kanykei</p>*/}
            {/*    <p style={{color: 'blue', fontSize: 20}}>age: 20</p>*/}
            {/*</Example>*/}
            {/*<Count/>*/}
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

export default MainPage;

// const sum = (a,b) => {
//     return a+b
// }
//
// console.log(sum( 5, 6))