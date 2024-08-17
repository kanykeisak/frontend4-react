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
        </div>
    );
};

export default MainPage;

// const sum = (a,b) => {
//     return a+b
// }
//
// console.log(sum( 5, 6))