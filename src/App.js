import React from "react";
import Navbar from "./Components/Navbar/Navbar"
import ItemListContainer from "./Components/itemListContainer/itemListContainer";

const App = () => {

  const mensaje = "Bienvenidos"

  return (
    <>
      <Navbar />
      <ItemListContainer 
      greeting={mensaje}/>
    </>
  )
}

export default App
