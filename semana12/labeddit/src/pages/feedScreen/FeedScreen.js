import React, { useEffect } from 'react';
import Header from '../../components/header/Header.js';
import useForms from '../../hooks/UseForms.js';
import UsePost from '../../hooks/usePosts.js';
import { UseProtectedPages } from '../../hooks/UseProtectedPages.js';
import { createPost } from '../../services/contentCreationRequests.js';
import { getThePeoplePosts } from '../../services/contentViewRequests.js';
import {
    ContainerFather, YourPostingBox, BoxOfContentOfTheFeed,
    UserNameContainer, BoxOfPeopleTextPost, SectionOfButtonsAndCommentsQuantity
} from './Styled';



export default function FeedScreen() {
    UseProtectedPages()

    const [forms, onChange, clear] = useForms({
        title: "",
        body: ""
    })

    const submitYourPost = (event) => {
        event.preventDefault()
        createPost(forms, clear)
    }


    const [posts, setPosts] = UsePost([])

    useEffect(() => {
        getThePeoplePosts(setPosts)
    }, [])

    const renderPeoplePost = posts.map((getPosts) => {
        return (

            <BoxOfContentOfTheFeed key={getPosts.id}>

                <UserNameContainer>
                    <h4>{getPosts.username}</h4>
                </UserNameContainer>

                <u><h5>{getPosts.title}</h5></u>

                <BoxOfPeopleTextPost>
                    <button> <p>{getPosts.body}</p></button>
                </BoxOfPeopleTextPost>

                <SectionOfButtonsAndCommentsQuantity>

                    <div>
                        <button><img height={13} src={"https://image.flaticon.com/icons/png/128/44/44674.png"} alt={"seta para cima, simbolizando voto positivo"} /></button>
                        <button>{getPosts.voteSum}</button>
                        <button><img height={13} src={"https://image.flaticon.com/icons/png/128/44/44698.png"} alt={"seta para baixo, representando voto negativo"} /></button>
                    </div>

                    <div>
                        <h6>Quantidade de comentários: {getPosts.commentCount}</h6>
                    </div>

                </SectionOfButtonsAndCommentsQuantity>

            </BoxOfContentOfTheFeed>
        );
    });

    return (
        <div>
            <Header />
            <ContainerFather>

                <YourPostingBox>
                    <form onSubmit={submitYourPost}>
                        <input type={'text'} placeholder={"Título do post"}
                            name={"title"}
                            value={forms.title}
                            onChange={onChange} />

                        <textarea type={"text"} placeholder={"Escreva Seu post"}
                            name={"body"}
                            value={forms.body}
                            onChange={onChange} />

                        <button type={"submit"}>Postar</button>
                    </form>
                </YourPostingBox>

                {renderPeoplePost}
                
            </ContainerFather>
        </div >
    );
};