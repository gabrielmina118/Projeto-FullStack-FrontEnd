export const goToHomePage = (history) =>{
    history.push("/")
}

export const goToLoginPage = (history) =>{
    history.push("/login")
}

export const goToRegisterPage = (history) =>{
    history.push("/register")
}

export const goTofeedPage = (history) =>{
    history.push("/feed")
}

export const goToProfilePage = (history,id) =>{
    history.push(`/profile/${id}`)
}
export const goToSearchTagPage = (history) =>{
    history.push("/SearchTag")
}
export const goToForgotPassPage = (history) =>{
    history.push("/forgotPass")
}

export const goToCreatePost = (history) =>{
    history.push("/createPost")
}