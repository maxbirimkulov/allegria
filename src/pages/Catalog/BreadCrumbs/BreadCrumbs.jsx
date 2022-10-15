import React, {useContext} from 'react';
import {CustomContext} from "../../../utils/context";
import CategoryTitle from "../../../components/CategoryTitle/CategoryTitle";

const BreadCrumbs = () => {

    const {gender} = useContext(CustomContext)

    return (
        <ul className='breadCrumbs'>
            <li className='breadCrumbs__item'>Главная</li>
            <li className='breadCrumbs__item'>
                {gender === 'woman' && 'Женщины' }
                {gender === 'men' && 'Мужчины' }
            </li>
            <li className='breadCrumbs__item'>
                <CategoryTitle/>
            </li>
        </ul>
    );
};

export default BreadCrumbs;