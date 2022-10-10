import React from 'react';
import Header from "./Header/Header";
import Home from "../pages/Home/Home";
import Footer from "./Footer/Footer";

const Layout = () => {
    return (
        <>
            <Header/>
            <Home/>
            <Footer/>
        </>
    );
};

export default Layout;