import React, { useEffect, useState } from 'react';
import TopFoodsCard from './TopFoodsCard';

const TopFoods = () => {
    const [topFoods, setTopFoods] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_URL}/top-foods`)
            .then(res => res.json())
            .then(data => setTopFoods(data || []))
            .finally(() => setLoading(false));
    }, []);

    return (
        <>
            <section className="max-w-7xl mx-auto px-4 py-16">
                <h2 className="text-center text-3xl md:text-4xl font-bold text-primary mb-4">
                    Top <span className="text-secondary">Foods</span> This Week
                </h2>
                <p className="text-center text-accent mb-10 max-w-2xl mx-auto">
                    Discover the most popular foods, loved by our community! These dishes have the highest purchase counts and are trending right now. Try them and taste why everyone is talking!
                </p>
                {loading ? (
                    <div className="flex justify-center py-10">
                        <span className="loading loading-spinner loading-lg text-secondary"></span>
                    </div>
                ) : topFoods.length === 0 ? (
                    <div className="text-center text-accent py-10">No top foods found.</div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {topFoods.map(food => (
                            <TopFoodsCard key={food._id} food={food} />
                        ))}
                    </div>
                )}
            </section>
            <div className="flex justify-center">
                <a href="/all-foods" className="btn btn-outline btn-secondary px-8 py-2 rounded-3xl font-semibold text-secondary hover:bg-secondary hover:scale-102 hover:text-white hover:-translate-y-2 duration-700 transition-all">
                    See More Foods
                </a>
            </div>
        </>
    );
};

export default TopFoods;