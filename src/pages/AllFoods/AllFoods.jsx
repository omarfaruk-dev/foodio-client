import React, { useEffect, useState } from 'react';
import coverImg from '../../assets/images/header/food-bg3.jpg'
import { Link } from 'react-router';
const AllFoods = () => {

    const [items, setItems] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        fetch(`http://localhost:3000/foods?search=${search}`)
            .then((res) => res.json())
            .then((data) => setItems(data));
    }, [search]);

    return (
        <div className="min-h-screen">
            <header
                className="w-full h-100 bg-cover bg-center py-16 flex items-center justify-center shadow-md mb-10 relative"
                style={{ backgroundImage: `url('${coverImg}')` }}
            >
                <div className="absolute inset-0 z-0 bg-gradient-to-br from-black/50 via-secondary/20 to-black/40"></div>
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
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
                    {items.map((item) => (
                        <div key={item._id} className="card bg-base-100 shadow-md hover:shadow-lg transition-shadow flex flex-col h-full">
                            <figure>
                                <img src={item.food_img} alt={item.food_name} className="w-full h-44 sm:h-48 object-cover" />
                            </figure>
                            <div className="card-body flex flex-col flex-1">
                                <h3 className="card-title text-lg md:text-xl font-bold text-primary mb-1">{item.food_name || item.title}</h3>
                                <p className="text-xs md:text-sm text-primary line-clamp-2">{item.details}</p>
                                <div className="mt-2 text-xs md:text-sm text-gray-500">By {item.user_name}</div>
                                <div className="mt-1 flex flex-wrap gap-2">
                                    {Array.isArray(item.food_category)
                                        ? item.food_category.map((cat) => (
                                            <span key={cat} className="badge badge-outline badge-secondary text-xs">{cat}</span>
                                        ))
                                        : item.food_category && <span className="badge bg-secondary/20 rounded-3xl text-xs">{item.food_category}</span>
                                    }
                                </div>
                                <div className="flex flex-wrap gap-3 mt-2 text-xs md:text-sm">
                                    <span className="text-accent">Origin: <span className="font-medium">{item.food_origin}</span></span>
                                    <span className="text-accent">Qty: <span className="font-medium">{item.quantity}</span></span>
                                    <span className="text-accent">Price: <span className="font-medium">${item.price}</span></span>
                                </div>
                                <div className="mt-auto pt-2">
                                    <Link to={`/item-details/${item._id}`} className="btn btn-secondary btn-sm w-full font-semibold text-white rounded-3xl">
                                        See Details
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
};

export default AllFoods;