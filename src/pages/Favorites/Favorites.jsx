import React, {useContext} from 'react';
import {CustomContext} from "../../utils/context";
import {useTranslation} from "react-i18next";

const Favorites = () => {
    const {state, dispatch, deleteProductForFavorites} = useContext(CustomContext)
    const {i, i18n} = useTranslation()
    return (
        <section className='favorites'>
            <div className="container-small">

                <div className="favorites__row">
                    {state.favorites.data.map(item => (
                        <div className="favorites__card">
                            <img src={item.img[0]} alt="" className="favorites__img"/>
                            <div className="favorites__card-info">
                                <h3 className='catalog__card-title'>{item.title}</h3>
                                <p className='catalog__card-category'>{item.category}</p>
                                <p className='catalog__card-brand'>{item.brand}</p>
                                <p className='catalog__card-price'>
                                    {i18n.language === 'en' ? item.price : item.price * 83}
                                    {i18n.language === 'ru' ? ' руб.' : ' $'}
                                </p>
                            </div>
                            <span className='favorites__card-remove' onClick={()=> deleteProductForFavorites(item.id)}>
                                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 1L21 21" stroke="#0F303F"/>
                                    <path d="M21 1L0.999999 21" stroke="#0F303F"/>
                                </svg>
                            </span>
                        </div>
                    ) )}
                </div>


            </div>
        </section>
    );
};

export default Favorites;