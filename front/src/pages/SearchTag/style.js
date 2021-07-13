import styled from 'styled-components'

export const Main = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 90vh;
`
export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items:center;
`
export const SearchtagsDiv = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 2fr);
    grid-gap: 10px;
`

export const TagAlreadExist = styled.div`
    display: flex;
    justify-content: space-evenly;
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
export const Erro = styled.div`
    font-size: 20px;
    color:red;
`
