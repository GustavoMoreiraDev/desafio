import styled from "styled-components";

export const Container = styled.div`
    margin-top: 35vmax;
    width: 100%;
    height: 45vmax;

    .h1-wrapper {
        border-bottom: solid 2px #58bed8;
    }
`;

export const Wrapper = styled.div`
    
    h1 {
        letter-spacing: 2px;
    }
    .btn-style {
        display: flex;
        text-decoration: none;
        color: #ffffff;
        margin-top: 25px;
        background-color: #0bb35199;
        border-radius: 2px;
        transition: 0.2s;
        font-size: 15px;
    }
    .btn-style:hover {
        background-color: #08e60899;
    }
    img {
        margin-top: 15px;
    }
    small {
        text-transform: uppercase;
        margin-top: 15px;
        font-size: 14px;
        cursor: default;
    }
    .promo {
        text-align: center;
    }
`;