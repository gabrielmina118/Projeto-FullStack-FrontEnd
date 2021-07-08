import axios from 'axios'
import { useEffect, useState } from 'react'

export const FeedApi = (initialData) => {
    const [feeds, setFeeds] = useState(initialData)

    const getData = async () => {
        try {
            const response = await axios.get("https://projeto-full-stack-backend.herokuapp.com/user/feed", {
                headers: {
                    Authorization: window.localStorage.getItem("token")
                }
            })
            setFeeds(response.data)
        } catch (error) {
            console.log('erro', error.response.data.message);
        }
    }
    
    useEffect(() => {
        getData()
    }, [])

    return [feeds,getData]
}