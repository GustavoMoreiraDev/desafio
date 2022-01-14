import styled from 'styled-components';

export const Container = styled.div`
    margin-top: 12vh;
    width: 100%;
    height: 105vh;

    .img-wrapper {
        width: 100%;
        height: 100%;
    }
  
    .img-wrapper img {
    
        width: 100%;
        height: 100%;
        -o-object-fit: cover;
        object-fit: cover;
    }
    .banner {
        position: absolute;
        top: 40%;
        left: 5%;
    }

    .banner h1 {
        
        text-shadow: 0.3rem 0.4rem 2px rgba(0, 0, 0, 0.4);
        -webkit-animation: moverBanner 1s 0.5s forwards;
        font-size: 2.5rem;
        color: #ffffff;
        font-weight: 200;
        line-height: 3.5rem;
        margin-bottom: 2rem;
        opacity: 0;
        animation: moverBanner 1s 0.5s forwards;
        cursor: default;
    }

    .banner p {
        
        animation: moverBanner 1s 0.7s forwards;
        text-transform: uppercase;
        margin-bottom: 2rem;
        width: 75%;
        color: #ffffff;
        font-size: 1rem;
        opacity: 0;
        cursor: default;
    }

     .banner button {
       
        text-transform: uppercase;
        color: #fff;
        background: #167cdbd5;
        padding: 1rem 3rem;
        border: solid 2px #7c0863;
        border-radius: 15px 25px;
        opacity: 0;
        cursor: pointer;
        -webkit-animation: moverBanner 1s 0.9s forwards;
        animation: moverBanner 1s 0.9s forwards;
        
    }
    .banner button:hover {
        color: #ffffff;
        background-color:#480e63;
        border: solid 2px #0d81eed4;
        transition: 0.8s;
    }

    @-webkit-keyframes moverBanner {
    0% {
        -webkit-transform: translateY(10rem) rotateY(-30deg);
        transform: translateY(10rem) rotateY(-30deg);
    }
    100% {
        -webkit-transform: translateY(0) rotateY(0);
        transform: translateY(0) rotateY(0);
        opacity: 1;
    }
    }

    @keyframes moverBanner {
    0% {
        -webkit-transform: translateY(10rem) rotateY(-30deg);
                transform: translateY(10rem) rotateY(-30deg);
    }
    100% {
        -webkit-transform: translateY(0) rotateY(0);
                transform: translateY(0) rotateY(0);
        opacity: 1;
    }
    }


`;