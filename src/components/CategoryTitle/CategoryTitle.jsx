import React,{useContext} from 'react';
import {CustomContext} from "../../utils/context";
import {useTranslation} from "react-i18next";

const CategoryTitle = () => {
    const { state} = useContext(CustomContext)
    const {t} = useTranslation()
    return (
        <span>
            {state.catalog.category === 't-short' && `${t("catalog.aside3")}`}
            {state.catalog.category === 'sweatshirts' && `${t("catalog.aside4")}`}
            {state.catalog.category === 'pants' && `${t("catalog.aside5")}`}
            {state.catalog.category === 'shoes' && `${t("catalog.aside6")}`}
        </span>
    );
};

export default CategoryTitle;