import React, { useState, useEffect } from 'react';
import { useHistory } from 'reat-router-dom';


export default function SignUpScreen() {
    return (
        <div>
            <input type={"text"} placeholder={"Nome de usuário"}></input>
            <input type={"email"} placeholder={'Email'}></input>
            <input type={'password'} placeholder={'Senha'}></input>
            <buton>Cadastrar</buton>
        </div>
    );
};