import React, {useEffect, useState} from 'react';
import {useHistory} from 'react-router-dom';
import axios from 'axios';
import { StyledButton } from './HomePage';


function ListTripsPage (){

    const [theTrips, setTrips] = useState([])

    const history = useHistory()

    const goBackToInitialPage = ()=>{
        history.goBack()
    }

    const goToSubscribeTripPage = ()=>{
        history.push('/subscribetrip')
    }

    useEffect(()=>{
        const url = 'https://us-central1-labenu-apis.cloudfunctions.net/labeX/erlan-carvalho-lovelace/trips'

        axios.get(url)
        .then((response)=>{
            console.log(response.data)
            setTrips(response.data.trips)
            window.localStorage.setItem("someTrips", response.data.trips)

        }).catch((error)=>{
            console.log('Houve algum erro', error.response)
        })

    },[])

    return (
        <div>
            <div>
                <StyledButton onClick={goBackToInitialPage}>Voltar</StyledButton>
                <StyledButton onClick={goToSubscribeTripPage}>Inscrever-se</StyledButton>
                <h2>Lista de viagens</h2>

                    {theTrips.map((spaceTrips)=>{
                        <div key ={spaceTrips.id}>
                            <p>{spaceTrips.name}</p> 
                            <h5>{spaceTrips.date}</h5>
                            <h5>{spaceTrips.planet}</h5> 
                            <h5>{spaceTrips.description}</h5> 
                            <h5>{spaceTrips.durationInDays}</h5>
                        </div>
                     })} 
            

                
            </div>
         
        </div>
    );
};
export default ListTripsPage;