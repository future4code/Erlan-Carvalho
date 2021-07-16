import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const  MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

 class App extends  React.Component{
  state= {

    containerMain :[
      {
        nome:'Maria',
        foto:'https://picsum.photos/20/50',
        fotoPost:'https://picsum.photos/255/150'
       },
      {
        nome:'João',
        foto:'https://picsum.photos/20/40',
        fotoPost:'https://picsum.photos/250/150'
       },
      {
        nome:'Ana',
        foto:'https://picsum.photos/30/50',
        fotoPost:'https://picsum.photos/300/150'
       },]
   };
  render(){
    
    const listaMainContainer = this.state.containerMain.map((pessoas) => {
      return (

          < Post
          {...pessoas.nome} {...pessoas.foto} {...pessoas.fotoPost}
          />
     
      

    
   )
    });
    return(
      <MainContainer>
        {listaMainContainer}
      </MainContainer>
    )
  }
}
export default App
