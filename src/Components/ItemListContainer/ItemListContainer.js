import { useState, useEffect } from "react"
import React from 'react'
import ItemList from "../ItemList/ItemList"
import { CircularProgress } from "@mui/material";
import {db} from '../../firebase/firebase';
import {getDocs, collection} from 'firebase/firestore';

function ItemListContainer({greeting}) {

    const [listProduct, setListProducts] = useState([]);
    const [loading, setLoading] = useState (true);
    const [error, setError] = useState(false);

    useEffect (()=> {
            const productsCollection = collection(db, 'products');
            getDocs (productsCollection)
            .then((data)=>{
                const lista = data.docs.map ((product)=>{
                    return {
                        ...product.data(),
                        id: product.id
                    }
                })
                setListProducts(lista);
            })
            .catch((e)=>{setError(true);})
            .finally(()=>{
                setLoading(false)
            })
    },[])

    return (
        <>
        <h3>{greeting}</h3>
        {loading ? 
        <CircularProgress color="secondary" />
        : 
        <ItemList listProduct={listProduct}/> }

        </>
        )
    }
    
    export default ItemListContainer;