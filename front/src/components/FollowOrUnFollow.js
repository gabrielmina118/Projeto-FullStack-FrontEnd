import axios from 'axios';

export async function follow(id) {
    try {

        const body = {
            "idFollow": id
        }

        const response = await axios.post("https://projeto-full-stack-backend.herokuapp.com/follow/followPerson", body, {
            headers: {
                Authorization: window.localStorage.getItem("token")
            }
        })
        alert(response.data.message);
    } catch (error) {
        console.log('erro', error.response.data.error);
    }
}

export async function Unfollow(id) {
    try {

        const body = {
            "idUnFollow": id
        }


        const response = await axios.post("https://projeto-full-stack-backend.herokuapp.com/follow/unFollowPerson", body, {
            headers: {
                Authorization: window.localStorage.getItem("token")
            }
        })
        alert(response.data.message)
    } catch (error) {
        console.log('erro', error.response.data.error);
    }
}