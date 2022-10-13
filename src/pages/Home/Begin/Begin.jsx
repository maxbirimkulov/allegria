import React from 'react';
import begin1 from '../../../assets/begin/beginImg1.png'
import {useTranslation} from "react-i18next";

const Begin = () => {

    const {t} = useTranslation()

    return (
        <section className="begin">
            <div className="begin__content">
                <h2 className="begin__title">
                    <span className="begin__title-small">
                          {t("begin.title")}
                    </span>
                    <br/>
                    american vintage
                </h2>
                <a href="#" className="begin__link">
                    {t("begin.subtitle")}
                </a>
                <img src={begin1} alt="" className="begin__img"/>
            </div>
        </section>
    );
};

export default Begin;