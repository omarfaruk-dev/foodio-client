import React, { useEffect, useState } from 'react';
import coverImg from '../../assets/images/header/food-bg3.jpg'
import FoodCard from './FoodCard';
const AllFoods = () => {

    const [items, setItems] = useState([]);
    const [search, setSearch] = useState("");
    const [sort, setSort] = useState("");

    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_URL}/foods?search=${search}`)
            .then((res) => res.json())
            .then((data) => setItems(data));
    }, [search]);

    return (
        <div className="mt-16 pb-10 md:pb-20">
            <header
                className="w-full h-80 bg-cover bg-center py-16 flex items-center justify-center shadow-md mb-10 md:mb-16 lg:mb-20 relative"
                style={{ backgroundImage: `url('${coverImg}')` }}
            >
                <div className="absolute inset-0 z-0 bg-gradient-to-br from-black/60 via-secondary/20 to-black/50"></div>
                <div className="b from-black/40 via-black/10 to-white/0"></div>
                <div className="w-full flex items-center justify-center py-8 relative z-10">
                    <h1 className="text-4xl md:text-5xl font-bold text-secondary text-center tracking-wide border-b-3 border-secondary drop-shadow">ALL FOODS</h1>
                </div>
            </header>
            {/* Add a search  */}
            <div className="w-full flex flex-col items-center mb-10">
                <form 
                    className="flex flex-row w-full max-w-2xl gap-2 px-4 justify-center"
                    onSubmit={e => e.preventDefault()}
                >
                    <input
                        type="text"
                        placeholder="Search foods..."
                        className="input input-bordered flex-1 rounded-3xl focus:outline-none focus:ring-1 focus:ring-secondary"
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
                <div className="flex flex-col gap-4 lg:flex-row lg:gap-8 w-full justify-center items-center mt-6">
                    {/* Sort by Country */}
                    <div className="w-full max-w-xs flex flex-col items-center">
                        <label className="text-primary font-semibold mb-1">Sort by Country</label>
                        <select
                            className="select select-bordered select-sm rounded-md w-full text-primary font-semibold focus:outline-none focus:ring-1 focus:ring-secondary"
                            value={sort === 'country' ? 'country' : ''}
                            onChange={e => setSort(e.target.value === 'country' ? 'country' : '')}
                        >
                            <option value="">None</option>
                            <option value="country">Country (A-Z)</option>
                        </select>
                    </div>
                    {/* Sort by Price */}
                    <div className="w-full max-w-xs flex flex-col items-center">
                        <label className="text-primary font-semibold mb-1">Sort by Price</label>
                        <select
                            className="select select-bordered select-sm rounded-md w-full text-primary font-semibold focus:outline-none focus:ring-1 focus:ring-secondary"
                            value={sort === 'price' ? 'price' : ''}
                            onChange={e => setSort(e.target.value === 'price' ? 'price' : '')}
                        >
                            <option value="">None</option>
                            <option value="price">Price: Low to High</option>
                        </select>
                    </div>
                    {/* Sort by Availability */}
                    <div className="w-full max-w-xs flex flex-col items-center">
                        <label className="text-primary font-semibold mb-1">Sort by Availability</label>
                        <select
                            className="select select-bordered select-sm rounded-md w-full text-primary font-semibold focus:outline-none focus:ring-1 focus:ring-secondary"
                            value={sort === 'availability' ? 'availability' : ''}
                            onChange={e => setSort(e.target.value === 'availability' ? 'availability' : '')}
                        >
                            <option value="">None</option>
                            <option value="availability">Availability (In-stock First)</option>
                        </select>
                    </div>
                </div>
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