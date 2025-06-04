import React from 'react';
import HeroSlider from './HeroSlider';
import TopFoods from './TopFoods';
import HowItWorks from './HowItWorks';

const Home = () => {
    return (
        <>
            <section>
                <HeroSlider />
            </section>
            <section>
                <TopFoods />
            </section>
            <section>
                <HowItWorks/>
            </section>
        </>
    );
};

export default Home;