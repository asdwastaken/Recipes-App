import { useContext } from 'react'
import './navigation.css'
import { Link } from "react-router-dom"
import { authContext } from '../../Context/AuthContext'


export default function Navigation() {

    const { accessToken, auth, onLogout } = useContext(authContext);

    return (
        <nav className='navbar-container'>
            <ul className='navbar'>
                <li className='nav-link'><Link to="/">Home</Link></li>
                <li className='nav-link'><Link to="/recipes">Recipes</Link></li>
                {accessToken ?
                    <>
                        <li className='nav-link'><Link to="/create">New Recipe</Link></li>
                        <li className='nav-link'><Link to="/my-recipes">My Recipes</Link></li>
                        <li className='nav-link'><Link to="/" onClick={onLogout}>Logout</Link></li>
                        <li className='nav-span'><span>Hi, {auth.username}</span></li>
                    </>
                    :
                    <>
                        <li className='nav-link'><Link to="/login">Login</Link></li>
                        <li className='nav-link'><Link to="/register">Register</Link></li>
                    </>
                }

            </ul>
        </nav>
    )
}