import React from 'react';
import cartImg from '../../assets/cart/cart.png'
import {Link} from "react-router-dom";
import {useTranslation} from "react-i18next";

const Cart = () => {

    const {t} = useTranslation()

    return (
        <section className="cart">
            <div className="cart__content">
                <h2 className="cart__title">
                    {t("cart.title")}
                </h2>
                <img src={cartImg} alt="" className="cart__img"/>
                <p className="cart__text"  dangerouslySetInnerHTML={{__html: t("cart.text")}}/>



             <Link to={'/catalog'}>
                 <button className="cart__btn" type={"button"} >
                     {t("cart.btn")}
                 </button>

             </Link>


            </div>
        </section>
    );
};

export default Cart;