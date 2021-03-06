import React from "react"
import { useHistory } from "react-router-dom"
import { goTofeedPage, goToSearchTagPage , goToProfilePage, goToCreatePost } from "../../Routes/Coordinator.js"
import {Footer, Icones} from './style.js'

export const FooterComponent = (props) =>{
    const history = useHistory()
    
    return(
        <Footer>
                <div class="ui labeled icon menu">
                    <Icones>
                        <a class="item" onClick={() => goTofeedPage(history)} >
                            <i class="warehouse icon"></i>
                            Feed
                        </a>
                        <a class="item" onClick={() => goToSearchTagPage(history)}>
                            <i class="search icon"></i>
                            Search
                        </a>
                        <a class="item" onClick={()=> goToCreatePost(history)}>
                            <i class="plus icon"></i>
                            Post
                        </a>
                        <a class="item" onClick={()=> goToProfilePage(history,props.tokenId)}>
                            <i class="user icon"></i>
                            Profile
                        </a>
                    </Icones>
                </div>
            </Footer>
    )
}