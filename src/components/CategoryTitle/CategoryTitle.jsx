import React,{useContext} from 'react';
import {CustomContext} from "../../utils/context";
import {useTranslation} from "react-i18next";

const CategoryTitle = () => {
    const { category} = useContext(CustomContext)
    const {t} = useTranslation()
    return (
        <span>
            {category === 't-short' && `${t("catalog.aside3")}`}
            {category === 'sweatshirts' && `${t("catalog.aside4")}`}
            {category === 'pants' && `${t("catalog.aside5")}`}
            {category === 'shoes' && `${t("catalog.aside6")}`}
        </span>
    );
};

export default CategoryTitle;