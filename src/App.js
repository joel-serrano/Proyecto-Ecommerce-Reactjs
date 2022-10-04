import React from "react";
import Navbar from "./Components/Navbar/Navbar"
import ItemListContainer from "./Components/itemListContainer/itemListContainer"
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer";
import { Cart } from "./Components/CartView/Cart"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartContext from './Context/CartContext';

const App = () => {
  const dash = "Products";

  return (
    <>
      <BrowserRouter>
      <CartContext>
        <Navbar name='Matias'/>
        <Routes>
          <Route path='/' element={<ItemListContainer greeting={dash} />}/>
          <Route path='/category/:id' element={<ItemListContainer greeting={dash} />}/>
          <Route path='/product/:id' element={ <ItemDetailContainer />}/>
          <Route path='/cart' element={<Cart />}/>
        </Routes>
        </CartContext>
      </BrowserRouter>
    </>
  );
};

export default App;