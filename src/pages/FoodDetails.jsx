import React from 'react';
import {  Link, useLoaderData } from 'react-router';

const FoodDetails = () => {
    const food = useLoaderData();

    if (!food) {
        return <div className="text-center text-error py-20">Food not found.</div>;
    }

    return (
        <div className="max-w-5xl mx-auto px-4 py-10 md:py-16">
            <div className="flex flex-col md:flex-row gap-10 bg-base-100 rounded-3xl shadow-lg overflow-hidden border border-secondary/10">
                <div className="md:w-1/2 flex items-center justify-center bg-gradient-to-br from-secondary/10 to-base-200 p-6">
                    <img
                        src={food.food_img}
                        alt={food.food_name}
                        className="rounded-2xl shadow-lg w-full max-w-xs h-72 object-cover transition-transform duration-500 hover:scale-105"
                    />
                </div>
                <div className="md:w-1/2 flex flex-col gap-4 p-6 md:p-10">
                    <h1 className="text-3xl md:text-4xl font-bold text-primary mb-2">{food.food_name}</h1>
                    <div className="flex flex-wrap gap-2 mb-2">
                        {Array.isArray(food.food_category)
                            ? food.food_category.map(cat => (
                                <span key={cat} className="badge bg-secondary/20 rounded-3xl text-xs md:text-sm text-secondary font-semibold">{cat}</span>
                            ))
                            : food.food_category && <span className="badge bg-secondary/20 rounded-3xl text-xs md:text-sm text-secondary font-semibold">{food.food_category}</span>
                        }
                    </div>
                    <div className="flex flex-wrap gap-4 text-sm md:text-base text-accent mb-2">
                        <span>Origin: <span className="font-medium text-primary">{food.food_origin}</span></span>
                        <span>Quantity: <span className="font-medium text-primary">{food.quantity}</span></span>
                        <span>Price: <span className="font-medium text-primary">${food.price}</span></span>
                        <span>Purchased: <span className="font-medium text-primary">{food.purchase_count}</span></span>
                    </div>
                    <div className="text-base md:text-lg text-gray-700 mb-2 whitespace-pre-line">
                        {food.details}
                    </div>
                    <div>
                        <h2 className="font-semibold text-primary mb-1">Ingredients:</h2>
                        <ul className="flex flex-wrap gap-2">
                            {Array.isArray(food.ingredients)
                                ? food.ingredients.map((ing, i) => (
                                    <li key={i} className="px-3 py-1 bg-secondary/10 rounded-2xl text-xs md:text-sm text-secondary font-medium border border-secondary/20">{ing}</li>
                                ))
                                : <li className="px-3 py-1 bg-secondary/10 rounded-2xl text-xs md:text-sm text-secondary font-medium border border-secondary/20">{food.ingredients}</li>
                            }
                        </ul>
                    </div>
                    <div>
                        <h2 className="font-semibold text-primary mb-1 mt-4">Making Procedure:</h2>
                        <div className="text-sm md:text-base text-gray-700 whitespace-pre-line">
                            {food.making_procedure}
                        </div>
                    </div>
                    <div className="mt-6 flex flex-col md:flex-row md:items-center gap-2 text-xs md:text-sm text-gray-500">
                        <span>Added by: <span className="font-semibold text-primary">{food.user_name}</span></span>
                        <span className="hidden md:inline">|</span>
                        <span>Email: <span className="font-semibold text-primary">{food.user_email}</span></span>
                    </div>
                    <div className="mt-8 flex flex-col md:flex-row gap-4">
                        <Link to="/all-foods" className="btn btn-outline btn-secondary rounded-3xl">Back to All Foods</Link>
                        <button className="btn btn-secondary rounded-3xl font-semibold text-white">Purchase</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodDetails;