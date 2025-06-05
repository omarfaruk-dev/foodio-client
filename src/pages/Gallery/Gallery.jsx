import React, { useState } from 'react';
import coverImg from '../../assets/images/hero/hero-1.jpg';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import { FaSearchPlus } from 'react-icons/fa';
import InfiniteScroll from 'react-infinite-scroll-component';
import Spinner from '../shared/Spinner';

const Gallery = () => {
    const images = [
        '/src/assets/images/hero/hero-1.jpg',
        '/src/assets/images/hero/hero-2.jpg',
        '/src/assets/images/hero/hero-3.jpg',
        '/src/assets/images/hero/hero-4.avif',
        '/src/assets/images/hero/hero-5.avif',
        '/src/assets/images/hero/hero-7.jpg',
        '/src/assets/images/hero/hero-8.jpg',
        '/src/assets/images/hero/hero-9.jpg',
        '/src/assets/images/header/food-bg2.avif',
        '/src/assets/images/header/food-bg3.jpg',
        '/src/assets/images/header/food-bg3.webp',
        '/src/assets/images/hero/hero-1.jpg',
        '/src/assets/images/hero/hero-2.jpg',
        '/src/assets/images/hero/hero-3.jpg',
        '/src/assets/images/hero/hero-4.avif',
        '/src/assets/images/hero/hero-5.avif',
        '/src/assets/images/hero/hero-7.jpg',
        '/src/assets/images/header/food-bg2.avif',
        '/src/assets/images/header/food-bg3.jpg',
        '/src/assets/images/header/food-bg3.webp',
        '/src/assets/images/hero/hero-1.jpg',
        '/src/assets/images/hero/hero-2.jpg',
        '/src/assets/images/hero/hero-3.jpg',
        '/src/assets/images/hero/hero-4.avif',
        '/src/assets/images/hero/hero-5.avif',
        '/src/assets/images/hero/hero-7.jpg',
        '/src/assets/images/hero/hero-8.jpg',
        '/src/assets/images/hero/hero-9.jpg',
        '/src/assets/images/header/food-bg2.avif',
        '/src/assets/images/header/food-bg3.jpg',
        '/src/assets/images/header/food-bg3.webp',
        '/src/assets/images/hero/hero-1.jpg',
        '/src/assets/images/hero/hero-2.jpg',
        '/src/assets/images/hero/hero-3.jpg',
        '/src/assets/images/hero/hero-4.avif',
        '/src/assets/images/hero/hero-5.avif',
        '/src/assets/images/hero/hero-7.jpg',
        '/src/assets/images/header/food-bg2.avif',
        '/src/assets/images/header/food-bg3.jpg',
        '/src/assets/images/header/food-bg3.webp',
    ];
    const [open, setOpen] = useState(false);
    const [index, setIndex] = useState(0);
    const [visibleCount, setVisibleCount] = useState(12);

    const fetchMoreImages = () => {
        setVisibleCount((prev) => Math.min(prev + 8, images.length));
    };

    return (
        <div className="pb">
            <header
                className="w-full h-100 bg-cover bg-center py-16 flex items-center justify-center shadow-md mb-10 relative"
                style={{ backgroundImage: `url('${coverImg}')` }}
            >
                <div className="absolute inset-0 z-0 bg-gradient-to-br from-black/60 via-secondary/20 to-black/50"></div>
                <div className="w-full flex items-center justify-center py-8 relative z-10">
                    <h1 className="text-4xl md:text-5xl font-bold text-secondary text-center tracking-wide drop-shadow">FOOD GALLERY</h1>
                </div>
            </header>
            <div className="max-w-7xl mx-auto px-2 sm:px-4 py-8 md:py-16">
                <InfiniteScroll
                    dataLength={visibleCount}
                    next={fetchMoreImages}
                    hasMore={visibleCount < images.length}
                    loader={<Spinner />}
                    scrollThreshold={0.95}
                    scrollableTarget={null}
                >
                    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-6">
                        {images.slice(0, visibleCount).map((img, idx) => (
                            <div key={idx} className="overflow-hidden rounded-2xl shadow group relative cursor-pointer" onClick={() => { setOpen(true); setIndex(idx); }}>
                                <img
                                    src={img}
                                    alt={`Food Gallery ${idx + 1}`}
                                    className="w-full h-40 sm:h-52 object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                <span className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                                    <FaSearchPlus className="text-white text-3xl drop-shadow-lg" />
                                </span>
                            </div>
                        ))}
                    </div>
                </InfiniteScroll>
            </div>
            <Lightbox
                open={open}
                close={() => setOpen(false)}
                index={index}
                slides={images.map(src => ({ src }))}
                on={{ view: ({ index: i }) => setIndex(i) }}
            />
        </div>
    );
};

export default Gallery;