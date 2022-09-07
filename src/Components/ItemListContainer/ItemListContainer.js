import React from 'react'

const ItemListContainer = ({greeting}) => {
  return (
    <h1 style={styles.center}>{greeting}</h1>
  )
}
const styles = {
    center: {
        textAlign: 'center',
    }
}
export default ItemListContainer