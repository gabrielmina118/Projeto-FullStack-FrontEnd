import React, { useEffect } from 'react'
import { useProtectedPage } from '../../Hook/useProtectedPage';
import { FeedApi } from './FeedApi';
import { SugestionsPersonApi } from './SugestionsPersonApi';
import { SugestionPersonCard } from '../../components/SugestionPerson/SugestionPersonCard';
import { PersonSugestion, FeedCard, PersonFollow, Person, MainFeed} from './styles'
import { PersonFollowApi } from './PersonFollow';
import { FooterComponent } from '../../components/footer/Footer';

export default function Feed() {
    useProtectedPage();
    const [person, getperson] = SugestionsPersonApi();
    const [feed, getFeed] = FeedApi([]);
    const [PersonFollowHeade, getPersonFollow] = PersonFollowApi([]);

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

    const personScreen = person && person.allPersons && person.allPersons.map((person) => {
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
                        <div class="right floated meta">14h</div>
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