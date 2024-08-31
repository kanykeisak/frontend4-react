import React, {useEffect, useState} from 'react';
import axios from "axios";
import {logDOM} from "@testing-library/react";

const BASE_URL = 'http://localhost:5001/student'

export const postAxios = async (data) => {
    const response = await axios.post(`${BASE_URL}`, data)
    const ans = response
    console.log(ans.data)
}

const Fetch = () => {

    const [loading, setLoading] = useState(true)
    const [data, setData] = useState([])

    const getData = async (id) => {
        setLoading(true)
        try {
            const response = await fetch(`${BASE_URL}`)
            const data = await response.json()
            return data
        }
        catch (e) {
            console.log(e.message(e))
        }
        finally {
            setLoading(false)
        }
    }

    const getAxios  = async () => {
        setLoading(true)
        try{
            const response = await axios(`${BASE_URL}`)
            console.log(response.data)
            return response.data
        }catch(e){
            console.log(e.message)
            alert(e.message)
        } finally {
            setLoading(false)
        }
    }

    useEffect(()=>{
        getData()
            .then(data => setData(data))
        getAxios();
    },[])

    const postApi = async () => {
        await fetch(`${BASE_URL}`, {
            method: "POST",
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(
                {
                    surname: "Исакова",
                    name: "Айдэна",
                    id: data.length > 0 ? String(Number(data[data.length-1].id) + 1) : '1',
                    groupId: 2,
                }
            )
        })
            .then(resopnse => resopnse.json())
            .then(data => console.log(data))
            .catch(error => console.log(error))
        await getData().then(data => setData(data))
    }

    const putAxios = async (id) => {
        const response = await axios.put(`${BASE_URL}/${id}`, {
            surname: "Исакова",
            name: "Айдэна",
            groupId: 2,
        })
        await getData().then(data => setData(data))
    }

    const deleteAxios = async (id) => {
        const response = await axios.delete(`${BASE_URL}/${id}`)
        await getData().then(data => setData(data))
    }

    const handleDelete = (id) => {
        deleteAxios(id)
        alert(`Пользователь под номером ${id} удален`)
    }

    return (
        <div>
            {data.map(item =>
                <div>
                    <p>id: {item.id} name: {item.name} surname: {item.surname} <button onClick={
                        () => handleDelete(item.id)
                    }>
                        delete
                    </button></p>
                </div>)}
            <button onClick={() => postApi()}>POSTAPI</button>
            <button onClick={() => postAxios()}>POSTAXIOS</button>
            <button onClick={() => putAxios(1)}>PUTAXIOS5</button>
        </div>
    );
};

export default Fetch;