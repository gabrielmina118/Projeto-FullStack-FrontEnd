import { useHistory } from 'react-router-dom';
import { goToProfilePage } from '../../Routes/Coordinator';
import { Main, Name } from './styles';

export const SugestionPersonCard = (props) => {
    const history = useHistory();
    return (
        <Main onClick={()=>goToProfilePage(history,props.id)}>
            <div class="ui massive horizontal divided list">
                <div class="item">
                    <Name>
                        <img class="ui avatar image" src={props.photo_profile} />
                        <div class="content">
                            <a class="header"><h4>{props.nickname}</h4></a>
                        </div>
                    </Name>
                </div>
            </div>
        </Main>
    )
}