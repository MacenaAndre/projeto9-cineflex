import styled from "styled-components";

function Footer({ image, title }) {
    return (
        <Wrapper>
            <div>
                <img src={image} alt="poster"></img>
            </div>
            <h1>{title}</h1>
        </Wrapper>
    );
}

export default Footer;

const Wrapper = styled.div`
    padding-bottom: 12px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    background-color: #DFE6ED;
    height: 130px;
    width: 100%;
    border-top: 1px solid #9EADBA;

    & div {
        height: 89px;
        width: 64px;
        border-radius: 2px;
        background-color: #ffffff;
        box-shadow: 0px 2px 4px 0px #0000001A;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-left: 20px;
        margin-right: 30px;

        & img {
            height: 90%;
            width: 90%;
        }

    & h1 {
        color: #293845;
        font-family: 'Roboto';
        font-size: 26px;
        font-weight: 400;
        line-height: 30px;
    }
    }

    
`