import React, {useContext} from 'react';
import {useTranslation} from "react-i18next";
import {CustomContext} from "../../../utils/context";


const CatalogRow = () => {

    const {products,size} = useContext(CustomContext)

    const {i, i18n} = useTranslation()


    if (products.error.length) {
        return <h2>{products.error.message}</h2>
    }

    return (
        <div className='catalog__row'>
            {
               products.data && products.data.filter((item) => {
                       return size ? item.sizes.find((el) =>  el.size == size ).inStock : item
                }).map((item) => (
                    <div key={item.id} className="catalog__card">
                        <img className='catalog__card-img' src={`../${item.img[0]}`} alt={item.title}/>
                        <h3 className='catalog__card-title'>{item.title}</h3>
                        <p className='catalog__card-category'>{item.category}</p>
                        <p className='catalog__card-brand'>{item.brand}</p>
                        <p className='catalog__card-price'>
                            {i18n.language === 'en' ? item.price : item.price * 83}
                            {i18n.language === 'ru' ? ' руб.' : ' $'}
                        </p>
                    </div>
                ))
            }

        </div>
    );
};

export default CatalogRow;