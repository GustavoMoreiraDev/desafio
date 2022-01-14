import styled from "styled-components";

export const Container = styled.div`
    
    width: 100%;
    height: 7.6vmax;
    color:  #58bed8;

    .agencia-wrapper {
        margin-left: 8%;
        margin-right: 8%;
        border-bottom: solid 2px #58bed8;
    }
    .text {
              
        justify-content: center;
        text-align:center;
        display: flex;
    }
    h1 {
        margin-top: 2%;
        font-size: 2.5rem;
        font-weight: 800;
        letter-spacing: 2px;
    }
    @media screen and (max-width: 550px) {
    
    h1 {
        font-size: 2rem;
    }
}
    @media screen and (max-width: 550px) {
    
        h1 {
            font-size: 1.5rem;
        }
    }

`;