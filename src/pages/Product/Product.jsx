import React, {useEffect, useState} from 'react';
import axios from "axios";
import {useParams} from "react-router-dom";

const Product = () => {

    const [product,setProduct] = useState({})

    const params = useParams()


    useEffect(() => {
        axios(`http://localhost:4444/catalog/${params.id}`)
            .then(({data}) => setProduct(data))
    }, [])

    if (JSON.stringify(product) === '{}') {
        return <h2>...Loading</h2>
    }
    return (
        <div>
            Product
           <h2> {product.title}</h2>
            <img src={`.${product.img[0]}`} alt=""/>
        </div>
    );
};

export default Product;