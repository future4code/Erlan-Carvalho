import axios from 'axios';
import { URL_BASE } from '../constants/Urls';
import { goToFeed } from '../routes/Coordinator';

//Requisição que faz o login
export const doTheLogin = (forms, clear, history) => {
    const body = {
        email: forms.email,
        password: forms.password
    }
    axios.post(`${URL_BASE}/users/login`, body)
        .then((response) => {
            localStorage.setItem("token", response.data.token)
            clear()
            goToFeed(history)

        }).catch((error) => {
            alert(error.response.data)
        })
}

//Requisição que faz o cadastro
export const CreateUser = (forms, clear, history) => {
    const body = {
        username: forms.username,
        email: forms.email,
        password: forms.password
    }
    axios.post(`${URL_BASE}/users/signup`, body)
        .then((response) => {
            localStorage.setItem("token", response.data.token)
            clear()
            alert("Conta cadastrada com suceso. Bem vindo!!")
            goToFeed(history)

        }).catch((error) => {
            alert(error.response.data)
        })

}