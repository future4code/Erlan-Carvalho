import Styled from 'styled-components';

export const ContainerFather = Styled.div`
display:flex;
flex-direction:column;
align-items:center;
`
export const YourPostingBox = Styled.div`
margin-top:15vh;
margin-bottom:10vh;
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
display:flex;
flex-direction:column;
margin-top: 6vh;
margin-bottom:3vh;
border:solid black 1px;
width: 27vw;;
padding: 3%;
text-align:center;
button{
    background:none;
    border:none;
    &:hover{
        cursor:pointer;
    
    }
}

`
export const  SectionOfButtonsAndCommentsQuantity = Styled.div`
display:flex;
flex-direction:row;
align-items:center;
justify-content:space-between;
button{
    &:hover{
        background-color:silver ;
    }

}
`

export const UserNameContainer = Styled.div`
border:solid black 1px;
text-align:center;
`

export const BoxOfPeopleTextPost = Styled.div`
text-align:center;
button{
    font-size:5vh;
}

`