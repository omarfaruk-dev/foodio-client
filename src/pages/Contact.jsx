import React, { useState } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaHeadset, FaWhatsapp, FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaPaperPlane, FaUser, FaComments } from 'react-icons/fa';
import Swal from 'sweetalert2';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log('Form submitted:', formData);
        // Reset form
        setFormData({
            name: '',
            email: '',
            subject: '',
            message: ''
        });
        // Show success message with SweetAlert2
        Swal.fire({
            title: 'Message Sent Successfully!',
            text: 'Thank you for contacting us. We will get back to you within 2-4 hours.',
            icon: 'success',
            confirmButtonText: 'Great!',
            confirmButtonColor: '#3085d6',
            background: '#f8fafc',
            customClass: {
                title: 'text-primary font-bold',
                confirmButton: 'rounded-xl px-6 py-3'
            }
        });
    };

    return (
        <div className="min-h-screen bg-base-100">
            {/* Header Section */}
            <div className="bg-gradient-to-r from-primary/10 to-secondary/10 py-16">
                <div className="max-w-6xl mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4 pt-15">
                        Contact Us
                    </h1>
                    <p className="text-lg text-accent max-w-2xl mx-auto">
                        Have questions about our food delivery service? We're here to help! 
                        Reach out to us through any of the channels below.
                    </p>
                    <div className="flex items-center justify-center gap-2 mt-4 text-secondary">
                        <FaHeadset className="text-2xl" />
                        <span className="text-sm font-medium">24/7 Customer Support Available</span>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-6xl mx-auto px-4 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Information */}
                    <div className="space-y-8">
                        <h2 className="text-3xl font-bold text-primary mb-6">Get in Touch</h2>
                        
                        {/* Contact Methods */}
                        <div className="space-y-6">
                            {/* Phone */}
                            <div className="flex items-start gap-4 p-4 bg-base-100 rounded-xl shadow-lg border border-secondary/20">
                                <div className="bg-primary/10 p-3 rounded-full">
                                    <FaPhone className="text-2xl text-primary" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-primary mb-1">Call Us</h3>
                                    <p className="text-accent mb-2">Speak directly with our support team</p>
                                    <div className="space-y-1">
                                        <p className="font-medium text-secondary">Main: +1 (555) 123-4567</p>
                                        <p className="font-medium text-secondary">Support: +1 (555) 987-6543</p>
                                        <p className="text-sm text-accent">Available 24/7 for urgent issues</p>
                                    </div>
                                </div>
                            </div>

                            {/* Email */}
                            <div className="flex items-start gap-4 p-4 bg-base-100 rounded-xl shadow-lg border border-secondary/20">
                                <div className="bg-secondary/10 p-3 rounded-full">
                                    <FaEnvelope className="text-2xl text-secondary" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-primary mb-1">Email Us</h3>
                                    <p className="text-accent mb-2">Send us a detailed message</p>
                                    <div className="space-y-1">
                                        <p className="font-medium text-secondary">General: info@foodio.com</p>
                                        <p className="font-medium text-secondary">Support: support@foodio.com</p>
                                        <p className="font-medium text-secondary">Business: business@foodio.com</p>
                                        <p className="text-sm text-accent">Response within 2-4 hours</p>
                                    </div>
                                </div>
                            </div>

                            {/* Address */}
                            <div className="flex items-start gap-4 p-4 bg-base-100 rounded-xl shadow-lg border border-secondary/20">
                                <div className="bg-primary/10 p-3 rounded-full">
                                    <FaMapMarkerAlt className="text-2xl text-primary" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-primary mb-1">Visit Us</h3>
                                    <p className="text-accent mb-2">Our headquarters location</p>
                                    <div className="space-y-1">
                                        <p className="font-medium text-secondary">123 Food Street</p>
                                        <p className="font-medium text-secondary">Cuisine City, FC 12345</p>
                                        <p className="font-medium text-secondary">United States</p>
                                        <p className="text-sm text-accent">By appointment only</p>
                                    </div>
                                </div>
                            </div>

                            {/* Business Hours */}
                            <div className="flex items-start gap-4 p-4 bg-base-100 rounded-xl shadow-lg border border-secondary/20">
                                <div className="bg-secondary/10 p-3 rounded-full">
                                    <FaClock className="text-2xl text-secondary" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-primary mb-1">Business Hours</h3>
                                    <p className="text-accent mb-2">When we're available</p>
                                    <div className="space-y-1">
                                        <p className="font-medium text-secondary">Monday - Friday: 9:00 AM - 6:00 PM EST</p>
                                        <p className="font-medium text-secondary">Saturday: 10:00 AM - 4:00 PM EST</p>
                                        <p className="font-medium text-secondary">Sunday: Closed</p>
                                        <p className="text-sm text-accent">24/7 online support available</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Social Media */}
                        <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-xl p-6 border border-secondary/20">
                            <h3 className="text-xl font-bold text-primary mb-4 text-center">Follow Us</h3>
                            <div className="flex justify-center gap-4">
                                <a href="#" className="bg-primary/10 p-3 rounded-full hover:bg-primary/20 transition-colors">
                                    <FaFacebook className="text-2xl text-primary" />
                                </a>
                                <a href="#" className="bg-secondary/10 p-3 rounded-full hover:bg-secondary/20 transition-colors">
                                    <FaTwitter className="text-2xl text-secondary" />
                                </a>
                                <a href="#" className="bg-primary/10 p-3 rounded-full hover:bg-primary/20 transition-colors">
                                    <FaInstagram className="text-2xl text-primary" />
                                </a>
                                <a href="#" className="bg-secondary/10 p-3 rounded-full hover:bg-secondary/20 transition-colors">
                                    <FaLinkedin className="text-2xl text-secondary" />
                                </a>
                            </div>
                            <p className="text-center text-sm text-accent mt-3">
                                Stay updated with latest offers and news
                            </p>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="space-y-6">
                        <h2 className="text-3xl font-bold text-primary mb-6">Send us a Message</h2>
                        
                        <form onSubmit={handleSubmit} className="space-y-6">
                            {/* Name */}
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-primary mb-2">
                                    <FaUser className="inline mr-2" />
                                    Full Name *
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full px-4 py-3 border border-secondary/30 rounded-xl focus:ring-2 focus:ring-secondary/50 focus:border-secondary transition-all bg-base-100 text-accent"
                                    placeholder="Enter your full name"
                                />
                            </div>

                            {/* Email */}
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-primary mb-2">
                                    <FaEnvelope className="inline mr-2" />
                                    Email Address *
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full px-4 py-3 border border-secondary/30 rounded-xl focus:ring-2 focus:ring-secondary/50 focus:border-secondary transition-all bg-base-100 text-accent"
                                    placeholder="Enter your email address"
                                />
                            </div>

                            {/* Subject */}
                            <div>
                                <label htmlFor="subject" className="block text-sm font-medium text-primary mb-2">
                                    <FaComments className="inline mr-2" />
                                    Subject *
                                </label>
                                <select
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full px-4 py-3 border border-secondary/30 rounded-xl focus:ring-2 focus:ring-secondary/50 focus:border-secondary transition-all bg-base-100 text-accent"
                                >
                                    <option value="">Select a subject</option>
                                    <option value="general">General Inquiry</option>
                                    <option value="support">Technical Support</option>
                                    <option value="order">Order Issue</option>
                                    <option value="delivery">Delivery Problem</option>
                                    <option value="payment">Payment Issue</option>
                                    <option value="feedback">Feedback & Suggestions</option>
                                    <option value="business">Business Partnership</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>

                            {/* Message */}
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-primary mb-2">
                                    <FaComments className="inline mr-2" />
                                    Message *
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    required
                                    rows="5"
                                    className="w-full px-4 py-3 border border-secondary/30 rounded-xl focus:ring-2 focus:ring-secondary/50 focus:border-secondary transition-all bg-base-100 text-accent resize-none"
                                    placeholder="Tell us how we can help you..."
                                ></textarea>
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                className="w-full bg-gradient-to-r from-primary to-secondary text-white font-bold py-4 px-6 rounded-xl hover:from-primary/90 hover:to-secondary/90 transform hover:scale-105 transition-all duration-300 shadow-lg flex items-center justify-center gap-2"
                            >
                                <FaPaperPlane className="text-lg" />
                                Send Message
                            </button>
                        </form>

                        {/* Additional Contact Options */}
                        <div className="bg-gradient-to-r from-secondary/5 to-primary/5 rounded-xl p-6 border border-secondary/20">
                            <h3 className="text-xl font-bold text-primary mb-4 text-center">Quick Contact Options</h3>
                            <div className="space-y-3">
                                <div className="flex items-center gap-3 p-3 bg-base-100 rounded-lg">
                                    <FaWhatsapp className="text-2xl text-green-500" />
                                    <div>
                                        <p className="font-medium text-primary">WhatsApp Support</p>
                                        <p className="text-sm text-accent">Get instant help via WhatsApp</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3 p-3 bg-base-100 rounded-lg">
                                    <FaHeadset className="text-2xl text-secondary" />
                                    <div>
                                        <p className="font-medium text-primary">Live Chat</p>
                                        <p className="text-sm text-accent">Chat with our support team</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* FAQ Section */}
                <div className="mt-16">
                    <h2 className="text-3xl font-bold text-primary mb-8 text-center">Frequently Asked Questions</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-base-100 rounded-xl p-6 shadow-lg border border-secondary/20">
                            <h3 className="text-lg font-semibold text-primary mb-2">How do I track my order?</h3>
                            <p className="text-accent">You can track your order in real-time through our app or website. We'll also send you SMS updates throughout the delivery process.</p>
                        </div>
                        <div className="bg-base-100 rounded-xl p-6 shadow-lg border border-secondary/20">
                            <h3 className="text-lg font-semibold text-primary mb-2">What if my food arrives late?</h3>
                            <p className="text-accent">If your delivery is significantly delayed, please contact us immediately. We'll work to resolve the issue and may offer compensation.</p>
                        </div>
                        <div className="bg-base-100 rounded-xl p-6 shadow-lg border border-secondary/20">
                            <h3 className="text-lg font-semibold text-primary mb-2">How can I report a problem?</h3>
                            <p className="text-accent">You can report any issues through our contact form, call our support line, or use the in-app support feature for immediate assistance.</p>
                        </div>
                        <div className="bg-base-100 rounded-xl p-6 shadow-lg border border-secondary/20">
                            <h3 className="text-lg font-semibold text-primary mb-2">Do you offer refunds?</h3>
                            <p className="text-accent">Yes, we offer refunds for orders that don't meet our quality standards. Please contact us within 30 minutes of delivery for food-related issues.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;