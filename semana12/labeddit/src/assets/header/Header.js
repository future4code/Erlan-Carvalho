import React from 'react';
import LogOut from '../../constants/logOutButton/LogOutButton';
import { useHistory } from 'react-router-dom';
import { StyledHeader } from './Styled';


const Header = () => {

    const history = useHistory()

    const goToTheFeed = () => {
        history.push('/')
    }

    return (
        <StyledHeader>
            <button onClick={goToTheFeed}><h3>Labeddit</h3></button>
            <LogOut />
        </StyledHeader>
    );
};

export default Header;