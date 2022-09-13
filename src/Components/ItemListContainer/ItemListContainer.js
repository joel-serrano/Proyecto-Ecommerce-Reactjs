import React from 'react'
import ItemCount from "../ItemCount/ItemCount"

const initialProducts = [
  {name:"Perfume de Coco", id:0, price:2000, stock: 9},
  {name:"Perfume de Hierbas Silvestres", id:1, price:1600, stock: 6},
  {name:"Perfume de Rosas", id:2, price:1100, stock: 10},
  {name:"Perfume de Hombres", id:3, price:2200, stock: 12},
  {name:"Perfume de Mujeres", id:3, price:2200, stock: 8},
]

const onAdd = (count) => {
  console.log(`Se agregan ${count} productos`);
}

const ItemListContainer = ({greeting}) => {
  return (
    <>
    <h1 style={styles.center}>{greeting}</h1>
    <ItemCount initial={1} stock={5} onAdd={onAdd}/>
    </>
  )
}
const styles = {
    center: {
        textAlign: 'center',
    }
}
export default ItemListContainer