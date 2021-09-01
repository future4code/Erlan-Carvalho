import React from 'react';
import Header from '../../assets/header/Header.js';
import { ContainerFather, ContainerOfPost, ButtonAndCommentSection, UserNameContainer, ContainerOfYourComment, ContainerOfPeopleComent } from './Styled';

const PostScreen = () => {
    return (
        <div>
            <Header/>
        <ContainerFather>

            <ContainerOfPost>
                <UserNameContainer>
                    <h5>UserName</h5>
                </UserNameContainer>
                <div>
                    <textarea placeholder={"Texto do post "} />
                </div>
                <ButtonAndCommentSection>
                    <div>
                        <button><img height={10} src={"https://image.flaticon.com/icons/png/128/44/44674.png"} /></button>

                        <button><img height={10} src={"https://image.flaticon.com/icons/png/128/44/44698.png"} /></button>
                    </div>

                    <h6>Quatidade de comentários</h6>
                </ButtonAndCommentSection>
            </ContainerOfPost>

            <ContainerOfYourComment>
                <div>
                    <textarea placeholder={"Escreva seu comentário"} />
                </div>
                <div>
                    <button>
                        Comentar
                    </button>
                </div>
            </ContainerOfYourComment>

            <ContainerOfPeopleComent>
            <UserNameContainer>
                    <h5>UserName</h5>
                </UserNameContainer>

                <div>
                    <textarea placeholder={"texto do comentário"} />
                </div>
                
                <button><img height={10} src={"https://image.flaticon.com/icons/png/128/44/44674.png"} /></button>

                <button><img height={10} src={"https://image.flaticon.com/icons/png/128/44/44698.png"} /></button>
            </ContainerOfPeopleComent>

        </ContainerFather>
        </div>
    );
};
export default PostScreen;