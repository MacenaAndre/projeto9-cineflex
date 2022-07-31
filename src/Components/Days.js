import styled from "styled-components";
import Showtimes from "./Showtimes";

function Days({ sessionlist }) {
    let days = sessionlist.days;
    console.log(sessionlist);
    if(days !== undefined) {
        return (
        
            <>
            {days.map( (value, index) => (
                
                <Day key={index}>
                    <h1>{`${value.weekday} ${value.date}`}</h1>
                    <Times>
                        {value.showtimes.map((value, index) => (
                            <Showtimes 
                                key={index}
                                showtimes={value}
                            />
                        ))}
                    </Times>
                </Day>
            ))}
                
            </>
        );
    } else {
        return (<div></div>);
    }
    
}

export default Days;

const Day = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100px;
    width: 100%;
    margin-bottom: 30px;

    & h1 {
        font-family: 'Roboto';
        font-size: 20px;
        font-weight: 400;
        line-height: 23px;
        letter-spacing: 0.02em;
        color: #293845;
    }
`
const Times = styled.div`
    display: flex;
    width: 100%;

`