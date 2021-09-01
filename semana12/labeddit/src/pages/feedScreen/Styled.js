import Styled from 'styled-components';

export const ContainerFather = Styled.div`
display:flex;
flex-direction:column;
align-items:center;
`
export const YourPostingBox = Styled.div`
margin-top:2vh;
border:solid black 1px;
width:40vw;
height:15vh;
text-align:center;
button{
    width:40vw;
}
textarea{
    width:39.50vw;
    height:10vh;
}
`
export const BoxOfContentOfTheFeed = Styled.div`
margin:2vh 0 4vh 0;
border:solid black 1px;
button{
    background:none;
    border:none;
    &:hover{
        cursor:pointer;
        background-color:silver;
    }
}
`
export const  SectionOfButtonsAndCommentsQuantity = Styled.div`
display:flex;
flex-direction:row;
justify-content:space-between;
height:7.70vh;
button{
    margin-bottom:10vh;
}
h6{
    margin-right:2vw;
    margin-bottom:10vh;
}
`

export const UserNameContainer = Styled.div`
border:solid black 1px;
text-align:center;
height:auto;
`
export const BoxOfPeopleTextPost = Styled.textarea`
height:15vh;
width:40vw;

`