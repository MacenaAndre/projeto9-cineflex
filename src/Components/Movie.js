import { Link } from "react-router-dom";
import styled from "styled-components";

function Movie({ image, id }) {
    return (
        <>
            <Link to={`/sessoes/${id}`}>
                <Moviebox>
                    <img src={image} alt="poster"/>
                </Moviebox>
            </Link>
        </>
    );
}

export default Movie;

const Moviebox = styled.div`
    margin: 10px;
    height: 209px;
    width: 145px;
    border-radius: 3px;
    box-shadow: 0px 2px 4px 2px #0000001A;
    box-sizing: border-box;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;

    & img {
        height: 193px;
        width: 129px;
    };
`;
