import React from 'react';
import logo from '../../assets/images/header/food-bg2.avif';

const Spinner = () => {
    return (
        <div className='h-screen flex flex-col justify-center items-center bg-base-100'>
            <img
                src={logo}
                alt="Foodio Food Plate"
                className="w-24 h-24 mb-4 rounded-full shadow-lg animate-spin border-4 border-secondary border-dashed"
                style={{ animationDuration: '1.2s' }}
            />
            {/* <span className="mt-4 text-secondary font-semibold tracking-wide text-lg"></span> */}
        </div>
    );
};

export default Spinner;