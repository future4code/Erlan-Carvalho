import React from 'react';
import Styled from 'styled-components';

const FormularioDosGerais = Styled.form`
display:flex;
justify-content:space-between;
flex-direction:column;
align-items:center;

`

class Generaldata extends React.Component {


  
    render() {


        return (
            <div>

                <FormularioDosGerais name=" gerais">

                    <h4>ETAPA 1 - DADOS GERAIS </h4>

                    
                    <label for='nome' >1. Qual o seu nome?</label>
                    <input type="texto" id="nomePessoa" placeholder="Digite seu nome" name="nome" />

                    <label for="idade">2. Qual a sua idade?</label>
                    <input type="number" id="idadePessoa" placeholder="Digite sua idade" name="idade" />

                    <label for="email">3. Qual o seu email?</label>
                    <input type="email" id="emailpessoa" placeholder="Digite seu email" name="email" />

                    <p> 4. Qual a sua escolaridade?</p>
                    <select>

                        <option value="Ensino médio incompleto">Ensino médio incompleto</option>
                        <option value="Ensino médio completo">Ensino médio completo </option>
                        <option value=" Ensino superior incompleto">Ensino superior incompleto</option>
                        <option value="Ensino superior completo">Ensino superior completo </option>

                    </select>

                   

                </FormularioDosGerais>


            </div>

        )
    };
};
export default Generaldata;