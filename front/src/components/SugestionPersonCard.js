import Button from '@material-ui/core/Button';
import { follow} from './FollowOrUnFollow';

export const SugestionPersonCard = (props) => {

    return (
        <>
            <h3>Nickname:{props.nickname}</h3>
            <Button
                variant="contained"
                color="primary"
                onClick={()=>follow(props.id)}
                bg='brand.100'
            >Follow</Button>
            <br></br><br></br>
        </>
    )
}