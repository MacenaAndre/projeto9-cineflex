import styled from "styled-components";

function Header() {
    return (
       <>
       <Wrapper>
            <h1>CINEFLEX</h1>
        </Wrapper>
       </>
    );
}

export default Header;

const Wrapper = styled.div `
    background-color: #C3CFD9;
    width: 100%;
    height: 67px;
    font-family: 'Roboto';
    font-size: 34px;
    font-weight: 400;
    line-height: 40px;
    color: #E8833A;
    display: flex;
    align-items: center;
    justify-content: center;
`;