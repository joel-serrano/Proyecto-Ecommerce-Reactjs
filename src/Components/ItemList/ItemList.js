import React from 'react'
import Item from "../Item/Item"

export const ItemList = ({ listProduct }) => {
    return (
        <div style={styles.container}>
            {listProduct.map((prod, i )=> <Item key={`${prod.name}-${i}`} products={prod}/>)}
        </div>
    )
}

const styles = {
    container:{
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-around",
      alignItems: "center",
      flexWrap: "wrap",
    }
  }
  export default ItemList