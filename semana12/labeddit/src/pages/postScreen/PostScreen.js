import React, { useEffect, useState } from 'react';
import Header from '../../components/header/Header.js';
import { UseProtectedPages } from '../../hooks/UseProtectedPages.js';
import { ContainerFather, ContainerOfPost, ButtonAndCommentSection, UserNameContainer, ContainerOfYourComment, ContainerOfPeopleComent } from './Styled';
import { useParams } from 'react-router-dom';
import UsePost from '../../hooks/usePosts.js';
import { URL_BASE } from '../../constants/Urls.js';

const PostScreen = () => {
    UseProtectedPages()

    const params = useParams()

    const seeSpecificPost = UsePost([], `${URL_BASE}/posts/${params.postId}`)



    return (
        <div>
            <Header />
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
                            <button><img height={10} src={"https://image.flaticon.com/icons/png/128/44/44674.png"} alt={"seta para cima, simbolizando voto positivo"} /></button>

                            <button><img height={10} src={"https://image.flaticon.com/icons/png/128/44/44698.png"} alt={"seta para baixo, simbolizando voto negativo"} /></button>
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

                    <button><img height={10} src={"https://image.flaticon.com/icons/png/128/44/44674.png"} alt={"seta para cima, simbolizando voto positivo"} /></button>

                    <button><img height={10} src={"https://image.flaticon.com/icons/png/128/44/44698.png"} alt={"seta para baixo, simbolizando voto negativo"} /></button>
                </ContainerOfPeopleComent>

            </ContainerFather>
        </div>
    );
};
export default PostScreen;