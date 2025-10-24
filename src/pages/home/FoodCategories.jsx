import React from 'react';
import { Link } from 'react-router';
import { FaUtensils, FaCoffee, FaIceCream, FaLeaf, FaHamburger, FaPizzaSlice } from 'react-icons/fa';
import { Slide, Fade } from 'react-awesome-reveal';

const FoodCategories = () => {
    const categories = [
        {
            id: 1,
            name: "Breakfast",
            icon: <FaCoffee className="text-3xl" />,
            foodCount: 45,
            description: "Start your day with delicious breakfast",
            color: "from-orange-400 to-yellow-500",
            bgColor: "bg-orange-50",
            textColor: "text-orange-600",
            image: "https://images.unsplash.com/photo-1551218808-94e220e084d2?w=400&h=300&fit=crop"
        },
        {
            id: 2,
            name: "Lunch",
            icon: <FaUtensils className="text-3xl" />,
            foodCount: 78,
            description: "Hearty meals for your midday hunger",
            color: "from-green-400 to-blue-500",
            bgColor: "bg-green-50",
            textColor: "text-green-600",
            image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=300&fit=crop"
        },
        {
            id: 3,
            name: "Dinner",
            icon: <FaPizzaSlice className="text-3xl" />,
            foodCount: 62,
            description: "Perfect ending to your day",
            color: "from-purple-400 to-pink-500",
            bgColor: "bg-purple-50",
            textColor: "text-purple-600",
            image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=400&h=300&fit=crop"
        },
        {
            id: 4,
            name: "Dessert",
            icon: <FaIceCream className="text-3xl" />,
            foodCount: 34,
            description: "Sweet treats for every occasion",
            color: "from-pink-400 to-rose-500",
            bgColor: "bg-pink-50",
            textColor: "text-pink-600",
            image: "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=400&h=300&fit=crop"
        },
        {
            id: 5,
            name: "Vegan",
            icon: <FaLeaf className="text-3xl" />,
            foodCount: 28,
            description: "Plant-based healthy options",
            color: "from-emerald-400 to-teal-500",
            bgColor: "bg-emerald-50",
            textColor: "text-emerald-600",
            image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop"
        },
        {
            id: 6,
            name: "Snacks",
            icon: <FaHamburger className="text-3xl" />,
            foodCount: 41,
            description: "Quick bites for any time",
            color: "from-amber-400 to-orange-500",
            bgColor: "bg-amber-50",
            textColor: "text-amber-600",
            image: "https://images.unsplash.com/photo-1571091655789-405eb7a3a3a8?w=400&h=300&fit=crop"
        }
    ];

    return (
        <section className="max-w-7xl mx-auto px-4 pb-8 md:pb-16 lg:pb-24">
            <div className="text-center mb-12">
                <Slide direction="right">
                    <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                        Food <span className="text-secondary border-b-2 border-secondary">Categories</span>
                    </h2>
                </Slide>
                <Slide direction="left">
                    <p className="text-lg text-accent max-w-2xl mx-auto">
                        Explore our diverse collection of food categories. From breakfast to dinner, 
                        we have something delicious for every meal of your day.
                    </p>
                </Slide>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {categories.map((category, index) => (
                    <Fade key={category.id} delay={index * 100}>
                        <div className={`${category.bgColor} rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-secondary/10 group hover:-translate-y-2`}>
                            {/* Category Image */}
                            <div className="relative h-48 overflow-hidden">
                                <img
                                    src={category.image}
                                    alt={category.name}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                                
                                {/* Category Icon */}
                                <div className={`absolute top-4 right-4 ${category.textColor} bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-lg`}>
                                    {category.icon}
                                </div>
                                
                                {/* Food Count Badge */}
                                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold text-primary">
                                    {category.foodCount} Foods
                                </div>
                            </div>

                            {/* Category Info */}
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-primary mb-2">{category.name}</h3>
                                <p className="text-accent mb-4 text-sm">{category.description}</p>
                                
                                {/* Stats */}
                                <div className="flex items-center justify-between mb-4">
                                    <div className="flex items-center gap-2">
                                        <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${category.color}`}></div>
                                        <span className="text-sm font-medium text-primary">{category.foodCount} items</span>
                                    </div>
                                    <div className="text-xs text-accent">
                                        Popular choice
                                    </div>
                                </div>

                                {/* Action Button */}
                                <Link
                                    to={`/category/${category.name.toLowerCase()}`}
                                    className={`btn btn-outline w-full rounded-xl font-semibold hover:scale-105 transition-all duration-300 border-2 ${category.textColor} hover:bg-gradient-to-r hover:${category.color} hover:text-white hover:border-transparent`}
                                >
                                    Explore {category.name}
                                </Link>
                            </div>
                        </div>
                    </Fade>
                ))}
            </div>

            {/* View All Categories Button */}
            <div className="text-center mt-12">
                <Link
                    to="/all-categories"
                    className="btn btn-secondary px-8 py-3 rounded-3xl font-semibold hover:bg-secondary/90 transition-all duration-300 flex items-center gap-2 mx-auto w-fit shadow-lg hover:shadow-xl"
                >
                    <FaUtensils />
                    View All Categories
                </Link>
            </div>
        </section>
    );
};

export default FoodCategories;
