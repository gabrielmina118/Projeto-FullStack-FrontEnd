import React, { useEffect } from 'react'
import { useProtectedPage } from '../../Hook/useProtectedPage';
import { SugestionPersonCard } from '../../components/SugestionPerson/SugestionPersonCard';
import { PersonSugestion, FeedCard, PersonFollow, Person, MainFeed } from './styles'
import { FooterComponent } from '../../components/footer/Footer';
import useRequestData from '../../Hook/useRequestData';

export default function Feed() {
    useProtectedPage();
    const [personSugestion, getperson] = useRequestData([], "https://projeto-full-stack-backend.herokuapp.com/user/all");
    const [feed, getFeed] = useRequestData([], "https://projeto-full-stack-backend.herokuapp.com/user/feed");
    const [PersonFollowHeade, getPersonFollow] = useRequestData([], "https://projeto-full-stack-backend.herokuapp.com/user/personFollow");

    const PersonFollowScreen = PersonFollowHeade && PersonFollowHeade.personFollows && PersonFollowHeade.personFollows.map((feed) => {
        return (
            <SugestionPersonCard
                key={feed.person_followed_id}
                id={feed.person_followed_id}
                photo_profile={feed.photo_profile}
            >
            </SugestionPersonCard>
        )
    })

    const personScreen = personSugestion && personSugestion.allPersons && personSugestion.allPersons.map((person) => {
        return (
            <SugestionPersonCard
                key={person.id}
                id={person.id}
                nickname={person.nickname}
                photo_profile={person.photo_profile}
            >
            </SugestionPersonCard>
        )
    })

    const feedscreen = feed && feed.feeds && feed.feeds.map((feed) => {
        return (
            <FeedCard key={feed.file_photo}>
                <div class="ui card">
                    <div class="content">
                        <div class="right floated meta">3h</div>
                        <img class="ui avatar image" src={feed.photo_profile} /> {"@" + feed.nickname}
                    </div>
                    <div class="image">
                        <img src={feed.file_photo} />
                    </div>
                </div>
            </FeedCard>
        )
    })


    useEffect(() => {
        getFeed();
        getPersonFollow();
        getperson();
    }, [])


    const tokenId = feed && feed.tokenId;

    return (
        <>
            <MainFeed>Feeds</MainFeed>
            <PersonFollow>
                <h2>Pessoas que eu sigo</h2>
                <Person>
                    {PersonFollowScreen}
                </Person>
            </PersonFollow>
            <PersonSugestion>
                <h2>Suguestao de pessoas</h2>
                <Person>
                    {personScreen}
                </Person>
            </PersonSugestion>
            <div>
                {feedscreen}
            </div>
            <FooterComponent tokenId={tokenId} />
        </>
    )
}