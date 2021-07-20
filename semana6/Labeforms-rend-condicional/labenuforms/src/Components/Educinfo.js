import React from 'react';
import Styled from 'styled-components';

const FormularioDeEnsino = Styled.form`
display:flex;
flex-direction:column;
align-items:center;
justify-content:space-evenly;
`

class Educinfo extends React.Component {
    render() {


        return (
            <div>
                <FormularioDeEnsino name='educacao'>
                    <h4>ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR</h4>

                    <label for="curso">1. Qual o curso? </label>
                    <input type="text" id="cursoDaPessoa" placeholder="Digite seu curso" name="curso" />

                    <labeel for="uniDeEnsino">2. Qual a unidade de ensino  </labeel>
                    <input type="text" id="uniDeEnsinoDaPessoa" placeholder="Digite sua unidade de ensino" name="uniDeEnsino" />

                </FormularioDeEnsino>

            </div>
        )
    };

};
export default Educinfo;