import React, { useState, useEffect } from 'react';
import { useHistory } from 'reat-router-dom';


export default function LoginScreen() {
    return (
        <div>
            <input type={"email"} placeholder={'Email'}></input>
            <input type={'password'} placeholder={'Senha'}></input>
            <buton>Entrar</buton>
            <button>Ir para a tela de cadastro</button>
        </div>
    );
};