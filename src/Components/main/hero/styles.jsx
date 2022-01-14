import styled from "styled-components";

export const Container = styled.div`
    
    color: #ffffff;
    .titulo {
        display: flex;
        justify-content: center;
    }
    .titulo h1 {
        text-transform: uppercase;
        text-align: center;
        letter-spacing: 2px;
        font-weight: bold;
        margin-top: 10vh;
        font-size: clamp(1.75em, 1em + 3vw, 3.5rem);
        color: #480e63;
        cursor: default;
        transition: 2s;
    }
    .titulo h1:hover {
        color: #830eb9;
    }
    img {
        border-radius: 20px;
        opacity: 0.9;
    }

`;