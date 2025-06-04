import React from 'react';
import HeroSlider from './HeroSlider';
import TopFoods from './TopFoods';
import HowItWorks from './HowItWorks';
import CallToAction from './CallToAction';
import DeviceSupport from './DeviceSupport';

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
                <DeviceSupport/>
            </section>
            <section>
                <HowItWorks/>
            </section>
            <section>
                <CallToAction/>
            </section>
        </>
    );
};

export default Home;