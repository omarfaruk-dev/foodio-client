import React from 'react';
import HeroSlider from './HeroSlider';
import TopFoods from './TopFoods';

const Home = () => {
    return (
        <>
            <section>
                <HeroSlider />
            </section>
            <section>
                <TopFoods />
            </section>
        </>
    );
};

export default Home;