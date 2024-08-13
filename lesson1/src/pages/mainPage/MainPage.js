import React from 'react';
import Header from "../../components/header/Header";
import {Footer} from "../../components/footer/Footer";
import Button from "../../components/button/Button";
import User from "../../components/user/User";
import Course from "../../components/course/Course";
import Month from "../../components/month/Month";

const MainPage = () => {
    return (
        <div>
            <Header/>
            <h1>Hello</h1>
            <Footer/>
            <Button title={'Close'} name={'Kanykei'}/>
            <Button title={'Open'}/>
            <Button title={'Save'}/>
            <Button title={'Delete'}/>
            <Button title={'Done'}/>
            <User name={'Kanykei'} age={'20'}/>
            <Course title={'JS'} language={'english'}/>
            <Month date={'1'}/>
        </div>
    );
};

export default MainPage;

// const sum = (a,b) => {
//     return a+b
// }
//
// console.log(sum( 5, 6))