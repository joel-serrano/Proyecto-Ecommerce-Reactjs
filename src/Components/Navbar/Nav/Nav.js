import { Directions } from '@mui/icons-material'
import React from 'react'
import { NavLink } from 'react-router-dom'

export const Nav = ({ categories }) => {
    return (
        <nav style={styles.links}>
            
            {categories.map((category) => {
                return <NavLink key={category.id} to={category.route} >{category.title}</NavLink>
            })}
        </nav>
    )
}

const styles = {
    links: {
        display: "flex",
        // flexDirection: "row",
        flexDirection: "column",
        padding: 10,
        // width:500,
        height:100,
        wordSpacing:5,
    }
}