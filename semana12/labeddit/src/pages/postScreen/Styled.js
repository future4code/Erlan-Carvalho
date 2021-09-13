import Styled from 'styled-components';

export const ContainerFather = Styled.div`
display:flex;
flex-direction:column;
align-items:center;
margin-bottom:5vh;

`
export const ContainerOfPost = Styled.div`
border:solid black 1px;
margin-top:15vh ;
margin-bottom:2vh;
width:40vw;
textarea{
    width:39.45vw;
    height:20vh;
}
`
export const ButtonAndCommentSection = Styled.div`
display:flex;
flex-direction:row;
justify-content: space-between;
height:7vh;
button{
background:none;
border:none;

&:hover{
    background-color:silver;
    cursor:pointer;
}
}
h6{
    margin-right:2vw;
}
`
export const UserNameContainer = Styled.div`
border:solid black 1px;
text-align:center;
height:auto;
`
export const ContainerOfYourComment = Styled.div`
border:solid black 1px;
width:40vw;


textarea{
    width:39.40vw;
    height:12vh;
}

button{
    width:40vw;

}`
export const ContainerOfPeopleComent = Styled.div`
border:solid black 1px;
margin-top:2vh;
width:40vw;
textarea{
    width:39.40vw;
    height:16vh;
}
button{
    background:none;
    border:none;
    &:hover{
        background-color:silver;
        cursor:pointer;
    }
}
`