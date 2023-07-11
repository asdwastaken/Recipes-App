import { createContext, useState } from "react";
import { login, logout, register } from "../Services/userService";
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "../Hooks/useLocalStorage";

export const authContext = createContext();


export const AuthContext = ({
    children
}) => {

    const [auth, setAuth] = useLocalStorage({
        username: 'username',
        email: 'email',
        accessToken: 'accessToken'
    },
    // Initial state values 
        {
            username: '',
            email: '',
            accessToken: ''
        });

    const navigate = useNavigate();

    const [values, setValues] = useState({
        username: '',
        email: '',
        password: ''
    })

    const onChangeHandler = (e) => {
        setValues(state => ({ ...state, [e.target.name]: e.target.value }));
    }

    const loginSubmit = (e) => {
        e.preventDefault();

        login(values)
            .then((user) => {
                if (user) {
                    setAuth(user.username, user.email, user.accessToken);

                    setValues({
                        username: '',
                        email: '',
                        password: ''
                    })

                    navigate('/');
                } else {
                    alert('Wrong email or password')
                }
            })
            .catch(err => {
                console.log(err);
            })
    }


    const registerSubmit = (e) => {
        e.preventDefault();

        register(values)
            .then((user) => {
                if (user) {
                    const data = {
                        email: user.email,
                        password: user.password
                    }


                    login(data)
                        .then(user => setAuth(user.username, user.email, user.accessToken))

                    setValues({
                        username: '',
                        email: '',
                        password: ''
                    })

                    navigate('/');
                } else {
                    alert('Email is already used')
                }
            })
            .catch(err => {
                throw new Error(`Error: ${err}`)
            })
    }

    const accessToken = auth?.accessToken;

    const onLogout = () => {
        logout(accessToken)
            .then(() => setAuth('', '', ''))
    }


    const contextValues = {
        values,
        accessToken,
        auth,
        onChangeHandler,
        onLogout,
        loginSubmit,
        registerSubmit,
    }

    return (
        <authContext.Provider value={contextValues}>
            {children}
        </authContext.Provider>
    )
}