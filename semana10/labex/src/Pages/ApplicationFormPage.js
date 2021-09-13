import React from 'react';
import Styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { StyledInput } from './AdminLogin';

const ContainerFather = Styled.div`

display: flex;
flex-direction:column;
align-items:center;
padding-bottom:3vh;`

const StyledSectltInput = Styled.select`
width:40vw;
height:5vh;
`
const StyledTextField = Styled.textarea`
width:40vw;
height:5vh;
`


function ApplicationFormPage (){

    const history = useHistory()

    const gobackToTheListOfTripsPage = ()=>{
        history.goBack()
    }

    const getTripsToDoTheForm = ()=>{
        window.localStorage.getItem("someTrips")
        console.log( localStorage.getItem("someTrips"))
    }

    return(

        <ContainerFather>
            <h2>Inscreva-se Para Uma Viagem</h2>
    
            <StyledSectltInput>
                <option value='Escolha uma viajem'> Escolha uma viajem</option>
            </StyledSectltInput>

            <StyledInput type= 'text'  placeholder='Nome'></StyledInput>
            <StyledInput type='number' placeholder='Idade'></StyledInput>
            <StyledTextField placeholder ='Texto de candidatura' rows='3'></StyledTextField>
            <StyledInput  type='text' placeholder='Profissão'></StyledInput> 
            <StyledSectltInput >
                <option value='Escolha um país'>Escolha um país</option>
            </StyledSectltInput>

            <div>
                <button onClick={gobackToTheListOfTripsPage}>Voltar</button>
                <button>Enviar</button>
            </div>
        </ContainerFather>
    );
} ;
 
export default ApplicationFormPage;