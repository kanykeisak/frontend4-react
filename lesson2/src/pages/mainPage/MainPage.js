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

const MainPage = () => {
    const list = [
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
            id: 3,
            title: 'sleep',
            completed: false
        }
    ];

    const [show, setShow] = useState(false)
    // let show = false
    const handleShow = () => {
        setShow(!show)
        // console.log(show)
        // show = true
        // console.log(show, 'change')
    }

    const [inputValue, setInputValue] = useState('')
    console.log(inputValue, 'inputValue')
    const handleChange = (event) => {
        setInputValue(event.target.value)
    }

    return (
        <div>
            <List list={list}/>
            <Input type="text" placeholder={'Введите текст'} handleChange={handleChange}/>
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
                show && <Modal closes={handleShow} handleChange={handleChange}>
                    <h1>Title</h1>
                </Modal>
            }

        </div>
    );
};

export default MainPage;

// const sum = (a,b) => {
//     return a+b
// }
//
// console.log(sum( 5, 6))