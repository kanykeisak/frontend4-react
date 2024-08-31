import React from 'react';
import {useForm} from "react-hook-form";
import * as Yup from 'yup'
import {yupResolver} from '@hookform/resolvers/yup'
import classes from "./FormPage.module.scss";
import Fetch from "../fetch/Fetch";
import {postAxios} from "../fetch/Fetch";

const gmailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;

const schema = Yup.object().shape({
    name: Yup.string().required('Обязательное поле').min(3, 'Необходимо 3'),
    email: Yup.string().required('Обязательное поле').email('Неверный формат email').matches(gmailRegex,'Email должен быть @gmail.com'),
    password: Yup.string().required('Обязательное поле').min(6, 'Необходимо 8'),
    confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Повторите пароль'),
})

const FormPage = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: {errors},
        clearErrors,
        setValue,
        reset,
    } =useForm({
        defaultValues:{
            // name: 'Kanykei'
        },
        resolver: yupResolver(schema)
    })

    const name = watch('name')

    const submit =(data) =>{
        console.log(data)
        postAxios(data)
    }
    const error =(data) =>{
        console.log(data)
    }

    return (
        <div>
            <form className={classes.form} onSubmit={handleSubmit(submit, error)}>
                <h4>name</h4>
                <input
                    className={classes.input}
                    type="text"
                    {
                        ...register('name')
                    }
                    aria-invalid={errors.name ? true : false}
                />
                {
                    errors?.name?.message && <p>{errors.name.message}</p>
                }
                <h4>email</h4>
                <input
                    className={classes.input}
                    type="text"
                    {
                        ...register('email')
                    }
                    aria-invalid={errors.email ? true : false}
                />
                {
                    errors?.age?.message && <p>{errors.age.message}</p>
                }
                <h4>password</h4>
                <input
                    className={classes.input}
                    type="password"
                    {
                        ...register('password')
                    }
                    aria-invalid={errors.passowrd ? true : false}
                />
                {
                    errors?.password?.message && <p>{errors.password.message}</p>
                }
                <h4>confirmpassword</h4>
                <input
                    className={classes.input}
                    type="password"
                    {
                        ...register('confirmpassowrd')
                    }
                    aria-invalid={errors.confirmpassword ? true : false}
                />
                {
                    errors?.confirmpassword?.message && <p>{errors.confirmpassword.message}</p>
                }
                <button>Отправить</button>
                <button type='button' onClick={() => clearErrors()}>Очистить</button>
                <button type='button' onClick={() => setValue('name', 'Kanykei')}>Отправить имя</button>
                <button type='button' onClick={() => setValue('age', '20')}>Отправить возраст</button>
                <button type='button' onClick={() => reset()}>Сброс</button>
            </form>
        </div>
    );
};

export default FormPage;