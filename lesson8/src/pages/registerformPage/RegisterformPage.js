import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import classes from "./RegisterformPage.module.scss";

const gmailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;

const schema = Yup.object().shape({
    name: Yup.string().required('Обязательное поле').min(3, 'Необходимо 3'),
    email: Yup.string().required('Обязательное поле').email('Неверный формат email').matches(gmailRegex,'Email должен быть @gmail.com'),
    password: Yup.string().required('Обязательное поле').min(6, 'Необходимо 8'),
    confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Повторите пароль'),
});

const RegisterformPage = () => {
    const {
        register,
        handleSubmit,
        formState: { errors, isValid }
    } = useForm({
        resolver: yupResolver(schema)
    });

    const submit = (data) => {
        console.log(data);
    };

    return (
        <div className={classes.container}>
            <form onSubmit={handleSubmit(submit)} className={classes.form}>
                <div className={classes.register}>
                    <p className={classes.title}>Register with</p>
                </div>
                <div className={classes.formstyle}>
                    <div className={classes.style}>
                        <p>Name</p>
                        <input
                            placeholder="Your full name"
                            type="text"
                            {
                                ...register('name')
                            }
                            aria-invalid={errors.name ? true : false}
                        />
                        {errors?.name?.message && <p>{errors?.name?.message}</p>}
                    </div>
                    <div className={classes.style}>
                        <p>Email</p>
                        <input
                            placeholder="Your email"
                            type="text"
                            {
                                ...register('email')
                            }
                            aria-invalid={errors.email ? true : false}
                        />
                        {errors?.email?.message && <p>{errors?.email?.message}</p>}
                    </div>
                    <div className={classes.style}>
                        <p>Password</p>
                        <input
                            placeholder="Your password"
                            type="password"
                            {
                                ...register('password')
                            }
                            aria-invalid={errors.password ? true : false}
                        />
                        {errors?.password?.message && <p>{errors?.password?.message}</p>}
                    </div>
                    <div className={classes.style}>
                        <p>Re-enter password</p>
                        <input
                            placeholder="Your password"
                            type="password"
                            {
                                ...register('confirmPassword')
                            }
                            aria-invalid={errors.confirmPassword ? true : false}

                        />
                        {
                            errors?.confirmPassword?.message && <p>{errors?.confirmPassword?.message}</p>
                        }
                    </div>
                </div>
                <div>
                    <button
                        className={isValid ? classes.isValid : classes.btn}
                        type="submit"
                        disabled={!isValid}>
                        Continue
                    </button>
                </div>
            </form>
        </div>
    );
};

export default RegisterformPage;
