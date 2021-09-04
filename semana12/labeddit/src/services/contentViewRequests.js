import axios from 'axios';
import { URL_BASE } from '../constants/Urls';



//Requisição que pega os posts de terceiros
export const getThePeoplePosts = (setPosts) =>{
    const token = localStorage.getItem("token")
    axios.get(`${URL_BASE}/posts`,{
        headers:{
            Authorization:token
        }
    })
    .then((response)=>{
        setPosts(response.data)
    }).catch((error)=>{
        console.log('erro',error.response)
    })
} 

