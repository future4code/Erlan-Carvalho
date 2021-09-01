import Styled from 'styled-components';

export const StyledHeader = Styled.header`
display:flex;
flex-direction:row;
justify-content:space-around;
align-items:center;
border: solid black 1px;
background-color:orange;
button{
    background:none;
    border:none;
    &:hover{
        cursor:pointer;
    }

}

` 