import styled from 'styled-components';

 export const  Container = styled.div`
   
   background-color: #480e63;
   position: absolute;
   height: 90px;
   width: 100%;
   color: #ffffff;

   .logo {
      justify-content: center;
      display: flex;
   }
   .logo img {
      width: 85px;
      margin-top: 15px;
   }
   span {
      justify-content: end;
      margin-right: 5%;
      display: flex;
   }
   span a {
      text-decoration: none;
      margin-bottom: -15px;
      margin-right: 15px;
      margin-left: 15px;
      font-size: 1.2rem;
      color: #ffffff;
   }
   span p {
      position: absolute;
      cursor: default;
      font-size: 1rem;
      bottom: 6.5%;
      left: 1%;
   }
   @media screen and (max-width:850px) {
      .copyright {
         font-size: 0.5rem ;
      }
   }
`; 
