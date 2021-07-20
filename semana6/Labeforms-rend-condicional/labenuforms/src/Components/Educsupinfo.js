import React from 'react';
import Styled from 'styled-components';

const FormularioDeEnsinoSupeCursos = Styled.form`
display:flex;
flex-direction:column;
align-items:center;
justify-content:space-evenly;
`

class Educsupinfo extends React.Component {
    render(){
        return (
            <div>
                <FormularioDeEnsinoSupeCursos name="educaosup">
                    <h4>ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO</h4>
                    <label for ="motivoDaNaoConcl">1. Por que você não terminou o curso de graduação?</label>
                    <input type= "text"  id="motivoPessoal" placeholder="Digite o motivo" name="motivoDaNaoConcl"/>
                    
                    <p>2. Você fez algum curso complementar?</p>
                    <select>
                        <option value="nenhum">nenhum</option>
                        <option value="curso tecnico">curso técnico</option>
                        <option value="curso de ingles">curso de inglês</option>
                    </select> 
                </FormularioDeEnsinoSupeCursos>

            </div>

        )
    };
};
export default Educsupinfo;