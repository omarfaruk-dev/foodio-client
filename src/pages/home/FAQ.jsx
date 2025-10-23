import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp, FaQuestionCircle, FaPhone, FaEnvelope, FaComments } from 'react-icons/fa';
import { Slide, Fade } from 'react-awesome-reveal';

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const faqs = [
        {
            question: "How does Foodio work?",
            answer: "Foodio connects you with local chefs and home cooks in your area. Simply browse available dishes, place your order, and enjoy fresh, homemade meals delivered to your doorstep. It's like having a personal chef network in your neighborhood!"
        },
        {
            question: "How long does delivery take?",
            answer: "Our average delivery time is 30-45 minutes, depending on your location and the chef's preparation time. We work with our chefs to ensure your food arrives hot and fresh. You'll receive real-time updates on your order status."
        },
        {
            question: "Are the chefs verified and safe?",
            answer: "Absolutely! All our chefs go through a thorough verification process including background checks, food safety certifications, and kitchen inspections. We also collect reviews and ratings from customers to ensure quality and safety standards."
        },
        {
            question: "What if I have food allergies or dietary restrictions?",
            answer: "Each dish listing includes detailed ingredients and allergen information. You can also contact the chef directly through our messaging system to discuss specific dietary needs. We take food allergies very seriously and work with chefs to accommodate special requirements."
        },
        {
            question: "How do I become a chef on Foodio?",
            answer: "Becoming a Foodio chef is easy! Simply sign up, complete our verification process, and start listing your dishes. We provide training materials, support, and marketing tools to help you succeed. You can set your own prices and availability."
        },
        {
            question: "What payment methods do you accept?",
            answer: "We accept all major credit cards, debit cards, PayPal, Apple Pay, and Google Pay. All payments are processed securely through our encrypted payment system. You can also save payment methods for faster checkout."
        },
        {
            question: "Can I cancel or modify my order?",
            answer: "You can cancel your order within 5 minutes of placing it. For modifications, contact the chef directly through our messaging system. Once food preparation begins, changes may not be possible, but we'll do our best to accommodate reasonable requests."
        },
        {
            question: "What if I'm not satisfied with my order?",
            answer: "Your satisfaction is our priority! If you're not happy with your order, contact our customer support within 24 hours. We'll work with you and the chef to resolve the issue, including refunds or replacements when appropriate."
        },
        {
            question: "Do you deliver to my area?",
            answer: "We're constantly expanding our delivery areas! Check your address during checkout to see if we deliver to your location. If we don't currently serve your area, you can request to be notified when we expand there."
        },
        {
            question: "How do I track my order?",
            answer: "You'll receive real-time updates via SMS and email, and you can track your order through our website or mobile app. You'll see when your order is confirmed, being prepared, and out for delivery with an estimated arrival time."
        }
    ];

    const contactMethods = [
        {
            icon: <FaPhone className="text-2xl" />,
            title: "Call Us",
            description: "24/7 Customer Support",
            contact: "+1 (555) 123-4567",
            color: "text-info"
        },
        {
            icon: <FaEnvelope className="text-2xl" />,
            title: "Email Us",
            description: "Get help via email",
            contact: "support@foodio.com",
            color: "text-success"
        },
        {
            icon: <FaComments className="text-2xl" />,
            title: "Live Chat",
            description: "Chat with our team",
            contact: "Available 24/7",
            color: "text-secondary"
        }
    ];

    return (
        <section className="max-w-7xl mx-auto px-4 pb-8 md:pb-16 lg:pb-24">
            {/* Header */}
            <div className="text-center mb-16">
                <Slide direction="right">
                    <div className="flex items-center justify-center mb-6">
                        <FaQuestionCircle className="text-4xl text-secondary mr-4" />
                        <h2 className="text-4xl md:text-5xl font-bold text-primary">
                            Frequently Asked <span className="text-secondary border-b-4 border-secondary">Questions</span>
                        </h2>
                    </div>
                </Slide>
                <Slide direction="left">
                    <p className="text-xl text-accent max-w-4xl mx-auto leading-relaxed">
                        Got questions? We've got answers! Find everything you need to know about Foodio, 
                        from ordering to delivery, and everything in between.
                    </p>
                </Slide>
            </div>

            {/* FAQ Accordion */}
            <div className="mb-16">
                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <Fade key={index} delay={index * 50}>
                            <div className="bg-gradient-to-br from-base-100 to-base-200 rounded-3xl shadow-md hover:shadow-lg hover:-translate-y-2 duration-700 transition-all border-2 border-secondary/10 hover:border-secondary/30 group">
                                <button
                                    onClick={() => toggleFAQ(index)}
                                    className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-base-200/50 transition-colors duration-700 rounded-3xl"
                                >
                                    <h3 className="text-lg md:text-xl font-semibold text-primary pr-4 group-hover:text-secondary transition-colors duration-700">
                                        {faq.question}
                                    </h3>
                                    <div className="flex-shrink-0">
                                        {openIndex === index ? (
                                            <FaChevronUp className="text-secondary text-xl group-hover:scale-110 transition-transform duration-700" />
                                        ) : (
                                            <FaChevronDown className="text-secondary text-xl group-hover:scale-110 transition-transform duration-700" />
                                        )}
                                    </div>
                                </button>
                                
                                {openIndex === index && (
                                    <div className="px-6 pb-6">
                                        <div className="border-t-2 border-secondary/20 pt-4">
                                            <p className="text-accent leading-relaxed text-base">
                                                {faq.answer}
                                            </p>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </Fade>
                    ))}
                </div>
            </div>

            {/* Contact Methods */}
            <div className="text-center mb-12">
                <Slide direction="up">
                    <h3 className="text-2xl md:text-3xl font-bold text-primary mb-4">
                        Still Have Questions?
                    </h3>
                    <p className="text-lg text-accent max-w-2xl mx-auto mb-8">
                        Our friendly support team is here to help! Choose your preferred way to get in touch.
                    </p>
                </Slide>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                {contactMethods.map((method, index) => (
                    <Fade key={index} delay={index * 150}>
                        <div className="bg-gradient-to-br from-base-100 to-base-200 rounded-3xl p-6 text-center shadow-md hover:shadow-lg hover:-translate-y-2 duration-700 transition-all border-2 border-secondary/10 hover:border-secondary/30 group">
                            <div className={`${method.color} mb-4 flex justify-center group-hover:scale-110 transition-transform duration-700`}>
                                {method.icon}
                            </div>
                            <h4 className="text-xl font-bold text-primary mb-2 group-hover:text-secondary transition-colors duration-700">{method.title}</h4>
                            <p className="text-accent text-sm mb-3">{method.description}</p>
                            <p className="text-secondary font-semibold">{method.contact}</p>
                        </div>
                    </Fade>
                ))}
            </div>

            {/* Additional Help */}
            <div className="bg-gradient-to-r from-secondary/10 via-primary/5 to-secondary/10 rounded-3xl p-8 text-center relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/5 rounded-full -translate-y-16 translate-x-16"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-primary/5 rounded-full translate-y-12 -translate-x-12"></div>
                
                <Slide direction="up">
                    <div className="relative z-10">
                        <h3 className="text-2xl md:text-3xl font-bold text-primary mb-4">
                            Need More Help?
                        </h3>
                        <p className="text-lg text-accent mb-6 max-w-2xl mx-auto">
                            Check out our comprehensive help center with guides, tutorials, and troubleshooting tips. 
                            We're committed to making your Foodio experience as smooth as possible!
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button className="btn btn-secondary text-white px-8 py-4 rounded-3xl font-semibold hover:scale-105 transition-transform duration-700 shadow-md hover:shadow-lg">
                                Visit Help Center
                            </button>
                            <button className="btn btn-outline btn-secondary px-8 py-4 rounded-3xl font-semibold hover:bg-secondary hover:text-white transition-all duration-700 border-2 hover:border-secondary">
                                Contact Support
                            </button>
                        </div>
                    </div>
                </Slide>
            </div>
        </section>
    );
};

export default FAQ;
