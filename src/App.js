import React from "react";
import { FaWhatsapp } from 'react-icons/fa';
import Header from './Components/header/Header';
import Main from "./Components/main/Main";

const App = () => {
  return (
    <>
        <Header/>
        <Main/>
        <a id="link-topo" href="http://api.whatsapp.com/send?phone=5541988430759" target="_blank"  rel="noreferrer">
          <FaWhatsapp/>
        </a>
    </>
  )
}

export default App;