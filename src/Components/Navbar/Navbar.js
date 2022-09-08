import React from 'react';
import { Nav } from './Nav/Nav';
import logo from '../../assets/logo.jpg';
import CartWidget from '../cartWidget/cartWidget';


const Navbar = ({ id, nombre, children }) => {

    const categorias = [
        { id: 0, nombre: 'Nosotros' },
        { id: 1, nombre: 'Productos' },
        { id: 2, nombre: 'Contacto' }
    ]

    return (
        <header style={styles.container}>
            <h2>Kenzo {nombre}</h2>
            <img style={styles.imagen} src={logo} alt="logo" />
            <Nav categorias={categorias}/>
            <CartWidget />
        </header>
    )
}


const styles = {
    container: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    imagen: {
        width: '10%',
    },
}

export default Navbar