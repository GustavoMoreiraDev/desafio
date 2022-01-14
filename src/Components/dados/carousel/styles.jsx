import styled from "styled-components";

export const Container = styled.div`

    position: absolute;
    width: 100%;
    height: 55vmax;
    background-color: #907cc0;

    .carousel-wrapper {
        margin-left: 8%;
        margin-right: 8%;
    }
    .wrapper-card {
        height: 450px;
    }
    img {
        height: 35vmax;
        width: 100%;
        object-fit: center;
    }
    .btn-carousel {
        background-color:#22092e;
    }
    @media screen and (max-width: 625px) {
        img {
            height: 35vmax;
        }
    }
    @media screen and (max-width: 550px) {
        
        img {
            height: 45vmax;
        }
    }
`;