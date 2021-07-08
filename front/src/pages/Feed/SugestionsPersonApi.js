import axios from 'axios'
import { useEffect, useState } from 'react'

export const SugestionsPersonApi = () => {
    const [persons, setPersons] = useState([]);

    const getData = async () => {
        try {
            const response = await axios.get("https://projeto-full-stack-backend.herokuapp.com/user/all", {
                headers: {
                    Authorization: window.localStorage.getItem("token")
                }
            })
            setPersons(response.data)
        } catch (error) {
            console.log('erro', error.response.data.message);
        }
    }

    useEffect(() => {
        getData()
    }, [])

    return [persons, getData]
}