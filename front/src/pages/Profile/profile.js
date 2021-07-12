import { Button } from '@material-ui/core';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { FooterComponent } from '../../components/footer/Footer';
import { useProtectedPage } from '../../Hook/useProtectedPage'
import { Main, ProfilePerson, ProfileImage, FeedCard, ImagemFeed } from './style'


export default function Profile() {
    useProtectedPage()
    const params = useParams();
    const [personProfile, setPersonProfile] = useState();

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


    useEffect(() => {
        getProfile()
    }, [])

    const photosScreen = personProfile && personProfile.personPhotosFile && personProfile.personPhotosFile.map((photo) => {
        return (
            <FeedCard key={photo.file_photo}>
                <ImagemFeed src={photo.file_photo} />
            </FeedCard>
        )
    })


    return (
        <Main>
            <ProfilePerson>
                <p>{personProfile && personProfile.personProfile && personProfile.personProfile.name}</p>
                <p>@{personProfile && personProfile.personProfile && personProfile.personProfile.nickname}</p>
            </ProfilePerson>
            <Button
                variant="contained"
                color="primary"
                style={{ width: 300, height: 52 }}
                bg='brand.100'
            >Follow  @{ personProfile && personProfile.personProfile && personProfile.personProfile.nickname}</Button>
            <ProfileImage>
                {photosScreen}
            </ProfileImage>
            <FooterComponent/>
        </Main>

    )
}