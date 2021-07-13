import { useLayoutEffect } from 'react'
import {useHistory} from 'react-router-dom'
import { goTofeedPage } from '../Routes/Coordinator'


const useUnProtectedPage = () =>{
    const history = useHistory()

    useLayoutEffect(()=>{
        const token = localStorage.getItem("token")
        if(token){
            goTofeedPage(history)
        }
    },[history])
}

export default useUnProtectedPage