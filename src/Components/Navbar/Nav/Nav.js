import React from 'react'
import { NavLink } from 'react-router-dom'

export const Nav = ({ categories }) => {
    return (
        <li style={styles.links}>
        <nav style={styles.links}>
            
            {categories.map((category) => {
                return <NavLink key={category.id} to={category.route} >{category.title}</NavLink>
            }
            )
            }
        </nav>
        </li>
    )
}

const styles = {
    links: {
        display: "flex",
        padding: 15,
        width:650,
        height:100,
        wordSpacing:5,
        justifyContent: "space-around",
        listStyle: "none",
    }
}