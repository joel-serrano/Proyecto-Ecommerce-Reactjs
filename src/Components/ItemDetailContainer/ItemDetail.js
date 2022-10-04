import {React, useState, useContext} from "react";
import ItemCount from '../ItemCount/ItemCount';
import {Link} from 'react-router-dom';
import { Context } from "../../Context/CartContext"


export const ItemDetail = ({ producto }) => {
    const [goToCart, setIrAlCarrito] = useState (false); 

    const { addItem, carrito } = useContext(Context);

    const onAdd = (count) => {
      setIrAlCarrito(true); 
      addItem ({producto, count});
    }
    
  return (
    <div style={styles.container}>
      <img style={styles.img} src={producto.image} alt={producto.title} />
      <div style={styles.Infocontainer}>
        <h1>{producto.title}</h1>
        <span>${producto.price}</span>
        <p>{producto.description}</p>
        {
            goToCart
            ? <Link to='/cart'><button>Finalizar Compra{console.log(carrito)}</button></Link>
            :<ItemCount inicio={1} stock={producto.stock} onAdd={onAdd} />
 
        }
      </div>
    </div>
  );
      }

const styles = {
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  Infocontainer:{
    display: "flex",
    flexDirection: "column",
  },
  img:{
    maxWidth: "20%"
  }
}