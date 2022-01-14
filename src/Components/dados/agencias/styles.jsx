import styled from "styled-components";

export const Container = styled.div`
    
    margin-top: 95vh;
    width:100%;
    height: 35vh;
    color: #ffffff;
    background-color: #907cc0;

    .agencia-wrapper {
        margin-left: 8%;
        margin-right: 8%;
        height: 100%;
    }
    .text {
        justify-content: center;
        text-align:center;
        display: flex;
    }
    h1 {
        margin-top: 85px;
        font-size: 2.5rem;
        font-weight: 800;
        letter-spacing: 2px;
    }

    @media screen and (max-width: 991px) {
        margin-top: 280vh;
    }
    @media screen and (max-width: 768px) {
        margin-top: 250vh;
    }
`;