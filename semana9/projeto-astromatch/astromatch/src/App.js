import  React,{useState, useEffect} from "react";
import axios from 'axios';
import MatchScreen from "./componenets/MatchScreen/matchScreen";
import InitialScreen from "./componenets/initialScreen/initialScreen";

function App(props) {
const [screen , setScreen] =  useState('initialScreen')
const [swipsAndMatches, setSwipsAndMatches] = useState([])


const  changeScreen =() =>{
  switch (screen){
    case('initialScreen'):
    return <InitialScreen goToMatchScreen=  {changetoTheMatchScreen}/>
    case('matchScreen'):
    return <MatchScreen gotoInitialScreen={changeToTheInitialScreen}/>
    default:
      return <h2>Error, love not found </h2> 
  }
  }

  const changetoTheMatchScreen =()=>{
    setScreen('matchScreen')
  }
  const changeToTheInitialScreen=()=>{
    setScreen('initialScreen')

  }

  

  // const cleanSwipsAndMatches= async ()=>{
  //   const url = `https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:aluno/clear`
  //   try{
  //     const response = await axios.put(url, {
  //       headers:{
  //         Content-Type:''
  //       }
  //     })

  //     }

  //   }

  


  return (
    <div >
      {changeScreen()}
    </div>
  );
}

export default App;
