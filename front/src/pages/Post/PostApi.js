import axios from 'axios';

export async function PostApi(form) {
    try {

        const body = {
            "subtitle": form.subtitle,
            "data_criacao": form.data_criacao,
            "file_photo": form.file_photo,
            "tags_name": form.tags_name
        }

        await axios.post("https://projeto-full-stack-backend.herokuapp.com/image/createImage", body, {
            headers: {
                Authorization: window.localStorage.getItem("token")
            }
        })
    } catch (error) {
        console.log('erro', error.response.data.error);
    }
}