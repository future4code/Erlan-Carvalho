import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/CardPequeno/CardPequeno';
import PerfilSlack from './img/foto-perfil-slack.jpg';
import  imgEmail from './img/email.png';
import imgEndereco from './img/endereco.png';
import imgVsa from './img/vsa.jpg'
import imgUfba from './img/ufba.jpg'
import imgLabenu from'./img/labenu.png'

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande
          imagem={PerfilSlack}
          nome="Erlan Gleidson Barbosa Carvalho"
          descricao="Oi, eu sou Erlan Gleidson Barbosa Carvalho. Sou aluno da Labenu do curso de desenvolvimento web full stack. E faço parte da turma Lovelace."
        />

        <ImagemButton
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png"
          texto="Ver mais"
        />

        <CardPequeno
          imagemCardPequeno={imgEmail}
          TxemailEndereco="Email:"
          CoEmailEndereco="Helloworld@gmail.com"/>

        <CardPequeno
          imagemCardPequeno={imgEndereco}
          TxemailEndereco="Endereço: "
          CoEmailEndereco="Rua Hello World, nº90"/>
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais e pessoais </h2>


        <CardGrande
          imagem={imgVsa}
          nome="VSA"
          descricao="Aprendizagem profissional no transporte."
        />
        
        <CardGrande
          imagem={imgUfba}
          nome="UFBA"
          descricao="Ensino Superior"
        />

        <CardGrande
          imagem={imgLabenu}
          nome="Labenu"
          descricao="Estudante de desenvolvimento web."
        />

      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png"
          texto="Facebook"
        />

        <ImagemButton
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png"
          texto="Twitter"
        />
      </div>
    </div>
  );
}

export default App;
