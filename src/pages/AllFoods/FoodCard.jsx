import React from 'react';
import { Link } from 'react-router';

const FoodCard = ({ item }) => {
    return (
        <div className="card bg-base-100 shadow-md hover:shadow-lg transition-shadow flex flex-col h-full group">
            <figure>
                <img
                    src={item.food_img}
                    alt={item.food_name}
                    className="w-full h-44 sm:h-48 object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                />
            </figure>
            <div className="card-body flex flex-col flex-1">
                <h3 className="card-title text-lg md:text-xl font-bold text-primary mb-1">{item.food_name || item.title}</h3>
                <p className="text-xs md:text-sm text-primary line-clamp-2">{item.details}</p>
                <div className="mt-2 text-xs md:text-sm text-gray-500">By {item.user_name}</div>
                <div className="mt-1 flex flex-wrap gap-2">
                    {Array.isArray(item.food_category)
                        ? item.food_category.map((cat) => (
                            <span key={cat} className="badge bg-secondary/20 rounded-3xl text-xs">{cat}</span>
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
    );
};

export default FoodCard;