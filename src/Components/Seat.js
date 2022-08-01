import { useState } from "react";
import styled from "styled-components";


 
function Seat({ name, id, isAvailable, list, setList }) {

    let [clicked, setClicked] = useState(false);
    
    function getInfo(name, list, setList) {

        let newlist = [];

        if(clicked === false) {
            newlist = [...list, name]
            setList(newlist);
            setClicked(!clicked);
        }
        if(clicked === true) {
            newlist = list.filter((value) => ( value !== name ));
            setList(newlist);
            setClicked(!clicked);
        }
    }
    
    console.log(list);
    console.log(clicked)
    
    if(name <= 9 && isAvailable === true && clicked === true) {
        return (
            <>
                <Seatnumb3 onClick={() => getInfo(name, list, setList)}>0{name}</Seatnumb3>
            </>
        );
    }
    if(name > 9 && isAvailable === true && clicked === true) {
        return (
            <>
                <Seatnumb3 onClick={() => getInfo(name, list, setList)}>{name}</Seatnumb3>
            </>
        );
    }
    if(name <= 9 && isAvailable === true && clicked === false) {
        return (
            <>
                <Seatnumb1 onClick={() => getInfo(name, list, setList)}>0{name}</Seatnumb1>
            </>
        );
    }
    if(name > 9 && isAvailable === true && clicked === false) {
        return (
            <>
                <Seatnumb1 onClick={() => getInfo(name, list, setList)}>{name}</Seatnumb1>
            </>
        );
    }
    if(name <= 9 && isAvailable === false) {
        return (
            <>
                <Seatnumb2 onClick={() => (alert("Assento indisponível"))}>0{name}</Seatnumb2>
            </>
        );
    }
    if(name > 9 && isAvailable === false) {
        return (
            <>
                <Seatnumb2 onClick={() => (alert("Assento indisponível"))}>{name}</Seatnumb2>
            </>
        );
    }
}

export default Seat;

const Seatnumb1 =  styled.div`
    width: 7.3%;
    min-width: 26px;
    height: 2.7vh;
    min-height: 26px;
    border-radius: 50%;
    margin: 5px 4px;
    background-color: #C3CFD9;
    border: 1px solid #7B8B99;
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    font-family: 'Roboto';
    font-size: 11px;
    font-weight: 400;
    line-height: 13px;
    letter-spacing: 0.04em;
    cursor: pointer;
`
const Seatnumb2 =  styled.div`
    width: 7.3%;
    min-width: 26px;
    height: 2.7vh;
    min-height: 26px;
    border-radius: 50%;
    margin: 5px 4px;
    background-color: #FBE192;
    border: 1px solid #F7C52B;
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    font-family: 'Roboto';
    font-size: 11px;
    font-weight: 400;
    line-height: 13px;
    letter-spacing: 0.04em;
    cursor: pointer;
`
const Seatnumb3 =  styled.div`
    width: 7.3%;
    min-width: 26px;
    height: 2.7vh;
    min-height: 26px;
    border-radius: 50%;
    margin: 5px 4px;
    background-color: #8DD7CF;
    border: 1px solid #1AAE9E;
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    font-family: 'Roboto';
    font-size: 11px;
    font-weight: 400;
    line-height: 13px;
    letter-spacing: 0.04em;
    cursor: pointer;
`