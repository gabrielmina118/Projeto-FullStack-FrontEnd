import styled from 'styled-components'

export const Main = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    min-width: 100%;
    min-height: 90vh;
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
    margin-top: 20px;
    width: 100%;
    min-height: 10%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 10px;
    margin-bottom: 80px;
`
export const FeedCard = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    border: 1px solid black;

`
export const ImagemFeed = styled.img`
    width: 100%;
    height: 100%;
`
export const FollowMessage = styled.div`
    margin-top: 30px;
    font-size: 25px;
    color:green;
`
export const ButtonLogout = styled.div`
    display: flex;
    width: 100%;
    margin: 10px;
    margin-right: 40px;
    justify-content: flex-end;
`