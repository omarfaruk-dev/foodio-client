import React from 'react';
import { Link } from 'react-router';
import { FaRocket, FaDownload, FaUserPlus, FaUtensils, FaHeart, FaGift } from 'react-icons/fa';
import { Slide, Fade } from 'react-awesome-reveal';

const GetStartedToday = () => {
    const steps = [
        {
            icon: <FaUserPlus className="text-3xl" />,
            title: "Create Account",
            description: "Sign up in seconds with your email or Google account",
            color: "text-blue-500",
            bgColor: "bg-blue-50",
            borderColor: "border-blue-200"
        },
        {
            icon: <FaUtensils className="text-3xl" />,
            title: "Browse & Order",
            description: "Explore thousands of dishes from local chefs and place your order",
            color: "text-green-500",
            bgColor: "bg-green-50",
            borderColor: "border-green-200"
        },
        {
            icon: <FaRocket className="text-3xl" />,
            title: "Enjoy Delivery",
            description: "Get your delicious food delivered fresh to your doorstep",
            color: "text-purple-500",
            bgColor: "bg-purple-50",
            borderColor: "border-purple-200"
        }
    ];

    const benefits = [
        {
            icon: <FaGift className="text-2xl" />,
            title: "Welcome Bonus",
            description: "Get $5 off your first order"
        },
        {
            icon: <FaHeart className="text-2xl" />,
            title: "Free Delivery",
            description: "On orders above $25"
        },
        {
            icon: <FaDownload className="text-2xl" />,
            title: "Mobile App",
            description: "Download our app for better experience"
        }
    ];

    return (
        <section className="max-w-7xl mx-auto px-4 pb-8 md:pb-16 lg:pb-24">
            {/* Header */}
            <div className="text-center mb-16">
                <Slide direction="right">
                    <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                        Get Started <span className="text-secondary border-b-2 border-secondary">Today</span>
                    </h2>
                </Slide>
                <Slide direction="left">
                    <p className="text-lg text-accent max-w-3xl mx-auto">
                        Join thousands of food lovers who are already enjoying delicious meals from Foodio. 
                        Start your culinary journey in just 3 simple steps!
                    </p>
                </Slide>
            </div>

            {/* Steps Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                {steps.map((step, index) => (
                    <Fade key={index} delay={index * 200}>
                        <div className={`${step.bgColor} ${step.borderColor} border-2 rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group relative`}>
                            {/* Step Number */}
                            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-secondary text-white rounded-full flex items-center justify-center font-bold text-sm">
                                {index + 1}
                            </div>
                            
                            <div className={`${step.color} mb-6 group-hover:scale-110 transition-transform duration-300 flex justify-center`}>
                                {step.icon}
                            </div>
                            <h3 className="text-xl font-bold text-primary mb-4">{step.title}</h3>
                            <p className="text-accent leading-relaxed">{step.description}</p>
                        </div>
                    </Fade>
                ))}
            </div>

            {/* Benefits Section */}
            <div className="bg-gradient-to-r from-secondary/5 via-primary/5 to-secondary/5 rounded-3xl p-8 md:p-12 mb-16">
                <Slide direction="up">
                    <div className="text-center mb-8">
                        <h3 className="text-2xl md:text-3xl font-bold text-primary mb-4">
                            Why Start <span className="text-secondary">Today?</span>
                        </h3>
                        <p className="text-lg text-accent max-w-2xl mx-auto">
                            Don't miss out on these amazing benefits when you join Foodio today!
                        </p>
                    </div>
                </Slide>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {benefits.map((benefit, index) => (
                        <Fade key={index} delay={index * 100}>
                            <div className="bg-base-100 rounded-2xl p-6 text-center shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                                <div className="text-secondary mb-4 flex justify-center">
                                    {benefit.icon}
                                </div>
                                <h4 className="text-lg font-bold text-primary mb-2">{benefit.title}</h4>
                                <p className="text-accent text-sm">{benefit.description}</p>
                            </div>
                        </Fade>
                    ))}
                </div>
            </div>

            {/* Call to Action */}
            <div className="bg-gradient-to-r from-secondary/10 via-primary/5 to-secondary/10 rounded-3xl p-8 md:p-12 text-center relative overflow-hidden">
                {/* Background decoration */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-secondary/5 rounded-full -translate-y-20 translate-x-20"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-primary/5 rounded-full translate-y-16 -translate-x-16"></div>
                
                <Slide direction="up">
                    <div className="relative z-10">
                        <h3 className="text-2xl md:text-3xl font-bold text-primary mb-4">
                            Ready to <span className="text-secondary">Start Your Journey?</span>
                        </h3>
                        <p className="text-lg text-accent mb-8 max-w-2xl mx-auto">
                            Join our community today and discover the best food from local chefs. 
                            Your taste buds are in for a treat!
                        </p>
                        
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <Link 
                                to="/signup" 
                                className="btn btn-secondary text-white px-8 py-4 rounded-3xl text-lg font-semibold shadow-lg hover:scale-105 transition-transform duration-300 flex items-center gap-2"
                            >
                                <FaUserPlus />
                                Sign Up Now
                            </Link>
                            <Link 
                                to="/all-foods" 
                                className="btn btn-outline btn-secondary px-8 py-4 rounded-3xl text-lg font-semibold hover:bg-secondary hover:text-white transition-all duration-300 flex items-center gap-2"
                            >
                                <FaUtensils />
                                Browse Foods
                            </Link>
                        </div>
                        
                        {/* Additional Info */}
                        <div className="mt-8 text-sm text-accent">
                            <p>Already have an account? <Link to="/login" className="text-secondary hover:underline font-medium">Sign in here</Link></p>
                        </div>
                    </div>
                </Slide>
            </div>
        </section>
    );
};

export default GetStartedToday;
