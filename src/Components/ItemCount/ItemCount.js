import React, { useState } from 'react'

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
            <div>{count}</div>
            <button onClick={add}>+</button>
            <button onClick={()=>onAdd(count)}>Agrega al carrito</button>
            </div>
        </>
    )
}
const styles = {
    center: {
        display: 'flex',
        textAlign: 'center',
        padding: 20
    }
}

export default ItemCount