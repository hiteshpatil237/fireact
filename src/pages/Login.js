import React, { useState } from 'react';
import { useForm } from 'react-hook-form'
import { login } from '../firebase/auth';
import { Link } from 'react-router-dom';

function Login(props) {
    const { reset, register, handleSubmit } = useForm()

    const [isLoading, setIsLoading] = useState(false)

    const onSubmit = async (data) => {
        let user
        setIsLoading(true)
        try {
            user = await login(data)
            reset()
        } catch (err) {
            console.log(err)
        }
        if (user) {
            props.history.push(`/profile/${user.uid}`)
        } else {
            setIsLoading(false)
        }
    }

    const formClassName = `ui form ${isLoading ? 'loading' : ''}`

    return (
        <div className="login-container">
            <div className="ui card login-card">
                <div className="content">
                    <form className={formClassName} onSubmit={handleSubmit(onSubmit)}>
                        <div className="field">
                            <label>
                                Email
                                <input type="email" name="email" placeholder="Email" ref={register} />
                            </label>
                        </div>
                        <div className="field">
                            <label>
                                Password
                                <input type="password" name="password" placeholder="Password" ref={register} />
                            </label>
                        </div>
                        <div className="field actions">
                            <button className="ui primary button login" type="submit">
                                Login
                            </button>
                            or
                            <Link to='/signup'>Sign Up</Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;

