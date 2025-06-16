import { Link, useLoaderData } from 'react-router';
import { FaGlobeAsia, FaBoxOpen, FaDollarSign, FaShoppingCart, FaUser } from 'react-icons/fa';

const FoodDetails = () => {
    const food = useLoaderData();

    if (!food) {
        return <div className="text-center text-error py-20">Food not found.</div>;
    }

    return (
        <div className="max-w-4xl mt-16 mx-auto px-4 py-8 md:py-16 lg:py-24">
            <div className="mt-20 md:mt-24 relative bg-base-100 rounded-3xl shadow-md border border-secondary/20 overflow-visible flex flex-col">
                {/* Floating image */}
                <div className="flex justify-center -mt-24 mb-4 z-10">
                    <div className="rounded-3xl shadow-xl border-4 border-base-100 bg-gradient-to-br from-secondary/10 to-base-200 p-2">
                        <img
                            src={food.food_img}
                            alt={food.food_name}
                            className="rounded-2xl w-64 h-64 object-cover transition-transform duration-500 hover:scale-105 bg-base-100 drop-shadow-xl"
                        />
                    </div>
                </div>
                <div className="flex flex-col gap-4 p-6 md:p-10 pt-2">
                    <h1 className="text-3xl md:text-4xl font-extrabold text-primary mb-2 text-center tracking-tight drop-shadow-sm">
                        {food.food_name}
                    </h1>
                    {/* Category badges */}
                    <div className="flex flex-wrap gap-2 mb-2 justify-center">
                        {Array.isArray(food.food_category)
                            ? food.food_category.map(cat => (
                                <span key={cat} className="bg-gradient-to-r from-secondary/80 to-secondary/40 text-white px-3 py-1 rounded-full text-xs md:text-sm font-semibold shadow-sm border border-secondary/30 uppercase tracking-wide">{cat}</span>
                            ))
                            : food.food_category && <span className="bg-gradient-to-r from-secondary/80 to-secondary/40 text-white px-3 py-1 rounded-full text-xs md:text-sm font-semibold shadow-sm border border-secondary/30 uppercase tracking-wide">{food.food_category}</span>
                        }
                    </div>
                    {/* Info row with icons */}
                    <div className="flex flex-wrap gap-6 text-sm md:text-base text-accent mb-2 justify-center border-b border-dashed border-secondary/20 pb-4">
                        <span className="flex items-center gap-1"><FaGlobeAsia className="text-secondary" /> <span className="font-bold text-primary">Origin:</span> {food.food_origin}</span>
                        <span className="flex items-center gap-1"><FaBoxOpen className="text-secondary" /> <span className="font-bold text-primary">Quantity:</span> {food.quantity}</span>
                        <span className="flex items-center gap-1"><FaDollarSign className="text-secondary" /> <span className="font-bold text-primary">Price:</span> ${food.price}</span>
                        <span className="flex items-center gap-1"><FaShoppingCart className="text-secondary" /> <span className="font-bold text-primary">Sold:</span> {food.purchase_count}</span>
                    </div>
                    {/* Details */}
                    <div className="text-base md:text-lg text-primary/90 mb-2 whitespace-pre-line text-left leading-relaxed">
                        {food.details}
                    </div>
                    {/* Ingredients */}
                    <div>
                        <h2 className="font-semibold text-primary mb-1 text-center text-lg tracking-wide">Ingredients</h2>
                        <ul className="flex flex-wrap gap-2 justify-center">
                            {Array.isArray(food.ingredients)
                                ? food.ingredients.map((ing, i) => (
                                    <li key={i} className="px-3 py-1 bg-secondary/10 rounded-2xl text-xs md:text-sm text-secondary font-medium border border-secondary/20 shadow-sm">{ing}</li>
                                ))
                                : <li className="px-3 py-1 bg-secondary/10 rounded-2xl text-xs md:text-sm text-secondary font-medium border border-secondary/20 shadow-sm">{food.ingredients}</li>
                            }
                        </ul>
                    </div>
                    {/* Making Procedure */}
                    <div>
                        <h2 className="font-semibold text-primary mb-1 mt-4 text-center text-lg tracking-wide">Making Procedure: </h2>
                        <div className="text-sm md:text-base text-primary/90 whitespace-pre-line text-left leading-relaxed">
                            {food.making_procedure}
                        </div>
                    </div>
                    {/* User info */}
                    <div className="mt-6 flex flex-col md:flex-row md:items-center gap-2 text-xs md:text-sm text-gray-500 justify-center border-t border-dashed border-secondary/20 pt-4">
                        <span className="flex items-center gap-1"><FaUser className="text-secondary" /> Added by: <span className="font-semibold text-primary">{food.user_name}</span></span>
                    </div>
                    {/* Actions */}
                    <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center">
                        <Link to="/all-foods" className="btn btn-outline btn-secondary rounded-3xl font-semibold shadow-md hover:scale-105 transition-transform">Back to All Foods</Link>
                        <Link to={`/food-purchase/${food._id}`} className="btn btn-secondary rounded-3xl font-bold text-white shadow-lg hover:scale-105 hover:bg-secondary/90 transition-transform duration-300">Purchase</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodDetails;