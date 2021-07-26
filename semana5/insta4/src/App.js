import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const  MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

const containerMain = [
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
   
 class App extends  React.Component{
 state = {
   exibicaoContainerMain: containerMain,
 
   
 }

   
  render(){
    
    const listaMainContainer = this.state.exibicaoContainerMain.map((pessoa) => {
      return (

          < Post
    {...pessoa.nome}  foto={pessoa.foto} fotoPost={pessoa.fotoPost}
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
