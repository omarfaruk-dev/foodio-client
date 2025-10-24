import React from 'react';
import { FaShieldAlt, FaClock, FaHeart, FaUsers, FaStar, FaTruck, FaAward, FaLeaf } from 'react-icons/fa';
import { Slide, Fade } from 'react-awesome-reveal';

const WhyChooseFoodio = () => {
    const features = [
        {
            icon: <FaShieldAlt className="text-5xl" />,
            title: "Secure & Trusted",
            description: "Your data and payments are protected with bank-level security. We ensure your privacy and safety at every step of your journey.",
            color: "text-success",
            bgColor: "bg-success/5",
            borderColor: "border-success/20"
        },
        {
            icon: <FaClock className="text-5xl" />,
            title: "Fast Delivery",
            description: "Get your food delivered in 30 minutes or less. We promise lightning-fast delivery to your doorstep every single time.",
            color: "text-info",
            bgColor: "bg-info/5",
            borderColor: "border-info/20"
        },
        {
            icon: <FaHeart className="text-5xl" />,
            title: "Made with Love",
            description: "Every dish is crafted with passion by our community chefs. Experience authentic flavors made with care and dedication.",
            color: "text-error",
            bgColor: "bg-error/5",
            borderColor: "border-error/20"
        },
        {
            icon: <FaUsers className="text-5xl" />,
            title: "Community Driven",
            description: "Support local businesses and be part of our growing food community. Together we create amazing culinary experiences.",
            color: "text-secondary",
            bgColor: "bg-secondary/5",
            borderColor: "border-secondary/20"
        },
        {
            icon: <FaAward className="text-5xl" />,
            title: "Top Quality",
            description: "Consistently rated 4.9/5 stars by thousands of customers. Quality you can trust, every single time you order.",
            color: "text-warning",
            bgColor: "bg-warning/5",
            borderColor: "border-warning/20"
        },
        {
            icon: <FaLeaf className="text-5xl" />,
            title: "Fresh Ingredients",
            description: "We source only the freshest ingredients and support sustainable practices for a better tomorrow and healthier meals.",
            color: "text-success",
            bgColor: "bg-success/5",
            borderColor: "border-success/20"
        }
    ];

    const stats = [
        { number: "10,000+", label: "Happy Customers", icon: "👥" },
        { number: "500+", label: "Expert Chefs", icon: "👨‍🍳" },
        { number: "50,000+", label: "Orders Delivered", icon: "🚚" },
        { number: "4.9/5", label: "Customer Rating", icon: "⭐" }
    ];

    return (
        <div className="max-w-7xl mx-auto px-4 pb-8 md:pb-16 lg:pb-24 bg-base-100">
            <div className="max-w-5xl mx-auto">
                {/* Header */}
                <div className="text-center mb-8 md:mb-12">
                <Slide direction="right">
                    <h2 className="text-center text-3xl md:text-4xl font-bold text-primary mb-4">
                        Why Choose <span className="text-secondary border-b-2 border-secondary">Foodio?</span>
                    </h2>
                </Slide>
                <Slide direction="left">
                    <p className="text-center text-accent mb-10 max-w-2xl mx-auto">
                        Experience the difference that sets Foodio apart from the rest. We're not just delivering food – 
                        we're delivering excellence, trust, and unforgettable culinary experiences.
                    </p>
                </Slide>
                </div>

                {/* Stats Section */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
                {stats.map((stat, index) => (
                    <Fade key={index} delay={index * 150}>
                        <div className="text-center bg-gradient-to-br from-base-100 to-base-200 rounded-3xl p-8 border-2 border-secondary/10 hover:border-secondary/30 shadow-md hover:shadow-lg hover:-translate-y-2 duration-700 transition-all group">
                            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-700">
                                {stat.icon}
                            </div>
                            <div className="text-3xl md:text-4xl font-bold text-secondary mb-2 group-hover:text-primary transition-colors duration-700">
                                {stat.number}
                            </div>
                            <div className="text-sm text-accent font-semibold uppercase tracking-wide">
                                {stat.label}
                            </div>
                        </div>
                    </Fade>
                ))}
            </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {features.map((feature, index) => (
                    <Fade key={index} delay={index * 150}>
                        <div className={`${feature.bgColor} ${feature.borderColor} border-2 rounded-3xl p-8 shadow-md hover:shadow-lg hover:-translate-y-2 duration-700 transition-all group relative overflow-hidden flex flex-col h-full`}>
                            {/* Background Pattern */}
                            <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-secondary/5 to-transparent rounded-full -translate-y-10 translate-x-10"></div>
                            
                            <div className="relative z-10 flex flex-col h-full">
                                <div className={`${feature.color} mb-6 group-hover:scale-110 transition-transform duration-700 flex justify-center`}>
                                    {feature.icon}
                                </div>
                                <h3 className="text-2xl font-bold text-primary mb-4 group-hover:text-secondary transition-colors duration-700">
                                    {feature.title}
                                </h3>
                                <p className="text-accent leading-relaxed text-base flex-grow">
                                    {feature.description}
                                </p>
                            </div>
                        </div>
                    </Fade>
                ))}
                </div>
            </div>
        </div>
    );
};

export default WhyChooseFoodio;
