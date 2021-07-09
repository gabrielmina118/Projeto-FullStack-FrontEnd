import styled from 'styled-components'

export const Main = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    width: 100%;
    height: 90vh;
`

export const ProfilePerson = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    font-weight: bolder;
    font-size: 30px;
    width: 100%;
    height: 30%;
`

export const ProfileImage = styled.div`
    width: 100%;
    height: 30%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 10px;
`
export const FeedCard = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;

`
export const ImagemFeed = styled.img`
    width: 100%;
    height: 100%;

`