import './register.css'
import biryani from '../../images/register/biryani.png'
import hamburger from '../../images/register/hamburger.png'
import pizza from '../../images/register/pizza.png'
import salad from '../../images/register/salad.png'
import taco from '../../images/register/taco.png'

import { useContext } from 'react'
import { authContext } from '../../Context/AuthContext'

export default function Register() {

    const { username, email, password, onChangeHandler, registerSubmit } = useContext(authContext);

    return (
        <div className="register-container">
            <h2>Register</h2>

            <form className="register-form" onSubmit={registerSubmit}>
                <label htmlFor="username">Username</label>
                <input type="username" name="username" id='username' value={username} onChange={onChangeHandler}></input>
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id='email' value={email} onChange={onChangeHandler}></input>
                <label htmlFor="password" >Password</label>
                <input type="password" name="password" id='password' value={password} onChange={onChangeHandler}></input>
                <input type="submit" id='submit'></input>

                <div className='register-images'>
                    <img src={biryani} className='register-image' />
                    <img src={hamburger} className='register-image' />
                    <img src={pizza} className='register-image' />
                    <img src={salad} className='register-image' />
                    <img src={taco} className='register-image' />
                </div>
            </form>

        </div>
    )
}