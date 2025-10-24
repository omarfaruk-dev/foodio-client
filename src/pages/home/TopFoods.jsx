import React from 'react';
import TopFoodsCard from './TopFoodsCard';
import { Slide } from 'react-awesome-reveal';
import { useGetTopFoodsQuery } from '../../store/api/foodsApi';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const TopFoods = () => {
    // RTK Query - Automatic data fetching, caching, and loading states
    const { data: topFoods = [], isLoading: loading, isError } = useGetTopFoodsQuery();

    // Skeleton Loading Component - matches TopFoodsCard styling
    const SkeletonCard = () => (
        <div className="card bg-gradient-to-br from-secondary/10 via-base-100 to-primary/5 shadow-md hover:shadow-lg flex flex-col h-full border border-secondary/20 rounded-2xl overflow-hidden">
            <div className="relative">
                <Skeleton height={208} className="w-full" containerClassName="block" />
            </div>
            <div className="card-body p-5">
                <div className="flex items-center justify-between mb-2">
                    <Skeleton width="60%" height={24} />
                    <Skeleton width={50} height={20} />
                </div>
                <div className="flex flex-wrap gap-2 mb-3">
                    <Skeleton width={60} height={22} borderRadius={20} />
                    <Skeleton width={70} height={22} borderRadius={20} />
                </div>
                <Skeleton count={2} className="mb-3" />
                <Skeleton height={40} className="w-full rounded-3xl mt-auto" />
            </div>
        </div>
    );

    return (
        <div className='max-w-7xl mx-auto px-4 py-8 md:py-16 lg:py-24'>
            <div className="">
                <Slide direction='right'>
                    <h2 className="text-center text-3xl md:text-4xl font-bold text-primary mb-4">
                    Top <span className="text-secondary border-b-2 border-secondary">Foods</span> This Week
                </h2>
                </Slide>
                <Slide>
                    <p className="text-center text-accent mb-10 max-w-2xl mx-auto">
                    Discover the most popular foods, loved by our community! These dishes have the highest purchase counts and are trending right now. Try them and taste why everyone is talking!
                </p>
                </Slide>
                {loading ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[...Array(8)].map((_, index) => (
                            <SkeletonCard key={index} />
                        ))}
                    </div>
                ) : isError ? (
                    <div className="text-center text-error py-10">Error loading top foods. Please try again.</div>
                ) : topFoods.length === 0 ? (
                    <div className="text-center text-accent py-10">No top foods found.</div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {topFoods.map(food => (
                            <TopFoodsCard key={food._id} food={food} />
                        ))}
                    </div>
                )}
            </div>
            <div className="flex justify-center mt-10">
                <a href="/all-foods" className="btn btn-outline btn-secondary px-8 py-2 rounded-3xl font-semibold text-secondary hover:bg-secondary hover:scale-102 hover:text-white hover:-translate-y-2 duration-700 transition-all">
                    See More Foods
                </a>
            </div>
        </div>
    );
};

export default TopFoods;