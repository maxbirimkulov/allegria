import React , {useState} from "react";
import Header from "./Layout/Header/Header";
import Footer from "./Layout/Footer/Footer";
import Home from "./pages/Home/Home";
import './scss/style.scss'

function App() {
  return (
    <>
      <Header/>
      <main>
        <Home/>
      </main>
      <Footer/>
    </>
  );
}

export default App;
