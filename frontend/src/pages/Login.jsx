import React from 'react'
import { Link } from 'react-router-dom'

export default function  Login() {
  return (
    <div className='auth'>
        <h1>Login</h1>
        <form action="">
            <input required type="text" placeholder='username'/>
            <input required type="password" placeholder='password'/>
            <button>Login</button>
            <p>this is an error!</p>
            <span>don't you have an account? <Link to="/register">register</Link></span>
        </form>
    </div>
  )
}
