
export const goToFeed = (history) => {
    history.push('/')
}

export const goBackToTheLogInPage = (history) => {
    history.push('/login')
}

export const backToLoginPage = (history) => {
    history.goBack()
}

export const goToSignUpScreen = (history) => {
    history.push("/signup")
}

export const goToPost = (history, id) => {
    history.push(`/posts/${id}`)
}
