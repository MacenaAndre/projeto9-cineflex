import { unstable_batchedUpdates } from "react-dom";
import { Link } from "react-router-dom";
import styled from "styled-components";

function Showtimes({ showtimes }) {
        return (
            <Link to={`/assentos/${showtimes.id}`}>
                <Button>{showtimes.name}</Button>
            </Link>
            
        );
}

export default Showtimes;

const Button = styled.div`
    height: 43px;
    width: 83px;
    border-radius: 3px;
    background-color: #E8833A;
    color: #ffffff;
    font-family: Roboto;
    font-size: 18px;
    font-weight: 400;
    line-height: 21px;
    letter-spacing: 0.02em;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 15px;
    cursor: pointer;
`