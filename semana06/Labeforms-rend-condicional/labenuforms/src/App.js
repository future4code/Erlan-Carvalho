import React from 'react';
import Generaldata from './Components/Generaldata';
import Educinfo from './Components/Educinfo';
import Educsupinfo from './Components/Educsupinfo';
import Finalmessage from './Components/Finalmessage'
import Styled from 'styled-components'


const ContainerdeExibicao = Styled.div`
display:flex;
flex-direction:column;
align-items:center;
justify-content:space-evenly;
`




class App extends React.Component {
  state ={
    mudancaDePagina:1
  }

  renderizaPagina=()=>{
    switch(this.state.mudancaDePagina){
      case 1:
        return <Generaldata/>;
      case 2:
        return <Educinfo/>;
      case 3:
        return <Educsupinfo/>;
      case 4:
        return <Finalmessage/>;
        default:
          return 
    }
  
  };
  
  proximaEtapa =()=>{ 
    this.setState({mudancaDePagina:this.state.mudancaDePagina + 1
    })
    
  }

  render() {
    
    return (
     
      <ContainerdeExibicao>
         {this.renderizaPagina()} 
        <button onClick={this.proximaEtapa}>Próxima etapa </button>
      </ContainerdeExibicao>
    )
  };

};

export default App;
