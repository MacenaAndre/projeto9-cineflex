import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Footer2 from "./Footer2";
import styled from "styled-components";
import Seats from "./Seats";
import Form from "./Form";

function ChooseSeat({ setInfos1, ids, setIds, name, setName, cpf, setCpf }) {
    const { IdSession } = useParams();
    let [seatlist, setSeatlist] = useState({});

    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v7/cineflex/showtimes/${IdSession}/seats`);

        promise.then( (response) => {
            setSeatlist(response.data);
            setInfos1=(response.data);
        });
    }, [IdSession]);

    if(seatlist !== {}) {
        return (
            <>  
                <Title>{`Selecione o(s) assento(s)`}</Title>
                <Container>
                    <Seats 
                        seatlist={seatlist}
                        ids={ids}
                        setIds={setIds}
                    />
                    <Form 
                        name={name}
                        setName={setName}
                        cpf={cpf}
                        setCpf={setCpf}
                        ids={ids}
                    />
                </Container>
                <Footer2 
                    seatlist={seatlist}
                />
            </>
        );
    } else {
        return (
            <></>
        );
    }
    
}

export default ChooseSeat;

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
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
`;