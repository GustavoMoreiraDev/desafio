import styled from "styled-components";

export const Container = styled.div`

    margin-top: 25px;
    position: absolute;
    width: 100%;
    height: 37vmax;
    background: #41295a;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to top, #2F0743, #41295a);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to top, #2F0743, #41295a); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */


    .wrapper-card {
        margin-top: 5px;
        height: 450px;
        width: 100%;
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