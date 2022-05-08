export const login = async (email, password) => {
    let response = await fetch('http://localhost:3030/users/login', {
        method: 'POST',
        headers: {'content-type': 'application/json'},
        body: JSON.stringify({email,password})
    })
    let data = await response.json()
    return data
}

export const getUser = () => {
    let user = localStorage.getItem('username')
    return user
}

export const isAuthenticated = () => {
    return Boolean(getUser())
}

export const create = async (data) => {
    let response = await fetch('https://softuni-demo-server-custom.herokuapp.com/jsonstore/pets', {
        method: 'POST',
        headers: {'Content-type': 'application/json'},
        body: JSON.stringify(data)
    })
    let result = response.json()
    return result
}

export const getAll = async () => {
    try {
        let response = await fetch('https://softuni-demo-server-custom.herokuapp.com/jsonstore/pets')
        let pets = await response.json()
        return Object.values(pets)
    } catch (e) {
        console.log(e.message)
    }
}