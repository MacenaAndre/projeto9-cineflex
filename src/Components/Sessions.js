import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Days from "./Days";
import Footer from "./Footer";

function Sessions() {
    const { IdMovie } = useParams();
    let [sessionlist, setSessionlist] = useState({});
    let [date, setDate] = useState("");
    let [weekday, setWeekday] = useState("");

    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v7/cineflex/movies/${IdMovie}/showtimes`);

        promise.then( (response) => {
            setSessionlist(response.data);
        });
    }, [IdMovie]);

    if(sessionlist !== {}) {
        return (
            <>
                <Title>Selecione o horário</Title>
                <Container>
                        <Days 
                            sessionlist={sessionlist}
                            setImage={setWeekday}
                            setTitle={setDate}    
                        />
                </Container>
                <Footer 
                    image={sessionlist.posterURL}
                    title={sessionlist.title}
                />
            
            </>
        );
    } else {
        return (
            <>
                <Title>Selecione o horário</Title>
                <Container>
                </Container>
            
            </>
        );
    }
}

export default Sessions;

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
    flex-direction: column;
    justify-content: space-around;
`;