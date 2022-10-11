import React from 'react';
import Begin from "./Begin/Begin";
import Collection from "./Collection/Collection";
import Popular from "./Popular/Popular";
import About from "./About";

const Home = () => {
    return (
        <main>
            <Begin/>
            <Collection/>
            <Popular/>
            <About/>
        </main>
    );
};

export default Home;