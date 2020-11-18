import React from "react";
import {SubmitHandler, useForm} from "react-hook-form";
import styles from "./LoginPage.module.css"

type Inputs = {
    login: string,
    password: string,
};


export default function LoginPage() {
    const { register, handleSubmit, watch, errors } = useForm<Inputs>();

    const onSubmit = (data: SubmitHandler<Record<string, any>>) => {
        console.log(data);
    }

    console.log(watch("example")) // watch input value by passing the name of it

    return (
        <div>
            <div className={styles.loginPageWrapper}>
                <form className={styles.loginPageForm} onSubmit={handleSubmit(onSubmit)}>
                    <input
                        placeholder="login"
                        className={styles.input}
                        name="login"
                        ref={register} />
                    <input
                        className={styles.input}
                        name="password"
                        ref={register({ required: true })}
                        placeholder="password"
                        type="password"
                    />
                    {errors.password && <span>This field is required</span>}
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>

);
}
