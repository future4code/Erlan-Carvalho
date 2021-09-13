import React from 'react';
import Styled from 'styled-components';
import { useHistory } from 'react-router-dom';




const MainContainer = Styled.div`
display:grid;
grid-template-columns:1fr 1fr;
height:30vh;
width:30vw;
`

export const StyledButton = Styled.button`
background-color:purple;
height:15vh;
&:hover{
    cursor:pointer;
    background-color:pink;
}`

function HomePage() {

const history = useHistory()

const goToTripList =()=>{
    history.push('/list-of-trips')
}

const goToAdminLoginPage =()=>{
    history.push('/admin-login')
}
    return (
    
            <MainContainer>
                <StyledButton onClick = {goToTripList}>Ver viagens</StyledButton>
                <StyledButton onClick={goToAdminLoginPage}>Área de admin </StyledButton>
            </MainContainer>
 
    );
};
export default HomePage;