import {useState} from "react";

const useForm = (initialState) => {
    const [formData, setFormData] = useState(initialState)

    const handleInputChange = (event) => {
        const {value, name} = event.target
        setFormData({...formData, [name]: value})
    }

    const clear = () => {
        setFormData(initialState)
    }

    return [formData, handleInputChange, clear,setFormData]
}

export default useForm