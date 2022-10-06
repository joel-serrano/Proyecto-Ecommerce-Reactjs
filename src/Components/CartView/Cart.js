import {useCartContext} from "../../Context/CartContext";
import { Card, CardMedia, Typography, Button } from "@mui/material"

const Cart = () => {

    const { carrito, totalPrice, removeItem, clearCart } = useCartContext();

    return (
        <div style={styles.container}>
            {carrito.map( producto =>
                <Card key={producto.id}>
                    <CardMedia component="img" alt={producto.title} image={producto.image} sx={{width: 100}}></CardMedia>
                    <Typography>{producto.name}</Typography>
                    <Typography>Cantidad: {producto.quantity}</Typography>
                    <Typography>Precio: $ {(producto.price * producto.quantity)}</Typography>
                    <Button onClick={()=> {removeItem(producto.id)}}>Eliminar</Button>
                </Card>
            )}
            {carrito.length === 0 ?
                <Typography style={styles.letra}>Tu carrito está vacío</Typography>
                :
                <>
                <Typography>Total: ${totalPrice()}</Typography>
                <Button onClick={clearCart}>Vaciar carrito</Button>  
                </>  
            }
        </div>
    )
}

const styles = {
  container:{
    width: 300,
    marginLeft: 200,
    marginTop: 100,
    backgroundColor: "grey",
  },
  letra:{
    fontSize: "20px",
  }
}
export default Cart;