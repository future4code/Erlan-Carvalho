import Styled from 'styled-components';

export const ContainerFather = Styled.div`
display: flex;
flex-direction: column;
border-top: solid orange 8px;
h3{
    text-align:center;
}
img{
    margin-left:auto;
    margin-right:auto;
    height:70vh;
    width:40vw;
} 
`
export const ButtonOfBrand = Styled.button`
background:none;
border:none;
&:hover{
    cursor:pointer;
}
`
export const BrandAtErrorPage = Styled.h1`
text-align:start;
margin-left:2vw;
color:orange;
`