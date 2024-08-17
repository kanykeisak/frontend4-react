import React, {useEffect, useState} from 'react';
import {getData} from "../todoPage/TodoPage";
import Button from "../../components/button/Button";
import classes from "./UsersPage.module.scss"

const UsersPage = () => {

    const [users, setUsers] = useState([]);
    const [user, setUser] = useState(null);
    // console.log(user, 'user')

    useEffect(()=>{
        getData('users')
            .then(data => setUsers(data))
    },[])

    const BASE_URL = 'https://jsonplaceholder.typicode.com/'

    const getUser = async (id) => {
        const response = await fetch(`${BASE_URL}users/${id}`)
        const data = await response.json()
        return data
    }

    return (
        <div>
            <div className={classes.list}>
                {
                    users.map(item =>
                        <div className={classes.user}>
                            <p>
                                name: {item.name}
                            </p>
                            <p>
                                username: {item.username}
                            </p>
                            <p>
                                phone: {item.phone}
                            </p>
                            <Button title={'Подробнее'} handleShow={
                                () => getUser(item.id)
                                    .then(data => setUser(data))}/>
                            {
                                user && user.id === item.id &&
                                <div>
                                    <p>
                                        company: {user.company.name}
                                    </p>
                                    {
                                        Object.keys(user.company).length !== 0 &&
                                        (Object.entries(user.company).map(([key,value]) =>(
                                                <p key={key}>
                                                    {key}:{value}
                                                </p>
                                            )
                                        ))
                                    }
                                </div>
                            }
                        </div>)
                }
            </div>
        </div>
    );
};

export default UsersPage;
