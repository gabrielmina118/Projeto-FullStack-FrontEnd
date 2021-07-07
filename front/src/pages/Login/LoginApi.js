import axios from 'axios'

export const LoginApi = async(body,history) =>{
    try {
        const response = await axios.post("https://projeto-full-stack-backend.herokuapp.com/user/login", body);
        window.localStorage.setItem("token",response.data.token)
        alert(`Welcome ${body.emailOrNick} `)
        history.push("/feed")
    } catch (error) {
        alert(error.response.data.error);
    }
}