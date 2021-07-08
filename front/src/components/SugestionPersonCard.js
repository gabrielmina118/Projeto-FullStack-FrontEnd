import Button from '@material-ui/core/Button';
import axios from 'axios';

export const SugestionPersonCard = (props) => {

    const followPerson = async (id) => {
        try {

            const body = {
                "idFollow": id
            }
    

            const response = await axios.post("https://projeto-full-stack-backend.herokuapp.com/follow/followPerson", body, {
                headers: {
                    Authorization: window.localStorage.getItem("token")
                }
            })
            alert(response.data)
        } catch (error) {
            console.log('erro', error.response.data.error);
        }
    }
    return (
        <>
            <h3>Nickname:{props.nickname}</h3>
            <Button
                variant="contained"
                color="primary"
                onClick={() => followPerson(props.id)}
                bg='brand.100'
            >Follow</Button>
            <br></br><br></br>
        </>
    )
}