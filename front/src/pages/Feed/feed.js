import React from 'react'
import { useProtectedPage } from '../../Hook/useProtectedPage';

export default function Feed (){
    useProtectedPage();
    return(
        <h1>Feed</h1>
    )
}