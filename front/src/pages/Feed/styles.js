import styled from 'styled-components'

export const MainFeed = styled.div`
    display: flex;
    justify-content: center;
    font-size:40px;
    font-weight: bolder;
    margin:20px 0;
`

export const PersonFollow = styled.div`
    display: flex;
    flex-direction: column;
`

export const Person = styled.div`
    display: flex;
    overflow: auto;
    outline: 1px dashed lightgray;
    flex: none;
    width: 100%;
    height: 128px;
    flex-flow: row nowrap;
    scroll-snap-type: x mandatory;
    margin-left: 20px;
`

export const PersonSugestion = styled.div`
    display: flex;
    align-items: center;
    flex-flow: column;
    width: 100%;

`
export const FeedCard = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 100%;
    margin-top: 20px;

`
export const ImagemFeed = styled.img`
    width: 100%;
    height: 100%;

`

export const PersonFolled = styled.div`
    display: flex;
    flex-direction: row;
`

export const Footer = styled.div`
    overflow: hidden;
    background-color: #333;
    position: fixed;
    bottom: 0;
    display:flex ;
    align-items: center;
    justify-content: center;
`
export const Icones = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`