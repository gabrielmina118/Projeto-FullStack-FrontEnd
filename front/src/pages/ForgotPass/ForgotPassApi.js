import axios from 'axios'

export const ForgotPassAPi = async(body,history) =>{
    try {
    const response = await axios.post("https://projeto-full-stack-backend.herokuapp.com/user/resetpass", body);
        console.log(response.data.message)
        history.push("/feed")
    } catch (error) {
        console.log(error.response.data.error);
    }
}