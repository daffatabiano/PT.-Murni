import { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import OptimizedImage from '../OptimizedImage';

const images = [
  '/carousel/carousel-1.jpg',
  '/carousel/carousel-2.jpg',
  '/carousel/carousel-3.jpg',
  '/carousel/carousel-4.jpg',
];

export default function Carousel() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % images.length);
  const prev = () => setCurrent((prev) => (prev - 1 + images.length) % images.length);
  
  return (
    <div className='relative '>
        <div className="w-full max-w-2xl mx-auto h-full overflow-hidden rounded">
        <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${current * 100}%)` }}
        >
            {images.map((src, index) => (
                <OptimizedImage 
                    key={index}
                    src={src}
                    alt={`Slide ${index}`}
                    className="w-full h-[250px] rounded flex-shrink-0 object-cover sm:h-[720px]"
                    />
            ))}
        </div>

        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {images.map((_, index) => (
            <button
                key={index}
                className={`w-3 h-3 rounded-full ${
                current === index ? 'bg-white' : 'bg-white/50'
                }`}
                onClick={() => setCurrent(index)}
            />
            ))}
        </div>
        </div>
          <button
            onClick={next}
            className="absolute right-0 translate-x-5 top-1/2 transform -translate-y-1/2 bg-accent text-white p-2 rounded-full hover:bg-accent/70"
      >
        <FaChevronRight />
      </button>
      <button
            onClick={prev}
            className="absolute sm:hidden inline-block left-0 -translate-x-5 top-1/2 transform -translate-y-1/2 bg-accent text-white p-2 rounded-full hover:bg-accent/70"
      >
        <FaChevronLeft />
      </button>
    </div>
  );
}
