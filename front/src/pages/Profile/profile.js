import { Button } from '@material-ui/core';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { FooterComponent } from '../../components/footer/Footer';
import { useProtectedPage } from '../../Hook/useProtectedPage'
import { logOut } from '../../Routes/Coordinator';
import { Main, ProfilePerson, ProfileImage, FeedCard, ImagemFeed, FollowMessage ,ButtonLogout} from './style'


export default function Profile() {
    useProtectedPage();

    const params = useParams();
    const [personProfile, setPersonProfile] = useState("");
    const [PersonTofollow, setPersonToFollow] = useState("");
    const history = useHistory()

    const getProfile = async () => {
        try {
            const response = await axios.get(`https://projeto-full-stack-backend.herokuapp.com/user/getPersonProfile/${params.id}`, {
                headers: {
                    Authorization: window.localStorage.getItem("token")
                }
            })
            setPersonProfile(response.data)
        } catch (error) {
            console.log('erro', error.response.data.message);

        }
    }

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
            setPersonToFollow(response.data.message)
        } catch (error) {
            console.log(error.response.data.error);
        }
    }

    useEffect(() => {
        getProfile()
    }, [followPerson])

    const photosScreen = personProfile && personProfile.personPhotosFile && personProfile.personPhotosFile.map((photo) => {
        return (
            <FeedCard key={photo.file_photo}>
                <ImagemFeed src={photo.file_photo} />
            </FeedCard>
        )
    })



    const imageProfile = personProfile && personProfile.personProfile && personProfile.personProfile.photo_profile;
    return (
        <Main>
            <ButtonLogout>
                <Button
                 variant="contained"
                 onClick={()=>logOut(history)}
                 color="primary"
                >Logout</Button>
            </ButtonLogout>
            <img class="ui medium bordered circular image" src={imageProfile}></img>
            <ProfilePerson>
                <p>{personProfile && personProfile.personProfile && personProfile.personProfile.name}</p>
                <p>@{personProfile && personProfile.personProfile && personProfile.personProfile.nickname}</p>
            </ProfilePerson>
            <Button
                variant="contained"
                color="primary"
                onClick={() => followPerson(params.id)}
                style={{ width: 300, height: 52 }}
                bg='brand.100'
            >Follow  @{personProfile && personProfile.personProfile && personProfile.personProfile.nickname}</Button>
            <FollowMessage>{PersonTofollow}</FollowMessage>
            <ProfileImage>
                {photosScreen}
            </ProfileImage>
            <FooterComponent />
        </Main>

    )
}