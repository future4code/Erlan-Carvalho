import React, { useState, useEffect } from 'react';
import Header from '../../assets/header/Header.js';
import {
    ContainerFather, YourPostingBox, BoxOfContentOfTheFeed,
    UserNameContainer, BoxOfPeopleTextPost, SectionOfButtonsAndCommentsQuantity
} from './Styled';



export default function FeedScreen() {




    return (
        <div>
            <Header/>
        <ContainerFather>
              
        
            <YourPostingBox>
                <div>
                    <textarea placeholder={"Escreva Seu post"} />
                </div>
                <div>
                    <button>Postar</button>
                </div>
            </YourPostingBox>

            <BoxOfContentOfTheFeed>
                <UserNameContainer>
                    <h5>UserName</h5>
                </UserNameContainer>
                <BoxOfPeopleTextPost placeholder={"Texto Do Post"} />

                <SectionOfButtonsAndCommentsQuantity>
                    <div>
                        <button><img height={10} src={"https://image.flaticon.com/icons/png/128/44/44674.png"} /></button>

                        <button><img height={10} src={"https://image.flaticon.com/icons/png/128/44/44698.png"} /></button>
                    </div>

                    <div>
                        <h6>Quantidade de comentários</h6>
                    </div>
                </SectionOfButtonsAndCommentsQuantity>
            </BoxOfContentOfTheFeed>
        </ContainerFather>
        </div>
    );
};