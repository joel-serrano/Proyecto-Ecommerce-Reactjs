import {React, useState} from "react";
import ItemCount from '../ItemCount/ItemCount';
import {Link} from 'react-router-dom';
import { useCartContext } from "../../Context/CartContext"


export const ItemDetail = ({ item }) => {
    const [goToCart, setIrAlCarrito] = useState (false); 

    const { addItem, carrito } = useCartContext();

    const onAdd = (quantity) => {
      addItem (item, quantity)
      setIrAlCarrito(true)
  };
    console.log(carrito);
  return (
    <div style={styles.container}>
      <img style={styles.img} src={item.image} alt={item.title} />
      <div style={styles.infoContainer}>
        <h1>{item.title}</h1>
        <span>${item.price}</span>
        <p>{item.description}</p>
        {
            goToCart
            ? <Link to='/cart'><button>Finalizar Compra</button></Link>
            :<ItemCount inicio={1} stock={item.stock} onAdd={onAdd} />
 
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
  infoContainer:{
    display: "flex",
    flexDirection: "column",
  },
  img:{
    maxWidth: "20%"
  }
}

export default ItemDetail;  