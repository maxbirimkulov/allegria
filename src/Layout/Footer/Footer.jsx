import React from 'react';
import {Link} from "react-router-dom";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__top">
                    <div className="h2 footer__title">
                        Будьте в курсе событий
                    </div>
                    <form className="footer__form">
                        <input type="text" className="footer__form-input"/>
                        <button className="footer__form-btn">
                            <svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0 4H8.5M8.5 4L6 1M8.5 4L6 7" stroke="#E64926"/>
                            </svg>
                        </button>
                    </form>
                    <ul className="footer__list">
                        <li className="footer__item">
                            <Link className="footer__link" to='about'>О нас</Link>
                        </li>
                        <li className="footer__item">
                            <Link className="footer__link" >Распространенные вопросы</Link>
                        </li>
                        <li className="footer__item">
                            <Link className="footer__link" >Бренды</Link>
                        </li>
                    </ul>
            </div>
            <div className="container">
                <div className="footer__bottom">
                    <p className="footer__text">Все права защищены  © 2020 Allegria.com</p>
                    <p className="footer__text">Дизайн и разработка:</p>
                </div>
            </div>

        </footer>
    );
};

export default Footer;