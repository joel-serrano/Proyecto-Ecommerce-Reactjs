import React, { useState } from 'react'
import { Button } from "@mui/material";

const ItemCount = ({ initial, stock, onAdd }) => {

    const [count, setCount] = useState(initial);

    const add = () => {
        if (count < stock) {
            setCount(count + 1);
        }
    }

    const subtract = () => {
        if (count > initial) {
            setCount(count - 1);
        }
    }

    return (
        <>
            <div style={styles.center}>
            <button onClick={subtract}>-</button>
            <h3>{count}</h3>
            <button onClick={add}>+</button>
            <Button onClick={()=>onAdd(count)}>Agrega al carrito</Button>
            </div>
        </>
    )
}
const styles = {
    center: {
        display: 'flex',
        textAlign: 'center',
        padding: 10
    }
}

export default ItemCount