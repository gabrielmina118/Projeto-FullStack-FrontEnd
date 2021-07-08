import axios from 'axios'
import { useEffect, useState } from 'react'

export const PersonFollowApi = (initialData) => {
    const [personFollows, setPersonFollows] = useState(initialData)

    const getData = async () => {
        try {
            const response = await axios.get("https://projeto-full-stack-backend.herokuapp.com/user/personFollow", {
                headers: {
                    Authorization: window.localStorage.getItem("token")
                }
            })
            setPersonFollows(response.data)
        } catch (error) {
            console.log('erro', error.response.data.message);
        }
    }
    
    useEffect(() => {
        getData()
    }, [])

    return [personFollows,getData]
}