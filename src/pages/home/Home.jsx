import React from 'react';
import HeroSlider from './HeroSlider';
import TopFoods from './TopFoods';
import HowItWorks from './HowItWorks';
import DeviceSupport from './DeviceSupport';
import CustomerReview from './CustomerReview';
import WhyChooseFoodio from './WhyChooseFoodio';
import GetStartedToday from './GetStartedToday';

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
                <WhyChooseFoodio />
            </section>
            <section>
                <DeviceSupport/>
            </section>
            <section>
                <HowItWorks/>
            </section>
            <section>
                <CustomerReview />
            </section>
            <section>
                <GetStartedToday />
            </section>
        </>
    );
};

export default Home;