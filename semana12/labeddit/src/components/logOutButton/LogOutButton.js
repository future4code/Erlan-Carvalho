import React from 'react';
import { useHistory } from 'react-router-dom';
import { StyledButon } from './Styled';
import { goBackToTheLogInPage } from '../../routes/Coordinator';

const LogOut = () => {
    const history = useHistory()

    const token = localStorage.getItem("token")

    const actionOfLogOutButton = () =>{
        if (token){
            localStorage.removeItem("token")
            goBackToTheLogInPage(history)
        }
    }

    return (
        <div>
            <StyledButon onClick={actionOfLogOutButton}>Sair</StyledButon>
        </div>
    )
}
export default LogOut;