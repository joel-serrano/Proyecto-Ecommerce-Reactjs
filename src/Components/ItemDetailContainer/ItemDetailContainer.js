import React, { useState, useEffect } from "react";
import { CircularProgress } from "@mui/material";
import { ItemDetail } from "./ItemDetail";
import { useParams } from "react-router-dom";
import {db} from '../../firebase/firebase'
import {getDoc, collection, doc} from 'firebase/firestore';

const ItemDetailContainter = () => {

    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState (true);
    const [error, setError] = useState(false);

    const {id} = useParams();

    useEffect (()=> {
            const productsCollection =collection(db, 'products');
            const refDoc = doc(productsCollection, id)
            getDoc(refDoc)
            .then((result)=>{
                setProduct({
                    id:result,
                    ...result.data()
                })
            })
            .catch((err)=>{setError(true);})
            .finally(()=>{
                setLoading(false)
            })
    },[id])

    return (
        <>
        {loading ? 
        <CircularProgress color="secondary" />
        :
        <ItemDetail item={product}/> 
        }
        </>
        )
    }
    
    export default ItemDetailContainter;