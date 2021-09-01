import React from 'react';
import { useHistory } from 'react-router-dom';
import { StyledButon } from './Styled';

const LogOut =()=>{
    const history = useHistory()

    const goBackToTheLogInPage =()=>{
        history.push('/login')
    }
    return (
        <div>
            <StyledButon onClick={goBackToTheLogInPage}>Sair</StyledButon>
        </div>
    )
}
export default LogOut;