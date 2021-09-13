import React from 'react';
import Styled from 'styled-components';
import facebookIcon from './Icons/face.png'
import instagramIcon from './Icons/insta.png';
import twitterIcon from './Icons/twitter.png';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import HomePage from './Pages/HomePage.js';
import ListTripsPage from './Pages/ListTripsPage.js';
import AdminLogin from './Pages/AdminLogin.js';
import ApplicationFormPage from './Pages/ApplicationFormPage.js';
import AdminHomePage from './Pages/AdminHomePage.js';
import CreateTripPage from './Pages/CreateTripPage';
import { TripDetailsPage } from './Pages/TripDetailsPage';
import plandoDeFundo from "./ImagemDeFundo/imagemDeFundo.jpg";


const Content = Styled.div`
background-image: url(${plandoDeFundo});
background-size:100%;
`
const StyledTitle = Styled.h1`
font-size:10vh;
padding-bottom:15vh;
`

const ContainerFather = Styled.div`
display:grid;
grid-template-rows:1fr 1fr;
justify-items:center;
height:100vh;

`
const StyledHeader = Styled.div`
border: solid black 1px;
width :90vw;
height:20vh;
text-align:center;
background-image:linear-gradient(to bottom,white,purple,black);
`
const StyledFooter = Styled.div`
border: solid black 1px;
width:90vw;
height:20vh;
align-self:end;
display:grid;
grid-template-columns:1fr 1fr;
background-image:linear-gradient(to bottom,white,purple,black);
`
const ContainerOfTheFootersIcons = Styled.div`
display:grid;
grid-template-columns: 1fr 1fr 1fr;
padding-top:6vh;
img{
border:solid black 1px;
border-radius:40%;
height:6vh;
  &:hover{
    height:8vh;
    cursor:pointer;
  }
}
`
const ContainerOfTheFootersContact = Styled.div`
padding-left:5vw;
`

function App() {
  return (
    <Content>
    <ContainerFather>

      <StyledHeader>
        <StyledTitle>Labex</StyledTitle>
      </StyledHeader>

      <BrowserRouter>
        <Switch>

          <Route exact path={'/'}>
            <HomePage />
          </Route>

          <Route exact path={'/list-of-trips'}>
            <ListTripsPage />
          </Route>


          <Route exact path={'/admin-login'}>
            <AdminLogin />
          </Route>

          <Route exact path ={'/subscribetrip'}>
            <ApplicationFormPage/>
          </Route>

          <Route exact path ={'/admin-painel'}>
            <AdminHomePage/>
          </Route>

          <Route exact path ={'/admin-create-trip'}>
            <CreateTripPage/>
          </Route>

          <Route exact path ={'/trip-details-for-admin'}>
            <TripDetailsPage/>
          </Route>
          
          <Route exact path ={''}>
            <h1>Error, something wrong it's not right</h1>
          </Route>

        </Switch>
      </BrowserRouter>

      <StyledFooter>

        <ContainerOfTheFootersContact>
          <h4>Email</h4>
          <h4>Contato</h4>
        </ContainerOfTheFootersContact>

        <ContainerOfTheFootersIcons>
          <img src={facebookIcon} alt={'ícone do facebook'} />
          <img src={instagramIcon} alt={'ícone do instagram'}  />
          <img src={twitterIcon} alt={'ícone do twitter'} />
        </ContainerOfTheFootersIcons>

      </StyledFooter>


    </ContainerFather>
    </Content>
  );
};

export default App;
