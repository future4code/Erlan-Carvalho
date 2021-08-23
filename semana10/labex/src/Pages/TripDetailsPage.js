import React, {useState, useEffect}from 'react';
import {useHistory} from 'react-router-dom';
import axios from 'axios';
import { useParams } from 'react-router-dom'


export const TripDetailsPage = ()=>{

    const [tripDetail, setTripDetail] = useState()
    const params = useParams()

    const history = useHistory()

    const goBackToAdminPainel =()=>{
        history.goBack()
    } 


    useEffect(()=>{
            const token = window.localStorage.getItem("token")
            const url= `https://us-central1-labenu-apis.cloudfunctions.net/labeX/erlan-carvalho-lovelace/trip/${params.tripId}`
            const headers={
                auth:token
            }
            axios.get(url,headers)
            .then((response)=>{
                console.log(response.data)
                setTripDetail(response.data.trip)

            }).catch((error)=>{
                console.log('algo deu errado',error.response)
            })
    }, [])
    
    return (
        <div>
         <h2>Viagem</h2>
         <h4>{tripDetail}</h4>

        
         <div>
             <button onClick={goBackToAdminPainel}>Voltar</button>
         </div>

         <div>
             <h6>Candidatos Pendentes</h6>
             <ul>

             </ul>

             <h6>Candidatos Aprovados</h6>
             <ul>
                 
             </ul>
         </div>
        </div>
    );
};