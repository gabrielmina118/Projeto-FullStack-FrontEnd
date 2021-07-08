import Button from '@material-ui/core/Button';
import { follow} from '../FollowOrUnFollow';
import { Main } from './styles';

export const SugestionPersonCard = (props) => {

    return (
        <Main>
            <h3>{props.nickname}</h3>
            <Button
                variant="contained"
                color="primary"
                onClick={()=>follow(props.id)}
                bg='brand.100'
            >Follow</Button>
        </Main>
    )
}