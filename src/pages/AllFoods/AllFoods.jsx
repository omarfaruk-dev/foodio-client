import React, { useEffect, useState } from 'react';
import coverImg from '../../assets/images/header/food-bg3.jpg'
import FoodCard from './FoodCard';
const AllFoods = () => {

    const [items, setItems] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_URL}/foods?search=${search}`)
            .then((res) => res.json())
            .then((data) => setItems(data));
    }, [search]);

    return (
        <div className="pb-10 md:pb-20">
            <header
                className="w-full h-100 bg-cover bg-center py-16 flex items-center justify-center shadow-md mb-10 relative"
                style={{ backgroundImage: `url('${coverImg}')` }}
            >
                <div className="absolute inset-0 z-0 bg-gradient-to-br from-black/60 via-secondary/20 to-black/50"></div>
                <div className="b from-black/40 via-black/10 to-white/0"></div>
                <div className="w-full flex items-center justify-center py-8 relative z-10">
                    <h1 className="text-4xl md:text-5xl font-bold text-secondary text-center tracking-wide drop-shadow">ALL FOODS</h1>
                </div>
            </header>
            {/* Add a search  */}
            <div className="flex justify-center mb-10">
                <form 
                    className="flex w-full max-w-xl gap-2 px-4"
                    onSubmit={e => e.preventDefault()}
                >
                    <input
                        type="text"
                        placeholder="Search foods..."
                        className="input input-bordered w-full rounded-3xl focus:outline-none focus:ring-1 focus:ring-secondary"
                        name="search"
                        value={search}
                        onChange={e => setSearch(e.target.value)}
                        autoComplete="off"
                    />
                    <button
                        type="submit"
                        className="btn btn-secondary font-semibold rounded-3xl"
                        tabIndex={-1}
                    >
                        Search
                    </button>
                </form>
            </div>
            {/* food card container */}
            <div className="max-w-7xl mx-auto px-2 sm:px-4 pb-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-6">
                   {items.map(item => <FoodCard key={item._id} item={item} />)}
                </div>
            </div>

        </div>
    );
};

export default AllFoods;