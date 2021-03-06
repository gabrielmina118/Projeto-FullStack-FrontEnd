import axios from 'axios'

export const RegisterApi = async(body, history) => {
    try{
        const response = await axios.post("https://projeto-full-stack-backend.herokuapp.com/user/signup", body);
        window.localStorage.setItem("token",response.data.token)
        alert(`${body.nickname} Registrado com sucesso `)
        history.push("/feed")
    }catch(erro){
        if(erro.response.data.error.includes("Duplicate entry")){
            alert("Nome ou Nicknome ja existentes");
        }
    }
}