import React from "react";
import Header from './Components/header/Header';
import Main from "./Components/main/Main";
import Icones from "./Components/main/icones/icones";
import Botao from "./Components/botao/botao";

const App = () => {
  return (
    <>
      <Header/>
        <Main/>
          <Icones/>
      <Botao/>
    </>
  )
}

export default App;