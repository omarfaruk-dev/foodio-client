
const HowItWorks = () => {
    return (
        <section className="max-w-7xl mx-auto px-4 pb-10 md:pb-16 lg:pb-24">
            <h2 className="text-center text-3xl md:text-4xl font-bold text-primary mb-4">
                How <span className="text-secondary border-b-2 border-secondary">It Works</span>
            </h2>
            <p className="text-center text-accent mb-10 max-w-2xl mx-auto">
                Ordering your favorite food from Foodio is simple and fast. Just follow these easy steps and enjoy delicious meals delivered to your door!
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="flex flex-col items-center bg-base-100 rounded-xl shadow-md hover:shadow-lg p-8 border-t-4 border-accent/60 hover:-translate-y-2 duration-700 transition-all">
                    <div className="bg-accent/10 rounded-full p-4 mb-4">
                        <span className="text-3xl md:text-4xl text-accent">🍽️</span>
                    </div>
                    <h3 className="text-xl font-semibold text-primary mb-2">Browse & Choose</h3>
                    <p className="text-center text-accent">Explore our menu, search or filter by category, and discover trending dishes loved by the community.</p>
                </div>
                <div className="flex flex-col items-center bg-base-100 rounded-xl shadow-md hover:shadow-lg p-8 border-t-4 border-secondary/60 hover:-translate-y-2 duration-700 transition-all">
                    <div className="bg-secondary/10 rounded-full p-4 mb-4">
                        <span className="text-3xl md:text-4xl text-secondary">🛒</span>
                    </div>
                    <h3 className="text-xl font-semibold text-primary mb-2">Order & Pay</h3>
                    <p className="text-center text-accent">Add your favorite foods to the cart, review your order, and checkout securely in seconds.</p>
                </div>
                <div className="flex flex-col items-center bg-base-100 rounded-xl shadow-md hover:shadow-lg p-8 border-t-4 border-primary/60 hover:-translate-y-2 duration-700 transition-all">
                    <div className="bg-primary/10 rounded-full p-4 mb-4">
                        <span className="text-3xl md:text-4xl text-primary">🚚</span>
                    </div>
                    <h3 className="text-xl font-semibold text-primary mb-2">Enjoy & Repeat</h3>
                    <p className="text-center text-accent">Sit back and relax! Your food will be delivered hot and fresh. Love it? Order again anytime!</p>
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;