import {React, useState} from "react";
import ItemCount from '../ItemCount/ItemCount';
import {Link} from 'react-router-dom';
import { useCartContext } from "../../Context/CartContext"


export const ItemDetail = ({ producto }) => {
    const [goToCart, setIrAlCarrito] = useState (false); 

    const { addItem, carrito } = useCartContext();

    const onAdd = (quantity) => {
      addItem (producto, quantity)
      setIrAlCarrito(true)
  };
    console.log(carrito);
  return (
    <div style={styles.container}>
      <img style={styles.img} src={producto.image} alt={producto.title} />
      <div style={styles.Infocontainer}>
        <h1>{producto.title}</h1>
        <span>${producto.price}</span>
        <p>{producto.description}</p>
        {
            goToCart
            ? <Link to='/cart'><button>Finalizar Compra</button></Link>
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

export default ItemDetail;  