import { useState } from 'react';
import playa1 from '../assets/playa1.png';
import playa2 from '../assets/playa2.png';
import playa3 from '../assets/playa3.png';
import playa4 from '../assets/playa4.png';
import '../styles/items.css';

const Items = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [showArrows, setShowArrows] = useState(false);
    const images = [playa1, playa2, playa3, playa4];

    const nextImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };

    const prevImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    return (
        <div className="relative p-3" onMouseEnter={() => setShowArrows(true)} onMouseLeave={() => setShowArrows(false)}>
           <div className="relative">
                <img className="item rounded-lg w-64 h-64" src={images[currentImageIndex]} alt="" />
                {showArrows && (
                    <div className="absolute bottom-0 left-0 right-0 flex justify-center mb-2">
                        {images.map((_, index) => (
                            <div key={index} className={`h-2 w-2 rounded-full mx-1 ${index === currentImageIndex ? 'bg-black' : 'bg-gray-300'}`}></div>
                        ))}
                    </div>
                )}
            </div>
            {showArrows && (
                <div className="absolute top-0 left-6 right-6 bottom-20 flex justify-between items-center">
                    <button className="text-black text-lg h-8 w-8 rounded-full bg-white" onClick={prevImage}>
                        <span>&lt;</span>
                    </button>
                    <button className="text-black text-lg h-8 w-8 rounded-full bg-white" onClick={nextImage}>
                        <span>&gt;</span>
                    </button>
                </div>
            )}
            <div/>

            <div>
                <p className="font-semibold text-black">Santiago de Tolú, Colombia</p>
                <p>En la playa</p>
                <p>21 – 26 de abr</p>
            </div>
            <div className="flex">
                <p className="font-bold text-black mr-2">$5,175,000 COP</p>
                <p className="text-black">noche</p>
            </div>
        </div>
    );
}

export default Items;

