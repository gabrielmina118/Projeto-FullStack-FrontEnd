import React from 'react'
import { useProtectedPage } from '../../Hook/useProtectedPage';
import { FeedApi } from './FeedApi';
import { SugestionsPersonApi } from './SugestionsPersonApi';
import { SugestionPersonCard } from '../../components/SugestionPerson/SugestionPersonCard';
import { PersonSugestion, FeedCard, ImagemFeed, PersonFollow, Person, MainFeed } from './styles'
import { PersonFollowApi } from './PersonFollow';


export default function Feed() {
    useProtectedPage();
    const [person, getperson] = SugestionsPersonApi()
    const [feed, getFeed] = FeedApi([])
    const [PersonFollowHeade,getPersonFollow] = PersonFollowApi([])


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
                <h2>@{feed.nickname}</h2>
                <ImagemFeed src={feed.file_photo} />
            </FeedCard>
        )
    })

    const PersonFollowScreen = PersonFollowHeade && PersonFollowHeade.personFollows && PersonFollowHeade.personFollows.map((feed) => {
        return (
            <div key={feed.file_photo}>
                <h2>@{feed.person_followed_id}</h2>
            </div>
        )
    })

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
        </>
    )
}