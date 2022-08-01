import axios from "axios";
import { useEffect } from "react";
import styled from "styled-components";

function Form({ ids, name, setName, cpf, setCpf }) {

    function sendApi(e) {

        e.preventDefault();

        const newobj = {
            ids: ids,
            name: name,
            cpf: cpf
        }
        let bolean = false;

        if(newobj.ids.length < 1) {
            alert("Selecione pelo menos um assento");
        }
        if(newobj.cpf.length < 11) {
            alert("digite um CPF válido")
        }
        for(let i = 0; i < newobj.cpf.length; i++) {
            if(isNaN(newobj.cpf[i])) {
                bolean = true;
            }
        }
        if(bolean === true) {
            alert("Digite um CPF válido");
        }
        const promise = axios.post('https://mock-api.driven.com.br/api/v7/cineflex/seats/book-many', newobj);

        promise.then((resp) => (console.log('olá')));
        promise.catch((resp) => alert("Eroo ao enviar"));
    }
    return (
        <>
        <FormBox>
            <form onSubmit={sendApi}>    
                <label>Nome do comprador</label>
                <input
                    type="text"
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                    required
                />
                <label>CPF do comprador</label>
                <input
                    type="text"
                    onChange={(e) => setCpf(e.target.value)}
                    value={cpf}
                    required
                />
                <div>
                    <button>{`Reservar assento(s)`}</button>
                </div>
            </form>
        </FormBox>
        </>
    );
}

export default Form;

const FormBox = styled.div`
    display: flex;
    flex-direction: column;
    width: 90%;

    & input {
        margin-top: 10px;
        margin-bottom: 20px;
        width: 100%;
        height: 51px;
        border-radius: 3px;
        border: 1px solid #D4D4D4;
        font-family: 'Roboto';
        font-size: 18px;
        font-weight: 400;
        line-height: 21px;
        padding-right: 20%;
    }

    & label {
        font-family: 'Roboto';
        font-size: 18px;
        font-weight: 400;
        line-height: 21px;
        text-align: left;
    }

    & button {
        height: 42px;
        width: 225px;
        border-radius: 3px;
        background-color: #E8833A;
        font-family: Roboto;
        font-size: 18px;
        font-weight: 400;
        line-height: 21px;
        letter-spacing: 0.04em;
        text-align: center;
        color: #ffffff;
    }
    
    & div {
        display: flex;
        justify-content: center;
    }
`