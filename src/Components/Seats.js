import { useState } from "react";
import styled from "styled-components";
import Seat from "./Seat";

function Seats({ seatlist }) {
    
    const [list, setList] = useState([]);

    if(seatlist.movie !== undefined) {
        return (
            <SeatBox>
                {seatlist.seats.map( (value, index) => (
                    <Seat
                        key={index}
                        name={value.name}
                        id={value.id}
                        isAvailable={value.isAvailable}
                        list={list}
                        setList={setList}
                    />
                ))}
                <InfoBar>
                    <div>
                        <Selected></Selected>
                        <h1>Selecionado</h1>
                    </div>
                    <div>
                        <Available></Available>
                        <h1>Disponível</h1>
                    </div>
                    <div>
                        <Unavailable></Unavailable>
                        <h1>Indisponível</h1>
                    </div>
                </InfoBar>
            </SeatBox>
    
        );
    } else {
        return (
            <></>
        );
    }
    
}

export default Seats;

const SeatBox = styled.div`
    width: 90%;
    max-width: 420px;
    height: auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`
const InfoBar =  styled.div`
    width: 100%;
    height: auto;
    margin: 25px 0px;
    display: flex;
    justify-content: space-evenly;

    & div{
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: 8px;

        & h1{
            font-family: 'Roboto';
            font-size: 13px;
            font-weight: 400;
            line-height: 15px;
            letter-spacing: -0.013em;
            color: #4E5A65;
        }
    }
`
const Selected = styled.div`
    height: 25px;
    width: 25px;
    border-radius: 50%;
    background-color: #8DD7CF;
    border: 1px solid #1AAE9E;
`
const Available = styled.div`
    height: 25px;
    width: 25px;
    border-radius: 50%;
    background-color: #C3CFD9;
    border: 1px solid #7B8B99;
`
const Unavailable = styled.div`
    height: 25px;
    width: 25px;
    border-radius: 50%;
    background-color: #FBE192;
    border: 1px solid #F7C52B;
`