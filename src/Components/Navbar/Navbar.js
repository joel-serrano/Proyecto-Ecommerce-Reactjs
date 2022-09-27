import React from "react";
import logo from "../../assets/logo.jpg";
import CartWidget from "../cartWidget/cartWidget";
import { Nav } from "./Nav/Nav";
import { Link } from "react-router-dom";

const Navbar = ({ name }) => {
  const categories = [
    { id: 0, title: "electronics", route: "/category/electronics" },
    { id: 1, title: "jewelery", route: "/category/jewelery" },
    { id: 2, title: "men's clothing", route: "/category/men's clothing" },
    { id: 3, title: "women's clothing", route: "/category/women's clothing" },
  ];

  return (
    <header style={styles.container}>
      <div style={styles.branchContainer}>
        <Link to="/">
          <img style={styles.imagen} src={logo} alt="logo" />
        </Link>
        <h1>Bienvenido {name}</h1>
      </div>
      <div style={styles.links}>
        <Nav categories={categories} />
        <Link to="/cart">
          <CartWidget />
        </Link>
      </div>
    </header>
  );
};

const styles = {
  container: {
    backgroundColor:"grey",
    display: "flex",
    alignItems: "center",
    width: "100%",
    height: 200,
    padding: 2,
  },
  branchContainer: {
    display: "flex",
    alignItems: "center",
    padding: 20,
  },
  links: {
    display:"flex",
    padding: 50,
  },
  imagen: {
    width: "10%",
  },
};

export default Navbar;