import React from 'react';

const CallToAction = () => {
    return (
        <section className="relative max-w-5xl mx-auto px-4 py-20 my-16 rounded-[2.5rem] bg-gradient-to-br from-primary/90 via-secondary/80 to-accent/80 shadow-2xl flex flex-col items-center text-center overflow-hidden border-4 border-white/30">
            {/* Decorative floating icons */}
            <div className="absolute top-6 left-8 animate-bounce-slow text-5xl md:text-6xl opacity-30 select-none pointer-events-none">🍕</div>
            <div className="absolute top-10 right-10 animate-pulse text-4xl md:text-5xl opacity-20 select-none pointer-events-none">🍔</div>
            <div className="absolute bottom-8 left-16 animate-bounce text-4xl md:text-5xl opacity-20 select-none pointer-events-none">🍣</div>
            <div className="absolute bottom-6 right-20 animate-spin-slow text-4xl md:text-5xl opacity-20 select-none pointer-events-none">🍰</div>
            {/* Decorative blob */}
            <div className="absolute -bottom-10 -right-10 opacity-20 pointer-events-none select-none hidden md:block">
                <img src="/src/assets/images/blob-haikei.png" alt="decorative blob" className="w-72 h-72 object-contain" />
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4 drop-shadow-xl tracking-tight">
                Ready to Taste <span className="text-accent">Something Amazing?</span>
            </h2>
            <p className="text-lg md:text-2xl text-white/90 mb-10 max-w-2xl mx-auto font-medium">
                Join Foodio today and discover a world of delicious foods, trending dishes, and exclusive offers. Your next favorite meal is just a click away!
            </p>
            <a href="/all-foods" className="btn btn-secondary btn-lg px-12 py-4 rounded-full font-bold text-xl shadow-lg hover:bg-white hover:text-secondary hover:scale-110 hover:-translate-y-2 duration-700 transition-all border-2 border-white/40">
                Explore All Foods
            </a>
        </section>
    );
};

export default CallToAction;