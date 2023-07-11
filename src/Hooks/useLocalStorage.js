import { useState } from "react"


export const useLocalStorage = (keys, initialValue) => {

    const [state, setState] = useState(() => {
        const serializedUsername = localStorage.getItem(keys.username);
        const serializedEmail = localStorage.getItem(keys.email);
        const serializedAccessToken = localStorage.getItem(keys.accessToken);

        if (serializedEmail && serializedUsername && serializedAccessToken) {
            const username = JSON.parse(serializedUsername);
            const email = JSON.parse(serializedEmail);
            const accessToken = JSON.parse(serializedAccessToken);

            return {
                username,
                email,
                accessToken
            };
        }

        return initialValue;
    })


    const setLocalStorage = (usernameValue, emailValue, accessTokenValue) => {
        localStorage.setItem(keys.username, JSON.stringify(usernameValue));
        localStorage.setItem(keys.email, JSON.stringify(emailValue));
        localStorage.setItem(keys.accessToken, JSON.stringify(accessTokenValue));

        setState({
            username: usernameValue,
            email: emailValue,
            accessToken: accessTokenValue
        });
    }

    return ([
        state,
        setLocalStorage
    ])
}


