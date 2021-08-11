import  React,{useState, useEffect} from "react";
import axios from 'axios'
import MatchScreen from "./componenets/MatchScreen/matchScreen";

function App(props) {
const [screen , setScreen] =  useState('initialScreen')

const  changeScreen =() =>{
  switch (screen){
    case('matchSCreen'):
    return <MatchScreen goToMatchScreen={changetoTheMatchScreen}/>
    default:
      return <h2>Error, love not found </h2> 
  }
  }

  const changetoTheMatchScreen =()=>{
    setScreen('matchSCreen')

  }


  return (
    <div >
      <h3>astromatch</h3>
      <button onClick={changeScreen}>Matchs</button>
      {changeScreen}
      <img/>

    </div>
  );
}

export default App;
