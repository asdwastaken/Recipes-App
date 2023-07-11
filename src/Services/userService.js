const url = 'http://localhost:3030/users';


export const login = (userData) => {
    return fetch(`${url}/login`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify(userData)
    })
        .then(res => {
            if (res.ok) {
                return res.json()
            }
        })


}


export const register = (userData) => {
    return fetch(`${url}/register`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify(userData)
    })
        .then(res => {
            if (res.ok) {
                return res.json()
            }
        })


}


export const logout = (token) => {
    return fetch(`${url}/logout`,{
        method:'GET',
        headers:{
            'X-Authorization': token
        }
    })
}