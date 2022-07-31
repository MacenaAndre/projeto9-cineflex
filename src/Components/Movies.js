import styled from "styled-components";
import Movie from "./Movie";
import { useEffect, useState}  from "react";
import axios from "axios";

function Movies() {
    const [movielist, setMovielist] = useState([]);

    useEffect(() => {
        const promise = axios.get("https://mock-api.driven.com.br/api/v7/cineflex/movies");

        promise.then( (response) => {
            setMovielist(response.data);
        });
    }, []);

    return (
        <>
           <Title>Selecione o filme</Title>
           <Container>
                {movielist.map( (value, index) => (
                    <Movie 
                        key={index}
                        image={value.posterURL}
                        id={value.id}
                    />
                ))}
           </Container>
        </>
    );
}

export default Movies;

const Title = styled.div `
    height: 100px;
    width: 100%;
    font-family: 'Roboto';
    font-size: 24px;
    font-weight: 400;
    line-height: 28px;
    letter-spacing: 0.04em;
    color: #293845;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
`;

const Container = styled.div`
    padding: 0px 30px;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
`;