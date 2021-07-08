import React, { useEffect } from 'react'
import { useProtectedPage } from '../../Hook/useProtectedPage';
import { FeedApi } from './FeedApi';
import { SugestionsPersonApi } from './SugestionsPersonApi';
import { SugestionPersonCard } from '../../components/SugestionPersonCard';

export default function Feed() {
    useProtectedPage();
    const [person, getperson] = SugestionsPersonApi()
    const [feed, getFeed] = FeedApi([])
   


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
            <div key={feed.file_photo}>
                <h2>@{feed.nickname}</h2>
                <img src={feed.file_photo} />
            </div>
        )
    })

    return (
        <>
            <h1>Feeds</h1>
            <div>{personScreen}</div>
            <div>{feedscreen}</div>
        </>
    )
}