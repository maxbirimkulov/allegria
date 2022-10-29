import React, {useEffect, useState} from 'react';
import axios from "axios";
import {useParams} from "react-router-dom";
import ProductSlide from "./ProductSlide/ProductSlide";
import ProductInfo from "./ProductInfo/ProductInfo";
import BreadCrumbs from "../Catalog/BreadCrumbs/BreadCrumbs";

const Product = () => {

    const [product,setProduct] = useState({})

    const params = useParams()



    useEffect(() => {
        axios(`http://localhost:4444/catalog/${params.id}`)
            .then(({data}) => setProduct(data))
    }, [])
    console.log(product)

    if (JSON.stringify(product) === '{}') {
        return <h2>...Loading</h2>
    }
    return (
        <section className="product">
            <div className="container">
                <BreadCrumbs/>
            </div>
            <div className="container-small">

                <div className="product__row">
                    <ProductSlide product={product}/>
                    <ProductInfo product={product}/>
                </div>
            </div>

        </section>
    );
};

export default Product;