import axios from "axios"

export const getUser = async() => {
    try {
        
        const response = await axios.get("https://jsonplaceholder.typicode.com/users")

        return response.data
    } catch (error) {
        console.log(error);
        
    }
}

export const getUserById = async (id) => {
    try {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)

        console.log("API Data", response.data);
        

        return response.data
    } catch (error) {
        console.log(error);
        return null
        
    }
}