import React , {useState, Suspense} from "react";
import Home from "./pages/Home/Home";
import './scss/style.scss'
import Layout from "./Layout/Layout";
import About from "./pages/About/About";
import Catalog from "./pages/Catalog/Catalog";
import {Route, Routes} from 'react-router-dom'
import Custom from "./pages/Custom/Custom";
import NotFound from "./pages/NotFound/NotFound";
import './i18n'
import Questions from "./pages/Questions/Questions";
import Product from "./pages/Product/Product";
import Cart from "./pages/Cart/Cart";
import Favorites from "./pages/Favorites/Favorites";

function App() {
  return (
    <Suspense fallback={"...loading"}>
        <Routes>
            <Route path='/' element={<Layout/>}>
                <Route path='' element={<Home/>}/>
                <Route path='about' element={<About/>}/>
                <Route path='catalog' element={<Catalog/>}/>
                <Route path='questions' element={<Questions/>}/>
                <Route path='product/:id' element={<Product/>}/>
                <Route path='cart' element={<Cart/>}/>
                <Route path='favorites' element={<Favorites/>}/>
                <Route path='*' element={<NotFound/>}/>
            </Route>
            <Route path='/custom' element={<Custom/>}/>
        </Routes>

    </Suspense>
  );
}

export default App;
