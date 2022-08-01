import styled from "styled-components";

function Form({ apiobj, setApiobj, name, cpf }) {

    function SendApi(e) {
        e.preventDefault();

    }
    return (
        <>
        <FormBox>
            <form onSubmit={SendApi}>    
                <label>Nome do comprador</label>
                <input
                    type="text"
                    onChange={(e) => setApiobj({
                       ids: [],
                       name: e.target.value,
                       cpf: cpf
                    })}
                    value={apiobj.name}
                    required
                />
                <label>CPF do comprador</label>
                <input
                    type="text"
                    onChange={(e) => setApiobj({
                        ids: [],
                        name: name,
                        cpf: e.target.value
                     })}
                    value={apiobj.cpf}
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