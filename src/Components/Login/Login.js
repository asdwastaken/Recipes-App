import './login.css'
import biryani from '../../images/login/biryani.png'
import hamburger from '../../images/login/hamburger.png'
import pizza from '../../images/login/pizza.png'
import salad from '../../images/login/salad.png'
import taco from '../../images/login/taco.png'

import { useContext } from 'react'
import { authContext } from '../../Context/AuthContext'

export default function Login() {

    const { email, password, onChangeHandler, loginSubmit } = useContext(authContext);

    return (
        <div className="login-container">
            <h2>Login</h2>

            <form className="login-form" onSubmit={loginSubmit}>
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id='email' value={email} onChange={onChangeHandler}></input>
                <label htmlFor="password" >Password</label>
                <input type="password" name="password" id='password' value={password} onChange={onChangeHandler}></input>
                <input type="submit" id='submit'></input>

                <div className='login-images'>
                    <img src={biryani} className='login-image' />
                    <img src={hamburger} className='login-image' />
                    <img src={pizza} className='login-image' />
                    <img src={salad} className='login-image' />
                    <img src={taco} className='login-image' />
                </div>
            </form>

        </div>
    )
}