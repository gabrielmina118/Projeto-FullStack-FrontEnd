import React, { useEffect, useState } from 'react'
import { useProtectedPage } from '../../Hook/useProtectedPage';
import { FeedApi } from './FeedApi';
import { SugestionsPersonApi } from './SugestionsPersonApi';
import { SugestionPersonCard } from '../../components/SugestionPerson/SugestionPersonCard';
import { PersonSugestion, FeedCard, ImagemFeed, PersonFollow, Person, MainFeed, PersonFolled } from './styles'
import { PersonFollowApi } from './PersonFollow';
import { useHistory } from 'react-router-dom';
import { goToProfilePage, goToSearchTagPage } from '../../Routes/Coordinator';
import { Card } from 'semantic-ui-react'
import { Footer, FooterComponent } from '../../components/footer/Footer';

export default function Feed() {
    useProtectedPage();
    const [person, getperson] = SugestionsPersonApi();
    const [feed, getFeed] = FeedApi([]);
    const [PersonFollowHeade, getPersonFollow] = PersonFollowApi([]);


    const history = useHistory();

    const personScreen = person && person.allPersons && person.allPersons.map((person) => {
        return (
            <SugestionPersonCard
                key={person.id}
                id={person.id}
                nickname={person.nickname}
            >
            </SugestionPersonCard>
        )
    })

    const feedscreen = feed && feed.feeds && feed.feeds.map((feed) => {
        return (
            <FeedCard key={feed.file_photo}>
                <Card
                    image={feed.file_photo}
                    header={"@" + feed.nickname}
                    meta='Friend'
                />
                <br></br>
            </FeedCard>
        )
    })


    const PersonFollowScreen = PersonFollowHeade && PersonFollowHeade.personFollows && PersonFollowHeade.personFollows.map((feed) => {
        return (
            <PersonFolled key={feed.file_photo}>
                <h2>@{feed.person_followed_id}</h2>
                <button onClick={() => goToProfilePage(history, feed.person_followed_id)}>Ver perfil</button>
            </PersonFolled>
        )
    })

    useEffect(()=>{
        getFeed()
    },[])

    return (
        <>
        
            <MainFeed>Feeds</MainFeed>
            <PersonFollow>
                <h2>Pessoas que eu sigo</h2>
                <Person>{PersonFollowScreen}</Person>
            </PersonFollow>
            <PersonSugestion>
                <h2>Suguestao de pessoas</h2>
                <Person>{personScreen}</Person>
            </PersonSugestion>
            <div>{feedscreen}</div>
            <FooterComponent tokenId={feed && feed.tokenId}/>
        </>
    )
}