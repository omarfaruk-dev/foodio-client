import axios from 'axios';
import { useState, useEffect } from 'react';
import useAuth from '../../hooks/useAuth';
import Spinner from '../shared/Spinner';

import notFoundLottie from '../../assets/lotties/food-not-found.json'
import Lottie from 'lottie-react';
import { Link } from 'react-router';

const MyFoods = () => {
    const { user, loading, setLoading } = useAuth();
    const [myFoods, setMyFoods] = useState([]);

    useEffect(() => {
        if (!user?.email) return;

        setLoading(true);

        axios.get(`http://localhost:3000/my-foods/?email=${user.email}`)
            .then(res => setMyFoods(res.data || []))
            .finally(() => setLoading(false));
    }, [user, setLoading]);

    return (
        <div className="max-w-7xl min-h-[calc(100vh-300px)] mx-auto px-4 py-10 md:py-20">
            <h2 className="text-center text-2xl text-primary md:text-3xl font-bold mb-10">
                My <span className="text-secondary">Food</span> Listings
            </h2>
            {loading && <Spinner />}
            {!loading && myFoods.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-16">
                    <Lottie animationData={notFoundLottie} className="w-40 h-40"></Lottie>
                    <h3 className="text-2xl md:text-3xl font-bold text-secondary/60 mt-8 mb-2 text-center">No Foods Found</h3>
                    <p className="text-accent text-lg mb-6 text-center max-w-md">You haven't added any foods yet. Start by adding your first food item!</p>
                </div>
            ) : (
                <div className="overflow-x-auto shadow-md rounded-xl">
                    <table className="min-w-full bg-base-200 overflow-x-scroll text-left border border-secondary/10">
                        <thead className="bg-secondary/10 text-secondary text-sm">
                            <tr>
                                <th className="px-4 py-3 border-b border-secondary/10">Photo</th>
                                <th className="px-4 py-3 border-b border-secondary/10">Name</th>
                                <th className="px-4 py-3 border-b border-secondary/10">Quantity</th>
                                <th className="px-4 py-3 border-b border-secondary/10">Price</th>
                                <th className="px-4 py-3 border-b border-secondary/10 text-center">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {myFoods.map((food) => (
                                <tr key={food._id} className="hover:bg-secondary/5 transition duration-200">
                                    <td className="px-4 py-3 border-b border-secondary/10">
                                        <img
                                            src={food.food_img}
                                            alt={food.food_name}
                                            className="h-16 w-24 object-cover rounded"
                                        />
                                    </td>
                                    <td className="px-4 py-3 border-b border-secondary/10 font-medium text-primary">
                                        {food.food_name}
                                    </td>
                                    <td className="px-4 py-3 border-b border-secondary/10 text-primary">
                                        {food.quantity || 1}
                                    </td>
                                    <td className="px-4 py-3 border-b border-secondary/10 text-primary">
                                        ${food.price}
                                    </td>
                                    <td className="px-4 py-3 border-b border-secondary/10 text-center space-y-1 lg:space-y-0 space-x-2">
                                        <Link to={`/item-details/${food._id}`} className="btn btn-xs md:btn-sm btn-outline btn-info">View</Link>
                                        <button className="btn btn-xs md:btn-sm btn-outline btn-primary">Edit</button>
                                        <button className="btn btn-xs md:btn-sm btn-outline btn-error">Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default MyFoods;
