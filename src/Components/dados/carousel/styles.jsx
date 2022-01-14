import styled from "styled-components";

export const Container = styled.div`

    margin-top: 25px;
    position: absolute;
    width: 100%;
    height: 36vmax;
    background-color: rgb(144, 124, 192);

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
`;