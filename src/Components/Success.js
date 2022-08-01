import styled from "styled-components";
import { Link } from "react-router-dom";

function Success({ ids, name, cpf }) {

        return (
            <Container>
                <Title>{`Selecione o(s) assento(s)`}</Title>
                <div>
                    <h2>Filme e sessão</h2>
                    <h1></h1>
                    <h1></h1>
                </div>
                <div>
                    <h2>Ingressos</h2>
                    {ids.map((value) => (
                        <h1>{value}</h1>
                    ))}
                </div>
                <div>
                    <h2>Comprador</h2>
                    <h1>Nome: {name}</h1>
                    <h1>CPF: {cpf}</h1>
                </div>
                <Link to="/">
                    <Homebutton>Voltar pra Home</Homebutton>
                </Link>
            </Container>
        );

    
}

export default Success;

const Title = styled.h1`
    height: 100px;
    width: 100%;
    font-family: 'Roboto';
    font-size: 24px;
    font-weight: 700;
    line-height: 28px;
    letter-spacing: 0.04em;
    color: #247A6B;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
`
const Homebutton = styled.button`
    height: 42px;
    width: 225px;
    border-radius: 3px;
    background-color: #E8833A;
    color: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: Roboto;
    font-size: 18px;
    font-weight: 400;
    line-height: 21px;
    letter-spacing: 0.04em;
    text-align: center;
    margin-top: 40px;
    cursor: pointer;
`
const Container = styled.div`
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;

    & div {
        display: flex;
        flex-direction: column;
        align-items: flex-start;

        & h2 {
            font-family: 'Roboto';
            font-size: 24px;
            font-weight: 700;
            line-height: 28px;
            letter-spacing: 0.04em;
            text-align: left;
            color: #293845;
            margin-top: 20px;

        }
    }
`