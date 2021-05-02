import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { signup } from '../firebase/auth'

function Signup(props) {
  const { reset, register, handleSubmit } = useForm()

  const [isLoading, setIsLoading] = useState(false)

  const onSubmit = async (data) => {
    let newUser
    setIsLoading(true)
    try {
      newUser = await signup(data)
      reset()
    } catch (err) {
      console.log(err)
    }
    if (newUser) {
      props.history.push(`/profile/${newUser.uid}`)
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
            <div className="two fields">
              <div className="field">
                <label>
                  First Name
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    ref={register}
                  />
                </label>
              </div>
              <div className="field">
                <label>
                  Last Name
                  <input type="text" name="lastName" placeholder="Last Name" ref={register} />
                </label>
              </div>
            </div>
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
              <button className="ui primary button signup" type="submit">
                Sign Up
              </button>
              or
              <Link to='/login'>Login</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;

